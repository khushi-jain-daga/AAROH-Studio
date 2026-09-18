"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { STUDIO_DATA } from "@/data/studio";

export default function StudioPage() {
  return (
    <div className="pt-32 pb-28 bg-bone-100 min-h-screen space-y-24 md:space-y-36 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
      {/* 1. HERO HEADER */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-10">
        <div className="space-y-4 border-b border-charcoal-900/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            About the Practice
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 font-light tracking-tight leading-tight">
            {STUDIO_DATA.intro.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-slate font-light max-w-2xl leading-relaxed">
            {STUDIO_DATA.intro.subtitle}
          </p>
        </div>

        <div className="relative h-[480px] sm:h-[620px] w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2000"
            alt="VYOM Atelier Design Lab"
            fill
            className="object-cover filter contrast-[1.04]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-xs uppercase tracking-[0.25em] text-bone-100 flex items-center justify-between border-t border-white/20 pt-4">
            <span>Jaipur Atelier & Material Laboratory</span>
            <span className="text-brass-300 font-medium">Est. 2012</span>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO & FOUNDERS VISION */}
      <section className="py-28 bg-[#0B0B0B] text-bone-100 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10">
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
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
              Founders' Vision
            </span>

            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bone-100 font-light leading-snug">
              "{STUDIO_DATA.foundersNote.quote}"
            </blockquote>

            <div className="space-y-4 text-ash-300 font-light text-xs sm:text-sm leading-relaxed">
              {STUDIO_DATA.intro.manifesto.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/15">
              <p className="font-serif text-xl text-bone-100">{STUDIO_DATA.foundersNote.author}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-brass-400 mt-0.5">
                {STUDIO_DATA.foundersNote.title}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-16">
        <div className="space-y-3 border-b border-charcoal-900/10 pb-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Pillars of Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
            Core Design Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_DATA.values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-bone-200 border border-charcoal-900/10 p-8 space-y-4 hover:border-charcoal-900 transition-colors"
            >
              <span className="font-serif text-3xl text-brass-600 font-light block">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-2xl text-charcoal-900">{val.title}</h3>
              <p className="text-xs sm:text-sm text-muted-slate font-light leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section className="py-28 bg-bone-200 px-6 sm:px-10 lg:px-16 border-t border-b border-charcoal-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
              Client Perspectives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
              Reflections from Estate & Resort Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_DATA.testimonials.map((t, idx) => (
              <motion.div
                key={t.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-bone-100 border border-charcoal-900/10 p-8 space-y-6 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <Quote className="w-7 h-7 text-brass-400 opacity-70" />
                  <p className="text-xs sm:text-sm text-muted-slate font-light italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-900/10 space-y-1">
                  <p className="font-serif text-lg text-charcoal-900">{t.client}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brass-600 font-medium">
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
        <div className="space-y-3 border-b border-charcoal-900/10 pb-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Leadership & Artisans
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
            Senior Practice Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_DATA.team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="space-y-4 bg-bone-200 border border-charcoal-900/10 p-5 group"
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
                <h3 className="font-serif text-xl text-charcoal-900">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brass-600 font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-muted-slate font-light pt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. PRESS FEATURES */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-12">
        <div className="space-y-3 border-b border-charcoal-900/10 pb-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Editorial Recognition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light">
            Press & Monograph Features
          </h2>
        </div>

        <div className="divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10">
          {STUDIO_DATA.press.map((item, idx) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-bone-200/60 transition-colors px-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brass-600 font-medium">
                  {item.publication} • {item.year}
                </span>
                <h3 className="font-serif text-xl text-charcoal-900 font-light">
                  "{item.headline}"
                </h3>
              </div>
              <div className="flex items-center text-xs uppercase tracking-[0.2em] text-muted-slate hover:text-charcoal-900 shrink-0">
                <span>Read Feature</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subtle Availability CTA */}
      <section className="py-28 bg-[#0B0B0B] text-bone-100 text-center px-6 sm:px-10 lg:px-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium block">
            Initiate Dialogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-bone-100 font-light">
            Request Studio Availability
          </h2>
          <p className="text-xs sm:text-sm text-ash-300 font-light leading-relaxed">
            We schedule preliminary consultations with estate owners, hospitality developers, and heritage proprietors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white border-b border-brass-400 pb-1 font-medium transition-colors"
          >
            <span>Begin Commission Dialogue ↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
