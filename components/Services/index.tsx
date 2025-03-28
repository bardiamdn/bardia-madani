import { Service as ServiceType } from "@/types/homepage";
import Service from "./service";
import NavigateLink from "@/common/NavigateLink";

export default function Services({ services }: { services: ServiceType[] }) {
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
