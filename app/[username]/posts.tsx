import groupBy from "lodash.groupby";
import { createClient } from "@/libs/supabase/server";

import Calendar from "./components/calendar";
import Day from "./components/day";
import NoteCard from "./components/note-card";
import GalleryCard from "./components/gallery-card";
import StoryCard from "./components/story-card";

const getPosts = async (profileId: string) => {
  const supabase = createClient();

  const profileResponse = await supabase
    .from("posts")
    .select(
      `
      id,
      title,
      date,
      type,
      images,
      stories,
      author (
        id
      )
      `
    )
    .eq("author.id", profileId)
    .order("date", { ascending: false });

  console.log(profileResponse);
  return profileResponse.data;
};

const Posts = async ({ profileId }: { profileId: string }) => {
  const posts = await getPosts(profileId);
  const days = groupBy(posts, "date");

  return (
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
                    stories={item.stories}
                    className={item.title.length > 60 ? "row-span-2" : "row-span-1"}
                  />
                );
              }

              if (item.type === "gallery") {
                return (
                  <GalleryCard
                    key={idx}
                    title={item.title}
                    date={item.date}
                    images={item.images}
                    className={item.title.length > 60 ? "row-span-3" : "row-span-2"}
                  />
                );
              }

              return (
                <NoteCard key={idx} title={item.title} date={item.date} className={item.title.length > 60 ? "row-span-2" : "row-span-1"} />
              );
            })}
          </Day>
        );
      })}
    </Calendar>
  );
};

export default Posts;
