"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

const STEPS = [
  {
    num: "01",
    label: "Site & Topography",
    desc: "Reading solar trajectories, wind currents, and regional stone topography before drawing a single wall.",
  },
  {
    num: "02",
    label: "Volumetric Massing",
    desc: "Carving central courtyard sinks and thick thermal stone masses that buffer harsh 45°C summer heat.",
  },
  {
    num: "03",
    label: "Sunlight Orientation",
    desc: "Shaping deep overhangs and skylight apertures that invite golden morning rays while excluding harsh noon glare.",
  },
  {
    num: "04",
    label: "Tactile Materials",
    desc: "Applying hand-troweled Araish lime plaster, Jaisalmer limestone, and unpolished brass hardware.",
  },
  {
    num: "05",
    label: "Atmosphere & Stillness",
    desc: "Acoustic compression, water reflections, and natural ventilation creating profound spatial silence.",
  },
];

function InteractiveMethodMesh({ activeStep }: { activeStep: number }) {
  const meshRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      activeStep * 0.6 + Math.sin(t * 0.2) * 0.05,
      0.05
    );

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(activeStep * 0.8 + t * 0.5) * 6;
      lightRef.current.position.z = Math.cos(activeStep * 0.8 + t * 0.5) * 6;
    }
  });

  return (
    <group ref={meshRef}>
      <directionalLight ref={lightRef} position={[5, 8, 5]} intensity={1.5} color="#F7F5F0" />
      <ambientLight intensity={0.4} />

      {/* Step 01: Wireframe Site Grid Plane */}
      <gridHelper args={[10, 10, "#9E8B6D", "#33322E"]} position={[0, -1, 0]} />

      {/* Step 02: Volumetric Blocks */}
      {activeStep >= 1 && (
        <mesh position={[-1.5, activeStep >= 1 ? 0.2 : -1, -1]} castShadow receiveShadow>
          <boxGeometry args={[2.5, activeStep >= 1 ? 2.4 : 0.1, 3]} />
          <meshStandardMaterial color="#2B2824" roughness={0.75} />
        </mesh>
      )}

      {/* Step 03: Courtyard Walls & Light Openings */}
      {activeStep >= 2 && (
        <group position={[1.5, 0.4, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.3, 2.8, 3.5]} />
            <meshStandardMaterial color="#C8B29B" roughness={0.6} />
          </mesh>
          {/* Light Aperture Beam */}
          <mesh position={[-0.5, 0.5, 0]} rotation={[0, 0, 0.4]}>
            <cylinderGeometry args={[0.02, 1.2, 4, 16]} />
            <meshBasicMaterial color="#9E8B6D" transparent opacity={0.25} />
          </mesh>
        </group>
      )}

      {/* Step 04: Material Swatch Slabs */}
      {activeStep >= 3 && (
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh position={[0, 1.8, 1]} castShadow>
            <boxGeometry args={[3.2, 0.15, 2.2]} />
            <meshStandardMaterial color="#9E8B6D" roughness={0.3} metalness={0.4} />
          </mesh>
        </Float>
      )}

      {/* Step 05: Water Basin & Atmosphere Sphere */}
      {activeStep >= 4 && (
        <mesh position={[0, -0.9, 0]}>
          <boxGeometry args={[4, 0.08, 4]} />
          <meshStandardMaterial color="#0A1822" roughness={0.05} metalness={0.95} />
        </mesh>
      )}
    </group>
  );
}

export default function SpatialModel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block mb-1">
              Methodology & Process
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-bone-100 font-light">
              The Spatial Method
            </h2>
          </div>
          <p className="text-xs text-ash-400 font-light max-w-md">
            Interactive 3D spatial transformation from site reading to atmospheric handover.
          </p>
        </div>

        {/* Grid: Left 3D View Canvas (7 Cols), Right Step Selector (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 3D Canvas Frame */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] w-full border border-white/15 bg-[#12110F] shadow-2xl overflow-hidden">
            <Canvas camera={{ position: [5, 4, 7], fov: 40 }}>
              <color attach="background" args={["#12110F"]} />
              <InteractiveMethodMesh activeStep={activeStep} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} />
            </Canvas>

            {/* Step Watermark Label */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] text-brass-300 border border-white/10">
              3D Spatial View • Step {STEPS[activeStep].num}
            </div>
          </div>

          {/* Right Steps Selector */}
          <div className="lg:col-span-5 space-y-3">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white/[0.06] border-brass-400 text-bone-100"
                      : "bg-transparent border-white/10 text-ash-400 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-brass-400">{step.num}</span>
                    <h3 className="font-serif text-xl text-bone-100">{step.label}</h3>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-ash-300 font-light pt-2 leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
