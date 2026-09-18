"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Mail, Phone } from "lucide-react";

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
    <footer className="bg-[#0A0A0A] text-ivory-100 pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Glow subtle radial */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-bronze-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          {/* Column 1: Brand & Newsletter (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="font-serif tracking-[0.3em] text-2xl uppercase text-ivory-50 block group-hover:text-bronze-400 transition-colors">
                AAROH STUDIO
              </span>
              <span className="text-[10px] tracking-[0.4em] text-stone-400 uppercase font-sans mt-1 block">
                Luxury Architecture + Interior Design
              </span>
            </Link>

            <p className="text-sm font-light text-stone-300 max-w-md leading-relaxed">
              Creating calm, timeless, material-rich spaces born from natural light, climate intelligence, and regional heritage. Headquartered in Jaipur, available globally.
            </p>

            {/* Newsletter */}
            <div className="pt-2 space-y-3">
              <h4 className="text-xs uppercase tracking-[0.25em] text-bronze-400 font-medium">
                Architectural Journal & Essays
              </h4>
              <form onSubmit={handleNewsletter} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for architectural monographs"
                  required
                  className="bg-charcoal-900 border border-white/15 px-4 py-3.5 text-xs text-ivory-100 placeholder-stone-500 focus:outline-none focus:border-bronze-400 flex-grow rounded-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-bronze-400 text-charcoal-950 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-ivory-100 transition-colors flex items-center shrink-0"
                >
                  {subscribed ? (
                    <span className="flex items-center space-x-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Subscribed</span>
                    </span>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-bronze-300 italic">
                  Thank you for subscribing to our architectural publication.
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Studio Locations (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-bronze-400 border-b border-white/10 pb-3 font-medium">
              Studio Locations
            </h4>
            <div className="space-y-4 text-xs font-light text-stone-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-ivory-100 uppercase tracking-wider mb-1">Jaipur Atelier</p>
                  <p>32 Prithviraj Road, C-Scheme</p>
                  <p>Jaipur, Rajasthan 302001, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 border-t border-white/5 pt-3">
                <Mail className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-ivory-100 uppercase tracking-wider mb-1">Digital Desk</p>
                  <a href="mailto:concierge@aarohstudio.com" className="text-bronze-400 hover:underline block">
                    concierge@aarohstudio.com
                  </a>
                  <a href="mailto:press@aarohstudio.com" className="text-stone-400 hover:underline block mt-0.5">
                    press@aarohstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 border-t border-white/5 pt-3">
                <Phone className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-ivory-100 uppercase tracking-wider mb-1">Direct Line</p>
                  <p className="text-stone-300">+91 (141) 238-9042</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Sitemap (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-bronze-400 border-b border-white/10 pb-3 font-medium">
              Sitemap
            </h4>
            <ul className="space-y-3 text-xs text-stone-300 font-light">
              {["Home", "Projects", "Studio", "Services", "Journal", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-bronze-400 transition-colors flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-1 text-bronze-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Press & Socials (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-bronze-400 border-b border-white/10 pb-3 font-medium">
              Social Channels
            </h4>
            <ul className="space-y-3 text-xs text-stone-300 font-light">
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
                    className="hover:text-bronze-400 transition-colors flex items-center space-x-1"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-light">
          <p>© {new Date().getFullYear()} AAROH Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-stone-300 cursor-pointer">Architectural Accreditation</span>
          </div>
        </div>

        {/* Giant Signature Watermark */}
        <div className="mt-14 pt-6 border-t border-white/5 text-center pointer-events-none select-none">
          <span className="font-serif text-[12vw] leading-none text-white/[0.025] uppercase tracking-[0.12em] block">
            AAROH STUDIO
          </span>
        </div>
      </div>
    </footer>
  );
}
