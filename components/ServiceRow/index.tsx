"use client";
import Image from "next/image";
import { useState } from "react";

export default function ServiceRow({
  services,
}: {
  services: {
    title: string;
    description: string;
    mediaSrc: string;
    isVideo: boolean;
  }[];
}) {
  const [hoverIndex, setHoverIndex] = useState(0); // 0 for no hover
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`contents md:flex md:flex-row items-end `}>
      {services.map((service, index) => (
        <div
          key={index}
          onMouseEnter={() => {
            setHoverIndex(index + 1);
          }}
          onMouseLeave={() => {
            setHoverIndex(0);
          }}
          className={`md:p-[40px] p-[20px] md:h-[570px] h-auto ${
            index % 2 === 0 ? "md:mr-[25px]" : "md:ml-[25px]"
          } ${
            index < 2 ? "md:mb-[50px] mb-[25px]" : ""
          } md:bg-[#111] bg-accent text-white flex flex-col justify-between transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500  ${
            hoverIndex === index + 1
              ? "md:w-[65%] w-full md:bg-accent "
              : hoverIndex === 0
              ? "md:w-[50%] w-full"
              : "md:w-[35%] w-full"
          }`}
        >
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-[25px] justify-between mb-[75px]">
            <h2
              className={`transition-all md:text-white text-foreground ease-[cubic-bezier(0.83,0,0.17,1)] duration-500 ${
                hoverIndex === index + 1
                  ? "md:text-7xl text-5xl md:text-foreground"
                  : hoverIndex !== index + 1 && hoverIndex !== 0
                  ? "md:text-5xl text-5xl"
                  : "md:text-6xl text-5xl"
              } md:font-thin font-extralight`}
            >
              {service.title}
            </h2>
            <div
              className={` relative transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500 flex-shrink-0 ${
                hoverIndex === index + 1
                  ? " md:opacity-100 md:w-[200px] md:h-[300px] opacity-100 w-[100px] h-[200px]"
                  : " md:opacity-0 md:w-0 md:h-0 opacity-100 w-[100px] h-[200px]"
              }`}
            >
              {service.isVideo ? (
                <video
                  src={service.mediaSrc}
                  // aria-label={serviceAlt}
                  autoPlay
                  loop
                  muted
                  className="object-center object-cover w-full h-full"
                  // ref={videoRef}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <Image
                    src="/laptop-low.jpg"
                    alt="reduntant image alt"
                    className={`object-cover object-center ${
                      loaded ? "opacity-0 " : "opacity-100 "
                    }`}
                    priority
                    fill
                  />
                  <Image
                    src={service.mediaSrc}
                    alt="half closed laptop in a dark room"
                    className={`object-cover object-center ${
                      loaded ? "opacity-100 " : "opacity-0 "
                    }`}
                    loading="lazy"
                    fill
                    onLoad={() => setLoaded(true)}
                  />
                </>
              )}
            </div>
          </div>
          <p
            className={`text-foregroundLight transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500  ${
              hoverIndex === index + 1
                ? "md:text-2xl text-xl"
                : hoverIndex !== index + 1 && hoverIndex !== 0
                ? "md:text-md text-xl"
                : "md:text-2xl text-xl"
            }`}
          >
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
