import dayjs from "dayjs";
import cn from "classnames";
import { getTagColorClasses } from "./utils";

type NoteCardProps = {
  title: string;
  date: string;
  tag?: { name: string; color: string };
  className?: string;
};
const NoteCard = ({ title, date, tag, className }: NoteCardProps) => {
  return (
    <div
      className={cn(
        "relative col-span-1 bg-neutral-50 rounded-lg p-4 hover:bg-neutral-100 hover:scale-[0.97]",
        "transition-transform duration-150 ease-in",
        className
      )}
    >
      <div>
        <h3 className="font-serif text-xl font-light mb-1 font-serif-variation">{title}</h3>
        <p className="text-sm text-neutral-400 font-light mb-3">{dayjs(date).format("DD MMM")}</p>

        {tag && <p className={cn("text-xs px-1.5 py-1.5 inline-block rounded shadow", getTagColorClasses(tag.color))}>{tag.name}</p>}
      </div>
    </div>
  );
};

export default NoteCard;
