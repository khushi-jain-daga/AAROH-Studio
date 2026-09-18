"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Entrance",
    subtitle: "Threshold & Pause",
    text: "A quiet threshold that slows the body before the home opens.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1800",
  },
  {
    num: "02",
    title: "Living Court",
    subtitle: "Sunlight & Volumetric Proportion",
    text: "Natural light falls across stone, timber and hand-finished plaster.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1800",
  },
  {
    num: "03",
    title: "Lounge",
    subtitle: "Tactile Sanctuary",
    text: "Low furniture, muted textiles and acoustic softness create stillness.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=85&w=1800",
  },
  {
    num: "04",
    title: "Retreat",
    subtitle: "Private Horizon",
    text: "Private rooms shaped for rest, shadow and morning light.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=85&w=1800",
  },
  {
    num: "05",
    title: "Material Detail",
    subtitle: "Tactile Craftsmanship",
    text: "Every surface is selected for touch, age and atmosphere.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1800",
  },
];

export default function SpaceWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);

  const current = STEPS[activeStep];

  return (
    <section id="walkthrough" className="py-24 sm:py-32 bg-[#0E0E0D] text-ivory-100 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10 selection:bg-brass-400 selection:text-charcoal-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
              Spatial Sequence Walkthrough
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory-100 font-light">
              Walk Through the Space
            </h2>
          </div>
          <p className="text-xs text-stone-400 font-light max-w-sm leading-relaxed">
            Experience the natural flow of an AAROH Studio residence, moving from threshold to sanctuary.
          </p>
        </div>

        {/* Walkthrough Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image Reveal Frame */}
          <div className="lg:col-span-8 relative h-[360px] sm:h-[540px] w-full overflow-hidden bg-charcoal-800 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.num}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover filter contrast-[1.04] brightness-[0.88]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D]/90 via-transparent to-black/20" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ivory-100 font-medium">
                  <span>{current.title} — {current.subtitle}</span>
                  <span className="text-brass-400 font-serif text-lg">{current.num} / 05</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Step Controls & Narrative */}
          <div className="lg:col-span-4 space-y-8">
            {/* Step Counter Indicator */}
            <div className="flex items-center space-x-2">
              {STEPS.map((s, idx) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(idx)}
                  className={`h-1 flex-1 transition-all duration-500 rounded-full ${
                    activeStep === idx ? "bg-brass-400" : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Go to step ${s.num}`}
                />
              ))}
            </div>

            {/* Narrative Box */}
            <div className="space-y-4 min-h-[160px] flex flex-col justify-center">
              <span className="font-serif text-5xl text-brass-400 font-light block">
                {current.num}
              </span>
              <h3 className="font-serif text-3xl text-ivory-100 font-light">
                {current.title}
              </h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed">
                {current.text}
              </p>
            </div>

            {/* Step Navigation Buttons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : STEPS.length - 1))}
                className="px-5 py-2.5 border border-white/15 text-xs uppercase tracking-[0.2em] text-ivory-100 hover:border-brass-400 hover:text-brass-400 transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : 0))}
                className="px-5 py-2.5 bg-brass-400 text-charcoal-900 text-xs uppercase tracking-[0.2em] font-medium hover:bg-ivory-100 transition-colors"
              >
                Next Room →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
