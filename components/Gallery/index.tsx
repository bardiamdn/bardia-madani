"use client";
import { useEffect, useRef } from "react";

export default function Gallery() {
  const topContainerRef = useRef<HTMLDivElement>(null);
  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!topContainerRef.current || !bottomContainerRef.current) return;
    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
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
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };
    waitForGSAP();
    return () => clearTimeout(gsapTimeout);
  }, []);

  return (
    <section
      className="w-full h-fit py-[200px] space-y-[50px] bg-white overflow-hidden "
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
    </section>
  );
}
