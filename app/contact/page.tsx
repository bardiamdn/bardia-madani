"use client";

import LetterSlideUp from "@/common/SlideUpLetter";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import { usePageTransition } from "@/hooks/usePageTransition";
import { client } from "@/sanity/client";
import { ContactPageData } from "@/types/contactpage";
import { useLoadingContext } from "@/utils/LoadingContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contact() {
  const [contactpageData, setContactpageData] =
    useState<ContactPageData | null>(null);
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "contactpage"][0]`);
      setContactpageData(data);
    };

    fetchData();
  }, []);

  usePageTransition();

  if (!contactpageData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <section className=" bg-white flex flex-col py-[50px] w-full items-center relative z-10">
        <div className=" w-full flex flex-col items-center ">
          {/* Headline */}
          <div className=" md:h-[500px] h-auto flex flex-col justify-center md:mt-[100px] md:mb-[200px] 2xl:w-[80%] w-full 2xl:px-0 md:px-[25px] px-[15px] mb-[100px]">
            <div className="md:border-b border-border">
              <div className="flex items-center ">
                {/* <Star /> */}
                <h1 className=" my-[40px] ">
                  <LetterSlideUp animate={startAnimation} delay={0.0065}>
                    {contactpageData.heroSection.headlineTop}
                  </LetterSlideUp>
                  <span className="block lg:ml-[200px] md:ml-[100px] mt-[30px]">
                    <LetterSlideUp animate={startAnimation} delay={0.0065}>
                      {contactpageData.heroSection.headlineBottom}
                    </LetterSlideUp>
                  </span>
                </h1>
              </div>
              <div className="flex justify-end">
                <p
                  className={`md:w-[250px] w-full md:-translate-y-[75px] md:my-0 mb-[40px] transition-all duration-500 delay-300 ease-in-out ${startAnimation ? "opacity-100" : "opacity-0"}`}
                >
                  {contactpageData.heroSection.description}
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-col md:flex-row justify-center">
            {/* contact info */}
            <div className="md:sticky md:top-[25vh] md:self-start 2xl:w-[40%] 2xl:ml-[10%] md:w-1/2 w-full md:px-[25px] px-[15px] flex flex-col md:mb-0 mb-[100px]">
              <h2 className="mb-[50px]">Contact Info</h2>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#898989] mb-[7px]">Email </span>
                <a href="email:me@bardiamadani.com">me@bardiamadani.com</a>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#898989] mb-[7px]">Phone </span>
                <a href="phone:+905538309678">+90 553 830 96 78</a>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#898989] mb-[7px]">Location </span>
                <span>Istanbul</span>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#898989] mb-[7px]">Socials </span>
                <div className="flex gap-[15px]">
                  <Link href="https://awwwards.com/bardia">Awwwards</Link>
                  <Link href="https://github.com/bardiamdn">Github</Link>
                  <Link href="https://twitter.com/bardiamdn">Twitter</Link>
                </div>
              </div>
            </div>

            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
