'use client';

import React from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Landmark, Stethoscope, BookOpenCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface GlobalCampusShowcaseProps {
  onOpenCounselling?: (career?: string, country?: string) => void;
}

export default function GlobalCampusShowcase({ onOpenCounselling }: GlobalCampusShowcaseProps) {
  return (
    <div id="campus-showcase" className="relative bg-[#0A192F] text-white">
      {/* Top & Bottom Seamless Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#F4F8FD] to-transparent pointer-events-none z-20 opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#FFFFFF] pointer-events-none z-20 opacity-90" />
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
        bgImageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
        title="Global Medical Experience"
        date="100% English Medium"
        scrollToExpand="Scroll to expand campus view ↓"
      >
        <div className="max-w-5xl mx-auto space-y-10 py-6">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#02A7BB]/20 border border-[#02A7BB]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#3FE0D6]">
              <Landmark className="w-4 h-4 text-[#3FE0D6]" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-manjari text-white tracking-tight">
              State-of-the-Art Medical Universities Abroad
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-poppins">
              Step inside the top NMC-recognised government medical universities across Georgia, UK, Uzbekistan, Germany, and Kazakhstan.
            </p>
          </div>

          {/* 4 Feature Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-2xl space-y-3 hover:border-[#0263CC] transition-all">
              <div className="w-12 h-12 bg-[#0263CC]/20 border border-[#0263CC]/40 rounded-xl flex items-center justify-center text-[#3FE0D6]">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-white font-manjari">
                Simulation & Anatomy Labs
              </h3>
              <p className="text-xs text-slate-300 font-poppins leading-relaxed">
                3D cadaver labs, clinical simulation mannequins, and high-tech diagnostic suites.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-2xl space-y-3 hover:border-[#02A7BB] transition-all">
              <div className="w-12 h-12 bg-[#02A7BB]/20 border border-[#02A7BB]/40 rounded-xl flex items-center justify-center text-[#3FE0D6]">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-white font-manjari">
                Teaching Hospitals
              </h3>
              <p className="text-xs text-slate-300 font-poppins leading-relaxed">
                Direct clinical bed rotations and OPD exposure in multi-specialty government hospitals.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-2xl space-y-3 hover:border-purple-500 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-xl flex items-center justify-center text-[#3FE0D6]">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-white font-manjari">
                Integrated FMGE / USMLE
              </h3>
              <p className="text-xs text-slate-300 font-poppins leading-relaxed">
                Dedicated coaching modules and digital question banks integrated from Year 1.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-2xl space-y-3 hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center text-[#3FE0D6]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-white font-manjari">
                Safe Indian Hostels
              </h3>
              <p className="text-xs text-slate-300 font-poppins leading-relaxed">
                24/7 campus security, dedicated Indian mess, and separate warden-managed hostels.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <button
              onClick={() => onOpenCounselling?.("Campus Eligibility")}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#3FE0D6] hover:brightness-110 text-white font-black text-sm rounded-full shadow-xl transition-all transform hover:scale-105"
            >
              <span>Explore University Campuses & Admission Criteria</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
