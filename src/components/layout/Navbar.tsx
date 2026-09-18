"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MapPin, Mail } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Studio", href: "/studio" },
  { name: "Services", href: "/services" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
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
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-4 text-ivory-100 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-7 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo Mark */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif tracking-[0.3em] text-lg sm:text-xl font-light uppercase text-ivory-50 transition-colors duration-500 group-hover:text-bronze-400">
              AAROH STUDIO
            </span>
            <span className="text-[9px] tracking-[0.4em] text-stone-400 uppercase font-sans font-medium mt-0.5 group-hover:text-stone-200 transition-colors">
              Jaipur • Architecture & Interiors
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
                  className={`text-[11px] uppercase tracking-[0.25em] transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? "text-bronze-400 font-medium"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-bronze-400 shadow-[0_0_8px_rgba(197,160,89,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] px-6 py-2.5 border border-bronze-400/80 text-bronze-400 hover:bg-bronze-400 hover:text-charcoal-950 transition-all duration-500 shadow-md group"
            >
              <span>Begin Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-200 hover:text-bronze-400 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-bronze-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] text-ivory-100 flex flex-col justify-between p-8 pt-28 md:hidden overflow-y-auto border-b border-white/10"
          >
            {/* Background Aesthetic Watermark */}
            <div className="absolute right-[-10%] bottom-[10%] text-[140px] font-serif text-white/[0.03] pointer-events-none select-none">
              AAROH
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-6 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.35em] text-bronze-400 border-b border-white/10 pb-3 block">
                Atelier Navigation
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-serif tracking-wide block transition-all ${
                      pathname === link.href
                        ? "text-bronze-400 italic pl-3 border-l-2 border-bronze-400"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-8 border-t border-white/10 space-y-6 relative z-10">
              <div className="space-y-3 text-xs text-stone-300 font-light">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="uppercase tracking-wider text-ivory-100 font-medium">Jaipur Studio</p>
                    <p className="text-stone-400">C-Scheme, Jaipur 302001, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 border-t border-white/5 pt-3">
                  <Mail className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="uppercase tracking-wider text-ivory-100 font-medium">Inquiries</p>
                    <a href="mailto:concierge@aarohstudio.com" className="text-bronze-400 hover:underline">
                      concierge@aarohstudio.com
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.25em] px-6 py-4 bg-bronze-400 text-charcoal-950 font-medium hover:bg-ivory-100 transition-colors shadow-xl"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
