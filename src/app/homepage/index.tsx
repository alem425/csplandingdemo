"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "@/src/app/components/Navbar";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import StatCard from "../components/StatCards";
import InputFields from "../components/InputFields";
import Shape from "../components/Shapes";
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
            CSP'S PREMIUM <span className="text-orange-400">TECH</span> AND{" "}
            <span className="text-cyan-400">DIGITAL MARKETING</span> SERVICES!
          </h1>
        </div>

        {/* SUBHEADER  */}
        <div
          ref={ref2}
          className={`flex flex-row mt-3 py-5 w-11/12 sm:w-10/12 lg:w-1/2  justify-center items-center text-center  gap-2 sm:gap-5 transition-opacity ease-in duration-700 ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className=" text-slate-400 w-8/12 sm:w-1/2 font-bold sm:ml-3 lg:text-base">
            At CSP, we understand the critical role technology and digital
            marketing play in the success of your business. Our comprehensive
            service packages are designed to meet the diverse needs of our
            clients, from non-profits and startups, to established enterprises.
            Every package comes with a dedicated IT team, managed by tech
            veterans with 40 years of combined experience. Explore our tailored
            tiers and discover how we can elevate your business to new heights.
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
          <span className="text-orange-400">OUR</span> SERVICE{" "}
          <span className="text-cyan-400">TIERS</span>
        </h1>
      </div>

      {/* CARD GROUP */}
      <div
        ref={ref5}
        className={`flex flex-col lg:flex-row justify-center items-center gap-5 mt-10 w-11/12 xl:w-10/12 max-w-7xl transition-opacity ease-in duration-700 ${
          isVisible5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <StatCard
          title="Basic Tier"
          icon={<ImageUp />}
          base="Get started with foundational services to ensure your business runs smoothly and your online presence is optimized. Ideal for small businesses and startups.
"
        />
        <StatCard
          title="Standard Tier"
          icon={<ImageUp />}
          base="Benefit from advanced IT solutions and strategic digital marketing to propel your business forward. Perfect for growing businesses seeking to expand their reach and efficiency."
        />
        <StatCard
          title="Premium Tier"
          icon={<ImageUp />}
          base="Experience top-tier security measures and cutting-edge technology solutions. Suited for enterprises requiring robust protection and advanced development."
        />
        <StatCard
          title="Coding Plus Tier"
          icon={<ImageUp />}
          base="Unlock the potential of custom app development, prototyping, and data analytics. Designed for businesses that rely on sophisticated software and data-driven decision-making."
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
            <span className="text-cyan-400"> ENTREPRENEURS</span>
          </h1>
        </div>
        <Shape
          type="circle"
          color="bg-blue-900"
          size={75}
          opacity={0.5}
          className="bg-blue-900"
        />
        {/* TILE BODY  */}

        <div className="flex flex-col sm:flex-row justify-between items-center w-10/12 xl:w-7/12  xl:gap-6 mt-14 gap-4 motion-preset-slide-up">
          <div className="flex items-center sm:items-start flex-col text-base text-center sm:text-left md:text-lg">
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
          className={`flex flex-col items-center justify-center lg:w-8/12 transition-opacity ease-in duration-700 ${
            isVisible6 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* HEADING  */}
          <div className="flex flex-col justify-center mt-10 w-8/12 lg:w-6/12 items-center text-center md:w-6/12">
            <h1
              className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-500
        "
            >
              <span className="text-orange-400">SERVICE</span>{" "}
              <span className="text-cyan-400">DESCRIPTIONS</span>
            </h1>

            <div className="flex text-lg text-slate-500">
              Options specifically catered towards your goals and budget.
            </div>
          </div>
        </div>
        {/* CARDS  */}
        <div className="flex flex-col my-10 h-1/4 md:h-28 w-3/4 md:w-3/4 lg:w-3/5 bg-amber-700 rounded-xl cursor-pointer md:transition-all md:duration-300 md:hover:h-72 lg:hover:h-72 md:hover:rounded-lg p-6 md:overflow-hidden md:relative group shadow-md shadow-black">
          <h3 className="text-white text-2xl font-bold">Basic Tier</h3>
          <div className="py-4 md:opacity-0 md:transition-opacity md:duration-300 group-hover:opacity-100">
            <ul className="text-white mt-2 list-disc pl-5">
              <li className="my-2">
                <b>IT Support for Distributed Teams:</b> Ensure seamless
                operations for remote and hybrid work environments with
                dedicated IT support.
              </li>
              <li className="my-2">
                <b>Minor Website Updates:</b> Keep your website fresh and
                relevant with regular updates and maintenance
              </li>
              <li className="my-2">
                <b>SEO(Search Engine Optimization):</b> Improve your website's
                visibility on search engines to attract more organic traffic.
              </li>
              <li className="my-2">
                <b>Blog Marketing Execution:</b> Create and distribute valuable
                blog content to attract and retain customers
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col py-5 my-10  md:h-28 w-3/4 md:w-3/4 lg:w-3/5 bg-slate-400 rounded-xl cursor-pointer md:transition-all md:duration-300 md:hover:h-98 lg:hover:h-72 md:hover:rounded-lg p-6 overflow-hidden relative group shadow-md shadow-black">
          <h3 className="text-white text-2xl font-bold">Standard Tier</h3>
          <div className="md:opacity-0 md:transition-opacity md:duration-300 group-hover:opacity-100">
            <ul className="text-white mt-2 list-disc pl-5">
              <li className="my-2">
                <b>Cloud Computing:</b> Leverage the power of the cloud for
                scalable storage and computing solutions.
              </li>
              <li className="my-2">
                <b>Managed IT Services:</b> Outsource your IT management and
                support to our expert team.
              </li>
              <li className="my-2">
                <b>Low Code/No Code Development:</b> Enable non-developers to
                create applications with ease.
              </li>
              <li className="my-2">
                <b>Document Creation:</b> Develop comprehensive documents,
                including best practices, professional development guides, and
                user manuals.
              </li>
              <li className="my-2">
                <b>Content Marketing:</b> Craft and share valuable content to
                engage and educate your audience.
              </li>
              <li className="my-2">
                <b>Email Marketing:</b> Deliver targeted emails to promote your
                producs or services effectively.
              </li>
              <li className="my-1">
                <b>PPC(Pay-Per-Click) Advertising:</b> Drive traffic and
                conversions with paid ads on search engines and social media.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col my-10 pb-4 md:h-28 w-3/4 md:w-3/4 lg:w-3/5 bg-yellow-600 rounded-xl cursor-pointer md:transition-all md:duration-300 md:hover:h-100 lg:hover:h-96 hover:rounded-lg hover:pb-4 p-6 overflow-hidden relative group shadow-md shadow-black">
          <h3 className="text-white text-2xl font-bold">Premium Tier</h3>
          <div className="opacity-100 md:opacity-0 md:transition-opacity duration-300 group-hover:opacity-100">
            <ul className="text-white mt-2 list-disc pl-5">
              <li className="my-2">
                <b>Cybersecurity:</b> Protect your systems and data from cyber
                threats with advanced security measures.
              </li>
              <li className="my-2">
                <b>Data Engineering:</b> Manage and process large data sets to
                derive actionable insights.
              </li>
              <li className="my-2">
                <b>AI,VR,AR, and Metaverse Services:</b> Implement cutting-edge
                technologies to enhance user experiences and business
                operations.
              </li>
              <li className="my-2">
                <b>Website Development:</b> Create and maintain a professional,
                high-performing website.
              </li>
              <li className="my-2">
                <b>Web Design and Development:</b> Design visually appealing and
                user-friendly websites that meet your business needs.
              </li>
              <li className="my-2">
                <b>Video Marketing:</b> Produce and share compelling video
                content to captivate your audience.
              </li>
              <li className="my-2">
                <b>Lead Generation:</b> Attract and convert potential customers
                with targeted strategies.
              </li>
              <li className="my-2">
                <b>Conversion Optimization:</b> Improve your website's
                performance to increase conversions.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col my-10 md:h-28 w-3/4 md:w-3/4 lg:w-3/5 bg-sky-600 rounded-xl cursor-pointer md:transition-all md:duration-300 md:hover:h-80 md:hover:rounded-lg xl:hover:h-56 p-6 overflow-hidden relative group shadow-md shadow-black">
          <h3 className="text-white text-2xl font-bold">Coding Plus Tier</h3>
          <div className="py-4 opacity-100 md:opacity-0 md:transition-opacity duration-300 group-hover:opacity-100">
            <ul className="text-white mt-4 list-disc pl-5">
              <li className="my-2">
                <b>App Development:</b> Develop custom applications tailored to
                your business requirements.
              </li>
              <li className="my-2">
                <b>Prototyping:</b> Create and test prototypes to refine your
                products and services.
              </li>
              <li className="my-2">
                <b>Wireframing:</b> Design wireframes to visualize and plan your
                user interfaces.
              </li>
              <li className="my-2">
                <b>Data Analytics:</b> Analyze data to uncover trends and make
                informed business decisions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* LEADING BRANDS CARDS AND PROJ START */}
      <div
        ref={ref7}
        className={`flex flex-col lg:flex-row justify-center items-center lg:items-start bg-indigo-950 max-h-fit w-full pt-10 transition-opacity ease-in duration-700 ${
          isVisible7 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* HEADING  */}
        <div className="flex flex-col justify-center mt-3 w-8/12 lg:w-6/12 items-center text-center md:w-6/12 motion-preset-slide-up">
          <h3
            className="text-4xl md:text-xl lg:text-2xl font-medium text-white lg:w-3/4
        "
          >
            Take your business to the next level with CSP's expertly crafted
            tech and digital marketing services. Whether you're just starting
            out or looking to scale, we have the perfect solution to meet your
            needs. Contact us today to learn more!
          </h3>

          <Image
            src="/assets/corperate.jpg"
            alt="Group Working Together"
            height={80}
            width={600}
            className="rounded-md justify-start mt-10"
          />
        </div>

        {/* CARDS  */}

        {/* PROJECT START  */}
        {/* <div className="flex flex-col bg-sky-400 items-center justify-center rounded-3xl min-h-fit  w-[360px] sm:h-[250px] sm:w-[600px]  m-20 motion-preset-slide-up">
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
        </div> */}

        {/* Input boxes  */}

        <div className="flex flex-col h-fit w-3/4 bg-white lg:w-1/3 xl:1/4 my-7 ml-5 rounded-md p-6">
          <h1 className="text-black my-4 text-3xl font-bold w-1/2">
            Fill Out The Form Below.
          </h1>
          <InputFields title="Name" helpertext="Your Name" />
          <InputFields title="Company Name" helpertext="Your Company Name" />
          <InputFields title="Phone Number" helpertext="(123)-xxx-xxxx" />
          <InputFields title="Business Email" helpertext="you@mycompany.com" />
          <button className="rounded-lg my-8 md:mt-10 bg-orange-500 w-full px-2 py-2 md:py-3 xl:py-4 transition-all duration-300 transform hover:scale-105">
            <p className="text-white text-xl">Get a Proposal</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
