"use client";
import Navigate from "@/common/NavigateLink";
import LetterSlideUp from "@/common/SlideUpLetter";
import { Star } from "@/common/Star";
import ServiceBlocks from "@/components/ServiceRow";
import { usePageTransition } from "@/hooks/usePageTransition";
import { client } from "@/sanity/client";
import { ServiceBlock, ServicesPageData } from "@/types/servicespage";
import { useLoadingContext } from "@/utils/LoadingContext";
import { useEffect, useState } from "react";

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export default function Services() {
  const [servicespageData, setServicespageData] =
    useState<ServicesPageData | null>(null);
  const [services, setServices] = useState<ServiceBlock[][] | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "servicespage"][0]`);

      setServicespageData(data);

      const groupedServices = chunkArray<ServiceBlock>(data.servicesGroup, 2);
      setServices(groupedServices);
    };

    fetchData();
  }, []);

  const { loadingComplete } = useLoadingContext();

  useEffect(() => {
    if (loadingComplete) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [loadingComplete]);

  usePageTransition();

  if (!servicespageData || !services) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative bg-white flex flex-col px-[15px] py-[50px] 2xl:px-0 w-full items-center">
      <div className="relative w-full 2xl:w-[80%]">
        {/* Intro */}
        <div className="border-b border-border md:h-[500px] h-auto flex flex-col justify-center md:mb-[150px] md:mt-[100px] md:p-0 pb-[100px] mb-[100px]">
          <div className="flex items-center ">
            <Star />
            <h1 className=" my-[40px] ">
              <span className="md:block">
                <LetterSlideUp animate={startAnimation} delay={0.005}>
                  {servicespageData.heroTitle.line1}
                </LetterSlideUp>
              </span>
              <span className="md:block xl:ml-[200px] lg:ml-[100px] md:mt-[30px]">
                <LetterSlideUp animate={startAnimation} delay={0.005}>
                  {servicespageData.heroTitle.line2}
                </LetterSlideUp>
              </span>
            </h1>
          </div>
          <div className="flex justify-end">
            <p className="md:w-[250px] lg:-translate-y-[75px]">
              <LetterSlideUp animate={startAnimation} delay={0.005}>
                {servicespageData.heroDescription}
              </LetterSlideUp>
            </p>
          </div>
        </div>
        <ServiceBlocks services={services[0]} />
        <ServiceBlocks services={services[1]} />
        <div className="border-t border-border md:py-[150px] py-[100px] md:h-auto md:space-y-0 space-y-[50px] mt-[100px] flex md:flex-row flex-col justify-between items-center">
          <div className="md:w-[70%] md:space-y-[35px] flex flex-col justify-center space-y-[25px]">
            <h4>{servicespageData.processTitle}</h4>
            <p>{servicespageData.processDescription}</p>
          </div>
          <div className="w-fit flex-shrink-0 h-full">
            <Navigate href={servicespageData.processLinkUrl}>
              {servicespageData.processLinkLabel}
            </Navigate>
          </div>
        </div>
      </div>
    </section>
  );
}
