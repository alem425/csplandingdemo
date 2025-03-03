"use client";
import React from "react";
type StatCardProps = {
  title: string;
  icon: React.ReactNode;
  base: string;
};

const StatCard = ({ title, icon, base }: StatCardProps) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-72 xl:w-80 min-h-[20rem] rounded-3xl bg-zinc-400 py-4 px-5 cursor-pointer border-none shadow-lg shadow-black transition-all duration-300 transform hover:bg-sky-400 hover:shadow-sky-200">
      {/* ICON  */}
      <div className="flex justify-end text-white text-xl">{icon}</div>
      {/* TITLE   */}
      <div className="text-white mt-6">
        <h2 className="text-2xl sm:text-4xl lg:text-3xl  font-bold truncate">
          {title}
        </h2>
      </div>
      <div className="mt-6 max-w-full flex-grow">
        <p className="text-base text-white break-words">{base}</p>
      </div>
    </div>
  );
};

export default StatCard;
