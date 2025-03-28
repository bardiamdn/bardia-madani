"use client";
import { usePageTransition } from "@/hooks/usePageTransition";
import Link from "next/link";

export default function NotFound() {
  usePageTransition();

  return (
    <section className="bg-white w-full h-screen flex flex-col items-center justify-center text-center px-4">
      <h1>404 - Not Found</h1>
      <p className="text-foreground-light mt-2">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-md text-xl font-medium hover:underline transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}
