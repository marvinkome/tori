import dayjs from "dayjs";

const Day = ({ children, date }: { date: string; children: React.ReactNode }) => {
  return (
    <section className="w-[65vw] md:w-[40vw] lg:w-[20vw] h-full flex flex-col">
      <header className="border-br text-center pb-4 pt-5 md:pt-2">
        <p className="font-medium text-sm font-serif">{dayjs(date).format("MMM DD")}</p>
        <p className="text-xs text-slate-400">{dayjs(date).format("YYYY")}</p>
      </header>

      <article className="w-full grow p-2 pb-14">
        <div className="w-full h-full grid grid-cols-1 grid-rows-4 gap-4">{children}</div>
      </article>
    </section>
  );
};

export default Day;
