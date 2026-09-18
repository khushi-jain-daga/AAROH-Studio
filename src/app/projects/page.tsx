"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";

type CategoryFilter = "All" | "Residences" | "Hospitality" | "Cultural" | "Interior Architecture";
const FILTERS: CategoryFilter[] = ["All", "Residences", "Hospitality", "Cultural", "Interior Architecture"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

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
    <SmoothScrollProvider>
      <div className="pt-32 pb-24 bg-ivory-100 min-h-screen px-6 sm:px-10 lg:px-16 text-charcoal-900 selection:bg-charcoal-900 selection:text-ivory-100">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* ARCHIVE OPENING */}
          <div className="space-y-6 border-b border-charcoal-900/10 pb-10">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
              Architectural Monographs
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 font-light tracking-tight">
              Selected Spatial Works
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light max-w-2xl leading-relaxed">
              Residences, retreats and interiors shaped through climate, material and memory.
            </p>

            {/* Minimal Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-900 font-medium mr-4">
                Category:
              </span>
              {FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-charcoal-900 text-ivory-100 font-medium"
                      : "bg-ivory-200 text-stone-600 hover:text-charcoal-900 border border-stone-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* LARGE FEATURED PROJECT SPREAD AT TOP */}
          <section className="space-y-8 bg-ivory-200 border border-charcoal-900/10 p-8 sm:p-12">
            <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-brass-600 font-medium">
              <span>FEATURED MONOGRAPH</span>
              <span>{featuredProject.location} • {featuredProject.year}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative h-[320px] sm:h-[480px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-xl group">
                <Image
                  src={featuredProject.heroImage}
                  alt={featuredProject.title}
                  fill
                  className="object-cover filter contrast-[1.04] group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="font-serif text-5xl text-brass-600 font-light block">01</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
                  {featuredProject.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-medium">
                  {featuredProject.typology} • {featuredProject.area}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
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

          {/* ELEGANT 3-COLUMN PROJECT GRID */}
          <section className="space-y-8">
            <div className="border-b border-charcoal-900/10 pb-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium">
              <span>PROJECT MONOGRAPHS</span>
              <span>{filteredProjects.length} COMMISSIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group space-y-4">
                  <Link href={`/projects/${project.id}`} className="block relative aspect-[4/3] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-sm">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover filter contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </Link>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-brass-600 font-medium">
                      <span>{project.typology}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal-900 group-hover:text-brass-600 transition-colors">
                      <Link href={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>
                    <p className="text-xs text-stone-600 font-light">
                      {project.location} — {project.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </SmoothScrollProvider>
  );
}
