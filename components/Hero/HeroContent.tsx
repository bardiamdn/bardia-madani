"use client";
import CTABUtton from "@/common/CTAButton";
import LetterSlideUp from "@/common/SlideUpLetter";
import { useLoadingContext } from "@/utils/LoadingContext";
import { useEffect, useState } from "react";

export default function HeroContent({
  tagline,
  supportingText,
  cta,
}: {
  tagline: string;
  supportingText: string;
  cta: string;
}) {
  const [startAnimation, setStartAnimation] = useState(false);
  const { loadingComplete } = useLoadingContext();

  useEffect(() => {
    if (loadingComplete) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [loadingComplete]);

  return (
    <div
      id="hero-content"
      className="2xl:w-[50%] 2xl:pl-[10%] md:w-[50%] md:pl-[25px] sm:w-[90%] sm:mx-auto md:m-0 m-0 w-full px-[20px] 2xl:px-0 h-screen"
    >
      <div className="flex flex-col items-start justify-center w-full md:h-full h-[600px] md:space-y-[50px] space-y-[35px] md:text-left text-center">
        <h1 className="xl:text-8xl sm:text-6xl text-5xl sm:font-thin font-extralight text-white ">
          <LetterSlideUp animate={startAnimation} delay={0.011}>
            {tagline}
          </LetterSlideUp>
        </h1>
        <div className="md:w-[80%] w-full md:text-left text-center">
          <p className="xl:text-2xl sm:text-xl text-lg font-extralight text-gray-400 ">
            <LetterSlideUp animate={startAnimation} delay={0.004}>
              {supportingText}
            </LetterSlideUp>
          </p>
        </div>
        <div
          className={`w-full flex flex-row space-x-[20px] md:justify-start justify-center ${startAnimation ? "opacity-100" : "opacity-0"} transition-opacity duration-500 delay-500 ease-in`}
        >
          <CTABUtton btnType="primary" className="text-3xl">
            {cta}
          </CTABUtton>
        </div>
      </div>
    </div>
  );
}
