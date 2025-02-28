"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Stars from "../Stars";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const startsContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        if (!containerRef.current) return;

        window.gsap.to(containerRef.current, {
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom top",
            end: "bottom top",
            // markers: true,
            toggleActions: "play none reverse none",
            onEnter: () => {
              setInView(false);
              if (videoRef.current) videoRef.current.pause();
            },
            onEnterBack: () => {
              setInView(true);
              if (videoRef.current) videoRef.current.play();
            },
          },
        });
        window.gsap.to(containerRef.current, {
          y: "-50vh",
          opacity: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            // markers: true,
            scrub: true,
            // toggleActions: "play none reverse none",
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
      className="w-full h-screen flex md:flex-row flex-col bg-black fixed top-0 left-0 -z-10"
      ref={containerRef}
    >
      {inView ? null : <div className="bg-white absolute inset-0 z-10"></div>}
      <div className="md:w-1/2 w-full h-full" ref={startsContainerRef}>
        {isTablet ? (
          <>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-black"></div>
            <Stars parentRef={startsContainerRef} />
          </>
        ) : null}
      </div>
      <div className="md:w-1/2 2xl:pr-[10%] w-full md:h-auto h-1/2 md:my-auto">
        <div className="w-full aspect-square">
          <video
            autoPlay
            muted
            loop
            ref={videoRef}
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
