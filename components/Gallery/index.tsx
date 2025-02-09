"use client";
import newScript from "@/utils/newScript";
import { useEffect, useRef } from "react";

export default function Parallax() {
  const topContainerRef = useRef<HTMLDivElement>(null);
  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!topContainerRef.current || !bottomContainerRef.current) return;
    // const gsapScript = document.createElement("script");
    // gsapScript.src =
    //   "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    // gsapScript.onload = () => {
    //   const scrollTriggerScript = document.createElement("script");
    //   scrollTriggerScript.src =
    //     "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    //   scrollTriggerScript.onload = () => {
    newScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js")
      .then(() => {
        newScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        )
          .then(() => {
            if (window.gsap && window.ScrollTrigger) {
              window.gsap.registerPlugin(window.ScrollTrigger);

              // Top container moves right
              window.gsap.to(topContainerRef.current, {
                x: 200, // Adjust the movement as needed
                ease: "none",
                scrollTrigger: {
                  trigger: topContainerRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              });

              // Bottom container moves left
              window.gsap.to(bottomContainerRef.current, {
                x: -200,
                ease: "none",
                scrollTrigger: {
                  trigger: bottomContainerRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              });
            }
          })
          .catch((error) => {
            console.error("ScrollTrigger loading failed:", error);
          });
      })
      .catch((error) => {
        console.error("GSAP loading failed:", error);
      });

    //   };
    //   document.body.appendChild(scrollTriggerScript);
    // };
    // document.body.appendChild(gsapScript);
  }, []);

  return (
    <div
      className="w-full h-fit py-[200px] space-y-[50px] bg-white overflow-hidden border-2 border-pink-500 "
      ref={containerRef}
    >
      <div className="relative w-[120%] h-[300px] ">
        <div
          className="flex w-[120%] h-[300px] space-x-[50px] absolute top-0 right-0"
          ref={topContainerRef}
        >
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
        </div>
      </div>
      <div className="relative w-[120%] h-[300px] ">
        <div
          className="flex w-[120%] h-[300px] space-x-[50px] absolute top-0 left-0"
          ref={bottomContainerRef}
        >
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
          <div className="w-full h-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
