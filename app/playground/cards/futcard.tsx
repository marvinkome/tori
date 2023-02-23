import futChamps from "public/fut-champs.png";
import Image from "next/image";

const FutCard = () => {
  return (
    <div className="relative shadow bg-[#fef3ec] rounded-lg p-3 transition-transform duration-150 ease-in hover:bg-neutral-100 hover:scale-[0.97]">
      <h3 className="font-serif text-xl font-light mb-4 font-serif-variation">FUT Champions</h3>

      <div className="flex items-center">
        <div className="mr-3">
          <Image src={futChamps} alt="fut champs logo" width={35} className="w-full rounded-lg" />
        </div>
        <div className="">
          <p className="font-medium text-md font-serif">Rank V</p>
          <p className="font-medium text-sm text-neutral-600">11 wins</p>
        </div>
      </div>
    </div>
  );
};

export default FutCard;
