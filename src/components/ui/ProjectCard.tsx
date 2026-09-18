"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  aspect?: "portrait" | "landscape" | "tall" | "square";
  index?: number;
}

export default function ProjectCard({ project, aspect = "landscape", index = 0 }: ProjectCardProps) {
  const aspectClasses = {
    portrait: "aspect-[4/5] sm:aspect-[3/4]",
    landscape: "aspect-[16/11] sm:aspect-[16/10]",
    tall: "aspect-[3/4] sm:aspect-[2/3]",
    square: "aspect-square",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className="group block relative cursor-pointer w-full"
    >
      <Link href={`/projects/${project.id}`}>
        <div className={`relative w-full ${aspectClasses[aspect]} overflow-hidden bg-charcoal-900 border border-stone-300/60 shadow-xl`}>
          {/* Main Architectural Image */}
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Dark Editorial Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-charcoal-900/40 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Top Category Badge & Year */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-[11px] text-ivory-100 uppercase tracking-[0.2em] z-10">
            <span className="bg-[#0A0A0A]/85 backdrop-blur-md px-3 py-1 border border-white/15 text-[10px] font-medium text-bronze-300">
              {project.category}
            </span>
            <span className="text-stone-300 font-light text-[10px] sm:text-[11px]">{project.year}</span>
          </div>

          {/* Bottom Project Info */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-ivory-100 space-y-2.5 z-10">
            <div className="flex items-end justify-between">
              <div className="space-y-1 pr-2">
                <p className="text-[10px] uppercase tracking-[0.25em] text-bronze-400 font-medium">
                  {project.location} • {project.area}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-ivory-50 tracking-tight font-light group-hover:text-bronze-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
              </div>

              {/* Touch-Friendly Arrow Indicator */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 border border-white/20 bg-[#0A0A0A]/70 backdrop-blur-md flex items-center justify-center text-ivory-100 group-hover:border-bronze-400 group-hover:bg-bronze-400 group-hover:text-charcoal-950 transition-all duration-300 shrink-0 ml-2">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Hover Revealed Tagline */}
            <p className="text-[11px] sm:text-xs font-light text-stone-300 line-clamp-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 pt-2 border-t border-white/15 leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
