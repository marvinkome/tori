"use client";
import Image from "next/image";
import cn from "classnames";
import dayjs from "dayjs";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useId, useState } from "react";

type GalleryCardProps = { title: string; date: string; images: string[]; className?: string };
const GalleryCard = ({ title, date, images, className }: GalleryCardProps) => {
  const id = useId();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.div
        animate={isActive ? { zIndex: 2 } : { zIndex: 1, transition: { delay: 0.2 } }}
        onClick={() => setIsActive(true)}
        className={cn(
          "group relative col-span-1 w-full h-full bg-neutral-50 rounded-lg p-4 hover:bg-neutral-100 hover:scale-[0.97] flex flex-col",
          "transition-transform duration-150 ease-in",
          className
        )}
      >
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-light mb-1 font-serif-variation">{title}</h3>
          <p className="text-sm text-neutral-400 font-light">{dayjs(date).format("DD MMM")}</p>
        </div>

        <div className="grow relative flex justify-center items-center h-full">
          {!isActive &&
            images.map((image, idx) => (
              <motion.div
                key={image}
                layoutId={id + image}
                className={cn("absolute w-[136px] h-[88px]")}
                transition={{
                  delay: [0, 0.02, 0.04, 0.05][idx],
                  damping: 18,
                  stiffness: 120,
                  type: "spring",
                }}
              >
                <div
                  className={cn(
                    "w-full h-full rounded-md overflow-hidden shadow bg-[rgb(251_251_251)]",
                    "transition-transform duration-150 ease-in",
                    {
                      "translate-x-[-30%] translate-y-[-40%] rotate-[-6deg] z-[1] group-hover:rotate-[-4deg]": idx === 0,
                      "translate-x-[30%] translate-y-[-40%] rotate-[7deg] z-[2] group-hover:rotate-[5deg]": idx === 1,
                      "translate-x-[-30%] translate-y-[44%] rotate-[5deg] z-[3] group-hover:rotate-[3deg]": idx === 2,
                      "translate-x-[30%] translate-y-[44%] rotate-[-1deg] z-[4] group-hover:rotate-[-3deg]": idx === 3,
                    }
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    referrerPolicy="no-referrer"
                    alt={`Images of "${title}"`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {isActive && (
        <div className="fixed inset-0 bg-black/30 z-10" onClick={() => setIsActive(false)}>
          <div className="relative flex items-center justify-center h-full">
            {images.map((image, idx) => (
              <motion.div
                key={image}
                layoutId={id + image}
                className={cn("absolute w-[220px] md:w-[460px] h-[120px] md:h-[280px]")}
                transition={{
                  delay: [0, 0.02, 0.04, 0.05][idx],
                  damping: 18,
                  stiffness: 120,
                  type: "spring",
                }}
              >
                <div
                  className={cn("h-full rounded-md overflow-hidden shadow-lg", {
                    "z-[1] translate-x-[-45%] translate-y-[-40%] rotate-[-6deg]": idx === 0,
                    "z-[2] translate-x-[45%] translate-y-[-40%] rotate-[7deg]": idx === 1,
                    "z-[3] translate-x-[-45%] translate-y-[54%] rotate-[2deg]": idx === 2,
                    "z-[4] translate-x-[45%] translate-y-[52%] rotate-[-2deg]": idx === 3,
                  })}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    referrerPolicy="no-referrer"
                    alt={`Images of "${title}"`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
