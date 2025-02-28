import { useEffect, useRef } from "react";

export default function Tags({ tags }: { tags: string[] }) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!refs.current.length) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGsap = () => {
      if (window.gsap && window.ScrollTrigger) {
        refs.current.forEach((tagRef, index) => {
          if (!tagRef) return;

          window.gsap.fromTo(
            tagRef,
            {
              y: "-50px",
              opacity: 0,
            },
            {
              y: "0px",
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: tagRef,
                start: "top 70%",
                end: "top 70%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      } else {
        console.warn("GSAP not loaded in tags, retrying...");
        gsapTimeout = setTimeout(waitForGsap, 100);
      }
    };

    waitForGsap();
    return () => clearTimeout(gsapTimeout);
  }, []);

  return (
    <div className="px-[15px] space-y-[13px] overflow-hidden">
      {tags.map((tag, index) => (
        <span
          ref={(el) => {
            refs.current[index] = el;
          }}
          key={index}
          className="px-[15px] py-[5px] border-[0.5px] border-gray-400 rounded-full inline-block mr-[13px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
