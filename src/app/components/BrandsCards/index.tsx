import React from "react";
import { JSX } from "react";
type BrandsCardsProps = {
  name: string;
  icon: JSX.Element;
};

const BrandsCards = ({ name, icon }: BrandsCardsProps) => {
  return (
    <div className="flex flex-row justify-center items-center rounded-md min-h-[9rem] w-48 bg-zinc-600 gap-2 cursor-pointer">
      <div>{icon}</div>
      <div className="text-white text-2xl"> {name}</div>
    </div>
  );
};

export default BrandsCards;
