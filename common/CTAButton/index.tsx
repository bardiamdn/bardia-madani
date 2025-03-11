import TransitionLink from "../TransitionLink";
import styles from "./style.module.scss";

export default function CTABUtton({
  children,
  btnType,
  type,
  className,
}: {
  children: React.ReactNode;
  btnType: "primary" | "secondary";
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}) {
  if (btnType === "primary" && type !== "submit") {
    return (
      <TransitionLink href="/contact">
        <button
          className={`bg-primary md:px-[30px] px-[20px] md:py-[15px] py-[10px] md:text-2xl text-xl font-base text-foreground rounded-full ${styles.button} ${className}`}
        >
          <span>{children}</span>
        </button>
      </TransitionLink>
    );
  } else if (btnType === "secondary" && type !== "submit") {
    return (
      <div className="relative inline-block">
        <svg
          className="absolute inset-0 w-full h-full animate-[spin_35s_linear_infinite] hidden lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4,4"
            className="stroke-primary"
          />
        </svg>
        <TransitionLink href="/contact">
          <button
            className={`relative z-10 md:w-auto w-full h-auto lg:aspect-square md:px-[30px] px-[20px] md:py-[15px] py-[10px] md:text-2xl text-xl text-white lg:border-0 border-[0.5px] border-primary rounded-full ${styles.button} ${styles.secondary} ${className}`}
          >
            <span>{children}</span>
          </button>
        </TransitionLink>
      </div>
    );
  } else if (type === "submit") {
    return (
      <button
        type={type}
        className={`bg-primary md:px-[30px] px-[20px] md:py-[15px] py-[10px] md:text-2xl text-xl font-base text-foreground rounded-full ${styles.button} ${className}`}
      >
        <span>{children}</span>
      </button>
    );
  }
}
