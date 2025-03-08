import CTABUtton from "@/common/CTAButton";
import Star from "@/common/Star";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-screen bg-black text-white flex justify-center">
      <div className="2xl:w-[80%] 2xl:px-0 w-full h-full p-[25px]">
        <div className="h-[90%] flex flex-col justify-between gap-[25px]">
          <div className="flex lg:flex-row flex-col justify-between lg:h-auto h-full py-[30px]">
            <div className="inline-flex items-center gap-[15px]">
              <Star />
              <h3 className="lg:text-start text-center">
                <span className="block">Let&apos;s build something</span>
                <span className="block ml-[100px] mt-[30px]">
                  great together
                </span>
              </h3>
            </div>
            <CTABUtton
              // href="/contact"
              btnType="secondary"
              // className="py-[20px] text-xl text-black font-normal rounded-full flex items-center justify-center"
            >
              Start your project
            </CTABUtton>
          </div>
          {/* <div className="flex flex-col gap-[25px] text-xl font-thin">
            <Link
              href="tel:+905538306978"
              className="py-[20px] w-full border border-border rounded-full flex items-center justify-center"
            >
              +90 553 830 96 78
            </Link>
            <Link
              href="mailto:me@bardiamadani.com"
              className="py-[20px] w-full border border-border rounded-full flex items-center justify-center"
            >
              me@bardiamadani.com
            </Link>
          </div> */}
          <div className="flex md:flex-row flex-col justify-between  py-[20px]">
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:mr-[40px] md:mb-0 mb-[20px]">
                <h5 className="mb-[8px]">Email </h5>
                <div className="flex gap-[15px]">
                  <Link href="mailto:me@bardiamadani.com">
                    me@bardiamadani.com
                  </Link>
                </div>
              </div>
              <div className="flex flex-col  md:mb-0 mb-[20px]">
                <h5 className="mb-[8px]">Phone </h5>
                <div className="flex gap-[15px]">
                  <Link href="tel:+905538306978">+90 553 830 96 78</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h5 className="mb-[8px]">Socials </h5>
              <div className="flex gap-[15px]">
                <Link href="https://awwwards.com/bardia">Awwwards</Link>
                <Link href="https://github.com/bardiamdn">Github</Link>
                <Link href="https://twitter.com/bardiamdn">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[10%] border-t border-border flex items-center justify-between">
          <div className="flex flex-col">
            <h5 className="mb-[8px]">Local Time</h5>
            <span className="">
              {new Date().toLocaleString("en-GB", {
                timeZone: "Europe/Istanbul",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}{" "}
              GMT+3
            </span>
          </div>

          <span className="">
            &copy; {new Date().getFullYear()} Bardia Madani
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
