"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, User, X, ArrowUpRight } from "lucide-react";
import { ARTICLES, Article } from "@/data/journal";

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="pt-28 pb-20 bg-bone-100 min-h-screen space-y-12 text-charcoal-900 selection:bg-charcoal-900 selection:text-bone-100">
      {/* Page Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="space-y-4 border-b border-charcoal-900/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Editorial Monograph Salon
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 font-light tracking-tight">
            Architectural Essays & Monographs
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-slate font-light max-w-2xl leading-relaxed">
            Reflections on light, Araish lime plaster, spatial acoustics, courtyard cooling, and material longevity.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group flex flex-col bg-bone-200 border border-charcoal-900/10 cursor-pointer hover:border-charcoal-900 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-charcoal-900">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-[#0B0B0B]/85 backdrop-blur-sm px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-brass-300 border border-white/10">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-[10px] text-muted-slate uppercase tracking-widest font-light">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 group-hover:text-brass-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-muted-slate font-light line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-900/10 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-brass-600">
                  <span>Read Monograph</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL ARTICLE READER MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bone-100 text-charcoal-900 max-w-3xl w-full my-8 p-6 sm:p-12 relative border border-charcoal-900/10 shadow-2xl space-y-8"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-muted-slate hover:text-charcoal-900 transition-colors text-xs uppercase tracking-widest"
              >
                Close ✕
              </button>

              <div className="space-y-4 border-b border-charcoal-900/10 pb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brass-600 font-medium">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light leading-snug">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center space-x-4 text-xs text-muted-slate font-light">
                  <span>By {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-charcoal-900 border border-charcoal-900/10">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-muted-slate font-light leading-relaxed">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-charcoal-900/10 text-center">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-charcoal-900 text-bone-100 text-xs uppercase tracking-[0.2em]"
                >
                  Close Monograph
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
