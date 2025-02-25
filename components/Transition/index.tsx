"use client";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Transition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const slide = {
    initial: {
      top: 0,
    },
    animate: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.4,
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: 0,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <main className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>{children}</motion.div>
        <motion.div
          key={`overlay-${pathname}`}
          className="fixed inset-0 w-screen h-screen z-30 bg-black flex items-center justify-center"
          {...slide}
        >
          <h1>{pathname}</h1>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
