"use client";
import LetterDrop from "@/common/DropDownLetter";
import LetterSlideUp from "@/common/SlideUpLetter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePageTransition } from "@/hooks/usePageTransition";
import { client } from "@/sanity/client";
import { AboutPageData } from "@/types/aboutpage";
import { useLoadingContext } from "@/utils/LoadingContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import about1Img from "@/public/about-1.jpg";
import mockComputerImg from "@/public/walletspace-mock-computer.jpg";

export default function About() {
  const [aboutpageData, setAboutpageData] = useState<AboutPageData | null>(
    null
  );
  const [startAnimation, setStartAnimation] = useState(false);
  const [titleEntered, setTitleEntered] = useState(false);
  // to avoid rerenders on each child component
  const [entered0, setEntered0] = useState(false);
  const [entered1, setEntered1] = useState(false);
  const [entered2, setEntered2] = useState(false);
  const [entered3, setEntered3] = useState(false);
  const [entered4, setEntered4] = useState(false);
  const [entered5, setEntered5] = useState(false);
  const processEnteredStates = [
    entered0,
    entered1,
    entered2,
    entered3,
    entered4,
    entered5,
  ];
  const setProcessEnteredStates = [
    setEntered0,
    setEntered1,
    setEntered2,
    setEntered3,
    setEntered4,
    setEntered5,
  ];
  const { loadingComplete } = useLoadingContext();
  const aboutImgRef = useRef(null);
  const processImgRef = useRef(null);

  useEffect(() => {
    if (loadingComplete) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [loadingComplete]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "aboutpage"][0]`);

      setAboutpageData(data);
    };

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();

        window.gsap.to(aboutImgRef.current, {
          y: "-13.04%",
          scrollTrigger: {
            trigger: aboutImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
        window.gsap.to(processImgRef.current, {
          y: "-13.04%",
          scrollTrigger: {
            trigger: processImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    fetchData();
    waitForGSAP();
    return () => clearTimeout(gsapTimeout);
  }, []);

  usePageTransition();

  if (!aboutpageData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center relative z-10">
        <div className=" w-full 2xl:w-[80%] ">
          {/* Headline */}
          <div className="relative xl:h-[500px] md:h-[300px] flex flex-col justify-center md:mt-[100px] md:mb-0 mb-[100px]">
            <div className="relative w-full h-full flex items-center">
              <h1 className="md:my-[40px] mt-[40px] text-start">
                <div className="h-[50%] md:flex w-full items-center justify-between md:absolute top-0 left-0">
                  <LetterSlideUp animate={startAnimation} delay={0.005}>
                    {aboutpageData.heroSection.headlineTop}
                  </LetterSlideUp>
                  <div className="ml-[20px] flex-grow justify-center items-center h-full lg:flex hidden">
                    <div
                      className={`relative aspect-square h-[70%] transition-all ease-in-out duration-[450ms] delay-[420ms] ${startAnimation ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                    >
                      <Image
                        src={about1Img}
                        alt="white 3d objects"
                        fill
                        placeholder="blur"
                        className="text-sm object-cover object-center "
                      />
                    </div>
                  </div>
                </div>
                <div className="z-10 relative h-[50%] md:flex w-full items-center justify-between md:absolute bottom-0 right-0 lg:ml-[200px] lg:mt-[30px]">
                  <div className="mr-[70px] relative flex-grow h-full lg:flex hidden">
                    <div
                      className={`absolute top-[45px] left-0 w-full h-[calc(100%-45px)] transition-all ease-in-out duration-500 delay-500 ${startAnimation ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                    >
                      <video
                        src="/videos/about.mp4"
                        autoPlay
                        loop
                        muted
                        className="object-center object-cover w-full h-full rounded-full"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  <LetterSlideUp animate={startAnimation} delay={0.005}>
                    {aboutpageData.heroSection.headlineBottom}
                  </LetterSlideUp>
                </div>
              </h1>
            </div>
          </div>
          <div className="lg:space-x-[50px] md:space-x-[25px] md:space-y-0 relative flex md:flex-row flex-col items-center justify-between md:py-[200px] py-[50px] md:h-[1000px] h-auto">
            <div className="md:w-[50%] md:space-y-[35px] flex flex-col justify-center h-full space-y-[25px] md:pb-0 pb-[100px]">
              <h4>{aboutpageData.introSection.title}</h4>
              <p>{aboutpageData.introSection.description}</p>
            </div>
            <div className="relative xl:w-[40%] md:w-1/2 w-full md:h-full h-[400px] overflow-hidden">
              <div
                className="w-full h-[115%] absolute top-0 left-0 bg-pink-200"
                ref={aboutImgRef}
                id="about-image"
              >
                <Image
                  src={mockComputerImg}
                  alt="computer in a gray room"
                  className={`object-cover object-center`}
                  placeholder="blur"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:border-t md:mt-0  my-[70px] border-black md:mb-[150px]">
            <div className="md:w-1/2 w-full md:mr-[50px] md:py-[50x] border-t border-border ">
              <h3
                id="process"
                className="mt-[45px] mb-[20px] text-center md:text-start"
              >
                <LetterDrop setEntered={setTitleEntered}>
                  {aboutpageData.processSection.title}
                </LetterDrop>
              </h3>
              <div
                className={`transition-all duration-300 delay-100 ease-in-out ${titleEntered ? "opacity-100" : "opacity-0"}`}
              >
                <p
                  className={`lg:w-[85%] md:w-full lg:text-[26px] md:text-[22px] text-[20px] font-geologica font-extralight `}
                >
                  {aboutpageData.processSection.description}
                </p>
              </div>
              <div className="md:h-full md:w-full md:flex contents justify-start items-center">
                <div className="relative xl:w-[50%] md:w-full md:h-[50%] h-[200px] md:my-[100px] my-[50px] overflow-hidden">
                  <div
                    className="w-full h-[115%] absolute top-0 left-0 bg-pink-200"
                    ref={processImgRef}
                    id="about-image"
                  >
                    <Image
                      src={"/stairs.png"}
                      alt="blue stairs with gray background"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full ">
              {aboutpageData.processSection.steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col space-y-[25px] md:py-[50px] py-[35px] ${
                    index < aboutpageData.processSection.steps.length - 1
                      ? "border-b-[0.5px] border-border md:border-black"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-[15px]">
                    <span
                      className={`md:text-xl text-foregroundAccent font-semibold transition-all duration-300 ease-in-out ${processEnteredStates[index] ? "opacity-100" : "opacity-0"}`}
                    >
                      {step.stepNumber}
                    </span>
                    <h4 className="">
                      <LetterDrop setEntered={setProcessEnteredStates[index]}>
                        {step.title}
                      </LetterDrop>
                    </h4>
                  </div>
                  <p
                    className={`text-[#757575] md:pl-[25px] transition-all duration-300 ease-in-out ${processEnteredStates[index] ? "opacity-100" : "opacity-0"}`}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
