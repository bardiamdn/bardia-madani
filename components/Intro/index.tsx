"use client";
import SlideUpParagraph from "@/common/SlideUpParagraph/inde";
import Navigate from "../../common/NavigateLink";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const [loaded, setLoaded] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    sixth: false,
  });
  const [entered, setEntered] = useState(false);
  const [offset, setOffset] = useState({
    y: 0,
    x: 0,
  });

  useEffect(() => {
    const animateImages = () => {
      const tl = window.gsap.timeline();

      tl.to(".first-intro-image", {
        y: offset.y,
        x: offset.x,
        duration: 1,
        ease: "easeOutQuint",
        // delay: 0.1,
      })
        .to(
          ".second-intro-image",
          {
            y: offset.y,
            x: offset.x,
            duration: 1.1,
            ease: "easeOutQuint",
            // delay: 0.17,
          },
          "-=0.8"
        )
        .to(
          ".third-intro-image",
          {
            y: offset.y,
            x: offset.x,
            duration: 1.2,
            ease: "easeOutQuint",
            // delay: 0.15,
          },
          "-=0.7"
        )
        .to(
          ".forth-intro-image",
          {
            y: offset.y,
            x: offset.x,
            duration: 1.3,
            ease: "easeOutQuint",
            // delay: 0.13,
          },
          "-=0.9"
        )
        .to(
          ".fifth-intro-image",
          {
            y: offset.y,
            x: offset.x,
            duration: 1.4,
            ease: "easeOutQuint",
            // delay: 0.16,
          },
          "-=0.8"
        )
        .to(
          ".sixth-intro-image",
          {
            y: offset.y,
            x: offset.x,
            duration: 1.5,
            ease: "easeOutQuint",
            // delay: 0.14,
          },
          "-=1"
        );
    };

    requestAnimationFrame(animateImages);
  }, [offset]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const yfactor = 0.02;
      const xfactor = 0.005;
      const offsetY = (window.innerHeight / 2 - event.clientY) * yfactor;
      const offsetX = (window.innerWidth / 2 - event.clientX) * xfactor;
      setOffset({ y: offsetY, x: offsetX });
      console.log(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (entered) {
      const tl = window.gsap.timeline();

      tl.to(".first-intro-image", {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: "easeOutQuint",
        delay: 0.1,
      })
        .to(
          ".second-intro-image",
          {
            y: -70,
            opacity: 1,
            duration: 1.05,
            ease: "easeOutQuint",
            delay: 0.17,
          },
          "-=0.8"
        )
        .to(
          ".third-intro-image",
          {
            y: -40,
            opacity: 1,
            duration: 0.94,
            ease: "easeOutQuint",
            delay: 0.15,
          },
          "-=0.7"
        )
        .to(
          ".forth-intro-image",
          {
            y: -60,
            opacity: 1,
            duration: 1.1,
            ease: "easeOutQuint",
            delay: 0.13,
          },
          "-=0.9"
        )
        .to(
          ".fifth-intro-image",
          {
            y: -45,
            opacity: 1,
            duration: 1,
            ease: "easeOutQuint",
            delay: 0.16,
          },
          "-=0.8"
        )
        .to(
          ".sixth-intro-image",
          {
            y: -55,
            opacity: 1,
            duration: 1.2,
            ease: "easeOutQuint",
            delay: 0.14,
          },
          "-=1"
        );
    }
  }, [entered]);

  return (
    <section className="relative w-full flex justify-center items-center bg-white pt-[100px] pb-[40px]">
      <div className="2xl:w-[80%] h-screen flex flex-col justify-center items-center ">
        <div className="">
          <div
            className={`first-intro-image absolute opacity-0 top-[15%] left-[17%] w-[130px] aspect-square`}
          >
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.first ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.first ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, first: true }))}
            />
          </div>
          <div
            className={`second-intro-image absolute opacity-0 top-[20%] right-[150px] w-[110px] aspect-square`}
          >
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.second ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.second ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, second: true }))}
            />
          </div>
          <div
            className={`third-intro-image absolute opacity-0 top-[45%] left-[5%] w-[64px] aspect-square`}
          >
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.third ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.third ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, third: true }))}
            />
          </div>
          <div
            className={`forth-intro-image absolute opacity-0 top-[53%] right-[7%] w-[56px] aspect-square`}
          >
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.forth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.forth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, forth: true }))}
            />
          </div>
          <div
            className={`fifth-intro-image absolute opacity-0 bottom-[18%] left-[20%] w-[90px] aspect-square`}
          >
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.fifth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.fifth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, fifth: true }))}
            />
          </div>
          <div
            className={`sixth-intro-image absolute opacity-0 bottom-[22%] right-[15%] w-[120px] aspect-square`}
          >
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.sixth ? "opacity-0 " : "opacity-100 "
              }`}
              priority
              fill
            />
            <Image
              src="/laptop-low.jpg"
              alt="half closed laptop in a dark room"
              className={`object-cover object-center ${
                loaded.sixth ? "opacity-100 " : "opacity-0 "
              }`}
              loading="lazy"
              fill
              onLoad={() => setLoaded((prev) => ({ ...prev, sixth: true }))}
            />
          </div>
        </div>
        <div className="md:w-full py-[20px] mb-[50px] flex items-center justify-center">
          <SlideUpParagraph
            setEntered={setEntered}
            className="md:text-6xl text-3xl md:leading-[76px] leading-[42px] text-center font-light text-foreground px-[20px] max-w-[1300px]"
          >
            Creating high performance websites using cutting edge technologies.
            Helping you turn your ideas into a reality and convert.
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
