"use client";
import LetterDrop from "@/common/DropDownLetter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Tags from "./Tags";
import { Work as WorkType } from "@/types/homepage";

export default function Work({ works }: { works: WorkType[] }) {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    if (!firstRef.current) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        if (!firstRef.current) return;

        window.gsap.fromTo(
          firstRef.current,
          {
            y: "50px",
            opacity: 0.5,
          },
          {
            y: "0px",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: firstRef.current,
              start: "top 90%",
              end: "top 90%",
              // markers: true,
              toggleActions: "play none none none",
            },
          }
        );
        window.gsap.fromTo(
          secondRef.current,
          {
            y: "50px",
            opacity: 0.5,
          },
          {
            y: "0px",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            // delay: 0.35,
            scrollTrigger: {
              trigger: secondRef.current,
              start: "top 90%",
              end: "top 90%",
              // markers: true,
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    waitForGSAP();
    return () => clearTimeout(gsapTimeout);
  }, []);

  return (
    <section className="w-full bg-white py-[200px]">
      <div className="w-full py-[15px] px-[30px] 2xl:px-[10%]">
        <h2 className="font-light text-sm">WORK</h2>
      </div>
      <div className="md:flex flex-row contents px-[30px] 2xl:px-[10%]">
        <div
          className="w-full space-y-[20px] mb-[50px] mr-[50px]"
          ref={firstRef}
        >
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/ozkan-screen.png"
              alt="ozkan engineering website screenshot "
              fill
              className="w-full h-full absolute inset-0 object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between px-[15px]">
            <h3 className="font-extralight text-3xl text-foreground">
              <LetterDrop>{works[0].title}</LetterDrop>
            </h3>
            <Link href="https://ozkanmuhendislik.com.tr" target="_blank">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11.4L21.2 3.19995"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.0002 7.1999V2.3999H17.2002"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 2.3999H9C4 2.3999 2 4.3999 2 9.3999V15.3999C2 20.3999 4 22.3999 9 22.3999H15C20 22.3999 22 20.3999 22 15.3999V13.3999"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <Tags tags={works[0].services} />
        </div>
        <div className="w-full space-y-[20px] mb-[50px]" ref={secondRef}>
          <div className="relative w-full aspect-square">
            <Image
              src="/walletspace-screen.png"
              alt="walletspace website screenshot "
              fill
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between px-[15px]">
            <h3 className="font-extralight text-3xl text-foreground">
              <LetterDrop>{works[1].title}</LetterDrop>
            </h3>
            <Link href="https://wallet-space.com" target="_blank">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11.4L21.2 3.19995"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.0002 7.1999V2.3999H17.2002"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 2.3999H9C4 2.3999 2 4.3999 2 9.3999V15.3999C2 20.3999 4 22.3999 9 22.3999H15C20 22.3999 22 20.3999 22 15.3999V13.3999"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <Tags tags={works[0].services} />
        </div>
      </div>
    </section>
  );
}
