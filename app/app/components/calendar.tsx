"use client";
import React from "react";

export const Day = ({ children }: any) => {
  return (
    <section className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
      <header className="border-b text-center pb-3">
        <p className="font-medium text-sm text-neutral-800">Oct 21</p>
        <p className="font-medium text-xs text-neutral-400">2022</p>
      </header>

      <article className="w-full h-full grow p-2 pb-16 md:pb-12 border-r grid grid-cols-1 grid-rows-5 gap-2">{children}</article>
    </section>
  );
};

export const Calendar = ({ children }: any) => {
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
      <div className="absolute h-full left-0 flex">{children}</div>
    </div>
  );
};
