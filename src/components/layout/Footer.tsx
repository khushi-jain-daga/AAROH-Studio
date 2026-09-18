"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0B0B0B] text-bone-100 pt-28 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          {/* Column 1: Brand & Manifesto (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="font-serif tracking-[0.3em] text-3xl uppercase text-bone-100 block group-hover:text-brass-300 transition-colors">
                VYOM ATELIER
              </span>
              <span className="text-[9px] tracking-[0.45em] text-ash-400 uppercase font-sans mt-1.5 block">
                Architecture • Interior Architecture • Monograph
              </span>
            </Link>

            <p className="text-xs sm:text-sm font-light text-ash-300 max-w-md leading-relaxed">
              A quiet architectural atelier shaping private residences, retreats and cultural interiors through light, proportion, silence and material restraint.
            </p>

            {/* Monograph Salon Subscription */}
            <div className="pt-2 space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-brass-300 font-medium">
                Subscribe to Architectural Monographs
              </h4>
              <form onSubmit={handleNewsletter} className="flex max-w-md border-b border-white/20 focus-within:border-brass-300 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="bg-transparent py-3 text-xs text-bone-100 placeholder-ash-400 focus:outline-none flex-grow rounded-none"
                />
                <button
                  type="submit"
                  className="text-xs uppercase tracking-[0.25em] text-brass-300 hover:text-white transition-colors flex items-center shrink-0 pl-4 py-3"
                >
                  {subscribed ? (
                    <span className="flex items-center space-x-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Subscribed</span>
                    </span>
                  ) : (
                    <span>Subscribe ↗</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Studio Coordinates (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-brass-300 border-b border-white/10 pb-3 font-medium">
              Studio Coordinates
            </h4>
            <div className="space-y-4 text-xs font-light text-ash-300">
              <div>
                <p className="font-medium text-bone-100 uppercase tracking-wider mb-1">Jaipur Atelier</p>
                <p>32 Prithviraj Road, C-Scheme</p>
                <p>Jaipur, Rajasthan 302001, India</p>
              </div>

              <div className="border-t border-white/5 pt-3">
                <p className="font-medium text-bone-100 uppercase tracking-wider mb-1">Direct Inquiries</p>
                <a href="mailto:inquiry@vyomatelier.com" className="text-brass-300 hover:underline block">
                  inquiry@vyomatelier.com
                </a>
                <a href="mailto:press@vyomatelier.com" className="text-ash-400 hover:underline block mt-0.5">
                  press@vyomatelier.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-brass-300 border-b border-white/10 pb-3 font-medium">
              Directory
            </h4>
            <ul className="space-y-3 text-xs text-ash-300 font-light">
              {[
                { name: "Work", href: "/" },
                { name: "Archive", href: "/projects" },
                { name: "Atelier", href: "/studio" },
                { name: "Manifesto", href: "/services" },
                { name: "Journal", href: "/journal" },
                { name: "Commission", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-brass-300 transition-colors flex items-center group">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Channels (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-brass-300 border-b border-white/10 pb-3 font-medium">
              Channels
            </h4>
            <ul className="space-y-3 text-xs text-ash-300 font-light">
              {[
                { name: "Instagram", href: "https://instagram.com" },
                { name: "Pinterest", href: "https://pinterest.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
                { name: "ArchDaily", href: "https://archdaily.com" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brass-300 transition-colors flex items-center space-x-1"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-ash-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ash-400 font-light">
          <p>© {new Date().getFullYear()} VYOM Atelier. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-bone-100 cursor-pointer">Privacy & Terms</span>
            <span className="hover:text-bone-100 cursor-pointer">Architectural Accreditation</span>
          </div>
        </div>

        {/* Giant Signature Watermark */}
        <div className="mt-16 pt-6 border-t border-white/5 text-center pointer-events-none select-none">
          <span className="font-serif text-[12vw] leading-none text-white/[0.02] uppercase tracking-[0.15em] block">
            VYOM ATELIER
          </span>
        </div>
      </div>
    </footer>
  );
}
