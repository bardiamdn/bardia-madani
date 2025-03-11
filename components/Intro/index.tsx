"use client";
import SlideUpParagraph from "@/common/SlideUpParagraph/inde";
import Navigate from "../../common/NavigateLink";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const [loaded, setLoaded] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    sixth: false,
  });
  // const [entered, setEntered] = useState(false);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  const animateImages = (offset: { x: number; y: number }) => {
    const tl = window.gsap.timeline();

    tl.to(".first-intro-image", {
      y: offset.y,
      x: offset.x,
      // stagger: 0.9,
      ease: "easeOutQuint",
    })
      .to(
        ".second-intro-image",
        {
          y: offset.y,
          x: offset.x,
          // stagger: 1.1,
          ease: "easeOutQuint",
        },
        "-=0.3"
      )
      .to(
        ".third-intro-image",
        {
          y: offset.y,
          x: offset.x,
          // stagger: 1.3,
          ease: "easeOutQuint",
        },
        "-=0.2"
      )
      .to(
        ".forth-intro-image",
        {
          y: offset.y,
          x: offset.x,
          // stagger: 1.5,
          ease: "easeOutQuint",
        },
        "-=0.1"
      )
      .to(
        ".fifth-intro-image",
        {
          y: offset.y,
          x: offset.x,
          // stagger: 1.7,
          ease: "easeOutQuint",
        },
        "-=0.3"
      )
      .to(
        ".sixth-intro-image",
        {
          y: offset.y,
          x: offset.x,
          // stagger: 1.9,
          ease: "easeOutQuint",
        },
        "-=0.1"
      );
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const yfactor = 0.02;
      const xfactor = 0.005;
      const offsetY = (window.innerHeight / 2 - event.clientY) * yfactor;
      const offsetX = (window.innerWidth / 2 - event.clientX) * xfactor;
      animateImages({ x: offsetX, y: offsetY });
    };

    window.gsap.to(".first-intro-image", {
      scrollTrigger: {
        trigger: ".first-intro-image",
        start: "-100% bottom",
        end: "top 90%",
        scrub: 0.3,
      },
      top: "-=150px",
      opacity: 1,
      ease: "power2.easeOut",
    });

    window.gsap.to(".second-intro-image", {
      scrollTrigger: {
        trigger: ".second-intro-image",
        start: "-100% bottom",
        end: "top 90%",
        scrub: 0.3,
      },
      top: "-=170px",
      opacity: 1,
      ease: "power2.easeOut",
    });

    window.gsap.to(".third-intro-image", {
      scrollTrigger: {
        trigger: ".third-intro-image",
        start: "-100% bottom",
        end: "top 90%",
        scrub: 0.3,
      },
      top: "-=140px",
      opacity: 1,
      ease: "power2.easeOut",
    });

    window.gsap.to(".forth-intro-image", {
      scrollTrigger: {
        trigger: ".forth-intro-image",
        start: "-100% bottom",
        end: "top 90%",
        scrub: 0.3,
      },
      top: "-=160px",
      opacity: 1,
      ease: "power2.easeOut",
    });

    window.gsap.to(".fifth-intro-image", {
      scrollTrigger: {
        trigger: ".fifth-intro-image",
        start: "-100% bottom",
        end: "top 90%",
        scrub: 0.3,
      },
      top: "-=145px",
      opacity: 1,
      ease: "power2.easeOut",
    });

    window.gsap.to(".sixth-intro-image", {
      scrollTrigger: {
        trigger: ".sixth-intro-image",
        start: "-100% bottom",
        end: "top 90%",
        scrub: 0.3,
      },
      top: "-=155px",
      opacity: 1,
      ease: "power2.easeOut",
    });

    window.gsap.fromTo(
      stickyRef.current,
      { y: 150 },
      {
        y: 0,
        // ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "5% center",
          end: "5% 20%",
          scrub: true,
        },
      }
    );
    window.gsap.fromTo(
      stickyRef.current,
      {
        top: "25vh",
      },
      {
        top: "calc(25vh - 150px)",
        // y: -100,
        // ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "95% bottom",
          end: "95% 60%",
          scrub: true,
        },
      }
    );

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full flex justify-center items-center bg-white pt-[100px] pb-[40px]"
      ref={containerRef}
    >
      <div className="2xl:w-[80%] md:h-[230vh] h-[200vh] flex flex-col items-center ">
        <div
          className={`first-intro-image absolute opacity-0 md:top-[20%] top-[33%] left-[17%] md:w-[250px] w-[100px] aspect-square`}
        >
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.first ? "opacity-0 " : "opacity-100 "
            }`}
            priority
            fill
          />
          <Image
            src="/gallery-5.png"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.first ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded((prev) => ({ ...prev, first: true }))}
          />
        </div>
        <div
          className={`second-intro-image absolute opacity-0 md:top-[23%] top-[30%] right-[12%] md:w-[200px] w-[90px] aspect-square`}
        >
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.second ? "opacity-0 " : "opacity-100 "
            }`}
            priority
            fill
          />
          <Image
            src="/intro-2.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.second ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded((prev) => ({ ...prev, second: true }))}
          />
        </div>
        <div
          className={`third-intro-image absolute opacity-0 top-[45%] left-[18%] md:w-[220px] w-[64px] aspect-square`}
        >
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.third ? "opacity-0 " : "opacity-100 "
            }`}
            priority
            fill
          />
          <Image
            src="/intro-3.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.third ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded((prev) => ({ ...prev, third: true }))}
          />
        </div>
        <div
          className={`forth-intro-image absolute opacity-0 top-[53%] right-[13%] md:w-[210px] w-[56px] aspect-square`}
        >
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.forth ? "opacity-0 " : "opacity-100 "
            }`}
            priority
            fill
          />
          <Image
            src="/intro-4.avif"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.forth ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded((prev) => ({ ...prev, forth: true }))}
          />
        </div>
        <div
          className={`fifth-intro-image absolute opacity-0 md:bottom-[18%] bottom-[35%] left-[20%] md:w-[200px] w-[90px] aspect-square`}
        >
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.fifth ? "opacity-0 " : "opacity-100 "
            }`}
            priority
            fill
          />
          <Image
            src="/gallery-4.png"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.fifth ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded((prev) => ({ ...prev, fifth: true }))}
          />
        </div>
        <div
          className={`sixth-intro-image absolute opacity-0 md:bottom-[22%] bottom-[32%] right-[15%] md:w-[240px] w-[120px] aspect-square`}
        >
          <Image
            src="/laptop-low.jpg"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.sixth ? "opacity-0 " : "opacity-100 "
            }`}
            priority
            fill
          />
          <Image
            src="/gallery-3.png"
            alt="half closed laptop in a dark room"
            className={`object-contain  ${
              loaded.sixth ? "opacity-100 " : "opacity-0 "
            }`}
            loading="lazy"
            fill
            onLoad={() => setLoaded((prev) => ({ ...prev, sixth: true }))}
          />
        </div>
        <div
          className="sticky h-[50vh] top-[calc(25vh+150px)] flex flex-col items-center justify-center"
          ref={stickyRef}
        >
          <div className=" md:w-full md:py-[20px] mb-[50px] ">
            <SlideUpParagraph
              // setEntered={setEntered}
              className="md:text-6xl text-3xl md:leading-[76px] leading-[42px] text-center font-light text-foreground md:px-[25px] px-[15px] max-w-[1300px]"
            >
              Creating high performance websites with cutting edge technologies
              to transform your ideas into reality, integrating dynamic motion
              and interactive elements.
            </SlideUpParagraph>
          </div>
          <div>
            <Navigate href="/about">Go to About</Navigate>
          </div>
        </div>
      </div>
    </section>
  );
}
