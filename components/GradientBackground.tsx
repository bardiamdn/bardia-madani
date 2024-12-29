"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AbstractCorridor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iResolution: {
          value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1),
        },
        iTime: { value: 0 },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 iResolution;
        uniform float iTime;

        void mainImage(out vec4 fragColor, vec2 fragCoord) {
          float mr = min(iResolution.x, iResolution.y);
          vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;

          float d = -iTime * 0.5;
          float a = 0.0;
          for (float i = 0.0; i < 8.0; ++i) {
              a += cos(i - d - a * uv.x);
              d += sin(uv.y * i + a);
          }
          d += iTime * 0.5;
          vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
          col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);
          fragColor = vec4(col, 1);
        }

        void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
        }
      `,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const animate = (time: number) => {
      material.uniforms.iTime.value = time * 0.001; // Update time
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const render = (time: number) => {
      animate(time);
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(
        window.innerWidth,
        window.innerHeight,
        1
      );
    };
    window.addEventListener("resize", onResize);

    return () => {
      renderer.dispose();
      material.dispose();
      geometry.dispose();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
