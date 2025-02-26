"use client";
import { createContext, useState, useContext, useEffect } from "react";
import newScript from "./newScript";

interface ScriptLoaderContextType {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
}

const ScriptLoaderContext = createContext<ScriptLoaderContextType | undefined>(
  undefined
);

export const ScriptLoaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    newScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js")
      .then(() => {
        return newScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/CustomEase.min.js"
        );
      })
      .then(() => {
        return newScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        );
      })
      .then(() => {
        if (window.gsap && window.ScrollTrigger && window.CustomEase) {
          window.gsap.registerPlugin(window.ScrollTrigger, window.CustomEase);

          // Register a cubic-bezier easing function
          window.CustomEase.create("easeInOutQuint", "0.83, 0, 0.17, 1");
          window.CustomEase.create("easeInQuint", "0.64, 0, 0.78, 0");
          window.CustomEase.create("easeOutQuint", "0.22, 1, 0.36, 1");

          setLoaded(true);
        }
      })
      .catch((error) => {
        console.error("Script loading failed:", error);
      });
  }, []);

  return (
    <ScriptLoaderContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </ScriptLoaderContext.Provider>
  );
};

export const useScriptLoader = () => {
  const context = useContext(ScriptLoaderContext);
  if (!context) {
    throw new Error(
      "useScriptLoader must be used within a ScriptLoaderProvider"
    );
  }
  return context;
};
