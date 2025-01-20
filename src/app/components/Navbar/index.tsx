"use client";
import React, { useRef } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useIsVisible } from "../../homepage";
const Navbar = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className={`flex flex-row justify-between items-center rounded-full bg-white w-10/12 mt-6 py-6 gap-4 transition-opacity ease-in duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-black font-bold flex-start ml-2 text-xl">
        <Image
          src="/assets/csp.png"
          alt="Code Super Power"
          width={80}
          height={30}
        />{" "}
      </div>
      <div className="flex flex-row justify-between gap-5 md:text-lg  md:gap-7  lg:gap-9 md:ml-3 lg:ml-16 font-semibold text-slate-500">
        <div className="cursor-pointer transition-all duration-300 transform hover:text-sky-400">
          Home
        </div>
        <div className="cursor-pointer transition-all duration-300 transform hover:text-sky-400">
          Services
        </div>
        <div className="cursor-pointer transition-all duration-300 transform hover:text-sky-400">
          About
        </div>
        <div className="cursor-pointer transition-all duration-300 transform hover:text-sky-400">
          Blog
        </div>
        <div className="cursor-pointer transition-all duration-300 transform hover:text-sky-400">
          Contact
        </div>
      </div>

      <div className=" flex flex-row justify-between gap-2 text-black  font-semibold underline-offset mr-1 md:text-lg lg:text-xl">
        <Phone width={15} />
        +1 (443)990-1502
      </div>
    </div>
  );
};

export default Navbar;
