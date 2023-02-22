import Image from "next/image";
import image from "public/story-2.png";

const StoryCard = () => {
  return (
    <div className="w-full h-full group p-0 rounded-lg shadow relative overflow-hidden transition-transform duration-150 cursor-pointer ease-in hover:scale-[0.97]">
      <Image src={image} alt="Demo alt" className="relative" />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-50/40 flex items-end px-4 py-2 group-hover:opacity-20 transition-opacity">
        <h3 className="font-serif text-3xl text-neutral-700 font-light mb-2 font-serif-variation">
          Some tales from Barcelona 🇪🇸
        </h3>
      </div>
    </div>
  );
};

export default StoryCard;
