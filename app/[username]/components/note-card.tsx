import dayjs from "dayjs";
import cn from "classnames";

const NoteCard = ({ title, date, className }: { title: string; date: string; className?: string }) => {
  return (
    <div
      className={cn(
        "relative col-span-1 bg-neutral-50 rounded-lg p-4 hover:bg-neutral-100 hover:scale-[0.97]",
        "transition-transform duration-150 ease-in",
        className
      )}
    >
      <h3 className="font-serif text-2xl font-light mb-1 font-serif-variation">{title}</h3>
      <p className="text-sm text-neutral-400 font-light">{dayjs(date).format("DD MMM")}</p>
    </div>
  );
};

export default NoteCard;
