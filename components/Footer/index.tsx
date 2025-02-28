import Star from "@/common/Star";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-screen bg-black text-white flex justify-center">
      <div className="2xl:w-[80%] 2xl:px-0 w-full h-full p-[25px]">
        <div className="h-[90%] py-[60px] flex flex-col justify-between gap-[25px]">
          <div className="inline-flex items-center gap-[15px]">
            <Star />
            <h3 className="text-center">
              Let&apos;s bring your business online
            </h3>
          </div>
          <Link
            href="/contact"
            className="bg-primary py-[20px] text-xl text-black font-normal rounded-full flex items-center justify-center"
          >
            Start your project
          </Link>
          <div className="flex flex-col gap-[25px] text-xl font-thin">
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
        <div className="h-[10%] border-t border-border flex md:flex-row flex-col items-center justify-between">
          <div className="flex flex-col">
            <h5 className="mb-[8px]">Time</h5>
            <p className="">
              {new Date().toLocaleString("en-GB", {
                timeZone: "Europe/Istanbul",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}{" "}
              GMT+3
            </p>
          </div>

          <p className="">&copy; {new Date().getFullYear()} Bardia Madani</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
