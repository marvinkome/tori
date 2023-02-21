"use client";
import React from "react";
import dayjs from "dayjs";

export const Day = ({ children, date }: { date: string; children: React.ReactNode }) => {
  return (
    <section className="w-[65vw] md:w-[40vw] lg:w-[20vw] h-full flex flex-col">
      <header className="border-br text-center pb-4 pt-5 md:pt-2">
        <p className="font-medium text-sm font-serif">{dayjs(date).format("MMM DD")}</p>
        <p className="text-xs text-slate-400">{dayjs(date).format("YYYY")}</p>
      </header>

      <article className="w-full grow p-2 pb-14">
        <div className="w-full h-full space-y-3">{children}</div>
      </article>
    </section>
  );
};

export const Calendar = ({ children }: { children: React.ReactNode }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      const delta = e.deltaY + e.deltaX;
      el.scrollTo({ left: el.scrollLeft + delta });
    };

    el.addEventListener("wheel", wheelHandler);
    return () => {
      el.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-y-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="absolute top-0 bottom-0 left-0 flex">
        {React.Children.count(children)
          ? children
          : Array.from({ length: 5 }).map((_, idx) => (
              <section key={idx} className="w-[65vw] md:w-[40vw] lg:w-[20vw] h-full flex flex-col">
                <article className="w-full grow p-3">
                  <div className="animate-pulse rounded-md h-full bg-[rgb(251_251_251)]" />
                </article>
              </section>
            ))}
      </div>
    </div>
  );
};
