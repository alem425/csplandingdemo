"use client";
import React from "react";
import Navbar from "@/src/app/components/Navbar";
import { Lightbulb, ImageUp, Instagram } from "lucide-react";
import Image from "next/image";
import StatCard from "../components/StatCards";
import HelpCards from "../components/HelpCards";
import BrandsCards from "../components/BrandsCards";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center bg-indigo-950 max-h-fit  pb-12 h-4/6 ">
        <Navbar />

        {/* HEADER  */}
        <div className="mt-10 w-10/12 lg:w-4/5 items-center text-center md:w-6/12">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold">
            EVERY <span className="text-orange-400">GREAT PRODUCT</span> BEGINS
            WITH A <span className="text-cyan-400">BOLD VISION</span>
          </h1>
        </div>

        {/* SUBHEADER  */}
        <div className="flex flex-row mt-3 w-10/12 lg:w-1/2  justify-center items-center text-center gap-10">
          <p className=" text-slate-400 w-1/2 font-bold ml-3 lg:text-base">
            A globally recognized, full service, data, and technology driven
            digital marketing agency strongly supported with strategic thinkers,
            creative designers, content creators.
          </p>
          <div className="flex flex-row justify-between items-center gap-4 mr-3">
            <button className="rounded-full bg-orange-400 px-2 py-2 md:py-3 xl:py-4">
              Get a Proposal
            </button>
            <button className="rounded-full border-2 border-orange-400 px-2 py-2 md:py-3 xl:py-4">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* WHITE BG BODY  */}
      {/* IMAGE */}
      <div className="flex justify-center items-center mt-10">
        <Image
          src="/assets/social2.jpg"
          alt="Social Apps"
          width={500}
          height={20}
          className="rounded-3xl h-[250px] w-[600px] lg:h-[450px] lg:w-[900px] "
        />
      </div>
      {/* TEXT GROUP 2  */}
      <div className="flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
        <h1
          className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-500
        "
        >
          <span className="text-orange-400">DRIVING</span> DIGITAL GROWTH,{" "}
          <span className="text-cyan-400">EMPOWERING</span> BRANDS WORLDWIDE.
        </h1>
      </div>

      {/* CARD GROUP */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 w-10/12">
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
      <div className="flex flex-col items-center bg-indigo-950 max-h-fit  pb-12 h-4/6 mt-10 w-full">
        <div className="flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
          <h1
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white
        "
          >
            MARKETING FOR <span className="text-orange-400">BUSINESS</span> AND
            <span className="text-cyan-400"> ENTREPRENURS</span>
          </h1>
        </div>

        {/* TILE BODY  */}

        <div className="flex flex-row justify-between items-center w-10/12 xl:w-7/12  xl:gap-6 mt-14 gap-4">
          <div className="flex flex-col text-base md:text-lg">
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
            <button className="rounded-full bg-orange-400 px-2 py-2 w-3/4 md:py-3 xl:py-4 mt-10">
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
      <div className="flex flex-col items-center w-10/12">
        <div className="flex flex-row items-center justify-between lg:w-8/12">
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 w-10/12 ml-5">
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
      <div className="flex flex-col justify-center items-center bg-indigo-950 max-h-fit w-full mt-10">
        {/* HEADING  */}
        <div className="flex justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
          <h1
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white
        "
          >
            THE LEADING <span className="text-orange-400">BRANDS</span> WE{" "}
            <span className="text-cyan-400">WORK</span> WITH
          </h1>
        </div>

        {/* CARDS  */}

        <div className="flex flex-row gap-4 mt-10 sm:w-11/12 md:8/12 items-center justify-center">
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

        <div className="flex flex-row gap-4 mt-5 sm:w-11/12 md:8/12 items-center justify-center">
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
        <div className="flex flex-col bg-sky-400 items-center rounded-3xl h-[250px] w-[600px]  m-20">
          <div className="flex justify-center mt-14 md:mt-8 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
            <h1
              className="text-5xl font-extrabold text-white
        "
            >
              READY TO START A NEW PROJECT?
            </h1>
          </div>

          <button className="rounded-full mt-16 md:mt-10 bg-white w-1/4 px-2 py-2 md:py-3 xl:py-4">
            <p className="text-sky-400">Get a Proposal</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
