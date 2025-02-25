import React, { ReactNode } from "react";
import styles from "./style.module.scss";

interface CustomLinkProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function CustomLink({
  children,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <div className={`cursor-pointer ${styles.link} ${className}`} {...props}>
      <span className="text-white">{children}</span>
    </div>
  );
}
