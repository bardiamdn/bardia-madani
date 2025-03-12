"use client";

import Form from "@/components/Form";
import { usePageTransition } from "@/hooks/usePageTransition";
import Link from "next/link";

export default function Contact() {
  usePageTransition();
  return (
    <section className=" bg-white flex flex-col py-[50px] w-full items-center">
      <div className=" w-full flex flex-col items-center ">
        {/* Headline */}
        <div className=" md:h-[500px] h-auto flex flex-col justify-center md:mt-[100px] md:mb-[200px] 2xl:w-[80%] w-full 2xl:px-0 md:px-[25px] px-[15px] mb-[100px]">
          <div className="md:border-b border-border">
            <div className="flex items-center ">
              {/* <Star /> */}
              <h1 className=" my-[40px] ">
                <span className="block">Have a Project in Mind? </span>
                <span className="block lg:ml-[200px] md:ml-[100px] mt-[30px]">
                  Let’s Talk!
                </span>
              </h1>
            </div>
            <div className="flex justify-end">
              <p className="md:w-[250px] w-full md:-translate-y-[75px] md:my-0 mb-[40px]">
                Whether you have a detailed project plan or just an idea, feel
                free to get in touch. I&apos;m here to help bring your vision to
                life.
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
  );
}
