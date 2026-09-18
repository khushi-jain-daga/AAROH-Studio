"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

function ProjectPanelCard({ project, idx }: { project: Project; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      className="group relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle, transition: "transform 0.15s ease-out" }}
        className="bg-bone-200 border border-charcoal-900/10 shadow-xl overflow-hidden cursor-pointer"
      >
        <Link href={`/projects/${project.id}`}>
          {/* Spatial Floating Panel Image */}
          <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden bg-charcoal-900">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover filter contrast-[1.04] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Top Typology Badge */}
            <div className="absolute top-4 left-4 bg-[#0B0B0B]/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-brass-300 border border-white/10">
              {project.category} • {project.year}
            </div>
          </div>

          {/* Card Info Overlay */}
          <div className="p-6 space-y-3 bg-bone-100">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 group-hover:text-brass-600 transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-brass-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-brass-600 font-medium">
              {project.typology} • {project.location}
            </p>

            <p className="text-xs text-muted-slate font-light line-clamp-2 leading-relaxed">
              {project.thesis}
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default function FloatingProjectGallery() {
  return (
    <section className="py-24 md:py-32 bg-bone-100 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-charcoal-900/10 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block mb-1">
              Interactive Monograph Works
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light">
              Selected Spatial Commissions
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.25em] text-brass-600 hover:text-charcoal-900 font-medium transition-colors"
          >
            Explore Complete Directory ({PROJECTS.length}) ↗
          </Link>
        </div>

        {/* 3D Floating Spatial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectPanelCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
