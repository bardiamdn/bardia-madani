"use client";

import CTABUtton from "@/common/CTAButton";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        <h1 className="px-[15px] mx-auto my-[40px]">Online Presence</h1>
        <div className="flex flex-col md:flex-row">
          <div className="px-[15px] flex flex-col gap-[20px] w-full">
            <h3 className="my-[25px]">Contact Info</h3>
            <div className="flex flex-col gap-[7px]">
              <span className="text-[#898989] ">Email </span>
              <a href="email:me@bardiamadani.com">me@bardiamadani.com</a>
            </div>
            <div className="flex flex-col gap-[7px]">
              <span className="text-[#898989] ">Phone </span>
              <a href="phone:+905538309678">+90 553 830 96 78</a>
            </div>
            <div className="flex flex-col gap-[7px]">
              <span className="text-[#898989] ">Location </span>{" "}
              <span>Istanbul</span>
            </div>
            <div className="flex flex-col gap-[7px]">
              <span className="text-[#898989] ">Socials </span>
              <div className="flex gap-[15px]">
                <Link href="https://awwwards.com/bardia">Awwwards</Link>
                <Link href="https://github.com/bardiamdn">Github</Link>
                <Link href="https://twitter.com/bardiamdn">Twitter</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="md:my-0 my-[50px] w-full">
            <h2 className="px-[15px] my-[50px] mx-auto">Get in Touch</h2>

            <label className="px-[15px] block mb-[15px]">
              What&apos;s your name?
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-[10px] mb-[35px] focus:outline-none border-b border-border focus:border-b focus:border-black px-[15px]"
            />

            <label className="px-[15px] block mb-[15px]">
              What&apos;s your email?
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-[10px] mb-[35px] focus:outline-none border-b border-border focus:border-b focus:border-black px-[15px]"
            />
            <label className="px-[15px] block mb-[15px]">
              What&apos;s your organization name?
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-[10px] mb-[35px] focus:outline-none border-b border-border focus:border-b focus:border-black px-[15px]"
            />
            <label className="px-[15px] block mb-[15px]">
              What service are you looking for?
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-[10px] mb-[35px] focus:outline-none border-b border-border focus:border-b focus:border-black px-[15px]"
            />

            <label className="px-[15px] block mb-[15px]">Your Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full py-[10px] mb-[35px] focus:outline-none border-b border-border focus:border-b focus:border-black px-[15px] h-32"
            ></textarea>

            <div className="px-[15px]">
              <CTABUtton
                type="submit"
                btnType="primary"
                className="w-full py-[16px]"
              >
                Send Message
              </CTABUtton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
