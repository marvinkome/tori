import Image from "next/image";
import image from "public/story-1.jpg";

const ImageCard = () => {
  return (
    <div className="w-full h-full group p-0 rounded-lg shadow relative overflow-hidden">
      <Image src={image} alt="Demo alt" />

      <div className="absolute bottom-0 p-2">
        <p className="text-neutral-400 text-sm group-hover:text-neutral-50 p-2 group-hover:bg-black/30 rounded-md transition-color duration-150 ease-in">
          Rainy day in berlin
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
