import { createClient } from "@/libs/supabase/server";
import { notFound } from "next/navigation";

import Link from "next/link";

import RequestAccess from "./request-access";
import ProfileForm from "./components/profile-form";
import AddPost from "./components/add-post";

import Posts from "./posts";
import CmdMenu from "@/components/cmd-menu";
import { IoIosAdd } from "react-icons/io";

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
      <header className="flex items-baseline justify-between px-4 py-4 lg:px-10 lg:py-6">
        <div>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-neutral-900 mb-1">{profile.fullname}</h1>
          <p className="hidden lg:block font-light text-sm text-neutral-500 ml-[2px]">{profile.bio}</p>
        </div>

        <div className="flex space-x-2 md:space-x-4 items-center">
          {isPageAuthor && (
            <>
              <CmdMenu>
                <button className="inline-flex items-center text-xs text-neutral-600 border border-neutral-200 p-1 sm:px-3 py-1 rounded-full sm:rounded-lg hover:shadow-sm">
                  <IoIosAdd className="text-base" />
                  <span className="hidden sm:inline ml-1">Add post</span>
                </button>
              </CmdMenu>

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
        {/* @ts-expect-error Server Component */}
        <Posts profileId={profile.id} />
      </div>
    </main>
  );
};

export const revalidate = 0;
export const dynamic = "force-dynamic";
export default Page;
