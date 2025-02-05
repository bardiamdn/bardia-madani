"use client";
import { useEffect } from "react";
// import * as THREE from "three";
// import Stats from "stats.js";

export default function Stars({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
}) {
  useEffect(() => {
    const loadScript = (src: string, callback: () => void) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = callback;
      document.body.appendChild(script);
    };

    // loadScript(
    //   "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
    //   () => {
    //     loadScript(
    //       "https://cdnjs.cloudflare.com/ajax/libs/stats.js/11/Stats.min.js",
    //       () => {
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js",
      () => {
        let container: HTMLDivElement;
        let scene: THREE.Scene,
          camera: THREE.PerspectiveCamera,
          renderer: THREE.WebGLRenderer;
        let stars: THREE.Points;
        // stats: Stats;
        let mouseX = 0,
          mouseY = 0,
          windowHalfX = window.innerWidth / 2,
          windowHalfY = window.innerHeight / 2;

        if (!parentRef.current) throw new Error("Parent ref not found");
        function init() {
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

          // stats = new Stats();
          // stats.dom.style.position = "absolute";
          // stats.dom.style.top = "0px";
          // container.appendChild(stats.dom);

          window.addEventListener("resize", onWindowResize);
          document.addEventListener("mousemove", onMouseMove);

          animate();
        }

        function animate() {
          requestAnimationFrame(animate);
          render();
          // stats.update();
        }

        function render() {
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
            positions[i * 3] = Math.random() * 2000 - 1000; // x
            positions[i * 3 + 1] = Math.random() * 2000 - 1000; // y
            positions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
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
          container.remove();
        };
      }
    );
    //       }
    //     );
    //   }
    // );
  }, []);

  return <></>;
}
