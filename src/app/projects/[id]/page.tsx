"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import ImageModal from "@/components/ui/ImageModal";

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
          className="inline-block text-xs uppercase tracking-widest text-charcoal-900 border-b border-charcoal-900 pb-1"
        >
          Return to Selected Works ↗
        </Link>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  // Custom visual background tones for key projects
  const toneClasses = {
    "desert-stone": "bg-bone-100 border-amber-900/10",
    "lakeside-arch": "bg-bone-100 border-slate-900/10",
    "forest-retreat": "bg-[#F4F2EB] border-stone-800/10",
    "coastal-monolith": "bg-[#F3F2EE] border-zinc-800/10",
    "alpine-timber": "bg-bone-100 border-stone-800/10",
    "urban-penthouse": "bg-bone-100 border-neutral-800/10",
  };

  return (
    <div className={`${toneClasses[project.themeTone]} min-h-screen text-charcoal-900 pb-28 selection:bg-charcoal-900 selection:text-bone-100`}>
      
      {/* 1. OPENING: FULL-SCREEN IMAGE COMPOSITION */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover filter brightness-[0.6] contrast-[1.06]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-black/40" />
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
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-300 font-medium block">
              {project.category} • {project.typology}
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight leading-[1.02] text-bone-100">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs uppercase tracking-[0.25em] text-ash-300 font-light border-t border-white/15">
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT THESIS (MAX 3 LINES DESKTOP) */}
      <section className="py-24 md:py-32 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Architectural Thesis
          </span>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-900 font-light leading-[1.25] text-balance">
            {project.thesis}
          </p>
        </div>
      </section>

      {/* 3. SPATIAL FACTS (REFINED TABLE / LIST VIEW, NO CARDS) */}
      <section className="py-20 bg-bone-200 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-5xl mx-auto space-y-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Spatial Facts & Data
          </span>

          <div className="divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10 text-xs sm:text-sm">
            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
              <span className="sm:col-span-4 uppercase tracking-[0.25em] text-charcoal-900 font-medium">Site Address</span>
              <span className="sm:col-span-8 text-muted-slate font-light">{project.site}</span>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
              <span className="sm:col-span-4 uppercase tracking-[0.25em] text-charcoal-900 font-medium">Typology</span>
              <span className="sm:col-span-8 text-muted-slate font-light">{project.typology}</span>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
              <span className="sm:col-span-4 uppercase tracking-[0.25em] text-charcoal-900 font-medium">Footprint Area</span>
              <span className="sm:col-span-8 text-muted-slate font-light">{project.area}</span>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
              <span className="sm:col-span-4 uppercase tracking-[0.25em] text-charcoal-900 font-medium">Completion Year</span>
              <span className="sm:col-span-8 text-muted-slate font-light">{project.year}</span>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
              <span className="sm:col-span-4 uppercase tracking-[0.25em] text-charcoal-900 font-medium">Scope of Works</span>
              <span className="sm:col-span-8 text-muted-slate font-light">{project.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CINEMATIC GALLERY SEQUENCE (STAGGERED COMPOSITION) */}
      <section className="py-28 md:py-36 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10 space-y-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-charcoal-900/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-brass-600">
          <span>CINEMATIC GALLERY SEQUENCE</span>
          <span>CLICK FOR LIGHTBOX MONOGRAPH</span>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-24">
          {project.gallery.map((img, idx) => {
            if (img.layoutRole === "full-width") {
              return (
                <div
                  key={idx}
                  onClick={() => setModalIndex(idx)}
                  className="relative h-[320px] sm:h-[650px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl cursor-pointer group"
                >
                  <Image src={img.url} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity p-6 sm:p-8 flex items-end">
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-bone-100">{img.caption}</p>
                  </div>
                </div>
              );
            }

            if (img.layoutRole === "offset-left" || img.layoutRole === "offset-right") {
              const isLeft = img.layoutRole === "offset-left";
              return (
                <div key={idx} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                  <div
                    onClick={() => setModalIndex(idx)}
                    className="relative h-[280px] sm:h-[540px] w-full max-w-3xl overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-xl cursor-pointer group"
                  >
                    <Image src={img.url} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity p-5 sm:p-6 flex items-end">
                      <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-bone-100">{img.caption}</p>
                    </div>
                  </div>
                </div>
              );
            }

            if (img.layoutRole === "portrait") {
              return (
                <div key={idx} className="flex justify-center">
                  <div
                    onClick={() => setModalIndex(idx)}
                    className="relative h-[380px] sm:h-[680px] w-full max-w-xl overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl cursor-pointer group"
                  >
                    <Image src={img.url} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity p-5 sm:p-6 flex items-end">
                      <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-bone-100">{img.caption}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className="max-w-4xl mx-auto">
                <div
                  onClick={() => setModalIndex(idx)}
                  className="relative h-[260px] sm:h-[480px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-xl cursor-pointer group"
                >
                  <Image src={img.url} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity p-5 sm:p-6 flex items-end">
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-bone-100">{img.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. MATERIAL MEMORY SECTION (EDITORIAL SAMPLE BOARD, NO ECOMMERCE CARDS) */}
      <section className="py-28 md:py-36 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
              Tactile Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-bone-100 font-light">
              Material Memory Sample Board
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {project.materialPalette.map((m) => (
              <div key={m.name} className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-3 font-serif text-2xl text-bone-100">{m.name}</div>
                <div className="sm:col-span-6 text-xs text-ash-400 font-light leading-relaxed">{m.description}</div>
                <div className="sm:col-span-3 relative h-28 w-full overflow-hidden border border-white/15">
                  <Image src={m.image} alt={m.name} fill className="object-cover filter contrast-105" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DESIGN RESPONSE (SPLIT LAYOUT: LEFT NUMBER, RIGHT EXPLANATION) */}
      <section className="py-28 md:py-36 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Architectural Interventions
          </span>

          <div className="divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10">
            {project.designResponses.map((step) => (
              <div key={step.num} className="py-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-3 font-serif text-4xl sm:text-5xl text-brass-600 font-light">{step.num}</div>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-slate font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING QUOTE */}
      <section className="py-24 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="font-serif text-3xl sm:text-5xl text-bone-100 font-light leading-relaxed">
            {project.pullQuote}
          </blockquote>
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass-400 pt-2">
            VYOM Atelier — Principal Statement
          </p>
        </div>
      </section>

      {/* 8. RELATED PROJECTS (TEXT & IMAGE PAIRING, NO CARDS) */}
      <section className="py-28 px-6 sm:px-10 lg:px-16 border-b border-charcoal-900/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
              Related Monograph Works
            </span>
            <Link href="/projects" className="text-xs uppercase tracking-[0.25em] text-brass-600 hover:text-charcoal-900">
              View Archive ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedProjects.map((rel) => (
              <div key={rel.id} className="space-y-4 group">
                <Link href={`/projects/${rel.id}`}>
                  <div className="relative h-[340px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10">
                    <Image src={rel.heroImage} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </Link>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brass-600">{rel.typology} • {rel.year}</span>
                  <h3 className="font-serif text-2xl text-charcoal-900 group-hover:text-brass-600 transition-colors">
                    <Link href={`/projects/${rel.id}`}>{rel.title}</Link>
                  </h3>
                  <p className="text-xs text-muted-slate font-light line-clamp-2">{rel.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-28 bg-bone-100 text-charcoal-900 text-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Initiate Conversation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light">
            Commission a similar space
          </h2>
          <p className="text-xs sm:text-sm text-muted-slate font-light leading-relaxed">
            We schedule preliminary spatial consultations to discuss site geography, budget parameters, and architectural vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-charcoal-900 hover:text-brass-600 border-b border-charcoal-900 pb-1 font-medium transition-colors"
          >
            <span>Begin a Commission ↗</span>
          </Link>
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
    </div>
  );
}
