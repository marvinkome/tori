import React from "react";
import cls from "classnames";

const CARD_COLORS = {
  blue: {
    bg: "linear-gradient(254.9deg, #E6F6FF 0%, #BFE7FD 100%) #BFE7FD",
    text: "#345A6F",
    textLight: "#78A6BF",
  },

  purple: {
    bg: "linear-gradient(254.9deg, #E6E7FF 0%, #BFC1FD 100%) #BFC1FD",
    text: "#34366F",
    textLight: "#787ABF",
  },

  yellow: {
    bg: "linear-gradient(254.9deg, #FFF9E6 0%, #FDEEBF 100%) #FDEEBF",
    text: "#6F6134",
    textLight: "#BFAF78",
  },

  green: {
    bg: "linear-gradient(254.9deg, #F3FFE6 0%, #E0FDBF 100%) #E0FDBF",
    text: "#546F34",
    textLight: "#9EBF78",
  },

  orange: {
    bg: "linear-gradient(254.9deg, #FFF3E6 0%, #FDDFBF 100%) #FDDFBF",
    text: "#61482E",
    textLight: "#BF9D78",
  },

  red: {
    bg: "linear-gradient(254.9deg, #FFE6F0 0%, #FDBFD9 100%) #FDBFD9",
    text: "#6F344D",
    textLight: "#BF7896",
  },

  purple2: {
    bg: "linear-gradient(254.9deg, #F9E6FF 0%, #EFBFFD 100%) #EFBFFD",
    text: "#62346F",
    textLight: "#AF78BF",
  },
};

type CardProps = {
  title: string;
  date: string;
  color?: keyof typeof CARD_COLORS;
  children?: React.ReactNode;
};
export const Card = (props: CardProps) => {
  const color = CARD_COLORS[props.color || "purple"];

  return (
    <div className="col-span-1 row-span-1">
      <article
        tabIndex={0}
        style={{ background: color.bg, color: color.text }}
        className={cls("group relative w-full h-full rounded-xl p-3 flex flex-col shadow")}
      >
        <div className="mb-4">
          <h1 className="text-base mb-1">{props.title}</h1>
          <p className="text-xs font-medium uppercase opacity-60">{props.date}</p>
        </div>

        {props.children}
      </article>
    </div>
  );
};
