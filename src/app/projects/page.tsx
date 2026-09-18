"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
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
    <div className="pt-32 pb-24 md:pb-32 bg-ivory-100 min-h-screen px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-6">
          <SectionHeader
            subtitle="Architectural Portfolio"
            title="Selected Projects & Spaces"
            description="Explore our archive of 8 luxury residential, hospitality, and commercial architecture projects across India."
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-b border-stone-300/60 pb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-medium mr-4">
              Filter by:
            </span>
            {FILTERS.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-charcoal-900 text-ivory-50 font-medium border border-charcoal-900 shadow-sm"
                    : "bg-transparent text-stone-600 hover:text-charcoal-900 border border-stone-300/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry Editorial Layout Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project: Project, idx: number) => {
              // Create dynamic variations in card aspects for editorial rhythm
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} aspect={aspect} index={idx} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-stone-500 font-light">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
