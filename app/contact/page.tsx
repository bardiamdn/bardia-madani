"use client";

// import Star from "@/common/Star";
import Form from "@/components/Form";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-white flex flex-col px-[15px] pt-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Headline */}
        <div className="h-[700px] flex flex-col justify-center mt-[100px] ">
          <div className="flex items-center ">
            {/* <Star /> */}
            <h1 className=" my-[40px] ">
              <span className="block">Have a Project in Mind? </span>
              <span className="block ml-[200px] mt-[30px]">Let’s Talk!</span>
            </h1>
          </div>
          <div className="flex justify-end">
            <p className="w-[250px] -translate-y-[75px]">
              Your website needs ongoing care to perform at its best. I provide
              regular updates, bug fixes, and performance monitoring to ensure
              smooth operation and continued success.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row justify-center">
          {/* contact info */}
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
