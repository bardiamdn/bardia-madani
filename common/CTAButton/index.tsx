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
  if (btnType === "primary") {
    return (
      <button
        type={type}
        className={`bg-primary md:px-[20px] px-[15px] md:py-[8px] py-[6px] md:text-lg text-lg font-semibold text-foreground rounded-full ${styles.button} ${className}`}
      >
        <span>{children}</span>
      </button>
    );
  } else
    return (
      <button
        type={type}
        className={`md:px-[20px] px-[15px] md:py-[8px] py-[6px] md:text-lg text-lg text-white border-[0.5px] border-primary rounded-full ${styles.button} ${styles.secondary} ${className}`}
      >
        <span>{children}</span>
      </button>
    );
}
