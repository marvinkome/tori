import { createClient } from "@/libs/supabase/server";
import { notFound } from "next/navigation";

import Link from "next/link";
import groupBy from "lodash.groupby";
import ProfileForm from "./components/profile-form";
import Calendar from "./components/calendar";
import Day from "./components/day";
import NoteCard from "./components/note-card";
import GalleryCard from "./components/gallery-card";
import StoryCard from "./components/story-card";
import RequestAccess from "./request-access";

import data from "./data";
import { IoIosAdd } from "react-icons/io";

const days = groupBy(data, "date");
const getProfile = async (username: string) => {
  const supabase = createClient();

  const profileResponse = await supabase
    .from("profiles")
    .select(
      `
      id, 
      username, 
      fullname, 
      bio, 
      is_public, 
      followers!follower ( 
        follower:follower_id ( 
          id,
          username,
          fullname,
          email
        )
      )
      `
    )
    .eq("username", username)
    .single();

  return profileResponse.data;
};

const getSignedInProfile = async () => {
  const supabase = createClient();
  const sessionResponse = await supabase.auth.getSession();
  if (!sessionResponse.data.session) {
    return null;
  }

  const currentUser = sessionResponse.data.session.user;
  const profileResponse = await supabase
    .from("profiles")
    .select("id, username, fullname, bio, is_public")
    .eq("id", currentUser.id)
    .single();

  return profileResponse.data;
};

const Page = async ({ params }: any) => {
  const profile = await getProfile(params.username);
  if (!profile) {
    return notFound();
  }

  const signedInProfile = await getSignedInProfile();

  const isPageAuthor = profile.id === signedInProfile?.id;
  const isFollower = (profile.followers as any).find((f: any) => f.follower.id === signedInProfile?.id);

  const isVisible = profile.is_public || isPageAuthor || isFollower;
  if (!isVisible) {
    return <RequestAccess />;
  }

  return (
    <main className="h-full relative flex flex-col">
      <header className="flex items-baseline justify-between px-4 md:px-14 py-4 md:py-6">
        <div>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-neutral-900 mb-1">{profile.fullname}</h1>
          <p className="hidden md:block font-light text-neutral-500 ml-[2px]">{profile.bio}</p>
        </div>

        <div className="flex space-x-2 md:space-x-4 items-center">
          {isPageAuthor && (
            <>
              <button className="inline-flex items-center text-xs text-neutral-600 border border-neutral-200 p-1 sm:px-3 py-1 rounded-full sm:rounded-lg hover:shadow-sm">
                <IoIosAdd className="text-base" />
                <span className="hidden sm:inline ml-1">Add event</span>
              </button>

              <ProfileForm profile={signedInProfile} followers={profile.followers} />
            </>
          )}

          {!isPageAuthor && signedInProfile && (
            <Link
              href={`/${signedInProfile.username}`}
              className="inline-flex items-center text-sm text-neutral-400 hover:text-neutral-500"
            >
              My Profile
            </Link>
          )}
        </div>
      </header>

      <div className="grow">
        <Calendar>
          {Object.keys(days).map((date) => {
            const items = days[date];
            return (
              <Day key={date} date={date}>
                {items.map((item, idx) => {
                  if (item.type === "story") {
                    return (
                      <StoryCard
                        key={idx}
                        title={item.title}
                        date={item.date}
                        tag={item.tag}
                        stories={item.stories}
                        // HACK: Set the grid height based on the title number
                        className={item.title.length > 60 ? "row-span-3" : "row-span-2"}
                      />
                    );
                  }

                  if (item.type === "gallery") {
                    return (
                      <GalleryCard
                        key={idx}
                        title={item.title}
                        date={item.date}
                        tag={item.tag}
                        images={item.images}
                        // HACK: Set the grid height based on the title number
                        className={item.title.length > 60 ? "row-span-5" : "row-span-4"}
                      />
                    );
                  }

                  return (
                    <NoteCard
                      key={idx}
                      title={item.title}
                      date={item.date}
                      tag={item.tag}
                      // HACK: Set the grid height based on the title number
                      className={item.title.length > 60 ? "row-span-3" : "row-span-2"}
                    />
                  );
                })}
              </Day>
            );
          })}
        </Calendar>
      </div>
    </main>
  );
};

export default Page;
