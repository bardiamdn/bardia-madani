"use client";
import { usePageTransition } from "@/hooks/usePageTransition";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  usePageTransition();
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Headline */}
        <div className="relative md:h-[400px] flex flex-col justify-center md:mt-[100px] mb-[100px]">
          <div className="flex items-center">
            <h1 className=" md:my-[40px] mt-[40px]  lg:text-start text-center">
              <span className="md:block">Design, Development </span>
              <span className="md:block lg:ml-[200px] lg:mt-[30px]">
                Interaction & Motion
              </span>
            </h1>
          </div>
        </div>
        <div className="md:space-x-[50px] md:space-y-0 relative flex md:flex-row flex-col items-center md:py-[200px] py-[50px] md:h-[1000px] h-[600px] border-t border-border">
          <div className="md:w-[50%] md:space-y-[35px] flex flex-col justify-center h-full space-y-[25px]">
            <h4>Creative Developer</h4>
            <p>
              I&apos;m passionate about great design , bringing creative ideas
              to life with dynamic motion and interactive code. I constantly
              push boundaries, elevating each project to new heights while
              managing every detail from concept to launch.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>
          <div className="relative md:w-[40%] w-full md:h-full h-[50%]">
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:border-t md:mt-0  my-[70px] border-black md:mb-[150px]">
          <div className="md:w-1/2 w-full md:mr-[50px] md:py-[50x] border-t border-border ">
            <h3
              id="process"
              className="mt-[45px] mb-[20px] text-center md:text-start"
            >
              The Process
            </h3>
            <p className="md:w-[85%] md:text-[26px] text-[20px] font-geologica font-extralight">
              Here’s how I will bring your vision to life with a seamless,
              end-to-end solution tailored to your needs.
            </p>
            <div className="relative md:w-[50%] md:h-[50%] h-[200px] md:my-[100px] my-[50px] ">
              {/* <video
                src="/videos/development.mp4"
                autoPlay
                loop
                muted
                className="object-center object-cover w-full h-full"
              >
                Your browser does not support the video tag.
              </video> */}
              <Image
                src={"/stairs.png"}
                alt="blue stairs"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="flex flex-col md:py-[50px] space-y-[25px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="flex items-center space-x-[15px]">
                <span className="md:text-xl text-foregroundAccent font-semibold ">
                  01
                </span>
                <h4>Discover</h4>
              </div>
              <p className="text-[#757575] md:pl-[25px]">
                We start with a quick online consultation to understand your
                goals, challenges, and expectations.
              </p>
            </div>
            <div className="flex flex-col space-y-[25px] md:py-[50px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="flex items-center space-x-[15px]">
                <span className="md:text-xl text-foregroundAccent font-semibold ">
                  02
                </span>
                <h4>Define</h4>
              </div>
              <p className="text-[#757575] md:pl-[25px]">
                I analyze your industry, competitors, and target audience to
                define the website’s content and strategy.
              </p>
            </div>
            <div className="flex flex-col space-y-[25px] md:py-[50px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="flex items-center space-x-[15px]">
                <span className="md:text-xl text-foregroundAccent font-semibold ">
                  03
                </span>
                <h4>Design</h4>
              </div>
              <p className="text-[#757575] md:pl-[25px]">
                Once we’ve established the concept, I create the design and
                refine it based on your feedback.
              </p>
            </div>
            <div className="flex flex-col space-y-[25px] md:py-[50px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="flex items-center space-x-[15px]">
                <span className="md:text-xl text-foregroundAccent font-semibold ">
                  04
                </span>
                <h4>Develop</h4>
              </div>
              <p className="text-[#757575] md:pl-[25px]">
                My favorite part—coding the website, adding motion, and bringing
                everything to life.
              </p>
            </div>
            <div className="flex flex-col space-y-[25px] md:py-[50px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="flex items-center space-x-[15px]">
                <span className="md:text-xl text-foregroundAccent font-semibold ">
                  05
                </span>
                <h4>Deploy</h4>
              </div>
              <p className="text-[#757575] md:pl-[25px]">
                After thorough testing and final refinements, your website goes
                live.
              </p>
            </div>
            <div className="flex flex-col space-y-[25px] md:py-[50px] py-[35px]">
              <div className="flex items-center space-x-[15px]">
                <span className="md:text-xl text-foregroundAccent font-semibold ">
                  06
                </span>
                <h4>Drive</h4>
              </div>
              <p className="text-[#757575] md:pl-[25px]">
                Post-launch, I analyze performance and ensure everything is
                optimized for search engines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
