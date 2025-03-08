import Link from "next/link";
import TransitionLink from "../TransitionLink";

export default function Navigate({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <TransitionLink
      href={href}
      className="inline-flex items-center group transition-all duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] 2xl:px-0 py-[20px] px-[15px] "
    >
      <div className="relative w-[70px] h-[70px] mr-[20px]">
        <svg
          className="absolute inset-0 animate-[spin_18s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeDasharray="10 5"
            strokeDashoffset="0"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-black w-[15px] h-[15px] group-hover:w-full group-hover:h-full transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)]"></div>
        <svg
          width="29"
          height="12"
          viewBox="0 0 29 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-full opacity-0 transition-all group-hover:delay-300 duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] group-hover:opacity-100 group-hover:-translate-x-1/2"
        >
          <path
            d="M19.0889 0.599915C19.5498 2.97706 20.4716 5.65134 27.9998 5.65134"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M19.0889 10.9999C19.5498 8.6228 20.4716 5.94851 27.9998 5.94851"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M27.8463 5.79993H0.959961"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="font-light text-foreground text-2xl translate-x-0 transition-all group-hover:delay-300 duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] group-hover:translate-x-[10px]">
        {children}
      </span>
    </TransitionLink>
  );
}
