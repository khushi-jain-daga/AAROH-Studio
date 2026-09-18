"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Work", href: "/" },
  { name: "Archive", href: "/projects" },
  { name: "Atelier", href: "/studio" },
  { name: "Manifesto", href: "/services" },
  { name: "Journal", href: "/journal" },
  { name: "Commission", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/10 py-4 text-bone-100 shadow-2xl"
            : "bg-gradient-to-b from-black/70 via-black/20 to-transparent py-7 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo Mark */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif tracking-[0.3em] text-xl font-light uppercase text-bone-100 transition-colors duration-500 group-hover:text-brass-300">
              VYOM
            </span>
            <span className="text-[9px] tracking-[0.45em] text-ash-400 uppercase font-sans font-medium -mt-0.5 group-hover:text-bone-200 transition-colors">
              ATELIER
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.25em] transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-brass-300 font-medium"
                      : "text-ash-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="vyom-nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-brass-300"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Subtle Text Link Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-[0.25em] text-brass-300 hover:text-white transition-colors duration-300 group"
            >
              <span>Begin a Commission</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-xs uppercase tracking-[0.25em] text-bone-100 hover:text-brass-300 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0B] text-bone-100 flex flex-col justify-between p-8 pt-28 md:hidden overflow-y-auto"
          >
            <div className="absolute right-[-10%] bottom-[15%] text-[140px] font-serif text-white/[0.025] pointer-events-none select-none">
              VYOM
            </div>

            <div className="flex flex-col space-y-7 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 border-b border-white/10 pb-3 block">
                Atelier Directory
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-serif tracking-wide block transition-all ${
                      pathname === link.href
                        ? "text-brass-300 italic pl-3 border-l border-brass-400"
                        : "text-ash-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 space-y-6 relative z-10">
              <div className="text-xs text-ash-400 font-light space-y-1">
                <p className="uppercase tracking-wider text-bone-100 font-medium">Jaipur Atelier</p>
                <p>32 Prithviraj Road, C-Scheme, Jaipur 302001, India</p>
                <a href="mailto:inquiry@vyomatelier.com" className="text-brass-300 hover:underline block pt-1">
                  inquiry@vyomatelier.com
                </a>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] py-3.5 border-b border-brass-400 text-brass-300 hover:text-white transition-colors"
              >
                <span>Begin a Commission</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
