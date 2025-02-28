"use client";
import SlideUpParagraph from "@/common/SlideUpParagraph/inde";
import Navigate from "../../common/NavigateLink";
// import Image from "next/image";
// import { useState } from "react";

export default function Intro() {
  // const [loaded, setLoaded] = useState(false);

  return (
    <section className="w-full flex justify-center items-center bg-white pt-[100px] pb-[40px]">
      <div className="2xl:w-[80%] h-screen flex flex-col justify-center items-center ">
        {/* <div className="md:w-1/2 w-full h-full aspect-square px-[30px] 2xl:px-0 xs:py-[30px] py-0 "> */}
        {/* <div className="relative w-full h-full space-y-[25px]">
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
          </div> */}
        {/* </div> */}
        <div className="md:w-full py-[20px] mb-[50px]">
          <SlideUpParagraph className="md:text-6xl text-3xl md:leading-[76px] leading-[42px] text-center font-light text-foreground px-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SlideUpParagraph>
        </div>
        <div>
          {/* <SlideUpLetter> */}
          <Navigate href="/about">Go to About</Navigate>
          {/* </SlideUpLetter> */}
        </div>
      </div>
    </section>
  );
}
