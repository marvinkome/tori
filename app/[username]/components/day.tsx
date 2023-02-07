"use client";

const Day = ({ children, showPlaceholder }: any) => {
  return (
    <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
      <article className="w-full h-full grow p-3">
        <div className="animate-pulse rounded-md h-full bg-[rgb(251_251_251)]" />
      </article>
    </section>
  );
};

export default Day;
