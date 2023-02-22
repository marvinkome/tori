import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import albumImage from "public/album.jpeg";

const SpotifyCard = () => {
  return (
    <div className="relative shadow rounded-lg p-3 shadow-[#EDF6FE] bg-[#EDF6FE] transition-all duration-150 ease-in hover:bg-neutral-100 hover:scale-[0.97]">
      <h3 className="font-serif text-xl text-neutral-700 font-light mb-4 font-serif-variation">Liked song #45</h3>

      <div className="flex items-center bg-[#2D4C68] p-2 rounded-lg">
        <div>
          <Image src={albumImage} width={40} alt="Badkid album" className="rounded-md shadow-md mr-2" />
        </div>

        <div>
          <h3 className="text-neutral-50 font-semibold text-sm line-clamp-1">Unhealthy</h3>
          <p className="text-neutral-200 text-xs line-clamp-1">Bakar</p>
        </div>

        <div className="ml-auto">
          <SiSpotify className="text-xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;
