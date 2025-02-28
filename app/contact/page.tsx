"use client";

import Form from "@/components/Form";
import Link from "next/link";

export default function Contact() {
  return (
    <section className=" bg-white flex flex-col py-[50px] w-full items-center">
      <div className=" w-full ">
        {/* Headline */}
        <div className="h-[50vh] 2xl:mx-[10%] flex items-center">
          <h1 className="px-[15px] mx-auto my-[40px]">Online Presence</h1>
        </div>
        <div className="relative flex flex-col md:flex-row justify-center">
          <div className="md:sticky md:top-[25vh] md:self-start 2xl:w-[40%] 2xl:ml-[10%] md:w-1/2 w-full md:px-[25px] px-[15px] flex flex-col">
            <h3 className="mb-[50px]">Contact Info</h3>
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
