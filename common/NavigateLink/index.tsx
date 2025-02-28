import Link from "next/link";

export default function Navigate({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center group transition-all duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] 2xl:px-0 py-[20px] px-[15px] "
    >
      <svg
        width="33"
        height="31.5"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[10px] animate-[spin_18s_linear_infinite] transition-all duration-150 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:opacity-0 opacity-100"
      >
        <path
          d="M10.1306 1.10443C10.3681 0.213632 11.6322 0.213629 11.8698 1.10442L12.6767 4.13008C12.8379 4.73455 13.5513 4.99423 14.0634 4.6348L16.6263 2.83566C17.3809 2.30597 18.3493 3.11852 17.9586 3.95361L16.6319 6.79005C16.3668 7.35671 16.7465 8.01426 17.3697 8.06804L20.4895 8.33725C21.408 8.41651 21.6276 9.66142 20.7916 10.05L17.952 11.3701C17.3847 11.6338 17.2528 12.3815 17.6957 12.8233L19.9126 15.0349C20.5652 15.6861 19.9332 16.7808 19.043 16.5412L16.0192 15.7271C15.4152 15.5645 14.8335 16.0525 14.8888 16.6757L15.1654 19.7948C15.2468 20.7131 14.059 21.1455 13.5311 20.3897L11.738 17.8224C11.3798 17.3096 10.6205 17.3096 10.2623 17.8224L8.46928 20.3897C7.94139 21.1455 6.75351 20.7131 6.83495 19.7948L7.11158 16.6757C7.16684 16.0525 6.5852 15.5645 5.98113 15.7271L2.95739 16.5412C2.06717 16.7808 1.43511 15.6861 2.08778 15.0349L4.30464 12.8233C4.74752 12.3815 4.61568 11.6338 4.04839 11.3701L1.20881 10.05C0.372801 9.66142 0.592309 8.41651 1.51082 8.33725L4.63063 8.06804C5.2539 8.01426 5.63353 7.35671 5.36848 6.79005L4.04172 3.95361C3.65111 3.11853 4.61947 2.30597 5.37404 2.83566L7.93699 4.6348C8.44902 4.99423 9.1625 4.73455 9.3237 4.13008L10.1306 1.10443Z"
          fill="black"
        />
      </svg>
      <span className="text-2xl underline translate-x-0 transition-all duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] group-hover:-translate-x-5 group-hover:no-underline">
        {children}
      </span>
      <div className="overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] group-hover:w-[50px] w-0">
        <svg
          width="50"
          height="20.67"
          viewBox="0 0 29 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" opacity-0 -translate-x-10 transition-all duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)] group-hover:opacity-100 group-hover:translate-x-0"
        >
          <path
            d="M19.0889 0.599915C19.5498 2.97706 20.4716 5.65134 27.9998 5.65134"
            stroke="#000"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M19.0889 10.9999C19.5498 8.6228 20.4716 5.94851 27.9998 5.94851"
            stroke="#000"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M27.8463 5.79993H0.959961"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Link>
  );
}
