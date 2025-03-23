"use client";
import { usePageTransition } from "@/hooks/usePageTransition";
import { client } from "@/sanity/client";
import { AboutPageData } from "@/types/aboutpage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [aboutpageData, setAboutpageData] = useState<AboutPageData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "aboutpage"][0]`);

      setAboutpageData(data);
    };

    fetchData();
  }, []);

  usePageTransition();

  if (!aboutpageData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Headline */}
        <div className="relative md:h-[500px] flex flex-col justify-center md:mt-[100px] md:mb-0 mb-[100px]">
          <div className="relative w-full h-full flex items-center">
            <h1 className=" md:my-[40px] mt-[40px] lg:text-start text-center">
              <div className="h-[50%] md:flex w-full items-center justify-between md:absolute top-0 left-0">
                <span>{aboutpageData.heroSection.headlineTop} </span>
                <div className="ml-[20px] flex-grow justify-center items-center h-full lg:flex hidden">
                  <div className="relative aspect-square h-[70%]">
                    <Image
                      src={"/about-1.jpg"}
                      alt="steps"
                      fill
                      className="text-sm object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="z-10 relative h-[50%] md:flex w-full items-center justify-between md:absolute bottom-0 right-0 lg:ml-[200px] lg:mt-[30px]">
                <div className="mr-[70px] relative flex-grow h-full lg:flex hidden">
                  <div className="absolute top-[45px] left-0 w-full h-[calc(100%-45px)]">
                    <video
                      src="/videos/about.mp4"
                      autoPlay
                      loop
                      muted
                      className="object-center object-cover w-full h-full"
                    >
                      Your browser does not support the video tag.
                    </video>
                    {/* <Image
                      src={"/corner-stairs.jpg"}
                      alt="steps"
                      fill
                      className="text-sm object-cover object-center"
                    /> */}
                  </div>
                </div>
                <span>{aboutpageData.heroSection.headlineBottom}</span>
              </div>
            </h1>
          </div>
        </div>
        <div className="md:space-x-[50px] md:space-y-0 relative flex md:flex-row flex-col items-center justify-between md:py-[200px] py-[50px] md:h-[1000px] h-[600px]">
          <div className="md:w-[50%] md:space-y-[35px] flex flex-col justify-center h-full space-y-[25px]">
            <h4>{aboutpageData.introSection.title}</h4>
            <p>{aboutpageData.introSection.description}</p>
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
              {aboutpageData.processSection.title}
            </h3>
            <p className="md:w-[85%] md:text-[26px] text-[20px] font-geologica font-extralight">
              {aboutpageData.processSection.description}
            </p>
            <div className="relative md:w-[50%] md:h-[50%] h-[200px] md:my-[100px] my-[50px] ">
              <Image
                src={"/stairs.png"}
                alt="blue stairs"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full ">
            {aboutpageData.processSection.steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-[25px] md:py-[50px] py-[35px] ${
                  index < aboutpageData.processSection.steps.length - 1
                    ? "border-b-[0.5px] border-border md:border-black"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-[15px]">
                  <span className="md:text-xl text-foregroundAccent font-semibold">
                    {step.stepNumber}
                  </span>
                  <h4>{step.title}</h4>
                </div>
                <p className="text-[#757575] md:pl-[25px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
