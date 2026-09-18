"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ChevronDown, Lock } from "lucide-react";

const FAQS = [
  {
    q: "How early should we involve the studio?",
    a: "We recommend engaging our practice at the site selection or master planning phase before architectural plans are locked. This allows us to optimize passive solar cooling, natural wind corridors, sun trajectories, and site topography from day one.",
  },
  {
    q: "Do you take projects outside Jaipur?",
    a: "Yes. While our primary design laboratory is based in Jaipur, India, over 40% of our portfolio spans coastal Alibaug, Udaipur, Rishikesh, Shimla, Mumbai, and private international clients globally.",
  },
  {
    q: "What is the typical design timeline?",
    a: "A typical 6,000–10,000 sq. ft. luxury residence requires 4 to 6 months of detailed concept and working drawing development, followed by 12 to 18 months of supervised on-site execution.",
  },
  {
    q: "Do you handle execution?",
    a: "Yes. Our studio provides full on-site artisan coordination, structural supervision, custom millwork inspection, and editorial art direction handover to ensure exact fidelity to technical drawings.",
  },
  {
    q: "How does the first consultation work?",
    a: "The initial consultation is a confidential 45-minute dialogue (in-person at our Jaipur Atelier or virtually) to review your site parameters, spatial vision, budget scope, and studio availability.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Private Residential Estate",
    location: "",
    budget: "₹3 Cr – ₹10 Cr",
    timeline: "3–6 Months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-bone-100 min-h-screen space-y-16 md:space-y-20 text-charcoal-950 selection:bg-charcoal-900 selection:text-bone-100">
      {/* Page Header */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-6">
        <div className="space-y-4 border-b border-charcoal-900/10 pb-8">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium block">
            Initiate Dialogue
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal-900 font-light tracking-tight">
            Begin a Commission Dialogue
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-slate font-light max-w-2xl leading-relaxed">
            We welcome conversations regarding private residential estates, luxury hospitality sanctuaries, and cultural commissions globally.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-bone-200 border border-charcoal-900/10 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-3 border-b border-charcoal-900/10 pb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brass-600 font-medium">
                Confidential Inquiry
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
                Project Commission Parameters
              </h2>
              <p className="text-xs text-muted-slate font-light leading-relaxed">
                Please share initial spatial details below. Our founding principals personally review all inquiries to determine studio capacity.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-5 bg-bone-100 border border-brass-400/40 p-8 shadow-sm"
              >
                <CheckCircle2 className="w-12 h-12 text-brass-500 mx-auto" />
                <h3 className="font-serif text-3xl text-charcoal-950">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-muted-slate font-light max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our principal design team will review your project parameters ({formData.projectType}, {formData.location}) and respond within 24–48 business hours to arrange an initial conversation.
                </p>
                <div className="pt-4 border-t border-charcoal-900/10">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-[0.2em] text-brass-600 hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full bg-bone-100 border border-charcoal-900/10 px-4 py-3.5 text-charcoal-950 placeholder-muted-slate focus:outline-none focus:border-brass-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="v.singh@domain.com"
                      className="w-full bg-bone-100 border border-charcoal-900/10 px-4 py-3.5 text-charcoal-950 placeholder-muted-slate focus:outline-none focus:border-brass-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                      Direct Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98290 00000"
                      className="w-full bg-bone-100 border border-charcoal-900/10 px-4 py-3.5 text-charcoal-950 placeholder-muted-slate focus:outline-none focus:border-brass-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Jaipur, Rishikesh, Alibaug, London"
                      className="w-full bg-bone-100 border border-charcoal-900/10 px-4 py-3.5 text-charcoal-950 placeholder-muted-slate focus:outline-none focus:border-brass-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Typology & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-bone-100 border border-charcoal-900/10 px-4 py-3.5 text-charcoal-950 focus:outline-none focus:border-brass-500 transition-colors"
                    >
                      <option value="Private Residential Estate">Private Residential Estate</option>
                      <option value="Boutique Resort / Hospitality">Boutique Resort / Hospitality</option>
                      <option value="Heritage Haveli Renovation">Heritage Haveli Renovation</option>
                      <option value="High-End Commercial Flagship">High-End Commercial Flagship</option>
                      <option value="Custom Architectural Scope">Custom Architectural Scope</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-bone-100 border border-charcoal-900/10 px-4 py-3.5 text-charcoal-950 focus:outline-none focus:border-brass-500 transition-colors"
                    >
                      <option value="₹1.5 Cr – ₹3 Cr">₹1.5 Cr – ₹3 Cr</option>
                      <option value="₹3 Cr – ₹10 Cr">₹3 Cr – ₹10 Cr</option>
                      <option value="₹10 Cr+">₹10 Cr+</option>
                      <option value="Undisclosed / Institutional">Undisclosed / Institutional</option>
                    </select>
                  </div>
                </div>

                {/* Start Timeline Selector */}
                <div className="space-y-2">
                  <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                    Expected Start Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Immediate", "3–6 Months", "6–12 Months", "Concept Phase"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`py-2.5 px-3 text-[11px] uppercase tracking-wider border transition-colors ${
                          formData.timeline === t
                            ? "bg-charcoal-950 text-bone-100 border-charcoal-950 font-medium"
                            : "bg-bone-100 text-muted-slate border-ash-300 hover:border-charcoal-950"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message & Vision */}
                <div className="space-y-2">
                  <label className="uppercase tracking-[0.2em] text-charcoal-900 font-medium block">
                    Project Vision & Spatial Requirements *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your plot geography, spatial priorities, material preferences, and key goals..."
                    className="w-full bg-bone-100 border border-charcoal-900/10 p-4 text-charcoal-950 placeholder-muted-slate focus:outline-none focus:border-brass-500 transition-colors"
                  />
                  <p className="text-[10px] text-muted-slate italic pt-1 flex items-center space-x-1">
                    <Lock className="w-3 h-3 text-brass-600" />
                    <span>Your data is protected under strict client confidentiality protocols.</span>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-charcoal-950 text-bone-100 text-xs uppercase tracking-[0.25em] font-medium hover:bg-brass-500 hover:text-charcoal-950 transition-all duration-300 shadow-xl"
                >
                  Submit Confidential Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Details Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0B0B0B] text-bone-100 p-8 sm:p-10 border border-white/10 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-brass-400 font-medium">
                Jaipur Atelier
              </span>

              <h3 className="font-serif text-2xl text-bone-100 font-light">
                Direct Contact & Coordinates
              </h3>

              <div className="space-y-4 text-xs font-light text-ash-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-brass-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-bone-100 uppercase tracking-wider mb-1">
                      Headquarters
                    </p>
                    <p>32 Prithviraj Road, C-Scheme</p>
                    <p>Jaipur, Rajasthan 302001, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-white/10 pt-4">
                  <Mail className="w-4 h-4 text-brass-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-bone-100 uppercase tracking-wider mb-1">
                      Digital Desk
                    </p>
                    <p className="text-brass-300">inquiry@aarohstudio.com</p>
                    <p className="text-ash-400 mt-0.5">press@aarohstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-white/10 pt-4">
                  <Phone className="w-4 h-4 text-brass-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-bone-100 uppercase tracking-wider mb-1">
                      Direct Telephone
                    </p>
                    <p>+91 (141) 238-9042</p>
                    <p>+91 98290 11223</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-white/10 pt-4">
                  <Clock className="w-4 h-4 text-brass-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-bone-100 uppercase tracking-wider mb-1">
                      Studio Hours
                    </p>
                    <p>Monday – Friday: 09:30 AM – 06:30 PM IST</p>
                    <p className="text-ash-400">Consultations By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bone-200 border border-charcoal-900/10 p-6 space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-brass-600 font-medium">
                Request Studio Availability
              </h4>
              <p className="text-xs text-muted-slate font-light leading-relaxed">
                To maintain uncompromised design oversight, our practice accepts a maximum of 6 primary architectural commissions annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brass-600 font-medium">
            Clarity & Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-light">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.q} className="py-6">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left space-x-4 focus:outline-none group"
                >
                  <span className="font-serif text-lg sm:text-xl text-charcoal-950 group-hover:text-brass-600 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brass-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-muted-slate font-light pt-3 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
