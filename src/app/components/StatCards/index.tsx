"use client";
import React from "react";
type StatCardProps = {
  title: string;
  icon: React.ReactNode;
  base: string;
};

const StatCard = ({ title, icon, base }: StatCardProps) => {
  return (
    <div className="flex flex-col w-80 min-h-[16rem] rounded-3xl bg-zinc-400 p-6 cursor-pointer border-none transition-all duration-300 transform hover:bg-sky-400">
      {/* ICON  */}
      <div className="flex justify-end text-white text-3xl">{icon}</div>
      {/* TITLE   */}
      <div className="text-white mt-4">
        <h2 className="text-7xl font-bold">{title}</h2>
      </div>
      <div className="mt-4">
        <p className="text-base text-white line-clamp-2">{base}</p>
      </div>
    </div>
  );
};

export default StatCard;
