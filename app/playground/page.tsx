import { Calendar, Day } from "@/components/calendar";
import ImageCard from "./cards/image";
import NoteCard from "./cards/notes";
import StoryCard from "./cards/story";
import SpotifyCard from "./cards/spotify";
import FutCard from "./cards/futcard";

const Page = async () => {
  return (
    <main className="h-full relative flex flex-col">
      <header className="flex items-baseline justify-between px-4 py-4 lg:px-10 lg:py-6">
        <div>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-neutral-900 mb-1">Marvin Kome</h1>
          <p className="hidden lg:block font-light text-sm text-neutral-500 ml-[2px]">A demo playground to try out ideas</p>
        </div>
      </header>

      <div className="grow">
        <Calendar>
          <Day date="2023-02-20">
            <div>
              <ImageCard />
            </div>
          </Day>

          <Day date="2023-01-26">
            <div>
              <NoteCard />
            </div>

            <div>
              <StoryCard />
            </div>
          </Day>
          <Day date="2023-01-07">
            <div>
              <SpotifyCard />
            </div>

            <div>
              <FutCard />
            </div>
          </Day>
          <Day date="2022-12-19">{/*  */}</Day>
          <Day date="2022-11-26">{/*  */}</Day>
        </Calendar>
      </div>
    </main>
  );
};

export default Page;
