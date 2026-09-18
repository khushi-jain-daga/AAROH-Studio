"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function ScrollCameraRig() {
  const { camera } = useThree();
  const scrollProgressRef = useRef(0);

  const targetCamPos = useRef(new THREE.Vector3(0, 2.5, 12));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgressRef.current = Math.min(1, Math.max(0, window.scrollY / totalScroll));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const p = scrollProgressRef.current;

    if (p < 0.25) {
      // 1. Hero View: Exterior perspective
      const localP = p / 0.25;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(0, 1.5, localP),
        THREE.MathUtils.lerp(2.5, 1.8, localP),
        THREE.MathUtils.lerp(12, 9.5, localP)
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p < 0.55) {
      // 2. Courtyard Void & Featured Project: Glide inside inner court
      const localP = (p - 0.25) / 0.3;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(1.5, -2.0, localP),
        THREE.MathUtils.lerp(1.8, 1.0, localP),
        THREE.MathUtils.lerp(9.5, 6.8, localP)
      );
      targetLookAt.current.set(
        THREE.MathUtils.lerp(0, -0.5, localP),
        THREE.MathUtils.lerp(0, 0.5, localP),
        THREE.MathUtils.lerp(0, -1.0, localP)
      );
    } else if (p < 0.8) {
      // 3. Spatial Method & Process: Side camera rotation revealing wall panels
      const localP = (p - 0.55) / 0.25;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(-2.0, 3.8, localP),
        THREE.MathUtils.lerp(1.0, 2.2, localP),
        THREE.MathUtils.lerp(6.8, 7.5, localP)
      );
      targetLookAt.current.set(
        THREE.MathUtils.lerp(-0.5, 0.5, localP),
        THREE.MathUtils.lerp(0.5, 0.2, localP),
        THREE.MathUtils.lerp(-1.0, 0, localP)
      );
    } else {
      // 4. Contact & Footer: Calm frontal architectural elevation
      const localP = (p - 0.8) / 0.2;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(3.8, 0, localP),
        THREE.MathUtils.lerp(2.2, 2.0, localP),
        THREE.MathUtils.lerp(7.5, 10.5, localP)
      );
      targetLookAt.current.set(0, 0.2, 0);
    }

    // Smooth lerp camera position
    camera.position.lerp(targetCamPos.current, 0.05);

    // Smooth lerp lookAt target
    currentLookAt.current.lerp(targetLookAt.current, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
