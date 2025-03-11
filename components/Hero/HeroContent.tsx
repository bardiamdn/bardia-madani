"use client";
import CTABUtton from "@/common/CTAButton";

export default function heroContent() {
  return (
    <div className="2xl:w-[50%] 2xl:pl-[10%] md:w-[50%] md:pl-[25px] sm:w-[90%] sm:mx-auto md:m-0 m-0 w-full px-[20px] 2xl:px-0 h-screen">
      <div className="flex flex-col items-start justify-center w-full md:h-full h-[600px] md:space-y-[50px] space-y-[35px] md:text-left text-center">
        <h1 className="xl:text-8xl sm:text-6xl text-5xl sm:font-thin font-extralight text-white ">
          Standout & Get More Leads
        </h1>
        <div className="md:w-[80%] w-full md:text-left text-center">
          <p className="xl:text-2xl sm:text-xl text-lg font-extralight text-gray-400 ">
            A web designer and developer based in Istanbul, helping businesses
            grow in the digital world.
          </p>
        </div>
        <div className="w-full flex flex-row space-x-[20px] md:justify-start justify-center ">
          <CTABUtton btnType="primary" className="text-3xl">
            Start your project
          </CTABUtton>
        </div>
      </div>
    </div>
  );
}
