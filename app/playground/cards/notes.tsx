import cn from "classnames";

const NoteCard = () => {
  return (
    <div className="relative shadow bg-neutral-50 rounded-lg p-3 transition-transform duration-150 ease-in hover:bg-neutral-100 hover:scale-[0.97]">
      <h3 className="font-serif text-xl text-neutral-700 font-light mb-2 font-serif-variation">
        There’s this sweet spot between the roughness and lack of order in design/arrangement of things in real life and the orderliness and
        strict patterns of the things in tech
      </h3>

      <p className="text-sm text-neutral-400 mb-3">#design</p>
    </div>
  );
};

export default NoteCard;
