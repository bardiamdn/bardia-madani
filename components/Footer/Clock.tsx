"use client";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const updateTime = () => {
        const date = new Date(Date.now() + 3 * 60 * 60 * 1000);
        const hours = date.getUTCHours().toString().padStart(2, "0");
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");

        setTime(`${hours}:${minutes}`);
      };

      updateTime();
      const interval = setInterval(updateTime, 10000);
      return () => clearInterval(interval);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time} GMT+3</span>;
};

export default Clock;
