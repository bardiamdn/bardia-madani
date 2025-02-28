"use client";
import Image from "next/image";
import { useState } from "react";

export default function ServiceRow({
  services,
}: {
  services: { title: string; description: string; mediaSrc: string }[];
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
          className={`py-[40px] p-[40px] md:h-[570px] h-[1000px] ${
            index % 2 === 0 ? "md:mr-[25px]" : "md:ml-[25px]"
          } ${
            index < 2 ? "mb-[50px]" : ""
          } bg-[#111] text-white flex flex-col justify-between transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500  ${
            hoverIndex === index + 1
              ? "md:w-[65%] w-full bg-accent"
              : hoverIndex === 0
              ? "md:w-[50%] w-full"
              : "md:w-[35%] w-full"
          }`}
        >
          <div className="flex justify-between">
            <h2
              className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500 ${
                hoverIndex === index + 1
                  ? "md:text-7xl text-5xl text-foreground"
                  : hoverIndex !== index + 1 && hoverIndex !== 0
                  ? "md:text-5xl text-5xl"
                  : "md:text-6xl text-5xl"
              } font-thin`}
            >
              {service.title}
            </h2>
            <div
              className={` relative transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500 flex-shrink-0 ${
                hoverIndex === index + 1
                  ? " opacity-100 w-[200px] h-[300px]"
                  : " opacity-0 w-0 h-0"
              }`}
            >
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
