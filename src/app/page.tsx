"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, ChevronRight, Compass } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS, Project } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/journal";
import { STUDIO_DATA } from "@/data/studio";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);
  const featuredJournal = ARTICLES.slice(0, 3);
  const [hoveredService, setHoveredService] = useState<number | null>(0);

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      subtitle: "Site Reading & Solar Trajectories",
      desc: "Deep forensic analysis of site geography, natural wind corridors, sun paths, and client lifestyle rituals before drawing the first line.",
    },
    {
      step: "02",
      title: "Define",
      subtitle: "Volumetric Flow & Material Ethos",
      desc: "Establishing architectural spatial massing, proportion ratios, raw natural stone selections, and tactile lime plaster direction.",
    },
    {
      step: "03",
      title: "Design",
      subtitle: "3D Spatial Sculpting & Light Orientation",
      desc: "Iterative 3D spatial modeling, clerestory light aperture design, acoustic calculations, and structural detail integration.",
    },
    {
      step: "04",
      title: "Detail",
      subtitle: "Artisanal Millwork & Stone Joinery",
      desc: "Exacting technical execution drawings, bespoke joinery details, unlacquered bronze hardware specs, and natural stone procurement.",
    },
    {
      step: "05",
      title: "Deliver",
      subtitle: "On-Site Supervision & Art Curation",
      desc: "On-site artisan coordination, quality supervision, and final editorial styling handover.",
    },
  ];

  return (
    <div className="space-y-0 overflow-hidden bg-ivory-100 text-charcoal-900 selection:bg-bronze-400 selection:text-ivory-100">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Full Viewport Background Image with Ambient Zoom */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=95&w=2600"
            alt="AAROH Studio Luxury Architectural Space"
            fill
            className="object-cover animate-slow-pan filter brightness-[0.5] contrast-[1.08]"
            priority
          />
          {/* Layered Gradient Overlay for Optimal Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-black/60" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 pb-16 text-ivory-50 flex flex-col justify-between h-full">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.35em] text-bronze-300 font-medium px-4.5 py-2 bg-[#0A0A0A]/70 backdrop-blur-md border border-bronze-400/30">
              <Compass className="w-3.5 h-3.5 text-bronze-400 animate-spin" style={{ animationDuration: '24s' }} />
              <span>Jaipur • India</span>
            </div>
          </motion.div>

          {/* Headline & Studio Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-5xl my-auto"
          >
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-tighter text-ivory-50">
              Spaces shaped by light, material and memory.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
              AAROH Studio designs refined residential, hospitality and cultural interiors with a quiet, timeless sensibility.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center space-x-3 px-9 py-4.5 bg-ivory-100 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-medium hover:bg-bronze-400 hover:text-charcoal-950 transition-all duration-500 shadow-2xl group"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-3 px-9 py-4.5 border border-white/30 text-ivory-100 text-xs uppercase tracking-[0.25em] font-light hover:border-bronze-400 hover:text-bronze-400 backdrop-blur-sm transition-all duration-500"
              >
                <span>Start a Conversation</span>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-between border-t border-white/10 pt-6 text-stone-400 text-[10px] uppercase tracking-[0.35em]"
          >
            <span>Architecture & Interior Practice</span>
            <div className="flex items-center space-x-2 text-bronze-400">
              <span>Scroll</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OPENING EDITORIAL STATEMENT SECTION */}
      <section className="py-28 md:py-40 bg-ivory-100 px-6 sm:px-10 lg:px-16 relative border-b border-stone-300/60">
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center space-x-4"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-bronze-600 font-medium">
              Editorial Prologue
            </span>
            <div className="w-12 h-[1px] bg-bronze-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal-950 font-light leading-[1.18] tracking-tight text-balance"
          >
            Architecture is not merely structural shelter; it is an orchestrator of sunlight, atmospheric shadow, and human stillness.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-soft-grey font-light leading-relaxed pt-4 border-t border-stone-300/80"
          >
            <p>
              Headquartered in Jaipur, AAROH Studio approaches every commission with spatial restraint and climatic intelligence. We reject disposable architectural trends in favor of natural Jaisalmer stone, Araish lime plaster, unpolished timber, and burnished bronze.
            </p>
            <p>
              Whether shaping a private multi-generational villa in Rajasthan or a cliffside wellness resort in the Himalayan foothills, our practice creates spaces that feel rooted in their geography and quietly lived-in before they are occupied.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED PROJECT STORYTELLING (STAGGERED EDITORIAL LAYOUT) */}
      <section className="py-28 md:py-36 bg-ivory-200 px-6 sm:px-10 lg:px-16 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-bronze-600 font-medium">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-950 font-light">
                Featured Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-soft-grey font-light max-w-xl">
                Four spaces illustrating our focus on tactile materiality, passive cooling, and spatial light orientation.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-bronze-600 hover:text-charcoal-950 font-medium transition-colors border-b border-bronze-500/40 pb-1.5 self-start md:self-auto"
            >
              <span>Explore All 8 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Staggered Storytelling Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featuredProjects.map((project: Project, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: idx * 0.12 }}
                  className={`group flex flex-col space-y-6 ${isEven ? "" : "md:translate-y-12"}`}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="relative h-[440px] sm:h-[540px] w-full overflow-hidden bg-charcoal-900 border border-stone-300/80 shadow-xl">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs text-ivory-100 uppercase tracking-[0.25em]">
                        <span className="bg-[#0A0A0A]/80 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-[10px] text-bronze-300">
                          {project.category}
                        </span>
                        <span className="text-stone-300 font-light">{project.year}</span>
                      </div>

                      {/* Hover Revealed One-line Story */}
                      <div className="absolute bottom-6 left-6 right-6 text-ivory-100 space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-bronze-400 font-medium">
                          {project.location} • {project.area}
                        </p>
                        <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 group-hover:text-bronze-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-light text-stone-300 line-clamp-2 pt-2 border-t border-white/15 leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] pt-1">
                    <span className="text-stone-500">{project.scope}</span>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-bronze-600 hover:text-charcoal-950 font-medium flex items-center space-x-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION (SPLIT LAYOUT) */}
      <section className="py-32 md:py-44 bg-[#0A0A0A] text-ivory-100 relative overflow-hidden px-6 sm:px-10 lg:px-16 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* Left Side: Large Statement */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-bronze-400 font-medium">
                Our Design Ethos
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-ivory-50 leading-[1.15] text-balance">
                “We design spaces that feel lived-in before they are occupied — layered, tactile and deeply connected to context.”
              </h2>

              <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
                True luxury is not ornament or excess. It is volumetric clarity, natural stone textures, acoustic restraint, and light that moves across plaster walls like water.
              </p>

              <div className="pt-4">
                <Link
                  href="/studio"
                  className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] px-8 py-4 border border-bronze-400 text-bronze-400 hover:bg-bronze-400 hover:text-charcoal-950 transition-all duration-500 shadow-xl"
                >
                  <span>Read Full Studio Ethos</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Core Principles List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 divide-y divide-white/10 border-t border-b border-white/10"
            >
              {STUDIO_DATA.values.map((val, idx) => (
                <div key={val.title} className="py-7 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-ivory-100">{val.title}</h3>
                    <span className="font-serif text-sm text-bronze-400">0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MEMORABLE PROCESS SECTION (STUDIO METHODOLOGY) */}
      <section className="py-32 md:py-40 bg-ivory-100 px-6 sm:px-10 lg:px-16 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.35em] text-bronze-600 font-medium">
              The Atelier Method
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-950 font-light">
              Our 5-Stage Studio Methodology
            </h2>
            <p className="text-xs sm:text-sm text-soft-grey font-light">
              A disciplined, transparent design journey from climate site reading to final artisan handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="space-y-4 border-l md:border-l-0 md:border-t border-stone-300/80 pt-6 md:pt-8 pl-6 md:pl-0 relative group"
              >
                <span className="font-serif text-3xl text-bronze-500 font-light block">
                  {step.step}
                </span>
                <h3 className="font-serif text-2xl text-charcoal-950 group-hover:text-bronze-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-bronze-600 font-medium">
                  {step.subtitle}
                </p>
                <p className="text-xs text-soft-grey font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOPHISTICATED SERVICES SHOWCASE */}
      <section className="py-32 md:py-40 bg-ivory-200 px-6 sm:px-10 lg:px-16 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-bronze-600 font-medium">
                Core Disciplines
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-950 font-light">
                Architectural & Interior Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-bronze-600 hover:text-charcoal-950 font-medium border-b border-bronze-500/40 pb-1"
            >
              <span>View Service Deliverables</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Services Index List (7 Cols) */}
            <div className="lg:col-span-7 divide-y divide-stone-300/80 border-t border-b border-stone-300/80">
              {SERVICES.map((service, idx) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(idx)}
                  className={`py-8 px-4 cursor-pointer transition-all duration-300 ${
                    hoveredService === idx ? "bg-ivory-100 shadow-sm border-l-2 border-bronze-500" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-serif text-bronze-500">{service.number}</span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950">{service.title}</h3>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-bronze-500 transition-transform ${
                        hoveredService === idx ? "translate-x-1" : "opacity-40"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-soft-grey font-light pt-2 max-w-xl leading-relaxed">
                    {service.tagline}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Service Image Accent (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] w-full overflow-hidden border border-stone-300/80 bg-charcoal-900 shadow-2xl">
                <Image
                  src={
                    hoveredService !== null
                      ? SERVICES[hoveredService].image
                      : SERVICES[0].image
                  }
                  alt="AAROH Service Accent"
                  fill
                  className="object-cover transition-all duration-700 filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-[0.25em] text-ivory-100 border-t border-white/20 pt-3">
                  <span>
                    {hoveredService !== null ? SERVICES[hoveredService].title : "Architecture"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOURNAL PREVIEW SECTION (MAGAZINE STYLE) */}
      <section className="py-28 md:py-36 bg-ivory-100 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-bronze-600 font-medium">
                Editorial Salon
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-950 font-light">
                Architectural Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-bronze-600 hover:text-charcoal-950 font-medium border-b border-bronze-500/40 pb-1"
            >
              <span>Explore Journal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredJournal.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex flex-col space-y-5"
              >
                <div className="relative h-72 w-full overflow-hidden bg-charcoal-900 border border-stone-300/80">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02]"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 backdrop-blur-sm px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-bronze-400 border border-white/10">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-[11px] text-stone-500 uppercase tracking-widest font-light">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-950 group-hover:text-bronze-600 transition-colors leading-snug">
                  <Link href="/journal">{article.title}</Link>
                </h3>

                <p className="text-xs text-soft-grey font-light line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONVERSION-FOCUSED BEAUTIFUL FINAL CTA SECTION */}
      <section className="py-32 md:py-44 bg-[#0A0A0A] text-ivory-100 relative overflow-hidden px-6 sm:px-10 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-9 relative z-10">
          <span className="text-xs uppercase tracking-[0.35em] text-bronze-400 font-medium">
            Initiate Conversation
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-balance text-ivory-50 leading-tight">
            “Let’s shape a space that feels unmistakably yours.”
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            We welcome conversations regarding private residential estates, luxury hospitality sanctuaries, and cultural commissions globally.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-10 py-4.5 bg-bronze-400 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ivory-100 hover:text-charcoal-950 transition-all duration-500 shadow-2xl group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
