/* 
currently not used


"use client";
import React, { useEffect, useState } from "react";

export default function SlideUpLetters({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure children is not null or undefined
  if (children === null || children === undefined) {
    throw new Error("Children is null or undefined");
  }

  const [visibleLetters, setVisibleLetters] = useState<string[]>([]);
  const text = React.Children.toArray(children).join(""); // Safely convert children to string

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    const letters = text.split("");

    // Animate each letter
    letters.forEach((letter, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleLetters((prev) => [...prev, letter]);
      }, index * 100); // Delay for each letter
      timeoutIds.push(timeoutId);
    });

    // Cleanup timeouts when component unmounts or children changes
    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [children, text]);

  return (
    <span className="inline-block overflow-hidden" {...props}>
      {visibleLetters.map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

*/
