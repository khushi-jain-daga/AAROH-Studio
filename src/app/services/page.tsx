"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  const customCtas: Record<string, { label: string; text: string }> = {
    architecture: {
      label: "Discuss a Residence",
      text: "Interested in master planning a private residential estate?",
    },
    "interior-design": {
      label: "Discuss an Interior Sanctum",
      text: "Envisioning bespoke millwork and quiet tactile interior joinery?",
    },
    "hospitality-spaces": {
      label: "Plan a Hospitality Space",
      text: "Planning an immersive boutique resort or wellness sanctuary?",
    },
    "renovation-adaptive-reuse": {
      label: "Begin a Renovation",
      text: "Reviving a heritage haveli or historic structure?",
    },
    "styling-art-direction": {
      label: "Request Studio Availability",
      text: "Curating rare fine art, antiques, and architectural decor?",
    },
  };

  return (
    <div className="pt-32 pb-24 bg-ivory-100 min-h-screen space-y-24 md:space-y-32 selection:bg-bronze-400 selection:text-ivory-100">
      {/* Hero Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-6">
        <SectionHeader
          subtitle="Our Practice Areas"
          title="Architectural & Interior Services"
          description="We offer end-to-end architectural design, luxury interior architecture, hospitality master planning, adaptive reuse, and bespoke art direction."
        />
      </section>

      {/* Services List with Subtle Contextual CTAs */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-24">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const ctaConfig = customCtas[service.id] || {
            label: "Request Studio Availability",
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
                      <span className="font-serif text-3xl text-bronze-500 font-light block">
                        {service.number}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-950 font-light">
                        {service.title}
                      </h2>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-600">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="space-y-4 text-sm sm:text-base text-soft-grey font-light leading-relaxed">
                      <p>{service.description}</p>
                      <blockquote className="italic border-l-2 border-bronze-400 pl-4 text-charcoal-950 font-serif">
                        "{service.philosophy}"
                      </blockquote>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs uppercase tracking-[0.25em] text-charcoal-950 font-medium">
                        Key Deliverables:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-soft-grey">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-bronze-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitability & Contextual CTA */}
                    <div className="bg-ivory-200 border-l-2 border-charcoal-950 p-5 space-y-4">
                      <div className="text-xs">
                        <span className="font-medium uppercase tracking-wider text-charcoal-950 block mb-1">
                          Client Suitability Profile:
                        </span>
                        <p className="text-soft-grey font-light">{service.idealFor}</p>
                      </div>

                      <div className="pt-3 border-t border-stone-300/80 flex items-center justify-between">
                        <span className="text-xs text-charcoal-950 font-medium">
                          {ctaConfig.text}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-bronze-600 hover:text-charcoal-950 font-medium transition-colors"
                        >
                          <span>{ctaConfig.label}</span>
                          <ArrowUpRight className="w-4 h-4" />
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
                    <div className="relative h-[480px] w-full overflow-hidden border border-stone-300/80 bg-charcoal-900 shadow-xl">
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
      <section className="py-24 bg-[#0A0A0A] text-ivory-100 text-center px-6 sm:px-10 lg:px-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-bronze-400 font-medium">
            Practice Capacity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
            Request Studio Availability
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            To ensure complete design supervision and material authenticity, our studio accepts a limited number of primary commissions per calendar year.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-bronze-400 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ivory-100 transition-colors shadow-2xl"
          >
            <span>Check Studio Capacity</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
