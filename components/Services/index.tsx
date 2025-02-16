import Service from "./service";

export default function Services() {
  return (
    <section className="w-full bg-white py-[30px]">
      <div className="w-full border-b-[1px] border-black px-[25px] py-[15px]">
        <h2 className="font-light text-sm">SERVICES</h2>
      </div>
      <Service serviceName="Web Design" />
      <Service serviceName="Web Development" />
      <Service serviceName="Hosting & Maintenance" />
      <Service serviceName="SEO Optimization" />
      <Service serviceName="Campaign Management" />
    </section>
  );
}
