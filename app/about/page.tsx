"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Headline */}
        <div className="relative md:h-[500px] flex flex-col justify-center md:mt-[100px]">
          <div className="flex items-center">
            <h1 className=" md:my-[40px] mt-[40px]">
              <span className="md:block">Design, Development </span>
              <span className="md:block md:ml-[200px] md:mt-[30px]">
                Interaction & Motion
              </span>
            </h1>
          </div>
        </div>
        <div className="relative flex md:flex-row flex-col items-center gap-[35px] py-[50px] h-[600px]">
          <div className="md:w-[60%] ms:space-y-[25px] flex flex-col justify-between h-full">
            <p>
              I&apos;m passionate about great design , bringing creative ideas
              to life with dynamic motion and interactive code. I constantly
              push boundaries, elevating each project to new heights while
              managing every detail from concept to launch.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 md:w-[40%] w-full md:h-[100%] h-[50%]">
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
        <div className="flex flex-col md:flex-row md:border-t md:mt-0  my-[70px] border-black md:my-[150px]">
          <div className="md:w-1/2 w-full md:mr-[50px] border-t border-border ">
            <h2
              id="process"
              className="mt-[45px] mb-[20px] text-center md:text-start"
            >
              The Process
            </h2>
            <p className="md:w-[85%] md:text-[26px] text-[20px] font-geologica font-extralight">
              Here’s how I will bring your vision to life with a seamless,
              end-to-end solution tailored to your needs.
            </p>
            <div className="md:my-[100px] my-[50px]">
              <video
                src="/videos/development.mp4"
                autoPlay
                loop
                muted
                className="object-center object-cover w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="inline-flex gap-[15px]">
                <span className="text-accent font-semibold ">01</span>
                <h3>Discover</h3>
                {/* <h3>Understanding Your Business & Goals</h3> */}
              </div>
              <p>
                We start with a quick online consultation to understand your
                goals, challenges, and expectations.
              </p>
            </div>
            <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="inline-flex gap-[15px]">
                <span className="text-accent font-semibold ">02</span>
                <h3>Define</h3>
                {/* <h3>Market Research & Strategy</h3> */}
              </div>
              <p>
                I analyze your industry, competitors, and target audience to
                define the website’s content and strategy.
              </p>
              {/* <p>
                A website should do more than just look good it should perform
                well in your industry. I analyze your competitors, target
                audience, and market trends to create a strategic approach that
                positions your business effectively online. This research shapes
                the structure, content, and design of your site.
              </p> */}
            </div>
            <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="inline-flex gap-[15px]">
                <span className="text-accent font-semibold ">03</span>
                <h3>Design</h3>
                {/* <h3>Content & Messaging</h3> */}
              </div>
              <p>
                Once we’ve established the concept, I create the design and
                refine it based on your feedback.
              </p>
            </div>
            <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="inline-flex gap-[15px]">
                <span className="text-accent font-semibold ">04</span>
                {/* <h3>Visual Design & User Experience</h3> */}
                <h3>Develop</h3>
              </div>
              <p>
                My favorite part—coding the website, adding motion, and bringing
                everything to life.
              </p>
            </div>
            <div className="flex flex-col gap-[25px] py-[35px] border-b-[0.5px] border-border md:border-black">
              <div className="inline-flex gap-[15px]">
                <span className="text-accent font-semibold ">05</span>
                {/* <h3>Development & Optimization</h3> */}
                <h3>Deploy</h3>
              </div>
              <p>
                After thorough testing and final refinements, your website goes
                live.
              </p>
            </div>
            <div className="flex flex-col gap-[25px] py-[35px]">
              <div className="inline-flex gap-[15px]">
                <span className="text-accent font-semibold ">06</span>
                {/* <h3>Ongoing Maintenance & Support</h3> */}
                <h3>Drive</h3>
              </div>
              <p>
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
