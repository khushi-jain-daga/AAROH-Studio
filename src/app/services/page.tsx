"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  const customCtas: Record<string, { label: string; text: string }> = {
    architecture: {
      label: "Discuss a Residence ↗",
      text: "Interested in master planning a private residential estate?",
    },
    "interior-design": {
      label: "Discuss an Interior Sanctum ↗",
      text: "Envisioning bespoke millwork and quiet tactile interior joinery?",
    },
    "hospitality-spaces": {
      label: "Plan a Hospitality Retreat ↗",
      text: "Planning an immersive boutique resort or wellness sanctuary?",
    },
    "renovation-adaptive-reuse": {
      label: "Begin a Renovation ↗",
      text: "Reviving a heritage haveli or historic structure?",
    },
    "styling-art-direction": {
      label: "Request Studio Availability ↗",
      text: "Curating rare fine art, antiques, and architectural decor?",
    },
  };

  return (
    <div className="pt-32 pb-28 bg-bone-100 min-h-screen space-y-24 md:space-y-36 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
      {/* Hero Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="space-y-4 border-b border-charcoal-900/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Manifesto of Practice
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 font-light tracking-tight">
            Architectural & Interior Disciplines
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-slate font-light max-w-2xl leading-relaxed">
            End-to-end architectural design, luxury interior architecture, hospitality master planning, haveli adaptive reuse, and fine art curation.
          </p>
        </div>
      </section>

      {/* Services List with Subtle Contextual CTAs */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-24">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const ctaConfig = customCtas[service.id] || {
            label: "Request Studio Availability ↗",
            text: "Interested in discussing your spatial parameters?",
          };

          return (
            <React.Fragment key={service.id}>
              <div id={service.id} className="scroll-mt-32 space-y-16">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-7 space-y-8 ${isEven ? "" : "lg:order-2"}`}
                  >
                    <div className="space-y-2">
                      <span className="font-serif text-3xl text-brass-600 font-light block">
                        {service.number}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light">
                        {service.title}
                      </h2>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-600">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="space-y-4 text-sm sm:text-base text-muted-slate font-light leading-relaxed">
                      <p>{service.description}</p>
                      <blockquote className="italic border-l-2 border-brass-400 pl-4 text-charcoal-900 font-serif">
                        "{service.philosophy}"
                      </blockquote>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-[10px] uppercase tracking-[0.25em] text-charcoal-900 font-medium">
                        Key Deliverables:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-slate font-light">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brass-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitability & Contextual CTA */}
                    <div className="bg-bone-200 border-l-2 border-charcoal-900 p-5 space-y-4">
                      <div className="text-xs">
                        <span className="font-medium uppercase tracking-wider text-charcoal-900 block mb-1">
                          Client Suitability Profile:
                        </span>
                        <p className="text-muted-slate font-light">{service.idealFor}</p>
                      </div>

                      <div className="pt-3 border-t border-charcoal-900/10 flex items-center justify-between">
                        <span className="text-xs text-charcoal-900 font-medium">
                          {ctaConfig.text}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-brass-600 hover:text-charcoal-900 font-medium transition-colors"
                        >
                          <span>{ctaConfig.label}</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}
                  >
                    <div className="relative h-[480px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover filter contrast-[1.02]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>

      {/* Final Availability CTA */}
      <section className="py-28 bg-[#0B0B0B] text-bone-100 text-center px-6 sm:px-10 lg:px-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
            Practice Capacity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-bone-100 font-light">
            Request Studio Availability
          </h2>
          <p className="text-xs sm:text-sm text-ash-300 font-light leading-relaxed">
            To ensure uncompromised design oversight and material authenticity, our practice accepts a limited number of primary commissions per calendar year.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white border-b border-brass-400 pb-1 font-medium transition-colors"
          >
            <span>Check Studio Capacity ↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
