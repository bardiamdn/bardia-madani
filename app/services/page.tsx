"use client";
import Navigate from "@/common/NavigateLink";
import Star from "@/common/Star";
import ServiceBlocks from "@/components/ServiceRow";
import { usePageTransition } from "@/hooks/usePageTransition";

const services = [
  [
    {
      title: "Web Design",
      description:
        "I create visually appealing, user-friendly websites that capture attention by incorporating motion and interactive elements.",
      mediaSrc: "/laptop-design.jpg",
      isVideo: false,
    },
    {
      title: "Web Development",
      description:
        "I develop websites using React, Next.js, or plain JavaScript, always ensuring seamless experience across all devices and fast load times.",
      mediaSrc: "/laptop-development.jpg",
      isVideo: false,
    },
  ],
  [
    {
      title: "Technical SEO",
      description:
        "I optimize websites to rank higher on search engines and attract organic traffic by implementing technical SEO practices, such as improving site structure and page speed.",
      mediaSrc: "/videos/technical-seo.mp4",
      isVideo: true,
    },
    {
      title: "Maintenance & Support",
      description:
        "I provide 24/7 support to keep your website fast, secure, and always available. Protecting your site from threats and minimize downtime.",
      mediaSrc: "/videos/support.mp4",
      isVideo: true,
    },
  ],
];

export default function Services() {
  usePageTransition();
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Intro */}
        <div className="border-b border-border md:h-[500px] h-auto flex flex-col justify-center md:mb-[150px] md:mt-[100px] md:p-0 pb-[100px] mb-[100px]">
          <div className="flex items-center ">
            <Star />
            <h1 className=" my-[40px] ">
              <span className="md:block">What I can </span>
              <span className="md:block md:ml-[200px] md:mt-[30px]">
                do for you
              </span>
            </h1>
          </div>
          <div className="flex justify-end">
            <p className="md:w-[250px] md:-translate-y-[75px]">
              Ensuring your website is beautifully crafted, well-built, and
              compliant with SEO best practices.
            </p>
          </div>
        </div>
        <ServiceBlocks services={services[0]} />
        <ServiceBlocks services={services[1]} />
        <div className="border-t border-border md:py-[150px] py-[100px] md:h-auto md:space-y-0 space-y-[50px] mt-[100px] flex md:flex-row flex-col justify-between items-center">
          <div className="md:w-[800px]">
            <p>
              Combining design, development, and SEO gives me a unique
              opportunity to see through the entire project lifecycle. If
              you&apos;re interested in a comprehensive service, please visit my
              About page to review the full process.
            </p>
          </div>
          <div className="md:w-[20%]">
            <Navigate href="/about/#process">The Process</Navigate>
          </div>
        </div>
        {/* <div className="py-[200px] flex flex-col gap-[25px]">
          <h4>
            Feel free to reach out for any question, reccomendation, or to just
            say hi
          </h4>
          <h4>I would be happy to hear from you</h4>
          <div className="inline-flex items-center gap-[15px]">
            <svg
              width="56"
              height="58"
              viewBox="0 0 56 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.042 1.69993C27.3267 0.748996 28.6733 0.748998 28.958 1.69993L34.8474 21.3721C34.943 21.6914 35.1914 21.9421 35.5098 22.0406L54.9128 28.0447C55.852 28.3353 55.852 29.6647 54.9128 29.9553L35.5098 35.9594C35.1914 36.0579 34.943 36.3086 34.8474 36.6279L28.958 56.3001C28.6733 57.251 27.3267 57.251 27.042 56.3001L21.1526 36.6279C21.057 36.3086 20.8086 36.0579 20.4902 35.9594L1.08721 29.9553C0.148022 29.6647 0.148022 28.3353 1.08721 28.0447L20.4902 22.0406C20.8086 21.9421 21.057 21.6914 21.1526 21.3721L27.042 1.69993Z"
                fill="#B9DAEE"
              />
            </svg>
            <h3>Reach out</h3>
          </div>
          <CTABUtton className="text-foreground" btnType="secondary">
            Connect Now
          </CTABUtton>
        </div> */}
      </div>
    </section>
  );
}
