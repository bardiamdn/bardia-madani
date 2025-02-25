import Service from "./service";

export default function Services() {
  const services = [
    {
      serviceName: "Web Design",
      serviceDescription:
        "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
    },
    {
      serviceName: "Web Development",
      serviceDescription:
        "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
    },
    {
      serviceName: "Hosting & Maintenance",
      serviceDescription:
        "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
    },
    {
      serviceName: "SEO Optimization",
      serviceDescription:
        "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
    },
    {
      serviceName: "Campaign Management",
      serviceDescription:
        "I create visually appealing, user-friendly websites designed to capture attention and drive conversions. A well-structured design ensures visitors stay engaged and take action.",
    },
  ];

  return (
    <section className="w-full bg-white py-[30px] md:py-[100px]">
      <div className="w-full border-b-[1px] border-black px-[30px] py-[15px] 2xl:px-0">
        <h2 className="font-light text-sm 2xl:ml-[10%]">SERVICES</h2>
      </div>

      {services.map(({ serviceName, serviceDescription }, index) => (
        <Service
          key={index}
          serviceName={serviceName}
          serviceDescription={serviceDescription}
        />
      ))}
    </section>
  );
}
