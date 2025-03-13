"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextProps {
  loadingComplete: boolean;
  setLoadingComplete: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <LoadingContext.Provider value={{ loadingComplete, setLoadingComplete }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoadingContext must be used within a LoadingProvider");
  }
  return context;
}
