import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import albumImage from "public/album.jpeg";

const SpotifyCardV1 = () => {
  return (
    <div className="relative shadow shadow-[#EDF6FE] bg-[#EDF6FE] rounded-lg p-3 transition-transform duration-150 ease-in hover:bg-neutral-100 hover:scale-[0.97]">
      <h3 className="font-serif text-xl text-neutral-700 font-light font-serif-variation mb-4">Weekend #14</h3>

      <div className="flex bg-[#2D4C68] items-center px-2.5 py-2.5 rounded-xl shadow">
        <div className="mr-3">
          <Image src={albumImage} alt="Song name" width={35} className="w-full rounded-lg" />
        </div>

        <div>
          <p className="font-semibold text-sm text-neutral-50 line-clamp-1">Unhealthy</p>
          <p className="font-medium text-xs text-neutral-200 line-clamp-1">Bakar</p>
        </div>

        <div className="ml-auto">
          <SiSpotify className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

const SpotifyCard = () => {
  return (
    <div className="relative flex shadow shadow-[#EDF6FE] bg-[#2D4C68] rounded-lg p-3 transition-transform duration-150 ease-in hover:scale-[0.97]">
      <div className="mr-3">
        <Image src={albumImage} alt="Song name" width={45} className="w-full rounded-lg shadow-lg" />
      </div>

      <div className="self-center">
        <p className="font-semibold text-neutral-50 line-clamp-1">Unhealthy</p>
        <p className="font-medium text-xs text-neutral-200 line-clamp-1">Bakar</p>
      </div>

      <div className="flex bg-[#2D4C68] items-center px-2.5 py-2.5 rounded-xl ml-auto">
        <div className="ml-auto">
          <SiSpotify className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;
