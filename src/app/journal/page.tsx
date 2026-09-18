"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, User, X, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ARTICLES, Article } from "@/data/journal";

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="pt-32 pb-24 bg-ivory-100 min-h-screen space-y-16">
      {/* Page Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-6">
        <SectionHeader
          subtitle="Editorial Salon"
          title="Architectural Essays & Monographs"
          description="Reflections on light, tactile material permanence, spatial acoustics, and climate-responsive architecture."
        />
      </section>

      {/* Articles Grid */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              className="group flex flex-col bg-ivory-200 border border-stone-300/80 cursor-pointer hover:border-bronze-500 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-charcoal-800">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-charcoal-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-bronze-400 border border-white/10">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-stone-500 uppercase tracking-wider font-light">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-bronze-500" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-bronze-500" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-charcoal-900 group-hover:text-bronze-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-soft-grey font-light line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-300/60 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-bronze-600">
                  <span>Read Monograph</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
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
              className="bg-ivory-100 text-charcoal-900 max-w-3xl w-full my-8 p-6 sm:p-12 relative border border-stone-300 shadow-2xl space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-stone-500 hover:text-charcoal-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Article Header */}
              <div className="space-y-4 border-b border-stone-300 pb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-bronze-600 font-medium">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light leading-snug">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center space-x-4 text-xs text-soft-grey font-light">
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-bronze-500" />
                    <span>By {selectedArticle.author}</span>
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-charcoal-800 border border-stone-300/80">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-soft-grey font-light leading-relaxed">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-stone-300 text-center">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-charcoal-900 text-ivory-100 text-xs uppercase tracking-[0.2em]"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
