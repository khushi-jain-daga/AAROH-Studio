"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS, Project } from "@/data/projects";

type CategoryFilter = "All" | "Residential" | "Hospitality" | "Cultural" | "Commercial";
const FILTERS: CategoryFilter[] = ["All", "Residential", "Hospitality", "Cultural", "Commercial"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-28 md:pb-36 bg-bone-100 min-h-screen px-6 sm:px-10 lg:px-16 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-6 border-b border-charcoal-900/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Monograph Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal-900 font-light tracking-tight">
            Selected Works & Monograph Archive
          </h1>
          <p className="text-xs sm:text-sm text-muted-slate font-light max-w-2xl leading-relaxed">
            Explore 8 architectural case studies across residential havelis, lakeside cliffside villas, boutique eco-retreats, and high-rise sky residences.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-900 font-medium mr-3">
              Filter Archive:
            </span>
            {FILTERS.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-charcoal-900 text-bone-100 font-medium shadow-md"
                    : "bg-bone-200 text-muted-slate hover:text-charcoal-900 border border-ash-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          <AnimatePresence>
            {filteredProjects.map((project: Project, idx: number) => {
              const aspectPattern = ["portrait", "landscape", "square", "tall"];
              const aspect = aspectPattern[idx % aspectPattern.length] as
                | "portrait"
                | "landscape"
                | "square"
                | "tall";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} aspect={aspect} index={idx} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
