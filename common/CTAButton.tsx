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
        className={`bg-primary px-[20px] py-[8px] text-lg font-semibold text-foreground rounded-full ${className}`}
      >
        {children}
      </button>
    );
  } else
    return (
      <button
        className={`px-[20px] py-[8px] text-lg text-white border-[0.5px] border-primary rounded-full ${className}`}
      >
        {children}
      </button>
    );
}
