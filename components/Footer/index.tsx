import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-screen bg-black p-[25px] text-white">
      <div className="h-[90%] py-[60px] flex flex-col justify-between gap-[25px]">
        <div className="inline-flex items-center gap-[15px]">
          <svg
            width="56"
            height="58"
            viewBox="0 0 56 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M27.042 1.69993C27.3267 0.748996 28.6733 0.748998 28.958 1.69993L34.8474 21.3721C34.943 21.6914 35.1914 21.9421 35.5098 22.0406L54.9128 28.0447C55.852 28.3353 55.852 29.6647 54.9128 29.9553L35.5098 35.9594C35.1914 36.0579 34.943 36.3086 34.8474 36.6279L28.958 56.3001C28.6733 57.251 27.3267 57.251 27.042 56.3001L21.1526 36.6279C21.057 36.3086 20.8086 36.0579 20.4902 35.9594L1.08721 29.9553C0.148022 29.6647 0.148022 28.3353 1.08721 28.0447L20.4902 22.0406C20.8086 21.9421 21.057 21.6914 21.1526 21.3721L27.042 1.69993Z"
              fill="#B9DAEE"
            />
          </svg>
          <h3 className="text-center">Let&apos;s bring your business online</h3>
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
        <div className="flex flex-col gap-[7px]">
          <span className="text-[#898989] ">Socials </span>
          <div className="flex gap-[15px]">
            <Link href="https://awwwards.com/bardia">Awwwards</Link>
            <Link href="https://github.com/bardiamdn">Github</Link>
            <Link href="https://twitter.com/bardiamdn">Twitter</Link>
          </div>
        </div>
      </div>
      <div className="h-[10%] border-t border-border flex md:flex-row flex-col items-start justify-center">
        <p className="">
          &copy; {new Date().getFullYear()} Bardia Madani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
