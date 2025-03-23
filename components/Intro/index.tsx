"use client";
import SlideUpParagraph from "@/common/SlideUpParagraph";
import Navigate from "../../common/NavigateLink";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export default function Intro({ intro }: { intro: string }) {
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
  const timelineRef = useRef<Window["gsap"] | null>(null);

  const animateImages = (offset: { x: number; y: number }) => {
    const tl = window.gsap.timeline();

    tl.to(".first-intro-image", {
      y: offset.y,
      x: offset.x,
      ease: "easeOutQuint",
    })
      .to(".second-intro-image", {
        y: offset.y,
        x: offset.x,
        stagger: 0.5,
        ease: "easeOutQuint",
      })
      .to(".third-intro-image", {
        y: offset.y,
        x: offset.x,
        stagger: 0.5,
        ease: "easeOutQuint",
      })
      .to(".forth-intro-image", {
        y: offset.y,
        x: offset.x,
        stagger: 0.5,
        ease: "easeOutQuint",
      })
      .to(".fifth-intro-image", {
        y: offset.y,
        x: offset.x,
        stagger: 0.5,
        ease: "easeOutQuint",
      })
      .to(".sixth-intro-image", {
        y: offset.y,
        x: offset.x,
        stagger: 0.5,
        ease: "easeOutQuint",
      });

    return tl;
  };

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const yfactor = 0.02;
      const xfactor = 0.005;
      const offsetY = (window.innerHeight / 2 - event.clientY) * yfactor;
      const offsetX = (window.innerWidth / 2 - event.clientX) * xfactor;

      timelineRef.current = animateImages({ x: offsetX, y: offsetY });
    };

    const animations: Window["gsap"] = [];

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        const firstAnim = window.gsap.to(".first-intro-image", {
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
        animations.push(firstAnim);

        const secondAnim = window.gsap.to(".second-intro-image", {
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
        animations.push(secondAnim);

        const thirdAnim = window.gsap.to(".third-intro-image", {
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
        animations.push(thirdAnim);

        const forthAnim = window.gsap.to(".forth-intro-image", {
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
        animations.push(forthAnim);

        const fifthAnim = window.gsap.to(".fifth-intro-image", {
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
        animations.push(fifthAnim);

        const sixthAnim = window.gsap.to(".sixth-intro-image", {
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
        animations.push(sixthAnim);

        const enterAnim = window.gsap.to(stickyRef.current, {
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "0 center",
            end: "0 10%",
            scrub: true,
          },
        });
        animations.push(enterAnim);

        const exitAnim = window.gsap.fromTo(
          stickyRef.current,
          { top: "25vh" },
          {
            top: "calc(25vh - 150px)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "100% 100%",
              end: "100% 50%",
              scrub: true,
            },
          }
        );
        animations.push(exitAnim);
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    waitForGSAP();

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(gsapTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      animations.forEach((animation: Window["gsap"]) => animation.kill());
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  return (
    <section
      className="relative w-full flex justify-center items-center bg-white pt-[100px] pb-[40px]"
      ref={containerRef}
    >
      <div className="2xl:w-[80%] md:h-[230vh] h-[200vh] flex flex-col items-center ">
        <div
          className={`first-intro-image absolute opacity-0 md:top-[20%] top-[33%] md:left-[17%] left-[5%] md:w-[250px] w-[40%] aspect-square`}
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
          className={`second-intro-image absolute opacity-0 md:top-[23%] top-[30%] md:right-[12%] right-[7%] md:w-[230px] w-[35%] aspect-square`}
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
          className={`third-intro-image absolute opacity-0 top-[45%] md:left-[18%] left-[10%] md:w-[240px] w-[40%] aspect-square`}
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
            src="/intro-3.png"
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
          className={`forth-intro-image absolute opacity-0 top-[45%] md:right-[13%] right-[8%] md:w-[250px] w-[35%] aspect-square`}
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
            src="/intro-4.png"
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
          className={`fifth-intro-image absolute opacity-0 md:bottom-[18%] bottom-[33%] md:left-[20%] left-[15%] md:w-[270px] w-[40%] aspect-square`}
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
            src="/intro-5.png"
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
          className={`sixth-intro-image absolute opacity-0 md:bottom-[22%] bottom-[25%] md:right-[15%] right-[3%] md:h-[240px] h-auto w-[30%] aspect-square`}
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
            src="/intro-6.jpg"
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
          className="sticky h-[50vh] top-[calc(25vh+150px)] flex flex-col items-center justify-center translate-y-[150px]"
          ref={stickyRef}
        >
          <div className=" md:w-full md:py-[20px] mb-[50px] ">
            <SlideUpParagraph
              // setEntered={setEntered}
              className="md:text-6xl text-3xl md:leading-[76px] leading-[42px] text-center font-light text-foreground md:px-[25px] px-[15px] max-w-[1300px]"
            >
              {/* Creating high performance websites with cutting edge technologies
              to transform your ideas into reality, integrating dynamic motion
              and interactive elements. */}
              {intro}
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
