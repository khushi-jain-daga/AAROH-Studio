"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { STUDIO_DATA } from "@/data/studio";

export default function StudioPage() {
  return (
    <div className="pt-32 pb-24 bg-ivory-100 min-h-screen space-y-24 md:space-y-32 text-charcoal-950 selection:bg-bronze-400 selection:text-ivory-100">
      {/* 1. HERO HEADER */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-12">
        <SectionHeader
          subtitle="About AAROH Studio"
          title={STUDIO_DATA.intro.title}
          description={STUDIO_DATA.intro.subtitle}
        />

        <div className="relative h-[480px] sm:h-[600px] w-full overflow-hidden border border-stone-300/80 bg-charcoal-900 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2000"
            alt="AAROH Studio Design Atelier"
            fill
            className="object-cover filter contrast-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-[0.25em] text-ivory-100 flex items-center justify-between border-t border-white/20 pt-4">
            <span>Jaipur Atelier & Material Laboratory</span>
            <span className="text-bronze-400 font-medium">Est. 2012</span>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO & FOUNDERS VISION */}
      <section className="py-24 bg-[#0A0A0A] text-ivory-100 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[520px] w-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={STUDIO_DATA.foundersNote.image}
                alt={STUDIO_DATA.foundersNote.author}
                fill
                className="object-cover filter contrast-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-bronze-400 font-medium">
              Founders' Vision
            </span>

            <blockquote className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light leading-snug">
              "{STUDIO_DATA.foundersNote.quote}"
            </blockquote>

            <div className="space-y-4 text-stone-300 font-light text-sm sm:text-base leading-relaxed">
              {STUDIO_DATA.intro.manifesto.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/15">
              <p className="font-serif text-xl text-ivory-100">{STUDIO_DATA.foundersNote.author}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-bronze-400">
                {STUDIO_DATA.foundersNote.title}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-16">
        <SectionHeader
          subtitle="Pillars of Practice"
          title="Studio Values"
          description="Four fundamental tenets governing every spatial sketch, material specification, and structural decision."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_DATA.values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-ivory-200 border border-stone-300/80 p-8 space-y-4 hover:border-bronze-500 transition-colors"
            >
              <span className="font-serif text-3xl text-bronze-500 font-light block">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-2xl text-charcoal-950">{val.title}</h3>
              <p className="text-xs sm:text-sm text-soft-grey font-light leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS SECTION (TRUST BUILDING) */}
      <section className="py-24 bg-ivory-200 px-6 sm:px-10 lg:px-16 border-t border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeader
            subtitle="Client Perspectives"
            title="Reflections from Estate & Resort Owners"
            description="Statements from discerning homeowners and hospitality visionaries who partnered with AAROH Studio."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_DATA.testimonials.map((t, idx) => (
              <motion.div
                key={t.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-ivory-100 border border-stone-300/80 p-8 space-y-6 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-bronze-400 opacity-60" />
                  <p className="text-xs sm:text-sm text-soft-grey font-light italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-300/60 space-y-1">
                  <p className="font-serif text-lg text-charcoal-950">{t.client}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-bronze-600 font-medium">
                    {t.role} • {t.project} ({t.location})
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SPOTLIGHT */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-16">
        <SectionHeader
          subtitle="Leadership & Artisans"
          title="Senior Practice Team"
          description="Our interdisciplinary team of architects, interior architects, and structural conservators."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_DATA.team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="space-y-4 bg-ivory-200 border border-stone-300/80 p-5 group"
            >
              <div className="relative h-72 w-full overflow-hidden bg-charcoal-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-charcoal-950">{member.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-bronze-600 font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-soft-grey font-light pt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. PRESS FEATURES */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-12">
        <SectionHeader
          subtitle="Editorial Recognition"
          title="Press & Monograph Features"
          description="Selected publications spotlighting AAROH Studio's contribution to modern desert architecture and quiet interior design."
        />

        <div className="divide-y divide-stone-300 border-t border-b border-stone-300">
          {STUDIO_DATA.press.map((item, idx) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-stone-200/50 transition-colors px-4"
            >
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.25em] text-bronze-600 font-medium">
                  {item.publication} • {item.year}
                </span>
                <h3 className="font-serif text-xl text-charcoal-950 font-light">
                  "{item.headline}"
                </h3>
              </div>
              <div className="flex items-center text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-charcoal-950 shrink-0">
                <span>Read Feature</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subtle Availability CTA */}
      <section className="py-24 bg-[#0A0A0A] text-ivory-100 text-center px-6 sm:px-10 lg:px-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-bronze-400 font-medium">
            Initiate Conversation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light">
            Request Studio Availability
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            We schedule preliminary consultations with estate owners, hospitality developers, and heritage proprietors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-bronze-400 text-charcoal-950 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ivory-100 transition-colors shadow-2xl"
          >
            <span>Begin Consultation Dialogue</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
