"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto max-w-3xl",
    right: "text-right items-end ml-auto",
  };

  const textTheme = {
    light: {
      subtitle: "text-bronze-600",
      title: "text-charcoal-950",
      description: "text-soft-grey",
      line: "bg-bronze-400/50",
    },
    dark: {
      subtitle: "text-bronze-400",
      title: "text-ivory-50",
      description: "text-stone-300",
      line: "bg-bronze-400/50",
    },
  };

  return (
    <div className={`flex flex-col space-y-3.5 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <span className={`text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium ${textTheme[theme].subtitle}`}>
            {subtitle}
          </span>
          <div className={`w-8 sm:w-10 h-[1px] ${textTheme[theme].line}`} />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.08 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight ${textTheme[theme].title} text-balance leading-[1.12]`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className={`text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl ${textTheme[theme].description} pt-1`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
