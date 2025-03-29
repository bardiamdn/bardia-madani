"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import intro1 from "@/public/gallery-1.png";
import intro2 from "@/public/gallery-2.png";
import intro3 from "@/public/gallery-3.png";
import intro4 from "@/public/gallery-4.png";
import intro5 from "@/public/gallery-5.png";

interface ScrollTriggerInstance {
  direction: number;
  progress: number;
}

export default function Gallery() {
  const galleryInfo = [
    { imgSrc: intro1 },
    { imgSrc: intro2 },
    { imgSrc: intro3 },
    { imgSrc: intro4 },
    { imgSrc: intro5 },
  ];
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const direction = useRef(-1);
  const xPercent = useRef(0);

  const animate = useCallback(() => {
    if (!firstRef.current || !secondRef.current) return;

    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    window.gsap.set(firstRef.current, { xPercent: xPercent.current });
    window.gsap.set(secondRef.current, { xPercent: xPercent.current });

    xPercent.current += 0.02 * direction.current;
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.to(sliderRef.current, {
          x: "-500px",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.1,
            onUpdate: (self: ScrollTriggerInstance) => {
              direction.current = self.direction * -1;
            },
          },
        });
        requestAnimationFrame(animate);
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };
    waitForGSAP();

    return () => clearTimeout(gsapTimeout);
  }, [animate]);

  return (
    <div
      className="md:block hidden w-full h-[700px] bg-white py-[150px] overflow-hidden"
      ref={containerRef}
    >
      <div className="relative w-full h-full" ref={sliderRef}>
        <div
          className="flex text-black absolute bottom-0 left-0 w-[3500px] h-full items-center justify-start space-x-[60px] px-[30px]"
          ref={firstRef}
        >
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[0].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[1].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[2].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[3].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[4].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
        </div>
        <div
          className="md:flex hidden text-black absolute bottom-0 left-[3500px] w-[3500px] h-full items-center justify-start space-x-[60px] px-[30px]"
          ref={secondRef}
        >
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[0].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[1].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[2].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[3].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="aspect-[144/90] h-full p-[50px] bg-accent">
            <div className="relative w-full h-full">
              <Image
                src={galleryInfo[4].imgSrc}
                alt="half closed laptop in a dark room"
                className={`object-cover object-top`}
                loading="lazy"
                placeholder="blur"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
