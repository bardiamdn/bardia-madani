"use client";
import SlideUpParagraph from "@/common/SlideUpParagraph/inde";
import Image from "next/image";
import { useState } from "react";

export default function Intro() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="w-full flex justify-center items-center bg-white pt-[100px] pb-[40px]">
      <div className="2xl:w-[80%] md:h-[400px] flex md:flex-row flex-col-reverse items-center ">
        <div className="md:w-1/2 w-full h-full aspect-square px-[30px] 2xl:px-0 xs:py-[30px] py-0 ">
          <div className="relative w-full h-full space-y-[25px]">
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded ? "opacity-0 " : "opacity-100 "
              }`}
              // loading="lazy"
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
        <div className="md:w-1/2 py-[25px] pl-[25px]">
          <SlideUpParagraph className="text-2xl font-extralight text-foreground ">
            Even tough esthetics is very important for a website, speed and
            conversion needs right tools and technical knowledge to get right.
            That’s why I
          </SlideUpParagraph>
        </div>
      </div>
    </section>
  );
}
