"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Award,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";

export interface PrincipleItem {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ElementType;
  accentGradient: string;
  badgeBg: string;
}

const principlesData: PrincipleItem[] = [
  {
    num: "01",
    id: "no-guarantees",
    title: "No False Promises or Outcome Guarantees",
    subtitle: "Honest Effort & Zero Inflated Statistics",
    description:
      "We do not guarantee admissions, visas, scholarships, or residency outcomes that are not ours to guarantee. We promise clarity, thorough preparation, and honest effort — never false certainty.",
    tag: "Zero Outcome Hype",
    icon: ShieldCheck,
    accentGradient: "from-[#0D9488] via-[#0284C7] to-[#1E40AF]",
    badgeBg: "from-[#0D9488] via-[#0284C7] to-[#1E40AF]",
  },
  {
    num: "02",
    id: "honest-realities",
    title: "Honesty on Difficult Realities",
    subtitle: "Financial Proof, Cutoffs & Visa Risk Truths",
    description:
      "We explain the genuinely difficult parts of a pathway — financial proof requirements, visa risk factors, exam cutoffs, and regulatory changes — not just the appealing highlights.",
    tag: "100% Radical Transparency",
    icon: Target,
    accentGradient: "from-[#0284C7] via-[#2563EB] to-[#4F46E5]",
    badgeBg: "from-[#0284C7] via-[#2563EB] to-[#4F46E5]",
  },
  {
    num: "03",
    id: "authority-compliance",
    title: "Respect for Authority & Compliance",
    subtitle: "Embassy Alignment & Meticulous Documentation",
    description:
      "Visa and immigration decisions rest solely with embassies and government authorities. Our role is meticulous application support, documentation accuracy, and interview prep.",
    tag: "Embassy-Compliant Rigor",
    icon: Award,
    accentGradient: "from-[#059669] via-[#0D9488] to-[#0284C7]",
    badgeBg: "from-[#059669] via-[#0D9488] to-[#0284C7]",
  },
  {
    num: "04",
    id: "long-term-impact",
    title: "Long-Term Life Impact First",
    subtitle: "10-Year Career Horizon & Student ROI Focus",
    description:
      "Every recommendation is made with a student's next 5 to 10 years in mind, not a quick single transaction. Your long-term success is our single measure of performance.",
    tag: "10-Year Horizon Planning",
    icon: HeartHandshake,
    accentGradient: "from-[#2563EB] via-[#0284C7] to-[#0D9488]",
    badgeBg: "from-[#2563EB] via-[#0284C7] to-[#0D9488]",
  },
];

export default function CorePrinciplesSection() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeTier1 },
    },
  };

  return (
    <section id="core-principles" className="py-16 sm:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sand-tint/30 to-white border-t border-line/60">
      
      {/* SOFT AMBIENT FLOATING GLOW HALOS */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-tint/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          
          {/* Eyebrow Calligraphy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeTier1 }}
            className="inline-flex items-center space-x-2 bg-teal-tint/60 text-navy px-4 py-1 rounded-pill border border-teal/20"
          >
            <Sparkles className="w-4 h-4 text-[#0D9488] animate-spin-slow" />
            <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-xl sm:text-2xl font-medium">
              Our Core Commitments
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight"
          >
            Four Non-Negotiable{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent relative inline-block">
              Principles
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0D9488]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
            className="text-body sm:text-body-l text-muted leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Every advisor across every Future Yatra brand operates under these four foundational commitments — protecting students with radical transparency.
          </motion.p>

        </div>

        {/* 4 DYNAMIC FLOATING GLASS CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {principlesData.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div key={item.id} variants={cardVariants} className="h-full">
                <Card3DTilt className="h-full">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass-card-light rounded-card sm:rounded-[28px] p-7 sm:p-9 border border-line bg-white/95 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-350 flex flex-col justify-between h-full group relative overflow-hidden"
                  >
                    {/* Animated Top Accent Border Line */}
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                    <div className="space-y-5">
                      
                      {/* CARD HEADER ROW: NUMBER + TAG + ROTATING ICON */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="font-heading text-3xl sm:text-4xl font-black text-navy/30 group-hover:text-[#0D9488] transition-colors duration-300">
                            {item.num}
                          </span>
                          <span className="text-[11px] font-bold text-[#0D9488] bg-teal-tint/80 border border-teal/20 px-3 py-1 rounded-pill">
                            {item.tag}
                          </span>
                        </div>

                        {/* Interactive Floating Icon Badge with High Contrast Gradient & Bright White Icon */}
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.badgeBg} text-white flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border border-white/20`}>
                          <IconComp className="w-6 h-6 stroke-[2.2] text-white" />
                        </div>
                      </div>

                      {/* TITLE & SUBTITLE */}
                      <div className="space-y-1">
                        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy group-hover:text-teal transition-colors duration-200 leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-xs font-semibold text-muted block">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                        {item.description}
                      </p>

                    </div>

                    {/* BOTTOM STUDENT INTEGRITY CALLOUT */}
                    <div className="pt-6 border-t border-line/60 mt-6 flex items-center justify-between text-xs text-navy font-bold">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-teal group-hover:scale-110 transition-transform" />
                        <span>Verified Future Yatra Commitment</span>
                      </div>
                      <Zap className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                  </motion.div>
                </Card3DTilt>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM ANIMATED UNIFIED CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeTier1 }}
          className="p-6 sm:p-8 rounded-card sm:rounded-[32px] bg-gradient-to-r from-navy-deep via-navy to-navy-glow text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal/40 relative overflow-hidden"
        >
          <div className="space-y-1 text-center md:text-left z-10">
            <span className="font-tempting text-teal-bright text-2xl font-normal block">
              Radical Transparency Standard
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              Direct founder accountability on every single student application file.
            </h3>
          </div>

          <MagneticButton className="flex-shrink-0 z-10">
            <Link
              href="/our-story/"
              className="inline-flex items-center space-x-2 bg-teal text-navy font-extrabold text-xs sm:text-small px-7 py-3.5 rounded-pill hover:bg-teal-bright transition-all duration-200 shadow-xl group/btn"
            >
              <span>READ OUR FULL STORY</span>
              <ArrowRight className="w-4 h-4 text-navy group-hover/btn:translate-x-1 transition-transform stroke-[3]" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
}
