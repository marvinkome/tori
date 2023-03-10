import dayjs from "dayjs";
import cn from "classnames";

type NoteCardProps = {
  title: string;
  date: string;
  tag?: { name: string; color: string };
  className?: string;
};
const NoteCard = ({ title, date, className }: NoteCardProps) => {
  return (
    <div
      className={cn(
        "relative col-span-1 bg-neutral-50 rounded-lg p-3 hover:bg-neutral-100 hover:scale-[0.97]",
        "transition-transform duration-150 ease-in cursor-pointer",
        className
      )}
    >
      <div>
        <h3 className="font-serif text-xl text-neutral-700 font-light mb-1 font-serif-variation">{title}</h3>
        <p className="text-sm text-neutral-400 font-light mb-3">{dayjs(date).format("DD MMM")}</p>
      </div>
    </div>
  );
};

export default NoteCard;
