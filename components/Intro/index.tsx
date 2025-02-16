"use client";
import SlideUpParagraph from "@/common/SlideUpParagraph/inde";
import Image from "next/image";
import { useState } from "react";

export default function Intro() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="w-full block xs:flex bg-white p-[20px]">
      <div className="sm:w-1/2 w-full h-auto sm:aspect-auto aspect-square px-[30px] xs:py-[30px] py-0">
        <div className="relative w-full h-full">
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
      <div className="sm:w-1/2">
        <SlideUpParagraph className="text-2xl font-extralight text-foreground">
          Even tough esthetics is very important for a website, speed and
          conversion needs right tools and technical knowledge to get right.
          That’s why I
        </SlideUpParagraph>
      </div>
    </section>
  );
}
