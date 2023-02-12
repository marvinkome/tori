export const getTagColorClasses = (color: string) => {
  return {
    purple: "bg-purple-400/40 text-purple-900",
    lime: "bg-lime-400/40 text-lime-900",
    orange: "bg-orange-400/40 text-orange-900",
    blue: "bg-blue-400/40 text-blue-900",
  }[color];
};
