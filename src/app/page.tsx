"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CinematicHero from "@/components/home/CinematicHero";
import SpaceWalkthrough from "@/components/home/SpaceWalkthrough";

export default function HomePage() {
  const featuredProject = PROJECTS.find((p) => p.id === "the-courtyard-house") || PROJECTS[0];
  const selectedProjects = PROJECTS.slice(0, 6);

  const [activeProcess, setActiveProcess] = useState(0);

  const processSteps = [
    { num: "01", title: "Listen", desc: "Understanding how you live, move, and rest within spaces." },
    { num: "02", title: "Read the Site", desc: "Analyzing climate, sun angles, wind paths, and local stone traditions." },
    { num: "03", title: "Shape the Plan", desc: "Carving spatial proportions, courtyard lightwells, and quiet thresholds." },
    { num: "04", title: "Detail Materials", desc: "Curating hand-plastered walls, teak joinery, and patinated brass." },
    { num: "05", title: "Deliver the Space", desc: "Overseeing craft execution down to every shadow gap and fixture." },
  ];

  const servicesList = [
    {
      num: "01",
      title: "Residential Architecture",
      desc: "Private family havelis, coastal retreats and sky penthouses carved from local stone, quiet light wells, and natural timber.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
    },
    {
      num: "02",
      title: "Interior Design",
      desc: "Bespoke spatial layouts, custom joinery, tactile textiles, and curated lighting tailored to daily rituals.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=85&w=1200",
    },
    {
      num: "03",
      title: "Hospitality Spaces",
      desc: "Boutique eco-lodges, wellness sanctuaries and destination dining venues designed for sensory pause and deep stillness.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=1200",
    },
    {
      num: "04",
      title: "Renovation & Styling",
      desc: "Restoration of historic structures and architectural transformations that honor heritage while upgrading contemporary comfort.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1200",
    },
  ];

  return (
    <SmoothScrollProvider>
      <main className="bg-ivory-100 text-charcoal-900 selection:bg-charcoal-900 selection:text-ivory-100 overflow-x-hidden">
        
        {/* A. CINEMATIC HERO */}
        <CinematicHero />

        {/* B. WALK THROUGH THE SPACE */}
        <SpaceWalkthrough />

        {/* C. FEATURED PROJECT SPREAD */}
        <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-brass-600 font-medium">
              <span>FEATURED MONOGRAPH</span>
              <span>{featuredProject.location} • {featuredProject.year}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Frame */}
              <div className="lg:col-span-7 relative h-[360px] sm:h-[540px] w-full overflow-hidden bg-charcoal-900 shadow-2xl group border border-charcoal-900/10">
                <Image
                  src={featuredProject.heroImage}
                  alt={featuredProject.title}
                  fill
                  className="object-cover filter contrast-[1.04] group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-5 space-y-6">
                <span className="font-serif text-5xl text-brass-500 font-light block">01</span>
                <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light">
                  {featuredProject.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-medium">
                  {featuredProject.typology} • {featuredProject.area}
                </p>
                <p className="text-sm text-stone-700 font-light leading-relaxed">
                  {featuredProject.thesis}
                </p>

                {/* Material Chips */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {featuredProject.materialPalette.slice(0, 3).map((m) => (
                    <span key={m.name} className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 bg-stone-300 text-charcoal-900 font-medium border border-charcoal-900/10">
                      {m.name}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
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

        {/* D. SELECTED SPATIAL WORKS (STABLE 3-COLUMN DESKTOP GRID) */}
        <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10 bg-ivory-50">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-charcoal-900/10 pb-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
                  Curated Monograph Index
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light">
                  Selected Spatial Works
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs uppercase tracking-[0.25em] text-brass-600 hover:text-charcoal-900 font-medium border-b border-brass-600 pb-1 self-start sm:self-auto"
              >
                View Complete Archive ↗
              </Link>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedProjects.map((project) => (
                <div key={project.id} className="group space-y-4">
                  <Link href={`/projects/${project.id}`} className="block relative aspect-[4/3] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-md">
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
                    <p className="text-xs text-stone-600 font-light line-clamp-2">
                      {project.location} — {project.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E. STUDIO ETHOS */}
        <section className="py-24 sm:py-32 bg-[#0E0E0D] text-ivory-100 px-6 sm:px-10 lg:px-16 border-b border-white/10">
          <div className="max-w-5xl mx-auto space-y-16 text-center">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
                Studio Ethos & Principles
              </span>
              <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory-100 font-light leading-tight">
                "Luxury is not excess. It is the discipline of light, proportion and restraint."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left border-t border-white/10 pt-12">
              <div className="space-y-3">
                <span className="font-serif text-2xl text-brass-400 block">01</span>
                <h3 className="font-serif text-xl text-ivory-100 font-light">Light before decoration</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  We shape openings to catch morning sun and soft evening shadows before specifying surface finishes.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-2xl text-brass-400 block">02</span>
                <h3 className="font-serif text-xl text-ivory-100 font-light">Materials that age beautifully</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Local sandstone, hand-rubbed brass, and lime plaster patinate gracefully with time and touch.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-2xl text-brass-400 block">03</span>
                <h3 className="font-serif text-xl text-ivory-100 font-light">Silence as a design tool</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Spatial transitions are tuned for sensory calm, acoustic softness, and unhurried daily living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* F. SERVICES */}
        <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 border-b border-charcoal-900/10 pb-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
                Architectural Offerings
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light">
                Services & Disciplines
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesList.map((service) => (
                <div key={service.num} className="p-8 bg-ivory-200 border border-charcoal-900/10 space-y-4 hover:border-brass-600 transition-colors">
                  <span className="font-serif text-3xl text-brass-600 font-light block">{service.num}</span>
                  <h3 className="font-serif text-2xl text-charcoal-900">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* G. PROCESS */}
        <section className="py-24 sm:py-32 bg-[#0E0E0D] text-ivory-100 px-6 sm:px-10 lg:px-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 border-b border-white/10 pb-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
                Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory-100 font-light">
                Architectural Process
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {processSteps.map((step, idx) => (
                <div
                  key={step.num}
                  onClick={() => setActiveProcess(idx)}
                  className={`py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center cursor-pointer transition-colors px-4 -mx-4 ${
                    activeProcess === idx ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="sm:col-span-2 font-serif text-3xl text-brass-400 font-light">{step.num}</div>
                  <div className="sm:col-span-4 font-serif text-2xl text-ivory-100">{step.title}</div>
                  <div className="sm:col-span-6 text-xs sm:text-sm text-stone-400 font-light leading-relaxed">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H. FINAL CTA */}
        <section className="py-28 bg-ivory-100 text-charcoal-900 text-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
              Initiate Commission
            </span>
            <h2 className="font-serif text-3xl sm:text-6xl text-charcoal-900 font-light">
              Tell us about the space you are imagining.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              We schedule preliminary spatial consultations to discuss site geography, budget parameters, and architectural vision.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-charcoal-900 text-ivory-100 text-xs uppercase tracking-[0.25em] font-medium hover:bg-brass-600 transition-colors duration-300"
              >
                <span>Begin a Commission</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </SmoothScrollProvider>
  );
}
