import Link from "next/link";
import styles from "./style.module.scss";

export default function CustomLink({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`${styles.link} ${className}`} {...props}>
      <span className="text-white">{children}</span>
    </Link>
  );
}
