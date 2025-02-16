import styles from "./style.module.scss";

export default function CTABUtton({
  children,
  type,
  className,
}: {
  children: React.ReactNode;
  type: "primary" | "secondary";
  className?: string;
}) {
  if (type === "primary") {
    return (
      <button
        className={`bg-primary md:px-[20px] px-[15px] md:py-[8px] py-[6px] md:text-lg text-lg font-semibold text-foreground rounded-full ${styles.button} ${className}`}
      >
        <span>{children}</span>
      </button>
    );
  } else
    return (
      <button
        className={`md:px-[20px] px-[15px] md:py-[8px] py-[6px] md:text-lg text-lg text-white border-[0.5px] border-primary rounded-full ${styles.button} ${styles.secondary} ${className}`}
      >
        <span>{children}</span>
      </button>
    );
}
