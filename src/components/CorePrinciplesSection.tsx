"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Layers,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Award,
  Zap,
  Clock,
  ChevronRight,
} from "lucide-react";

export interface PrincipleData {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  headline: string;
  fullDesc: string;
  icon: React.ElementType;
  tag: string;
  statLabel: string;
  statValue: string;
}

const principles: PrincipleData[] = [
  {
    id: "honest",
    number: "01",
    title: "Honest by Design",
    shortDesc: "No guaranteed outcome claims or false promises.",
    headline: "Uncompromising Integrity & Transparency",
    fullDesc:
      'We never say "guaranteed admission" or "guaranteed visa" — no company can honestly promise that. Every brand under Future Yatra is built around accurate, verifiable information — even when that means telling you something you didn\'t want to hear.',
    icon: ShieldCheck,
    tag: "Ethical Standard",
    statLabel: "Guaranteed Claims",
    statValue: "0%",
  },
  {
    id: "accountable",
    number: "02",
    title: "One Accountable Company",
    shortDesc: "Single corporate governance across all offices.",
    headline: "Unified Standards Across Every Brand",
    fullDesc:
      "Future Yatra is not a franchise of disconnected offices. A single company-wide standard of transparency and compliance is applied consistently across every brand, office, and advisor you work with.",
    icon: Building2,
    tag: "Single Standard",
    statLabel: "Company Integrity",
    statValue: "100%",
  },
  {
    id: "ecosystem",
    number: "03",
    title: "Integrated Ecosystem",
    shortDesc: "4 specialist brands moving together seamlessly.",
    headline: "Four Specialist Brands under One Roof",
    fullDesc:
      "Most students need more than one service — a test score, an admission, a visa. Under Future Yatra, your journey moves between specialist teams (University, Academic, Medico, ApplyVisa) without starting over with a new consultancy.",
    icon: Layers,
    tag: "Seamless Transition",
    statLabel: "Specialist Brands",
    statValue: "4 Brands",
  },
  {
    id: "longterm",
    number: "04",
    title: "Built for the Long Term",
    shortDesc: "Decisions guided by multi-year career impact.",
    headline: "Long-Term Pathways, Decadal Impact",
    fullDesc:
      "The decisions we advise on shape your next several years — and in the case of MBBS and immigration pathways, decades. We treat every recommendation with that weight, ensuring long-term career success.",
    icon: Target,
    tag: "Decadal Vision",
    statLabel: "Career Focus",
    statValue: "10+ Years",
  },
];

export default function CorePrinciplesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through principles every 5 seconds if user isn't hovering
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const active = principles[activeIndex];

  return (
    <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sand-tint/20 to-white">
      
      {/* Eye-Soothing Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
            Core Principles
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Why Future Yatra
          </h2>

          <p className="text-xs sm:text-body text-muted leading-relaxed font-normal max-w-xl mx-auto pt-1">
            Built around four unshakeable pillars — select any pillar below to explore our company standard.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* INTERACTIVE SPLIT SHOWCASE STUDIO (MOBILE & WEB RESPONSIVE)          */}
        {/* ==================================================================== */}
        <div
          className="glass-card-light rounded-2xl sm:rounded-[36px] p-3 sm:p-8 lg:p-10 border border-line/80 bg-white/90 shadow-2xl relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* ================================================================ */}
            {/* LEFT COLUMN: PILLAR SELECTOR TABS (5 COLS)                       */}
            {/* ================================================================ */}
            <div className="lg:col-span-5 space-y-2.5 sm:space-y-4">
              {principles.map((item, idx) => {
                const isSelected = activeIndex === idx;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-xl sm:rounded-3xl border transition-all duration-300 relative flex items-center justify-between group overflow-hidden ${
                      isSelected
                        ? "bg-navy text-white border-teal/50 shadow-xl scale-[1.01]"
                        : "bg-white/70 text-navy border-line hover:bg-white hover:border-teal/30 hover:shadow-md"
                    }`}
                  >
                    {/* Active Tab Left Glow Bar Indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activePillarGlow"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-teal-bright via-teal to-navy-glow rounded-l-xl sm:rounded-l-2xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center space-x-3 sm:space-x-4 relative z-10 min-w-0 flex-1">
                      
                      {/* Icon Circle */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isSelected
                            ? "bg-teal/20 text-teal-bright border border-teal/40"
                            : "bg-teal-tint text-teal border border-teal/20 group-hover:bg-teal-tint/80"
                        }`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>

                      {/* Title & Short Description */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider ${
                              isSelected ? "text-teal-bright" : "text-teal"
                            }`}
                          >
                            {item.number}
                          </span>
                          <h3
                            className={`font-heading text-sm sm:text-lg font-bold truncate ${
                              isSelected ? "text-white" : "text-navy"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p
                          className={`text-[11px] sm:text-xs mt-0.5 truncate font-normal ${
                            isSelected ? "text-sand-tint/80" : "text-muted"
                          }`}
                        >
                          {item.shortDesc}
                        </p>
                      </div>

                    </div>

                    {/* Right Chevron Indicator */}
                    <div className="relative z-10 flex-shrink-0 ml-2">
                      <ChevronRight
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                          isSelected
                            ? "text-teal-bright translate-x-1"
                            : "text-navy/30 group-hover:text-teal group-hover:translate-x-1"
                        }`}
                      />
                    </div>

                    {/* Smooth Progress Meter Bar at bottom of active tab */}
                    {isSelected && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-0.5 bg-teal-bright/60"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ================================================================ */}
            {/* RIGHT COLUMN: ELEGANT SHOWCASE STAGE CARD (7 COLS)               */}
            {/* ================================================================ */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-navy-deep via-navy to-[#112447] text-white rounded-2xl sm:rounded-[32px] p-5 sm:p-8 lg:p-10 border border-teal/30 shadow-2xl relative overflow-hidden min-h-[340px] sm:min-h-[420px] flex flex-col justify-between">
                
                {/* Background Stage Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy-glow/30 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 space-y-5 flex-1 flex flex-col justify-between"
                  >
                    {/* Stage Header */}
                    <div className="space-y-3.5">
                      
                      <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
                        <span className="inline-flex items-center space-x-2 bg-teal/20 border border-teal/40 text-teal-bright px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                          <Sparkles className="w-3.5 h-3.5 text-teal-bright animate-pulse" />
                          <span>{active.tag}</span>
                        </span>

                        {/* Top Right Quick Stat */}
                        <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl sm:rounded-2xl border border-white/10">
                          <span className="text-[11px] sm:text-xs text-sand-tint/80 font-medium">
                            {active.statLabel}:
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-teal-bright">
                            {active.statValue}
                          </span>
                        </div>
                      </div>

                      {/* Main Stage Headline */}
                      <h3 className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug sm:leading-tight">
                        {active.headline}
                      </h3>

                      {/* Main Stage Description Body */}
                      <p className="text-xs sm:text-body text-sand-tint/90 leading-relaxed font-normal">
                        {active.fullDesc}
                      </p>

                    </div>

                    {/* DYNAMIC WIDGET STAGE (MOBILE FLEX UN-SQUISHED) */}
                    <div className="pt-3.5 border-t border-white/10">
                      
                      {active.id === "honest" && (
                        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-teal/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal-bright flex-shrink-0">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block">Verified Standard</span>
                              <span className="text-[11px] text-sand-tint/80 block">No Misleading Admission Claims</span>
                            </div>
                          </div>
                          <span className="self-start sm:self-auto bg-teal text-navy text-[11px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md flex-shrink-0">
                            100% Transparent
                          </span>
                        </div>
                      )}

                      {active.id === "accountable" && (
                        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-teal/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal-bright flex-shrink-0">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block">One Corporate Entity</span>
                              <span className="text-[11px] text-sand-tint/80 block">Single Management & Compliance</span>
                            </div>
                          </div>
                          <span className="self-start sm:self-auto bg-white/20 text-teal-bright border border-teal/40 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">
                            Zero Franchises
                          </span>
                        </div>
                      )}

                      {active.id === "ecosystem" && (
                        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 border border-teal/30 space-y-2">
                          <span className="text-[11px] font-bold text-teal-bright uppercase tracking-wider block">
                            Integrated Brand Ecosystem:
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <div className="bg-blue-500/20 text-blue-200 border border-blue-400/30 p-2 rounded-lg sm:rounded-xl text-center text-[11px] sm:text-xs font-semibold truncate">
                              University Yatra
                            </div>
                            <div className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 p-2 rounded-lg sm:rounded-xl text-center text-xs font-semibold truncate">
                              Academic Yatra
                            </div>
                            <div className="bg-rose-500/20 text-rose-200 border border-rose-400/30 p-2 rounded-lg sm:rounded-xl text-center text-xs font-semibold truncate">
                              Medico Yatra
                            </div>
                            <div className="bg-amber-500/20 text-amber-200 border border-amber-400/30 p-2 rounded-lg sm:rounded-xl text-center text-xs font-semibold truncate">
                              ApplyVisa Yatra
                            </div>
                          </div>
                        </div>
                      )}

                      {active.id === "longterm" && (
                        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-teal/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal-bright flex-shrink-0">
                              <Target className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block">Decadal Impact Horizon</span>
                              <span className="text-[11px] text-sand-tint/80 block">Advising for Your Entire Career Path</span>
                            </div>
                          </div>
                          <span className="self-start sm:self-auto bg-teal-bright text-navy text-[11px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md flex-shrink-0">
                            Long-Term Weight
                          </span>
                        </div>
                      )}

                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
