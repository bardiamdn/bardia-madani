"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useScriptLoader } from "@/utils/ScriptLoaderContext";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
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
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { loaded } = useScriptLoader();
  const overlay = document.getElementById("overlay");
  const body = document.getElementById("body");
  const overlayTop = document.getElementById("overlay-top");
  const overlayBottom = document.getElementById("overlay-bottom");

  useEffect(() => {
    const checkGSAP = () => {
      if (loaded) {
        if (document.getElementById("overlay")) console.log("overlay found");
        window.gsap.fromTo(
          overlay,
          { top: "-20vh" },
          {
            top: "-140vh",
            duration: 1,
            ease: "easeInOutQuint",
          }
        );
        window.gsap.fromTo(
          body,
          {
            y: "200px",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "easeInOutQuint",
          }
        );
      } else {
        setTimeout(checkGSAP, 50);
      }
    };
    checkGSAP();
  }, [loaded, href, overlay, body]);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.split("/")[1] === pathname.split("/")[1]) return;
    if (!overlay) console.log("overlay not found");
    if (!overlayTop) console.log("overlayTop not found");

    const h1 = overlay?.querySelector("h1");
    if (h1) {
      if (href === "/") h1.textContent = "Home";
      else {
        h1.textContent =
          href.split("/")[1].charAt(0).toUpperCase() +
          href.split("/")[1].slice(1);
      }
    } else console.log("h1 not found");

    e.preventDefault();
    await waitForGSAP();

    if (!loaded) return;

    const timeline = window.gsap.timeline();

    await timeline
      .fromTo(
        overlay,
        { top: "140vh" },
        {
          top: "-20vh",
          duration: 1,
          ease: "easeInOutQuint",
        }
      )
      // .fromTo(
      //   overlayTop,
      //   {
      //     height: "5vh",
      //   },
      //   {
      //     height: "20vh",
      //     duration: 0.8,
      //     ease: "easeInOutQuint",
      //     onComplete: () => {
      //       window.gsap.to(overlayTop, {
      //         height: "5vh",
      //       });
      //     },
      //   },
      //   "<"
      // )
      // .fromTo(
      //   overlayBottom,
      //   {
      //     height: "5vh",
      //   },
      //   {
      //     height: "20vh",
      //     duration: 0.8,
      //     ease: "easeInOutQuint",
      //     onComplete: () => {
      //       window.gsap.to(overlayBottom, {
      //         height: "5vh",
      //       });
      //     },
      //   },
      //   "<"
      // )
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
        // "0.45"
      );

    router.push(href);

    await wait(750);

    window.gsap.to(overlay, {
      top: "-140vh",
      duration: 1,
      ease: "easeInOutQuint",
      onComplete: () => {
        if (!overlay) return;
        overlay.style.top = "140vh";
      },
    });
  };
  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
}
