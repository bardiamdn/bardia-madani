"use client";
import newScript from "@/utils/newScript";
import { useEffect } from "react";

export default function Stars({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptElements: HTMLScriptElement[] = [];

    // const loadScript = (src: string, callback: () => void) => {
    //   const script = document.createElement("script");
    //   script.src = src;
    //   script.onload = callback;
    //   document.body.appendChild(script);
    //   scriptElements.push(script);
    // };

    // loadScript(
    //   "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js",
    //   () => {
    //     if (!window.THREE) {
    //       console.error("Three.js failed to load.");
    //       return;
    //     }

    newScript(
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js"
    )
      .then(() => {
        if (!window.THREE) {
          console.error("Three.js failed to load.");
          return;
        }
        const THREE = window.THREE;
        let container: HTMLDivElement;
        let scene: typeof THREE.scene,
          camera: typeof THREE.camera,
          renderer: typeof THREE.renderer;
        let stars;
        let mouseX = 0,
          mouseY = 0,
          windowHalfX = window.innerWidth / 2,
          windowHalfY = window.innerHeight / 2;

        if (!parentRef.current) return;

        function init() {
          if (!parentRef.current) return;

          container = document.createElement("div");
          parentRef.current.appendChild(container);
          parentRef.current.style.overflow = "hidden";

          const WIDTH = parentRef.current.clientWidth;
          const HEIGHT = parentRef.current.clientHeight;
          const aspectRatio = WIDTH / HEIGHT;
          const fieldOfView = 75;
          const nearPlane = 1;
          const farPlane = 1000;

          camera = new THREE.PerspectiveCamera(
            fieldOfView,
            aspectRatio,
            nearPlane,
            farPlane
          );
          camera.position.z = farPlane / 2;

          scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x000000, 0.0003);

          starForge();

          renderer = new THREE.WebGLRenderer({ alpha: true });
          renderer.setClearColor(0x000000, 1);
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(WIDTH, HEIGHT);
          container.appendChild(renderer.domElement);

          window.addEventListener("resize", onWindowResize);
          document.addEventListener("mousemove", onMouseMove);

          animate();
        }

        function animate() {
          requestAnimationFrame(animate);
          render();
        }

        function render() {
          if (isNaN(mouseX) || isNaN(mouseY)) return;

          camera.position.x += (mouseX - camera.position.x) * 0.005;
          camera.position.y += (-mouseY - camera.position.y) * 0.005;
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
        }

        function onWindowResize() {
          const WIDTH = window.innerWidth;
          const HEIGHT = window.innerHeight;
          windowHalfX = WIDTH / 2;
          windowHalfY = HEIGHT / 2;
          camera.aspect = WIDTH / HEIGHT;
          camera.updateProjectionMatrix();
          renderer.setSize(WIDTH, HEIGHT);
        }

        function onMouseMove(e: MouseEvent) {
          mouseX = e.clientX - windowHalfX;
          mouseY = e.clientY - windowHalfY;
        }

        function starForge() {
          const starQty = 45000;
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array(starQty * 3);

          for (let i = 0; i < starQty; i++) {
            positions[i * 3] = Math.random() * 2000 - 1000;
            positions[i * 3 + 1] = Math.random() * 2000 - 1000;
            positions[i * 3 + 2] = Math.random() * 2000 - 1000;
          }

          geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
          );

          const material = new THREE.PointsMaterial({
            size: 1.0,
            transparent: true,
            opacity: 0.7,
          });

          stars = new THREE.Points(geometry, material);
          scene.add(stars);
        }

        init();

        return () => {
          window.removeEventListener("resize", onWindowResize);
          document.removeEventListener("mousemove", onMouseMove);
          container?.remove();

          scriptElements.forEach((script) => script.remove());
        };
      })
      .catch((error) => console.error("Three loading failed:", error));
    //   }
    // );
  }, [parentRef]);
  return null;
}
