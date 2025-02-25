import CTABUtton from "@/common/CTAButton";

export default function Tagline() {
  return (
    <div className="2xl:w-[40%] 2xl:ml-[10%] md:w-[50%] md:pl-[25px] sm:w-[90%] sm:mx-auto md:m-0 m-0 w-full px-[20px] 2xl:px-0 h-screen">
      <div className="flex flex-col items-start justify-center w-full md:h-full h-[600px] md:space-y-[50px] space-y-[35px] md:text-left text-center">
        <h1 className="xl:text-7xl sm:text-6xl text-5xl sm:font-thin font-extralight text-white ">
          Helping SMBs standout & get more leads
        </h1>
        <div className="md:w-[80%] w-full md:text-left text-center">
          <h3 className="xl:text-2xl sm:text-xl text-lg font-extralight text-gray-400 ">
            You need more than just a beautiful website, you need customers, I
            understand you.
          </h3>
        </div>
        <div className="w-full flex flex-row space-x-[20px] md:justify-start justify-center ">
          <CTABUtton btnType="primary">Start your project</CTABUtton>
          <CTABUtton className="md:inline hidden" btnType="secondary">
            Contact
          </CTABUtton>
        </div>
      </div>
    </div>
  );
}
