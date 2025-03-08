"use client";
// import CTABUtton from "@/common/CTAButton";
import Star from "@/common/Star";
import TransitionLink from "@/common/TransitionLink";
import ServiceBlocks from "@/components/ServiceRow";

const services = [
  [
    {
      title: "Web Design",
      description:
        "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
      mediaSrc: "/design.avif",
      isVideo: false,
    },
    {
      title: "Web Development",
      description:
        // "A well-built website is the foundation of your online presence. With clean, efficient code and best practices, I develop websites that are fast, scalable, and optimized for search engines—helping you rank on Google without relying solely on ads.",
        "I develop websites using React, Next JS or plain javascript. The goal is always the same, to make sure it works seamlesly on all devices and load times are fast.",
      mediaSrc: "/development.avif",
      isVideo: false,
    },
  ],
  [
    {
      title: "Technical SEO",
      description:
        "I optimize your website to rank higher on Google and attract organic traffic. From technical SEO and keyword strategy to improving site structure and page speed, I ensure your site is search-engine friendly.",
      mediaSrc: "/videos/technical-seo.mp4",
      isVideo: true,
    },
    {
      title: "Maintanance & Support",
      description:
        "I offer reliable hosting solutions, ensuring your website is fast, secure, and always accessible. With regular backups, SSL certificates, and security measures, I help protect your site from threats and downtime.",
      mediaSrc: "/videos/support.mp4",
      isVideo: true,
    },
  ],
];

export default function Services() {
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Intro */}
        <div className="h-[700px] flex flex-col justify-center mt-[100px] ">
          <div className="flex items-center ">
            <Star />
            <h1 className=" my-[40px] ">
              <span className="block">What I can </span>
              <span className="block ml-[200px] mt-[30px]">do for you</span>
            </h1>
          </div>
          <div className="flex justify-end">
            <p className="w-[250px] -translate-y-[75px]">
              Making sure your website is beautifully crafted while compliying
              with SEO best practices.
            </p>
          </div>
        </div>
        <ServiceBlocks services={services[0]} />
        <ServiceBlocks services={services[1]} />
        <div>
          <p>To see the process you can visit about.</p>
          <TransitionLink href="/about">About</TransitionLink>
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
