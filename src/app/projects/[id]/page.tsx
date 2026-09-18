"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Layers, MapPin, Calendar, Maximize2 } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import ImageModal from "@/components/ui/ImageModal";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;

  const project = PROJECTS.find((p) => p.id === projectId);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center space-y-6 bg-bone-100 min-h-screen">
        <h1 className="font-serif text-4xl text-charcoal-900">Monograph Not Found</h1>
        <p className="text-muted-slate font-light">The requested architectural case study does not exist.</p>
        <Link
          href="/projects"
          className="inline-block border border-charcoal-900 px-6 py-3 text-xs uppercase tracking-widest text-charcoal-900 hover:bg-charcoal-900 hover:text-bone-100 transition-colors"
        >
          Return to Monograph Archive
        </Link>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-bone-100 min-h-screen text-charcoal-900 pb-24 selection:bg-charcoal-900 selection:text-bone-100">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[85vh] min-h-[650px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover filter brightness-[0.65] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pb-16 text-bone-100 space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Archive</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-brass-300 font-medium block">
              {project.category} • {project.typology}
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tighter text-bone-100">
              {project.title}
            </h1>

            <p className="text-ash-300 text-sm sm:text-base md:text-lg max-w-2xl font-light italic leading-relaxed">
              "{project.tagline}"
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS METADATA BAR */}
      <section className="bg-[#0B0B0B] text-bone-100 border-b border-white/10 py-9 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-xs uppercase tracking-[0.25em]">
          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-ash-400 block text-[10px]">Location</span>
            <span className="text-bone-100 font-medium flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-brass-300 shrink-0" />
              <span>{project.location}</span>
            </span>
          </div>

          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-ash-400 block text-[10px]">Footprint Area</span>
            <span className="text-bone-100 font-medium flex items-center space-x-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-brass-300 shrink-0" />
              <span>{project.area}</span>
            </span>
          </div>

          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-ash-400 block text-[10px]">Completion Year</span>
            <span className="text-bone-100 font-medium flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-brass-300 shrink-0" />
              <span>{project.year}</span>
            </span>
          </div>

          <div className="space-y-1 border-r border-white/10 pr-4">
            <span className="text-ash-400 block text-[10px]">Scope of Works</span>
            <span className="text-bone-100 font-medium flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-brass-300 shrink-0" />
              <span className="truncate">{project.scope}</span>
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center justify-start md:justify-end">
            <Link
              href="/contact"
              className="text-brass-300 hover:text-white text-[10px] tracking-[0.25em] transition-colors font-medium border-b border-brass-400 pb-1"
            >
              Inquire Similar Space ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 3. POETIC INTRODUCTION & EDITORIAL LEAD */}
      <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-6xl mx-auto space-y-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Architectural Ethos & Overview
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light leading-tight">
            {project.shortDescription}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-slate font-light leading-relaxed pt-2">
            {project.poeticDescription}
          </p>
        </div>
      </section>

      {/* 4. DESIGN CHALLENGE vs DESIGN RESPONSE */}
      <section className="py-24 md:py-32 bg-bone-200 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
              Forensic Analysis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
              Design Challenge & Architectural Response
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenge Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-bone-100 border border-charcoal-900/10 p-8 sm:p-12 space-y-4 shadow-sm"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-brass-600 font-medium block border-b border-charcoal-900/10 pb-3">
                01 • The Design Challenge
              </span>
              <p className="text-sm sm:text-base text-muted-slate font-light leading-relaxed pt-2">
                {project.challenge}
              </p>
            </motion.div>

            {/* Approach Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-charcoal-900 text-bone-100 border border-white/10 p-8 sm:p-12 space-y-4 shadow-xl"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-brass-300 font-medium block border-b border-white/15 pb-3">
                02 • Our Architectural Response
              </span>
              <p className="text-sm sm:text-base text-ash-300 font-light leading-relaxed pt-2">
                {project.approach}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TACTILE MATERIAL PALETTE */}
      <section className="py-28 md:py-36 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium">
              Material Permanence
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-bone-100 font-light">
              Curated Material Palette
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.materialPalette.map((mat, idx) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-charcoal-900 border border-white/10 p-6 space-y-4 group hover:border-brass-400 transition-colors"
              >
                <div className="relative h-48 w-full overflow-hidden bg-black">
                  <Image
                    src={mat.image}
                    alt={mat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-bone-100 group-hover:text-brass-300 transition-colors">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-ash-400 font-light leading-relaxed">
                    {mat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS ROADMAP SECTION */}
      <section className="py-28 md:py-36 bg-bone-100 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
              Execution Roadmap
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
              Studio Process & Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.process.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-bone-200 border border-charcoal-900/10 p-6 space-y-3"
              >
                <div className="border-b border-charcoal-900/10 pb-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-brass-600 font-medium">
                    Phase 0{idx + 1} • {step.phase}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-charcoal-900">{step.title}</h3>
                <p className="text-xs text-muted-slate font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PULL QUOTE */}
      <section className="py-24 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
            Architectural Pull Quote
          </span>
          <blockquote className="font-serif text-3xl sm:text-5xl text-bone-100 font-light leading-relaxed">
            {project.pullQuote}
          </blockquote>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ash-400 pt-4">
            VYOM Atelier — Principal Design Statement
          </p>
        </div>
      </section>

      {/* 8. BEFORE / AFTER TRANSFORMATION */}
      {project.beforeAfter && (
        <section className="py-28 px-6 sm:px-10 lg:px-16 bg-bone-100 border-b border-charcoal-900/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
                Spatial Evolution
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
                Before & After Evolution
              </h2>
            </div>
            <BeforeAfterSlider
              beforeImage={project.beforeAfter.beforeImage}
              afterImage={project.beforeAfter.afterImage}
              beforeCaption={project.beforeAfter.beforeCaption}
              afterCaption={project.beforeAfter.afterCaption}
            />
          </div>
        </section>
      )}

      {/* 9. IMAGE GALLERY & LIGHTBOX */}
      <section className="py-28 px-6 sm:px-10 lg:px-16 bg-bone-200 border-b border-charcoal-900/10">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
                Visual Archive
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
                Project Gallery
              </h2>
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-slate">
              Click any image for full-resolution lightbox viewer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setModalIndex(idx)}
                className={`relative overflow-hidden cursor-pointer group border border-charcoal-900/10 bg-charcoal-900 ${
                  img.aspect === "wide" ? "md:col-span-2 h-[540px]" : "h-[480px]"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-bone-100 font-light">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalIndex !== null && (
        <ImageModal
          isOpen={modalIndex !== null}
          onClose={() => setModalIndex(null)}
          imageUrl={project.gallery[modalIndex].url}
          caption={project.gallery[modalIndex].caption}
          hasPrev={modalIndex > 0}
          hasNext={modalIndex < project.gallery.length - 1}
          onPrev={() => setModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
          onNext={() =>
            setModalIndex((prev) =>
              prev !== null && prev < project.gallery.length - 1 ? prev + 1 : prev
            )
          }
        />
      )}

      {/* 10. RELATED WORKS */}
      <section className="py-28 px-6 sm:px-10 lg:px-16 bg-bone-100">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900">
              Related Monograph Works
            </h2>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-[0.25em] text-brass-600 hover:text-charcoal-900 font-medium transition-colors"
            >
              View Full Archive ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {relatedProjects.map((relProject) => (
              <ProjectCard key={relProject.id} project={relProject} aspect="landscape" />
            ))}
          </div>
        </div>
      </section>

      {/* 11. ENQUIRE CTA */}
      <section className="py-32 bg-[#0B0B0B] text-bone-100 text-center px-6 sm:px-10 lg:px-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
            Initiate Dialogue
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-bone-100 font-light">
            Envisioning a similar spatial commission?
          </h2>
          <p className="text-xs sm:text-sm text-ash-300 font-light leading-relaxed">
            We schedule preliminary spatial consultations to discuss site geography, budget parameters, and architectural vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white border-b border-brass-400 pb-1 font-medium transition-colors"
          >
            <span>Begin a Commission ↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
