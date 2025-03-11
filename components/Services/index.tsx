import Service from "./service";
import NavigateLink from "@/common/NavigateLink";

export default function Services() {
  const services = [
    {
      serviceName: "Web Design",
      serviceDescription:
        "Your website serves as the hub of your digital presence. A thoughtfully crafted design reinforces your brand identity while engaging visitors and encouraging action.",
      serviceMedia: "/videos/design.mp4",
      serviceAlt: "laptop",
      isVideo: true,
    },
    {
      serviceName: "Web Development",
      serviceDescription:
        "Custom-coded websites are built to perform seamlessly across devices. By prioritizing speed and mobile responsiveness, your site not only loads faster but also secures higher search engine rankings.",
      serviceMedia: "/videos/development.mp4",
      serviceAlt: "laptop",
      isVideo: true,
    },
    {
      serviceName: "Support & Maintenance",
      serviceDescription:
        "Reliable support keeps your website secure, up-to-date, and running at peak performance. This ensures a smooth, uninterrupted experience for your users.",
      serviceMedia: "/videos/support.mp4",
      serviceAlt: "laptop",
      isVideo: true,
    },
    {
      serviceName: "Technical SEO",
      serviceDescription:
        "A well-optimized website features a streamlined structure, rapid loading times, and improved indexing, driving higher search engine rankings and boosting organic traffic.",
      serviceMedia: "/videos/seo.mp4",
      serviceAlt: "AI generated video of search button",
      isVideo: true,
    },
  ];

  return (
    <section className="w-full bg-white py-[30px] md:py-[100px]">
      <div className="w-full border-b-[1px] border-black px-[30px] py-[15px] 2xl:px-0">
        <h2 className="font-light text-sm 2xl:ml-[10%]">SERVICES</h2>
      </div>

      {services.map(({ ...serviceInfo }, index) => (
        <Service key={index} {...serviceInfo} />
      ))}
      <div className="2xl:ml-[10%] mt-[20px] w-full flex items-center md:justify-start justify-center">
        <NavigateLink href="/services">Services</NavigateLink>
      </div>
    </section>
  );
}
