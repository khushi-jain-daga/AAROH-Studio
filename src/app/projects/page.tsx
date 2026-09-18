"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

type CategoryFilter = "All" | "Residences" | "Hospitality" | "Cultural" | "Interior Architecture";
const FILTERS: CategoryFilter[] = ["All", "Residences", "Hospitality", "Cultural", "Interior Architecture"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const featuredProject = PROJECTS.find((p) => p.id === "the-courtyard-house") || PROJECTS[0];

  const categoryMap: Record<CategoryFilter, string> = {
    All: "All",
    Residences: "Residential",
    Hospitality: "Hospitality",
    Cultural: "Cultural",
    "Interior Architecture": "Commercial",
  };

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === categoryMap[activeFilter]);

  return (
    <div className="pt-32 pb-32 bg-bone-100 min-h-screen px-6 sm:px-10 lg:px-16 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* 1. ARCHIVE-STYLE OPENING */}
        <div className="space-y-6 border-b border-charcoal-900/10 pb-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Monograph Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 font-light tracking-tight">
            Selected Spatial Works
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-slate font-light max-w-2xl leading-relaxed">
            Residences, retreats and interiors shaped through climate, material and memory.
          </p>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-900 font-medium mr-4">
              Filter:
            </span>
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-charcoal-900 text-bone-100 font-medium"
                    : "bg-bone-200 text-muted-slate hover:text-charcoal-900 border border-ash-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. LARGE FEATURED PROJECT SPREAD AT TOP */}
        <section className="space-y-8 bg-bone-200 border border-charcoal-900/10 p-8 sm:p-12">
          <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-brass-600">
            <span>FEATURED MONOGRAPH</span>
            <span>{featuredProject.location} • {featuredProject.year}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image */}
            <div className="lg:col-span-7 relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-xl">
              <Image
                src={featuredProject.heroImage}
                alt={featuredProject.title}
                fill
                className="object-cover filter contrast-[1.04]"
                priority
              />
            </div>

            {/* Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-serif text-5xl text-brass-500 font-light block">01</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
                {featuredProject.title}
              </h2>
              <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-medium">
                {featuredProject.typology} • {featuredProject.area}
              </p>
              <p className="text-xs sm:text-sm text-muted-slate font-light leading-relaxed">
                {featuredProject.thesis}
              </p>
              <div className="pt-2">
                <Link
                  href={`/projects/${featuredProject.id}`}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-charcoal-900 hover:text-brass-600 font-medium border-b border-charcoal-900 pb-1 transition-colors group"
                >
                  <span>Read Monograph</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDITORIAL PROJECT INDEX (NO CARDS, ARCHIVE LISTING) */}
        <section className="space-y-6 relative">
          <div className="border-b border-charcoal-900/10 pb-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-slate">
            <span>PROJECT ARCHIVE DIRECTORY</span>
            <span>{filteredProjects.length} COMMISSIONS</span>
          </div>

          <div className="divide-y divide-charcoal-900/10 border-b border-charcoal-900/10">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group py-7 sm:py-9 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center cursor-pointer hover:bg-bone-200/80 transition-colors px-4 -mx-4"
              >
                {/* Title */}
                <div className="sm:col-span-5 font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-900 group-hover:text-brass-600 transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </div>

                {/* Typology */}
                <div className="sm:col-span-3 text-xs uppercase tracking-[0.2em] text-muted-slate font-light">
                  {project.typology}
                </div>

                {/* Location */}
                <div className="sm:col-span-3 text-xs uppercase tracking-[0.2em] text-muted-slate font-light">
                  {project.location}
                </div>

                {/* Year */}
                <div className="sm:col-span-1 text-xs uppercase tracking-[0.2em] text-brass-600 text-right font-medium">
                  {project.year}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hover Floating Image Preview */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block pointer-events-none fixed right-24 top-1/2 -translate-y-1/2 z-30 w-80 h-96 border border-charcoal-900/20 shadow-2xl overflow-hidden bg-charcoal-900"
            >
              <Image
                src={hoveredProject.heroImage}
                alt={hoveredProject.title}
                fill
                className="object-cover filter contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-bone-100 font-medium">
                {hoveredProject.title} • {hoveredProject.location}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
