"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "@/src/app/components/Navbar";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import StatCard from "../components/StatCards";
import HelpCards from "../components/HelpCards";
import BrandsCards from "../components/BrandsCards";

export function useIsVisible(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Once visible, disconnect the observer since we don't need it anymore
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const Home = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);

  const ref6 = useRef<HTMLDivElement>(null);
  const isVisible6 = useIsVisible(ref6);

  const ref7 = useRef<HTMLDivElement>(null);
  const isVisible7 = useIsVisible(ref7);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center bg-indigo-950 max-h-fit  pb-12 h-4/6 ">
        <Navbar />

        {/* HEADER  */}
        <div
          ref={ref1}
          className={`mt-10 w-11/12 sm:w-10/12 lg:w-4/5 items-center text-center md:w-6/12 transition-opacity ease-in duration-600 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold">
            EVERY <span className="text-orange-400">GREAT PRODUCT</span> BEGINS
            WITH A <span className="text-cyan-400">BOLD VISION</span>
          </h1>
        </div>

        {/* SUBHEADER  */}
        <div
          ref={ref2}
          className={`flex flex-row mt-3 py-5 w-full sm:w-10/12 lg:w-1/2  justify-center items-center text-center  gap-2 sm:gap-5 transition-opacity ease-in duration-700 ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className=" text-slate-400 w-8/12 sm:w-1/2 font-bold sm:ml-3 lg:text-base">
            A globally recognized, full service, data, and technology driven
            digital marketing agency strongly supported with strategic thinkers,
            creative designers, content creators.
          </p>
          <div className="flex flex-col w-1/2 sm:flex-row justify-between items-center gap-2 sm:gap-4 sm:mr-3">
            <button className=" text-center rounded-full bg-orange-400 w-full py-2 sm:py-4 sm:w-6/12 transition-all duration-300 transform hover:scale-110">
              Get a Proposal
            </button>
            <button className="rounded-full border-2 border-orange-400 w-full py-2 sm:py-4  sm:w-6/12 transition-all duration-300 transform hover:scale-110">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* WHITE BG BODY  */}
      {/* IMAGE */}
      <div
        ref={ref3}
        className={`flex justify-center items-center mt-10 transition-opacity ease-in duration-700 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/social2.jpg"
          alt="Social Apps"
          width={500}
          height={20}
          className="rounded-3xl h-[250px] w-[600px] lg:h-[450px] lg:w-[900px] "
        />
      </div>
      {/* TEXT GROUP 2  */}
      <div
        ref={ref4}
        className={`flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12 transition-opacity ease-in duration-700 ${
          isVisible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1
          className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-500
        "
        >
          <span className="text-orange-400">DRIVING</span> DIGITAL GROWTH,{" "}
          <span className="text-cyan-400">EMPOWERING</span> BRANDS WORLDWIDE.
        </h1>
      </div>

      {/* CARD GROUP */}
      <div
        ref={ref5}
        className={`flex flex-col md:flex-row justify-center items-center gap-5 mt-10 w-10/12 transition-opacity ease-in duration-700 ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <StatCard
          title="10+"
          icon={<ImageUp />}
          base="Years of experience in leading digital agencies"
        />
        <StatCard
          title="500+"
          icon={<ImageUp />}
          base="Clients taken services from us across the globe"
        />
        <StatCard
          title="95%"
          icon={<ImageUp />}
          base="Customer support satisfaction across the globe"
        />
        <StatCard
          title="4.5"
          icon={<ImageUp />}
          base="Average ratings given by our loving clients to us"
        />
      </div>

      {/* MARKETING STUFF TILE */}
      {/* HEADING  */}
      <div
        className={`flex flex-col items-center bg-indigo-950 max-h-fit  pb-12 h-4/6 mt-10 w-full transition-opacity ease-in duration-700 ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12 ">
          <h1
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white
        "
          >
            MARKETING FOR <span className="text-orange-400">BUSINESS</span> AND
            <span className="text-cyan-400"> ENTREPRENURS</span>
          </h1>
        </div>

        {/* TILE BODY  */}

        <div className="flex flex-col sm:flex-row justify-between items-center w-10/12 xl:w-7/12  xl:gap-6 mt-14 gap-4 motion-preset-slide-up">
          <div className="flex items-center sm:items-start flex-col text-base md:text-lg">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              consectetur tenetur ducimus, harum porro fugiat fugit ex doloribus
              possimus cumque ab consequuntur facilis laudantium modi debitis
              placeat aspernatur aperiam impedit? <br /> <br /> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quae nesciunt nobis
              porro aliquid atque at officia quis, sapiente quam voluptatum modi
              dolore molestiae, fuga a dignissimos in deleniti. Consequatur,
              esse!
            </p>
            <button className="rounded-full bg-orange-400 px-2 py-2 w-3/4 md:py-3 xl:py-4 mt-10 transition-all duration-300 transform hover:scale-110">
              Learn More
            </button>
          </div>
          <Image
            src="/assets/teamcollab.jpg"
            alt="Team Collab"
            width={300}
            height={800}
            className="rounded-3xl xl:w-[450px] xl:h-[380px]"
          />
        </div>
      </div>

      {/* WIDER CARD TILES SECTION */}
      {/* HEADING AND CONTEXT  */}
      <div className="flex flex-col items-center w-10/12 motion-preset-slide-up">
        <div
          ref={ref6}
          className={`flex flex-col sm:flex-row items-center justify-between lg:w-8/12 transition-opacity ease-in duration-700 ${
            isVisible6 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* HEADING  */}
          <div className="flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
            <h1
              className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-500
        "
            >
              WHAT WE ARE HERE TO <span className="text-orange-400">HELP</span>{" "}
              <span className="text-cyan-400"> YOU</span> WITH
            </h1>
          </div>

          {/* CONTEXT  */}

          <div className="text-base  justify-between mt-10 sm:gap-3 md:text-lg text-black font-semibold text-center md:w-1/2 lg:w-1/3">
            A globally recognized, full service, data, and technology driven
            digital marketing agency strongly supported with strategic thinkers,
            creative designers.
          </div>
        </div>
        {/* CARDS  */}

        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-5 mt-10 w-10/12 ml-5 transition-opacity ease-in duration-700 
          `}
        >
          <HelpCards
            num="01"
            title="AFFILIATE MARKETING"
            base="Leverage highly motivated and well-known websites to drive revenue for your brand."
            icon={<ImageUp />}
          />

          <HelpCards
            num="02"
            title="SOCIAL MEDIA"
            base="Leverage highly motivated and well-known websites to drive revenue for your brand."
            icon={<ImageUp />}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 md:mt-10 w-10/12 ml-5">
          <HelpCards
            num="03"
            title="CONTENT MARKETING"
            base="Leverage highly motivated and well-known websites to drive revenue for your brand."
            icon={<ImageUp />}
          />
          <HelpCards
            num="04"
            title="PPC/ PAID MEDIA"
            base="Leverage highly motivated and well-known websites to drive revenue for your brand."
            icon={<ImageUp />}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 md:mt-10 w-10/12 ml-5">
          <HelpCards
            num="05"
            title="EMAIL MARKETING"
            base="Leverage highly motivated and well-known websites to drive revenue for your brand."
            icon={<ImageUp />}
          />
          <HelpCards
            num="06"
            title="ON/OFF PAGE SEO"
            base="Leverage highly motivated and well-known websites to drive revenue for your brand."
            icon={<ImageUp />}
          />
        </div>
      </div>

      {/* LEADING BRANDS CARDS AND PROJ START */}
      <div
        ref={ref7}
        className={`flex flex-col justify-center items-center bg-indigo-950 max-h-fit w-full mt-10 transition-opacity ease-in duration-700 ${
          isVisible7 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* HEADING  */}
        <div className="flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12 motion-preset-slide-up">
          <h1
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white
        "
          >
            THE LEADING <span className="text-orange-400">BRANDS</span> WE{" "}
            <span className="text-cyan-400">WORK</span> WITH
          </h1>
        </div>

        {/* CARDS  */}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 w-full md:w-8/12 justify-items-center motion-preset-slide-up xl:gap-10">
          <BrandsCards
            name="Meta"
            icon={
              <Image
                src="/assets/logos/Meta.png"
                alt="Meta"
                width={30}
                height={30}
              />
            }
          />

          <BrandsCards
            name="Google"
            icon={
              <Image
                src="/assets/logos/google.png"
                alt="Google"
                width={30}
                height={30}
              />
            }
          />

          <BrandsCards
            name="Tesla"
            icon={
              <Image
                src="/assets/logos/Tesla.png"
                alt="Tesla"
                width={30}
                height={30}
              />
            }
          />

          <BrandsCards
            name="Microsoft"
            icon={
              <Image
                src="/assets/logos/Microsoft2.png"
                alt="Microsoft"
                width={30}
                height={30}
              />
            }
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 sm:mt-10 w-full md:w-8/12 justify-items-center motion-preset-slide-up xl:gap-10">
          <BrandsCards
            name="Intel"
            icon={
              <Image
                src="/assets/logos/Intel.png"
                alt="Intel"
                width={30}
                height={30}
              />
            }
          />

          <BrandsCards
            name="OpenAi"
            icon={
              <Image
                src="/assets/logos/chatgpt.png"
                alt="Google"
                width={30}
                height={30}
              />
            }
          />

          <BrandsCards
            name="X"
            icon={
              <Image
                src="/assets/logos/Xlogo.png"
                alt="X"
                width={30}
                height={30}
              />
            }
          />

          <BrandsCards
            name="Instagram"
            icon={
              <Image
                src="/assets/logos/insta.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            }
          />
        </div>

        {/* PROJECT START  */}
        <div className="flex flex-col bg-sky-400 items-center justify-center rounded-3xl min-h-fit  w-[360px] sm:h-[250px] sm:w-[600px]  m-20 motion-preset-slide-up">
          <div className="flex justify-center mt-14 md:mt-8 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
            <h1
              className="text-5xl font-extrabold text-white
        "
            >
              READY TO START A NEW PROJECT?
            </h1>
          </div>

          <button className="rounded-full my-8 md:mt-10 bg-white w-2/4 px-2 py-2 md:py-3 xl:py-4 transition-all duration-300 transform hover:scale-110">
            <p className="text-sky-400">Get a Proposal</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
