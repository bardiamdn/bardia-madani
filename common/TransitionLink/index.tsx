"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useScriptLoader } from "@/utils/ScriptLoaderContext";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForGSAP(): Promise<void> {
  return new Promise((resolve) => {
    const checkGSAP = () => {
      if (window.gsap) {
        resolve();
      } else {
        setTimeout(checkGSAP, 50);
      }
    };
    checkGSAP();
  });
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { loaded } = useScriptLoader();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const main = document.getElementById("main");
    const overlay = document.getElementById("overlay");
    const overlayTop = document.getElementById("second-overlay");

    if (href.split("/")[1] === pathname.split("/")[1]) return;
    if (!overlay) console.log("overlay not found");
    if (!overlayTop) console.log("overlayTop not found");

    let h1 = overlay?.querySelector("h1");
    const loading = overlay?.querySelector("svg");

    if (loading) {
      loading.remove();
    }

    if (h1) {
      if (href === "/") h1.textContent = "Home";
      else {
        h1.textContent =
          href.split("/")[1].charAt(0).toUpperCase() +
          href.split("/")[1].slice(1);
      }
    } else {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.color = "white";

      h1 = document.createElement("h1");
      h1.textContent =
        href === "/"
          ? "Home"
          : href.split("/")[1].charAt(0).toUpperCase() +
            href.split("/")[1].slice(1);

      wrapper.appendChild(h1);

      overlay?.appendChild(wrapper);
    }

    e.preventDefault();
    await waitForGSAP();

    if (!loaded) return;

    const timelineIn = window.gsap.timeline();

    await timelineIn
      .fromTo(
        overlayTop,
        {
          top: "150vh",
        },
        {
          top: "-25vh",
          duration: 1,
          ease: "easeInOutQuint",
        }
      )
      .fromTo(
        overlay,
        { top: "100vh" },
        {
          top: "0",
          duration: 1,
          ease: "easeInOutQuint",
        },
        "0.3"
      )
      .fromTo(
        h1,
        {
          y: "-100%",
          opacity: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "easeInOutQuint",
        }
      );

    router.push(href);

    await wait(1000);

    const timelineOut = window.gsap.timeline();

    timelineOut
      .to(overlay, {
        top: "-100vh",
        duration: 1,
        ease: "easeInOutQuint",
        onComplete: () => {
          if (!overlay) return;
          overlay.style.top = "100vh";
        },
      })
      .to(
        overlayTop,
        {
          top: "-150vh",
          duration: 1,
          ease: "easeInOutQuint",
          onComplete: () => {
            if (!overlay) return;
            overlay.style.top = "150vh";
          },
        },
        "0.3"
      )
      .fromTo(
        main,
        {
          top: "200px",
          opacity: 0,
        },
        {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "easeInOutQuint",
        },
        "0.4"
      );
  };
  return (
    <Link onClick={handleClick} href={href} {...props}>
      <span
        className={`${
          href.split("/")[1] === pathname.split("/")[1]
            ? "text-foregroundSecondary"
            : "text-foregroundLight"
        } ${className}`}
      >
        {children}
      </span>
    </Link>
  );
}
