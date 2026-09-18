"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import ScrollCameraRig from "./ScrollCameraRig";

function ArchitecturalStructure() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle ambient floating motion
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.04;
    groupRef.current.position.y = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Base Foundation Slab */}
      <mesh position={[0, -1.2, 0]} receiveShadow>
        <boxGeometry args={[14, 0.4, 12]} />
        <meshStandardMaterial color="#191816" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Primary Courtyard Platform (Warm Stone) */}
      <mesh position={[0, -0.9, 0]} receiveShadow>
        <boxGeometry args={[10, 0.2, 8]} />
        <meshStandardMaterial color="#2B2824" roughness={0.7} metalness={0.15} />
      </mesh>

      {/* Main Structural Wall (Left Wing) */}
      <mesh position={[-3.8, 1, -1]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 4, 6]} />
        <meshStandardMaterial color="#1E1C1A" roughness={0.85} />
      </mesh>

      {/* Main Structural Wall (Back Wing with Window Cutout) */}
      <mesh position={[0, 1.2, -3.8]} castShadow receiveShadow>
        <boxGeometry args={[8, 4.4, 0.4]} />
        <meshStandardMaterial color="#24211D" roughness={0.8} />
      </mesh>

      {/* Floating Upper Roof Canopy Slab */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.1}>
        <mesh position={[0, 3.2, -0.5]} castShadow receiveShadow>
          <boxGeometry args={[8.5, 0.3, 7.5]} />
          <meshStandardMaterial color="#C8B29B" roughness={0.6} metalness={0.2} />
        </mesh>
      </Float>

      {/* Architectural Columns (Muted Brass Accent) */}
      {[-2.5, 0, 2.5].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 2.8]} castShadow receiveShadow>
          <cylinderGeometry args={[0.12, 0.12, 3.2, 32]} />
          <meshStandardMaterial color="#9E8B6D" roughness={0.4} metalness={0.6} />
        </mesh>
      ))}

      {/* Courtyard Water Basin (Sunken Light Well) */}
      <mesh position={[0, -0.98, 0]}>
        <boxGeometry args={[4, 0.05, 3]} />
        <meshStandardMaterial color="#0E171E" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Translucent Glass Wall Panel */}
      <mesh position={[2.8, 1, 0]}>
        <boxGeometry args={[0.08, 3.6, 4]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transmission={0.85}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.5}
        />
      </mesh>

      {/* Sunlight Beam Plane (Golden Light Gradient) */}
      <mesh position={[1, 1.5, -1]} rotation={[0.4, -0.3, 0]}>
        <planeGeometry args={[4.5, 6]} />
        <meshBasicMaterial
          color="#9E8B6D"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function ArchitectureScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B0B0B]">
      <Canvas
        shadows
        camera={{ position: [0, 2.5, 12], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#0B0B0B"]} />
        <fog attach="fog" args={["#0B0B0B", 8, 22]} />

        {/* Ambient & Directional Architectural Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[8, 14, 6]}
          intensity={1.8}
          color="#F7F5F0"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.5}
          shadow-camera-far={25}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
          shadow-bias={-0.0005}
        />
        <pointLight position={[-6, 4, -4]} intensity={0.6} color="#9E8B6D" />

        {/* 3D Scene Components */}
        <ArchitecturalStructure />
        <ScrollCameraRig />
      </Canvas>

      {/* Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
