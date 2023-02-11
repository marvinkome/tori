import groupBy from "lodash.groupby";
import Calendar from "./components/calendar";
import Day from "./components/day";
import NoteCard from "./components/note-card";
import GalleryCard from "./components/gallery-card";
import StoryCard from "./components/story-card";

import data from "./data";

const days = groupBy(data, "date");

const Page = () => {
  return (
    <main className="h-full relative flex flex-col">
      <header className="px-14 py-6">
        <h1 className="font-serif text-4xl font-semibold text-neutral-900 mb-1">Marvin Kome</h1>
        <p className="font-light text-neutral-500">My simple thoughts, best moments, and some cool things I&rsquo;ve encountered.</p>
      </header>

      <div className="grow">
        <Calendar>
          {Object.keys(days).map((date) => {
            const items = days[date];
            return (
              <Day key={date} date={date}>
                {items.map((item, idx) => {
                  if (item.type === "story") {
                    return <StoryCard key={idx} title={item.title} date={item.date} stories={item.stories} className="row-span-1" />;
                  }

                  if (item.type === "gallery") {
                    return <GalleryCard key={idx} title={item.title} date={item.date} images={item.images} className="row-span-2" />;
                  }

                  return <NoteCard key={idx} title={item.title} date={item.date} className="row-span-1" />;
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
