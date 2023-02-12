import dayjs from "dayjs";

const Day = ({ children, date }: { date: string; children: React.ReactNode }) => {
  return (
    <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
      <header className="border-br text-center pb-4 pt-5 md:pt-2">
        <p className="font-medium text-sm font-serif">{dayjs(date).format("MMM DD")}</p>
        <p className="text-xs text-slate-400">{dayjs(date).format("YYYY")}</p>
      </header>

      <article className="w-full h-full grow p-2">
        <div className="w-full h-full grid grid-cols-1 grid-rows-8 gap-4">{children}</div>
      </article>
    </section>
  );
};

export default Day;
