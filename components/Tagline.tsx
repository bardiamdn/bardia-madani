import CTABUtton from "@/common/CTAButton";

export default function Tagline() {
  return (
    <div className="w-[40%] ml-[10%] h-screen">
      <div className="flex flex-col items-start justify-center w-full h-full space-y-[50px]">
        <h1 className="text-7xl font-thin text-white">
          Helping SMBs standout & get more leads
        </h1>
        <div className="w-[80%]">
          <h3 className="text-2xl font-extralight text-gray-400">
            You need more than just a beautiful website, you need customers, I
            understand you.
          </h3>
        </div>
        <div className="flex flex-row space-x-[20px]">
          <CTABUtton type="primary">Start your project</CTABUtton>
          <CTABUtton type="secondary">Contact</CTABUtton>
        </div>
      </div>
    </div>
  );
}
