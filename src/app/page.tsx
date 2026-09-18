"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

export default function HomePage() {
  const featuredProject = PROJECTS.find((p) => p.id === "the-courtyard-house") || PROJECTS[0];
  const archiveProjects = PROJECTS.slice(0, 6);

  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(0);

  const servicesList = [
    {
      number: "01",
      title: "Residences",
      desc: "Private family havelis, coastal retreats and sky penthouses carved from local stone, quiet light wells, and natural timber.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
    },
    {
      number: "02",
      title: "Hospitality",
      desc: "Boutique eco-lodges, wellness sanctuaries and destination dining venues designed for sensory pause and deep stillness.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=1200",
    },
    {
      number: "03",
      title: "Cultural Spaces",
      desc: "Private art galleries, foundations, and adaptive reuse monograph spaces celebrating regional heritage and human artistry.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=1200",
    },
    {
      number: "04",
      title: "Interior Architecture",
      desc: "Custom architectural millwork, Araish lime plaster surfaces, acoustic restraint, and unpolished brass hardware curation.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200",
    },
  ];

  const processBlueprint = [
    { num: "01", title: "Listen", desc: "Absorbing client rituals, family memory, and spatial desires." },
    { num: "02", title: "Read the site", desc: "Topographic elevation, solar heat gain, wind currents, and regional stone." },
    { num: "03", title: "Shape the volume", desc: "Carving courtyards, lightwells, overhangs, and volumetric proportions." },
    { num: "04", title: "Detail the atmosphere", desc: "Tactile lime plasters, acoustic timber claddings, and unlacquered metals." },
    { num: "05", title: "Build with restraint", desc: "On-site artisan coordination and editorial art direction handover." },
  ];

  return (
    <div className="space-y-0 overflow-hidden bg-bone-100 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
      
      {/* 1. HERO SECTION (FULL VIEWPORT ARCHITECTURAL FILM OPENING) */}
      <section className="relative min-h-[88vh] sm:min-h-screen w-full flex flex-col justify-between pt-28 pb-10 sm:pt-36 sm:pb-14 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Architectural Video / High-Res Atmosphere */}
        <div className="absolute inset-0 z-0 bg-[#0B0B0B]">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="VYOM Atelier Architecture"
            fill
            className="object-cover opacity-50 filter contrast-[1.08] brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/60" />
        </div>

        {/* Editorial Side Watermark Label */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 font-sans text-[10px] uppercase tracking-[0.4em] text-ash-400 writing-mode-vertical pointer-events-none opacity-60">
          VYOM ATELIER • SPATIAL MONOGRAPH • 2024
        </div>

        {/* Top Editorial Details Bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.3em] text-ash-400 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-4">
            <span className="text-brass-300 font-medium">PRJ-01 / JPR</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">JAIPUR, INDIA</span>
          </div>
          <span>EST. 2012</span>
        </div>

        {/* Asymmetric Hero Headline & Text Links */}
        <div className="relative z-10 max-w-5xl space-y-8 my-auto pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[95px] font-light tracking-tight leading-[1.02] text-bone-100"
          >
            Architecture for spaces that remember.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-ash-300 font-light max-w-xl leading-relaxed tracking-wide"
          >
            VYOM Atelier shapes residences, retreats and cultural interiors through light, proportion and material restraint.
          </motion.p>

          {/* Minimal Text Links (No Loud Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-10 pt-4"
          >
            <Link
              href="#signature-project"
              className="group flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-bone-100 hover:text-brass-300 transition-colors"
            >
              <span>View Work</span>
              <span className="text-brass-300 group-hover:translate-x-1 transition-transform">↓</span>
            </Link>

            <Link
              href="/contact"
              className="group flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white transition-colors"
            >
              <span>Begin a Commission</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Hero Bar */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.3em] text-ash-400">
          <span>01 / 07 • MONOGRAPH</span>
          <div className="flex items-center space-x-3">
            <span className="w-12 h-[1px] bg-brass-300/60" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>


      {/* 2. SIGNATURE PROJECT FEATURE (MAGAZINE SPREAD IMMERSIVE LAYOUT) */}
      <section id="signature-project" className="py-28 md:py-40 bg-bone-100 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
              Featured Case Study
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-slate">
              {featuredProject.location} • {featuredProject.year}
            </span>
          </div>

          {/* Magazine Spread Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Huge Vertical Image with Offset Thumbnail */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative h-[560px] sm:h-[680px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl">
                <Image
                  src={featuredProject.heroImage}
                  alt={featuredProject.title}
                  fill
                  className="object-cover filter contrast-[1.04]"
                />
              </div>

              {/* Offset Layered Image Accent */}
              <div className="hidden sm:block absolute bottom-[-30px] right-[-30px] w-64 h-72 border-4 border-bone-100 shadow-2xl overflow-hidden z-20">
                <Image
                  src={featuredProject.gallery[0]?.url || featuredProject.heroImage}
                  alt={featuredProject.title}
                  fill
                  className="object-cover filter brightness-90"
                />
              </div>
            </motion.div>

            {/* Right: Architectural Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-3">
                <span className="font-serif text-5xl sm:text-6xl text-brass-500 font-light block">
                  01
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-charcoal-900 font-light tracking-tight">
                  {featuredProject.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-medium">
                  {featuredProject.typology} • {featuredProject.area}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-slate font-light leading-relaxed">
                {featuredProject.poeticDescription}
              </p>

              {/* Materials Accent */}
              <div className="space-y-3 border-t border-charcoal-900/10 pt-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal-900 font-medium block">
                  Primary Material Palette:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-muted-slate">
                  {featuredProject.materialPalette.map((m) => (
                    <span key={m.name} className="px-3 py-1 bg-ash-100 border border-ash-300 text-[11px]">
                      {m.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Monograph Text Link */}
              <div className="pt-2">
                <Link
                  href={`/projects/${featuredProject.id}`}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-charcoal-900 hover:text-brass-600 font-medium border-b border-charcoal-900 pb-1 transition-colors group"
                >
                  <span>Read Monograph</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3. PROJECT INDEX SECTION (TYPOGRAPHY ARCHIVE LIST WITH HOVER PREVIEW) */}
      <section className="py-28 md:py-40 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block mb-1">
                Monograph Directory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-bone-100 font-light">
                Project Archive Index
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white transition-colors"
            >
              View Full Archive ({PROJECTS.length}) ↗
            </Link>
          </div>

          {/* Typography Archive Table List */}
          <div className="divide-y divide-white/10">
            {archiveProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group py-7 sm:py-9 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center cursor-pointer hover:bg-white/[0.03] transition-colors px-4 -mx-4"
              >
                {/* Name */}
                <div className="sm:col-span-5 font-serif text-2xl sm:text-3xl lg:text-4xl text-bone-100 group-hover:text-brass-300 transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </div>

                {/* Mobile Inline Image Preview */}
                <div className="block lg:hidden sm:col-span-12 my-2">
                  <Link href={`/projects/${project.id}`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 shadow-md bg-charcoal-900">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover filter contrast-[1.04]"
                      />
                    </div>
                  </Link>
                </div>

                {/* Typology */}
                <div className="sm:col-span-3 text-xs uppercase tracking-[0.2em] text-ash-400 font-light">
                  {project.typology}
                </div>

                {/* Location */}
                <div className="sm:col-span-3 text-xs uppercase tracking-[0.2em] text-ash-400 font-light">
                  {project.location}
                </div>

                {/* Year */}
                <div className="sm:col-span-1 text-xs uppercase tracking-[0.2em] text-brass-400 text-right">
                  {project.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover Floating Image Preview */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block pointer-events-none fixed right-20 top-1/2 -translate-y-1/2 z-30 w-80 h-96 border border-white/20 overflow-hidden shadow-2xl"
            >
              <Image
                src={hoveredProject.heroImage}
                alt={hoveredProject.title}
                fill
                className="object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-bone-100 font-medium">
                {hoveredProject.title} • {hoveredProject.location}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>


      {/* 4. PHILOSOPHY SECTION (SHORT & POWERFUL SPLIT STATEMENT) */}
      <section className="py-32 md:py-44 bg-bone-100 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Ethos & Discipline
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-charcoal-900 leading-[1.08] tracking-tight text-balance"
          >
            “Luxury is not excess. It is the discipline of knowing what to leave untouched.”
          </motion.h2>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-charcoal-900/10">
            {[
              { num: "01", title: "Light before form", desc: "Before drawing a wall, we calculate how morning sun washes over stone surfaces." },
              { num: "02", title: "Materials with memory", desc: "We specify honest natural materials that accept human patina and weather gracefully." },
              { num: "03", title: "Silence as a design tool", desc: "Acoustic compression and spatial restraint create profound stillness inside modern homes." },
            ].map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="space-y-3"
              >
                <span className="font-serif text-2xl text-brass-600 font-light block">{p.num}</span>
                <h3 className="font-serif text-2xl text-charcoal-900 font-light">{p.title}</h3>
                <p className="text-xs text-muted-slate font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. SERVICES AS EDITORIAL MANIFESTO (LARGE HORIZONTAL BLOCKS) */}
      <section className="py-28 md:py-40 bg-bone-200 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-charcoal-900/10 pb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block mb-1">
                Manifesto of Practice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
                Services & Disciplines
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.25em] text-brass-600 hover:text-charcoal-900 font-medium transition-colors"
            >
              Explore Scope Deliverables ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Horizontal Blocks List (7 Cols) */}
            <div className="lg:col-span-7 divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10">
              {servicesList.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredService(idx)}
                  className={`py-8 px-4 cursor-pointer transition-all duration-300 ${
                    hoveredService === idx ? "bg-bone-100 border-l-2 border-charcoal-900" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-brass-600">{service.number}</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">{service.title}</h3>
                  </div>
                  <p className="text-xs text-muted-slate font-light pt-3 max-w-xl leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Side Image Accent (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl">
                <Image
                  src={
                    hoveredService !== null
                      ? servicesList[hoveredService].image
                      : servicesList[0].image
                  }
                  alt="VYOM Service Accent"
                  fill
                  className="object-cover transition-all duration-700 filter contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-[0.25em] text-bone-100">
                  {hoveredService !== null ? servicesList[hoveredService].title : "Residences"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. STUDIO PROCESS (BLUEPRINT TIMELINE) */}
      <section className="py-32 md:py-44 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
              Architectural Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-bone-100 font-light">
              The Blueprint Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {processBlueprint.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="space-y-4 border-l md:border-l-0 md:border-t border-white/15 pt-6 md:pt-8 pl-6 md:pl-0 relative"
              >
                <span className="font-serif text-3xl text-brass-400 font-light block">
                  {step.num}
                </span>
                <h3 className="font-serif text-2xl text-bone-100">{step.title}</h3>
                <p className="text-xs text-ash-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. FINAL COMMISSION SECTION */}
      <section className="py-32 md:py-44 bg-bone-100 text-charcoal-900 text-center px-6 sm:px-10 lg:px-16 border-t border-charcoal-900/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Initiate Conversation
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-balance leading-tight text-charcoal-900">
            “Tell us about the space you are imagining.”
          </h2>

          <p className="text-sm sm:text-base text-muted-slate font-light max-w-xl mx-auto leading-relaxed">
            Selected residential, hospitality and cultural commissions are accepted each season.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] px-9 py-4 bg-charcoal-900 text-bone-100 font-medium hover:bg-brass-500 hover:text-charcoal-950 transition-all duration-500 shadow-2xl group"
            >
              <span>Begin a Commission</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
