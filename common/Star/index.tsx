"use client";
import { useState, useEffect } from "react";

export default function Star() {
  const [offset, setOffset] = useState({
    y: 0,
    x: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const yfactor = 0.02;
      const xfactor = 0.005;
      const offsetY = (window.innerHeight / 2 - event.clientY) * yfactor;
      const offsetX = (window.innerWidth / 2 - event.clientX) * xfactor;
      setOffset({ y: offsetY, x: offsetX });
      // console.log(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      width="90"
      height="94"
      viewBox="0 0 90 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.4258 65.0479L42.8628 86.97C42.4357 88.3964 40.4158 88.3964 39.9888 86.97L31.1547 57.4617C31.0113 56.9828 30.6387 56.6068 30.1611 56.459L1.05658 47.4529C-0.352194 47.0169 -0.352194 45.0229 1.05658 44.5869L30.1611 35.5808C30.6387 35.433 31.0113 35.057 31.1547 34.5781L39.9888 5.0698C40.4158 3.6434 42.4357 3.6434 42.8628 5.0698L49.4258 26.9919V65.0479Z"
        fill="#597484"
        transform={`translate(${offset.x}, ${offset.y})`}
      />
      <path
        d="M43.563 7.0499C43.99 5.6235 46.01 5.6235 46.437 7.0499L55.2711 36.5582C55.4145 37.0371 55.7871 37.4131 56.2647 37.5609L85.3692 46.567C86.778 47.003 86.778 48.997 85.3692 49.433L56.2647 58.4391C55.7871 58.5869 55.4145 58.9629 55.2711 59.4418L46.437 88.9501C46.01 90.3765 43.99 90.3765 43.563 88.9501L34.7289 59.4418C34.5855 58.9629 34.2129 58.5869 33.7353 58.4391L4.63081 49.433C3.22204 48.997 3.22203 47.003 4.63081 46.567L33.7353 37.5609C34.2129 37.4131 34.5855 37.0371 34.7289 36.5582L43.563 7.0499Z"
        fill="#B9DAEE"
      />
    </svg>
  );
}
