import futChamps from "public/fut-champs.png";
import Image from "next/image";

const FutCard = () => {
  return (
    <div className="relative shadow bg-[#fef3ec] rounded-lg p-3 transition-transform duration-150 ease-in hover:bg-neutral-100 hover:scale-[0.97]">
      <h3 className="font-serif text-xl font-light mb-2 font-serif-variation">Weekend League</h3>

      <div className="flex items-center">
        <div className="mr-3">
          <Image src={futChamps} alt="Song name" width={35} className="w-full rounded-lg" />
        </div>

        <div>
          <p className="font-semibold text-sm line-clamp-1">Rank V</p>
          <p className="font-medium text-xs line-clamp-1">51 points</p>
        </div>
      </div>
    </div>
  );
};

export default FutCard;
