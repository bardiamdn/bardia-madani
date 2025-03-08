import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ScrollTriggerInstance {
  direction: number;
  progress: number;
}

const galleryInfo = [
  { imgSrc: "gallery-1.png", imgLowSrc: "laptop-low.jpg" },
  { imgSrc: "gallery-2.png", imgLowSrc: "laptop-low.jpg" },
  { imgSrc: "laptop.jpg", imgLowSrc: "laptop-low.jpg" },
  { imgSrc: "laptop.jpg", imgLowSrc: "laptop-low.jpg" },
  { imgSrc: "laptop.jpg", imgLowSrc: "laptop-low.jpg" },
];

export default function Gallery() {
  const [loaded, setLoaded] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
    fifth: false,
  });
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  let direction = -1;
  let xPercent = 0;

  useEffect(() => {
    let gsapTimeout: NodeJS.Timeout;
    const waitForGsap = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);

        window.gsap.to(sliderRef.current, {
          x: "-300px",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.1,
            // markers: true,
            onUpdate: (self: ScrollTriggerInstance) => {
              direction = self.direction * -1;
            },
          },
        });

        requestAnimationFrame(animate);
      } else {
        console.warn("GSAP not loaded, retrying...");
        gsapTimeout = setTimeout(waitForGsap, 100);
      }
    };

    requestAnimationFrame(waitForGsap);

    return () => clearTimeout(gsapTimeout);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    window.gsap.set(firstRef.current, { xPercent: xPercent });
    window.gsap.set(secondRef.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  };
  // 2300 - 5 * (700-300) = 300 / 5 = 60 -> margin between
  return (
    <div className="w-full h-[700px] bg-white py-[150px]" ref={containerRef}>
      <div className="relative w-full h-full" ref={sliderRef}>
        <div
          className="md:flex hidden text-black absolute bottom-0 left-0 w-[2300px] h-full items-center justify-start space-x-[60px] px-[30px]"
          ref={firstRef}
        >
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[0].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.first ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[0].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.first ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, first: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[1].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.second ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[1].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.second ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, second: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[2].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.third ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[2].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.third ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, third: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[3].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.forth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[3].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.forth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, forth: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[4].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.fifth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[4].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.fifth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, fifth: true }))}
            />
          </div>
        </div>
        <div
          className="md:flex hidden text-black absolute bottom-0 left-[2300px] w-[2300px] h-full items-center justify-start space-x-[60px] px-[30px]"
          ref={secondRef}
        >
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[0].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.first ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[0].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.first ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, first: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[1].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.second ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[1].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.second ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, second: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[2].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.third ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[2].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.third ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, third: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[3].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.forth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[3].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.forth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, forth: true }))}
            />
          </div>
          <div className="relative aspect-square h-full">
            <Image
              src={galleryInfo[4].imgLowSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.fifth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src={galleryInfo[4].imgSrc}
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.fifth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, fifth: true }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
