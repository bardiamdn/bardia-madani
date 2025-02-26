"use client";
import { useState } from "react";

export default function ServiceBlocks({
  services,
}: {
  services: { title: string; description: string; mediaSrc: string }[];
}) {
  const [hoverIndex, setHoverIndex] = useState(0); // 0 for no hover
  // const [wait, setWait] = useState(false);

  return (
    <div className="flex flex-col h-full my-[200px]">
      {[0, 2].map((rowIndex) => (
        <div
          className={`contents md:flex flex-col md:flex-row h-full ${
            rowIndex === 0 ? "items-end" : "items-start"
          }`}
          key={rowIndex}
        >
          {services.slice(rowIndex, rowIndex + 2).map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setTimeout(() => {
                  setHoverIndex(index + 1);
                }, 500);
              }}
              // onMouseMove={() => {
              // if (!wait) setHoverIndex(index + 1);
              // }}
              onMouseLeave={() => {
                setHoverIndex(0);
                // setWait(true);
                // setTimeout(() => {
                //   setWait(false);
                // }, 550);
              }}
              className={`py-[40px] aspect-square p-[40px] h-full ${
                index % 2 === 0 ? "md:mr-[25px]" : "md:ml-[25px]"
              } ${
                index < 2 ? "mb-[50px]" : ""
              } bg-[#111] text-white flex flex-col justify-between transition-all duration-500  ${
                hoverIndex === index + 1
                  ? "md:w-[70%] w-full"
                  : "md:w-[50%] w-full"
              } ${
                rowIndex === 1 && hoverIndex < 2 ? "" : ""
                // ISSUE HERE
              }`}
            >
              <h2
                className={`transition-all ease-in-out duration-500 ${
                  hoverIndex === index + 1
                    ? "md:text-7xl text-5xl"
                    : hoverIndex !== index + 1 && hoverIndex !== 0
                    ? "md:text-5xl text-5xl"
                    : "md:text-6xl text-5xl"
                } font-thin`}
              >
                {service.title}
              </h2>
              <p
                className={`text-foregroundLight transition-all duration-500  ${
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
      ))}
    </div>
  );
}
