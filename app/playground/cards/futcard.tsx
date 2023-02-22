const FutCard = () => {
  return (
    <div className="relative shadow shadow-red-50 bg-red-50 rounded-lg p-3 transition-all duration-150 ease-in hover:bg-red-100 hover:scale-[0.97]">
      <div className="flex items-center">
        <h3 className="font-serif text-xl text-neutral-700 font-light font-serif-variation mb-4">Rank 4</h3>
        <div className="ml-auto flex space-x-4">
          <div className="text-center">
            <p className="font-semibold text-2xl">12</p>
            <p className="font-serif font-light font-serif-variation">Wins</p>
          </div>

          <div className="text-center">
            <p className="font-semibold text-2xl">8</p>
            <p className="font-serif font-light font-serif-variation">Loss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutCard;
