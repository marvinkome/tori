import Image from "next/image";
import { buildImage } from "@/libs/build-image";

type ImageCardProps = { title: string; date: string; images: string[]; className?: string };
const ImageCard = ({ title, date, images, className }: ImageCardProps) => {
  return (
    <div className="w-full h-full group p-0 rounded-lg shadow relative overflow-hidden">
      <Image {...buildImage(images[0])} width={360} height={360} alt={title} className="aspect-square object-cover" />

      {title && (
        <div className="absolute bottom-0 p-2">
          <p className="text-neutral-400 text-sm group-hover:text-neutral-50 p-2 group-hover:bg-black/30 rounded-md transition-color duration-150 ease-in">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
