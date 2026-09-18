"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CinematicHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0E0E0D] text-ivory-100 selection:bg-brass-400 selection:text-charcoal-900">
      {/* Background Cinematic Interior Image with Subtle Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400"
            alt="AAROH Studio Luxury Interior"
            fill
            className="object-cover filter contrast-[1.05] brightness-[0.55]"
            priority
          />
        </motion.div>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D] via-[#0E0E0D]/40 to-[#0E0E0D]/60 pointer-events-none" />
      </div>

      {/* Hero Narrative Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-brass-400 font-sans font-medium block">
            AAROH Studio • Residential & Interior Architecture
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-100 font-light tracking-tight leading-[1.06] max-w-5xl mx-auto">
            Homes shaped by light, silence and material.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base text-stone-400 font-sans font-light max-w-2xl mx-auto leading-relaxed"
        >
          AAROH Studio creates refined residences, retreats and interiors with a calm, timeless sensibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="#walkthrough"
            className="w-full sm:w-auto px-8 py-4 bg-brass-400 text-charcoal-900 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ivory-100 transition-all duration-300 shadow-xl inline-flex items-center justify-center space-x-2 group"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 border border-ivory-100/30 text-ivory-100 text-xs uppercase tracking-[0.25em] font-medium hover:border-brass-400 hover:text-brass-400 transition-all duration-300 inline-flex items-center justify-center"
          >
            <span>Begin a Project</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Scroll to walkthrough</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-brass-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
