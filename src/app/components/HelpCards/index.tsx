import React from "react";

type HelpCardsProps = {
  num: string;
  title: string;
  base: string;
  icon: React.ReactNode;
};

const HelpCards = ({ num, title, base, icon }: HelpCardsProps) => {
  return (
    <div className="flex flex-col w-100 min-h-[16rem] rounded-3xl bg-slate-400 p-4 cursor-pointer">
      {/* ICON  */}
      <div className="flex justify-end text-white text-3xl">{icon}</div>
      {/* TITLE   */}
      <div className="flex flex-row text-white mt-12">
        <h2 className="text-xl font-bold">{num}</h2>
        <h2 className="text-4xl font-bold ml-3">{title}</h2>
      </div>
      <div className="mt-4">
        <p className="text-base text-white line-clamp-2">{base}</p>
      </div>
    </div>
  );
};

export default HelpCards;
