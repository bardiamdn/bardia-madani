"use client";
import { ServiceBlock } from "@/types/servicespage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import laptopDesignImg from "@/public/laptop-design.jpg";
import laptopDevelopmentImg from "@/public/laptop-development.jpg";
import maintenanceImg from "@/public/maintenance.jpg";
import seoImg from "@/public/seo.jpg";
import scrambleText from "@/common/ScrambleText";

const mediaSrcs = [
  { file: laptopDesignImg, src: "/laptop-design.jpg" },
  { file: laptopDevelopmentImg, src: "/laptop-development.jpg" },
  { file: maintenanceImg, src: "/maintenance.jpg" },
  { file: seoImg, src: "/seo.jpg" },
];

const getFileFromSrc = (providedSrc: string) => {
  const found = mediaSrcs.find((item) => item.src === providedSrc);
  return found ? found.file : mediaSrcs[0].file;
};

export default function ServiceRow({ services }: { services: ServiceBlock[] }) {
  const [hoverIndex, setHoverIndex] = useState(0); // 0 for no hover
  const desRef = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    services.forEach((service, i) => {
      if (desRef.current[i]) {
        scrambleText({
          text: service.description || "Couldn't find the description",
          elementRef: { current: desRef.current[i] },
          duration: 0.5,
        });
      }
    });
  }, [hoverIndex, desRef, services]);

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
          className={`xl:p-[40px] md:p-[30px] p-[20px] md:h-[570px] h-auto ${
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
          <div className="flex md:flex-row flex-col justify-between mb-[50px]">
            <h2
              className={`transition-all md:text-white text-foreground md:mb-0 mb-[50px] ease-[cubic-bezier(0.83,0,0.17,1)] duration-500 ${
                hoverIndex === index + 1
                  ? "xl:text-7xl md:text-5xl text-5xl md:text-foreground"
                  : hoverIndex !== index + 1 && hoverIndex !== 0
                    ? "xl:text-5xl md:text-4xl text-5xl"
                    : "xl:text-6xl md:text-5xl text-5xl"
              } md:font-thin font-extralight`}
            >
              {service.name}
            </h2>
            <div
              className={` relative transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500 flex-shrink-0 ${
                hoverIndex === index + 1
                  ? " md:opacity-100 xl:w-[200px] md:w-0 xl:h-[300px] md:h-0 opacity-100 w-[100px] h-[200px]"
                  : " md:opacity-0 md:w-0 md:h-0 opacity-100 w-[100px] h-[200px]"
              }`}
            >
              {service.isVideo ? (
                <video
                  src={service.mediaSrc}
                  autoPlay
                  loop
                  muted
                  className="object-center object-cover w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={getFileFromSrc(service.mediaSrc)}
                  alt="half closed laptop in a dark room"
                  className={`object-cover object-center`}
                  placeholder="blur"
                  fill
                />
              )}
            </div>
          </div>
          <p
            className={`text-foreground transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-500  ${
              hoverIndex === index + 1
                ? "md:text-2xl text-xl md:text-foreground"
                : hoverIndex !== index + 1 && hoverIndex !== 0
                  ? "md:text-md text-xl md:text-foregroundLight"
                  : "md:text-2xl text-xl md:text-foregroundLight"
            }`}
            ref={(el) => {
              desRef.current[index] = el as HTMLParagraphElement;
            }}
          >
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
