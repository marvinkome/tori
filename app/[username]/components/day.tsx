"use client";
import dayjs from "dayjs";

const Day = ({ children, date }: { date: string; children: React.ReactNode }) => {
  return (
    <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
      <header className="border-br text-center pb-4 pt-14 md:pt-4">
        <p className="font-medium text-sm font-serif">{dayjs(date).format("MMM DD")}</p>
        <p className="text-xs text-slate-400">{dayjs(date).format("YYYY")}</p>
      </header>

      <article className="w-full h-full grow p-1">
        <div className="w-full h-full grid grid-cols-1 grid-rows-4 gap-2">{children}</div>
      </article>
    </section>
  );
};

export default Day;
