"use client";
import Stars from "../Stars";
import { useRef } from "react";

export default function Hero() {
  const startsContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full h-screen flex bg-black fixed top-0 left-0 -z-10">
      <div className="w-1/2 h-full" ref={startsContainerRef}>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-black"></div>
        <Stars parentRef={startsContainerRef} />
      </div>
      <div className="w-1/2 h-full">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
