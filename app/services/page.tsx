import CTABUtton from "@/common/CTAButton";
import ServiceBlocks from "@/components/ServiceBlocks";

const services = [
  // [
  {
    title: "Web Design",
    description:
      "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
    mediaSrc: "",
  },
  {
    title: "Web Development",
    description:
      "A well-built website is the foundation of your online presence. With clean, efficient code and best practices, I develop websites that are fast, scalable, and optimized for search engines—helping you rank on Google without relying solely on ads.",
    mediaSrc: "",
  },
  // ],
  // [
  {
    title: "Search Engine Optimization",
    description:
      "I optimize your website to rank higher on Google and attract organic traffic. From technical SEO and keyword strategy to improving site structure and page speed, I ensure your site is search-engine friendly.",
    mediaSrc: "",
  },
  {
    title: "Hosting & Maintanance",
    description:
      "I offer reliable hosting solutions, ensuring your website is fast, secure, and always accessible. With regular backups, SSL certificates, and security measures, I help protect your site from threats and downtime.",
    mediaSrc: "",
  },
  // ],
];

export default function Services() {
  return (
    <section className="bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className=" w-full 2xl:w-[80%] ">
        {/* Intro */}
        <div>
          <h1 className="mx-auto my-[40px]">Services I Offer</h1>
        </div>
        {/* {services.map((service, index) => ( */}
        <ServiceBlocks services={services} />
        {/* ))} */}
        {/* <div className="border-b-[0.5px] border-border py-[40px]">
          <h2 className="my-[20px] ">Maintenance & Support</h2>
          <p className="text-foregroundLight">
            Your website needs ongoing care to perform at its best. I provide
            regular updates, bug fixes, and performance monitoring to ensure
            smooth operation and continued success.
          </p>
        </div>
        <div className="border-b-[0.5px] border-border py-[40px]">
          <h2 className="my-[20px] ">Hosting & Security</h2>
          <p className="text-foregroundLight">
            I offer reliable hosting solutions, ensuring your website is fast,
            secure, and always accessible. With regular backups, SSL
            certificates, and security measures, I help protect your site from
            threats and downtime.
          </p>
        </div>
        <div className="border-b-[0.5px] border-border py-[40px]">
          <h2 className="my-[20px] ">Search Engine Optimization</h2>
          <p className="text-foregroundLight">
            I optimize your website to rank higher on Google and attract organic
            traffic. From technical SEO and keyword strategy to improving site
            structure and page speed, I ensure your site is search-engine
            friendly.
          </p>
        </div>
        <div className="border-b-[0.5px] border-border py-[40px]">
          <h2 className="my-[20px] ">Campaign Management</h2>
          <p className="text-foregroundLight">
            I help businesses reach new customers through targeted marketing
            campaigns. Whether it’s Google Ads, social media, or email
            marketing, I create and manage campaigns that drive traffic and
            increase conversions.
          </p>
        </div>
        <div className="py-[40px]">
          <h2 className="my-[20px] ">Full Service</h2>
          <p className="text-foregroundLight">
            I help businesses reach new customers through targeted marketing
            campaigns. Whether it’s Google Ads, social media, or email
            marketing, I create and manage campaigns that drive traffic and
            increase conversions.
          </p>
        </div> */}
        <div className="py-[60px] flex flex-col gap-[25px]">
          <h4>Not sure what you need?</h4>
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
            <h3>Consult for FREE</h3>
          </div>
          <CTABUtton btnType="primary">Connect Now</CTABUtton>
        </div>
      </div>
    </section>
  );
}
