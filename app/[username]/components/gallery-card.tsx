"use client";
import Image from "next/image";
import cn from "classnames";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useCallback, useId, useState } from "react";
import { getTagColorClasses } from "./utils";
import { useSupabase } from "@/libs/supabase";

type GalleryCardProps = { title: string; date: string; tag?: { name: string; color: string }; images: string[]; className?: string };
const GalleryCard = ({ title, date, tag, images, className }: GalleryCardProps) => {
  const id = useId();
  const [isActive, setIsActive] = useState(false);
  const { supabase } = useSupabase();

  const getPublicUrl = useCallback(
    (url: string) => {
      const { data } = supabase.storage.from("posts").getPublicUrl(url);
      return data.publicUrl;
    },
    [supabase]
  );

  return (
    <>
      <motion.div
        animate={isActive ? { zIndex: 2 } : { zIndex: 1, transition: { delay: 0.2 } }}
        onClick={() => setIsActive(true)}
        className={cn(
          "group relative col-span-1 w-full h-full bg-neutral-50 rounded-lg p-3 hover:bg-neutral-100 hover:scale-[0.97] flex flex-col",
          "transition-transform duration-150 ease-in",
          className
        )}
      >
        <div className="mb-2">
          <h3 className="font-serif text-xl text-neutral-700 font-light mb-1 font-serif-variation">{title}</h3>
          <p className="text-sm text-neutral-400 font-light mb-3">{dayjs(date).format("DD MMM")}</p>
        </div>

        <div className="grow relative flex justify-center items-center h-full">
          {!isActive &&
            images.map((image, idx) => (
              <motion.div
                key={image}
                layoutId={id + image}
                className={cn("absolute inset-0 mx-2")}
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
                      "rotate-[3deg] z-[1] group-hover:rotate-[4deg]": idx === 0,
                      "rotate-[-3deg] z-[2] group-hover:rotate-[-5deg]": idx === 1,
                      "rotate-[2deg] z-[3] group-hover:rotate-[-2deg]": idx === 2,
                      "rotate-[0deg] z-[4] group-hover:rotate-[1deg]": idx === 3,
                    }
                  )}
                >
                  <Image
                    src={getPublicUrl(image)}
                    alt={`Images of "${title}"`}
                    width={262}
                    height={194}
                    priority
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
                  <Image
                    src={getPublicUrl(image)}
                    alt={`Images of "${title}"`}
                    width={460}
                    height={280}
                    priority
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
