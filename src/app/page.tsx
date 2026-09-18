"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { PROJECTS } from "@/data/projects";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";

const ArchitectureScene = dynamic(() => import("@/components/3d/ArchitectureScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0B0B0B]" />,
});

const SpatialModel = dynamic(() => import("@/components/3d/SpatialModel"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-[#0B0B0B] rounded-lg" />,
});

const FloatingProjectGallery = dynamic(() => import("@/components/3d/FloatingProjectGallery"), {
  ssr: false,
  loading: () => <div className="py-12 bg-[#0B0B0B]" />,
});


export default function HomePage() {
  const featuredProject = PROJECTS.find((p) => p.id === "the-courtyard-house") || PROJECTS[0];

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
    <SmoothScrollProvider>
      <div className="space-y-0 overflow-hidden bg-bone-100 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
        
        {/* 1. FULL-SCREEN 3D HERO EXPERIENCE */}
        <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between pt-28 pb-10 sm:pt-32 sm:pb-14 px-6 sm:px-10 lg:px-16 overflow-hidden">
          {/* Real Three.js 3D Architectural Scene Canvas */}
          <ArchitectureScene />

          {/* Editorial Side Watermark Label */}
          <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 font-sans text-[10px] uppercase tracking-[0.4em] text-ash-400 writing-mode-vertical pointer-events-none opacity-60">
            AAROH STUDIO • 3D SPATIAL MONOGRAPH
          </div>

          {/* Top Editorial Details Bar */}
          <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.3em] text-ash-400 border-b border-white/10 pb-4">
            <div className="flex items-center space-x-4">
              <span className="text-brass-300 font-medium">AAROH STUDIO</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">JAIPUR • UDAIPUR • GLOBAL</span>
            </div>
            <span>EST. 2012</span>
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-10 max-w-5xl space-y-6 my-auto pt-6">
            <div className="text-[10px] uppercase tracking-[0.35em] text-brass-300 font-medium">
              Architecture & Interior Design
            </div>

            <h1 className="font-serif text-4xl sm:text-7xl md:text-8xl lg:text-[86px] font-light tracking-tight leading-[1.02] text-bone-100">
              Architecture that moves through light, memory and material.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-ash-300 font-light max-w-2xl leading-relaxed tracking-wide">
              Spatial stories for residences, retreats and cultural interiors. AAROH Studio creates climate-responsive architecture and tactile sanctuaries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="#signature-project"
                className="px-8 py-3.5 bg-bone-100 text-charcoal-900 text-xs uppercase tracking-[0.25em] font-medium hover:bg-brass-300 transition-colors shadow-xl"
              >
                Explore Work
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3.5 border border-white/30 text-bone-100 hover:border-brass-300 hover:text-brass-300 text-xs uppercase tracking-[0.25em] font-medium transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Bottom Hero Scroll Indicator */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.3em] text-ash-400">
            <span>01 / 07 • 3D SPATIAL MONOGRAPH</span>
            <div className="flex items-center space-x-3">
              <span className="w-12 h-[1px] bg-brass-300/60" />
              <span>SCROLL TO GLIDE 3D CAMERA</span>
            </div>
          </div>
        </section>


        {/* 2. FEATURED PROJECT (MAGAZINE SPREAD) */}
        <section id="signature-project" className="py-20 md:py-28 bg-bone-100 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
                Featured Case Study
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-slate">
                {featuredProject.location} • {featuredProject.year}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 relative">
                <div className="relative h-[440px] sm:h-[580px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl">
                  <Image
                    src={featuredProject.heroImage}
                    alt={featuredProject.title}
                    fill
                    className="object-cover filter contrast-[1.04]"
                  />
                </div>
                <div className="hidden sm:block absolute bottom-[-20px] right-[-20px] w-56 h-64 border-4 border-bone-100 shadow-2xl overflow-hidden z-20">
                  <Image
                    src={featuredProject.gallery[0]?.url || featuredProject.heroImage}
                    alt={featuredProject.title}
                    fill
                    className="object-cover filter brightness-90"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="font-serif text-5xl sm:text-6xl text-brass-500 font-light block">
                    01
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-light tracking-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-medium">
                    {featuredProject.typology} • {featuredProject.area}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-muted-slate font-light leading-relaxed">
                  {featuredProject.poeticDescription}
                </p>

                <div className="space-y-3 border-t border-charcoal-900/10 pt-5">
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
          </div>
        </section>


        {/* 3. DYNAMIC SPATIAL METHOD 3D SECTION */}
        <SpatialModel />


        {/* 4. INTERACTIVE 3D FLOATING PROJECT GALLERY */}
        <FloatingProjectGallery />


        {/* 5. STUDIO ETHOS & DISCIPLINE */}
        <section className="py-20 md:py-28 bg-bone-100 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
          <div className="max-w-6xl mx-auto space-y-12">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
              Ethos & Discipline
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 leading-[1.1] tracking-tight text-balance">
              “Luxury is not excess. It is the discipline of knowing what to leave untouched.”
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-charcoal-900/10">
              {[
                { num: "01", title: "Light before form", desc: "Before drawing a wall, we calculate how morning sun washes over stone surfaces." },
                { num: "02", title: "Materials with memory", desc: "We specify honest natural materials that accept human patina and weather gracefully." },
                { num: "03", title: "Silence as a design tool", desc: "Acoustic compression and spatial restraint create profound stillness inside modern homes." },
              ].map((p) => (
                <div key={p.title} className="space-y-3">
                  <span className="font-serif text-2xl text-brass-600 font-light block">{p.num}</span>
                  <h3 className="font-serif text-2xl text-charcoal-900 font-light">{p.title}</h3>
                  <p className="text-xs text-muted-slate font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 6. SERVICES DISCIPLINE */}
        <section className="py-20 md:py-28 bg-bone-200 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
          <div className="max-w-7xl mx-auto space-y-12">
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10">
                {servicesList.map((service, idx) => (
                  <div
                    key={service.title}
                    onMouseEnter={() => setHoveredService(idx)}
                    className={`py-6 px-4 cursor-pointer transition-all duration-300 ${
                      hoveredService === idx ? "bg-bone-100 border-l-2 border-charcoal-900" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-brass-600">{service.number}</span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">{service.title}</h3>
                    </div>
                    <p className="text-xs text-muted-slate font-light pt-2 max-w-xl leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative h-[420px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl">
                  <Image
                    src={
                      hoveredService !== null
                        ? servicesList[hoveredService].image
                        : servicesList[0].image
                    }
                    alt="AAROH Service Accent"
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


        {/* 7. STUDIO PROCESS (BLUEPRINT TIMELINE) */}
        <section className="py-20 md:py-28 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-14">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
                Architectural Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-bone-100 font-light">
                The Blueprint Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {processBlueprint.map((step) => (
                <div
                  key={step.num}
                  className="space-y-4 border-l md:border-l-0 md:border-t border-white/15 pt-6 md:pt-8 pl-6 md:pl-0 relative"
                >
                  <span className="font-serif text-3xl text-brass-400 font-light block">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-2xl text-bone-100">{step.title}</h3>
                  <p className="text-xs text-ash-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 8. FINAL COMMISSION SECTION */}
        <section className="py-20 md:py-28 bg-bone-100 text-charcoal-900 text-center px-6 sm:px-10 lg:px-16 border-t border-charcoal-900/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
              Initiate Conversation
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-balance leading-tight text-charcoal-900">
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
    </SmoothScrollProvider>
  );
}
