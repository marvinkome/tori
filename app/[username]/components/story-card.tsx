"use client";
import dayjs from "dayjs";
import cn from "classnames";
import Image from "next/image";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { pausableTimeout } from "libs/utils";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { useMedia } from "react-use";
import { getTagColorClasses } from "./utils";
import { useSupabase } from "@/libs/supabase";

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 380 : -380,
    };
  },
  center: {
    x: 0,
    zIndex: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -380 : 380,
      zIndex: 0,
    };
  },
};

const Stories = ({ stories }: { stories: StoryCardProps["stories"] }) => {
  const { supabase } = useSupabase();

  let interval = 6000;
  const [timer, setTimer] = useState<any>();
  const [isPaused, setIsPaused] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const getPublicUrl = useCallback(
    (url: string) => {
      const { data } = supabase.storage.from("posts").getPublicUrl(url);
      return data.publicUrl;
    },
    [supabase]
  );

  useEffect(() => {
    const timer = pausableTimeout(() => paginate(1), 6000);
    setTimer(timer);

    return () => {
      timer.clear();
    };
  }, [page, paginate]);

  const onPause = () => {
    if (isPaused || !timer) return;

    setIsPaused(true);
    timer.pause();
  };

  const onResume = () => {
    if (!isPaused || !timer) return;

    setIsPaused(false);
    timer.resume();
  };

  const active = wrap(0, stories.length, page);
  const activeStory = stories[active];

  return (
    <div className="max-w-sm max-h-[65vh] w-full h-full relative rounded-[10px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex space-x-2 px-3 py-3">
        {stories.map((item, idx) => (
          <div key={item.image} className="h-[3px] grow relative overflow-hidden rounded-full">
            <div className="absolute w-full h-full bg-white opacity-40" />
            <div
              className={cn("relative h-full grow", {
                "bg-white animate-[story-indicator_forwards_linear]": active === idx,
                "bg-white": active > idx,
              })}
              style={{
                animationDuration: `${interval}ms`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 19 },
            opacity: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onPointerDown={() => onPause()}
          onPointerUp={() => onResume()}
          onPointerCancel={() => onResume()}
          onPointerOut={() => onResume()}
          onPointerLeave={() => onResume()}
          className="w-full h-full absolute rounded-lg overflow-hidden bg-cover bg-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getPublicUrl(activeStory.image)}
            alt={activeStory.title || activeStory.content || "no-alt-text"}
            className="absolute w-full h-full object-cover object-center z-[-5]"
          />

          {(activeStory.title || activeStory.content) && (
            <div
              style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.4) 15%, rgba(0,0,0,0) 40%)" }}
              className="absolute w-full h-full z-[-4]"
            />
          )}

          <div className="flex flex-col h-full items-center justify-end p-8">
            {activeStory.title && (
              <h3 style={{ textShadow: "0 1px 2px rgb(0 0 0 / 20%)" }} className="text-3xl mb-2 font-semibold text-white">
                {activeStory.title}
              </h3>
            )}
            {activeStory.content && (
              <p
                style={{ textShadow: "0 1px 2px rgb(0 0 0 / 20%)" }}
                className="text-center font-medium text-white opacity-[0.85] [text-shadow:0_1px_2px_rgb(0_0_0_/_20%)]"
              >
                {activeStory.content}
              </p>
            )}
          </div>

          <div className="absolute top-0 bottom-0 left-0 w-1/3 z-10" onClick={() => paginate(-1)} />
          <div className="absolute top-0 bottom-0 right-0 w-1/3 z-10" onClick={() => paginate(1)} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

type StoryCardProps = {
  title: string;
  date: string;
  tag?: { name: string; color: string };
  className?: string;
  stories: {
    title?: string;
    content?: string;
    image: string;
  }[];
};
const StoryCard = ({ title, date, tag, stories, className }: StoryCardProps) => {
  const contentEl = useRef<HTMLDivElement>(null);

  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMedia("(min-width: 1024px)", false);

  const { styles, attributes } = usePopper(rootElement, popperElement, {
    placement: "left-end",
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const content = contentEl.current;
      const target = e.target as any;

      if (content && !content.contains(target)) {
        if (isActive) {
          setIsActive(false);
        }
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isActive, rootElement]);

  return (
    <>
      <div
        ref={setRootElement}
        onClick={() => setIsActive(true)}
        className={cn(
          "relative col-span-1 bg-neutral-50 rounded-lg p-3 hover:bg-neutral-100 hover:scale-[0.97]",
          "transition-transform duration-150 ease-in",
          className
        )}
      >
        <h3 className="font-serif text-xl text-neutral-700 font-light mb-1 font-serif-variation">{title}</h3>
        <p className="text-sm text-neutral-400 font-light mb-3">{dayjs(date).format("DD MMM")}</p>
      </div>

      {isActive && (
        <>
          {isDesktop ? (
            <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="z-[1000]">
              <motion.div
                ref={contentEl}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white w-[380px] h-[65vh] p-1 mx-1 rounded-xl shadow-[0px_0px_50px_-12px_rgba(0,0,0,0.5)]"
              >
                <Stories stories={stories} />
              </motion.div>
            </div>
          ) : (
            <div className="fixed inset-0 z-[1000]">
              <div className="bg-black/80 h-full w-full absolute inset-0 -z-10" />
              <div className="w-full h-full flex items-center justify-center px-2">
                <motion.div
                  ref={contentEl}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white w-full h-[65vh] p-0.5 mx-1 rounded-xl shadow-[0px_0px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  <Stories stories={stories} />
                </motion.div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default StoryCard;
