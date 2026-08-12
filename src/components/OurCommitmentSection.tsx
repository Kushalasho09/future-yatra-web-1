"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export interface CommitmentItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badgeBg: string;
}

const commitments: CommitmentItem[] = [
  {
    id: "01",
    number: "01",
    title: "No False Guarantees",
    description:
      'We never say "guaranteed admission" or "guaranteed visa" — no company can honestly promise that.',
    badgeBg: "from-[#0D9488] via-[#0284C7] to-[#1E40AF]",
  },
  {
    id: "02",
    number: "02",
    title: "Embassy & University Authority",
    description:
      "Visa and immigration decisions rest solely with the relevant embassy or immigration authority. Our role is to help you prepare the strongest, most accurate application — never a promised outcome.",
    badgeBg: "from-[#0284C7] via-[#2563EB] to-[#4F46E5]",
  },
  {
    id: "03",
    number: "03",
    title: "Unvarnished Reality",
    description:
      "We explain the genuinely difficult parts of a pathway — timelines, costs, exam requirements — not just the appealing parts.",
    badgeBg: "from-[#059669] via-[#0D9488] to-[#0284C7]",
  },
  {
    id: "04",
    number: "04",
    title: "Group-Wide Accountability",
    description:
      "Every advisor across every Future Yatra brand is held to the same company-wide standard of transparency.",
    badgeBg: "from-[#2563EB] via-[#0284C7] to-[#0D9488]",
  },
];

export default function OurCommitmentSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Container Card - Aligned strictly to Website Hero Theme (Navy & Teal) */}
      <div className="bg-navy text-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Hero Theme Glow Orbs */}
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-navy-glow/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent pointer-events-none" />

        {/* Main Grid: 2 Columns on Web (lg), Stacked 1 Column on Mobile App */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* ==================================================================== */}
          {/* LEFT COLUMN: PERFECTLY ALIGNED ARC RING + CIRCULAR ADVISOR IMAGE    */}
          {/* ==================================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] lg:w-[410px] lg:h-[410px] flex items-center justify-center group select-none">
              
              {/* Soft Hero Cyan Glow Behind Circle */}
              <div className="absolute inset-4 rounded-full bg-cyan-500/15 blur-xl group-hover:bg-cyan-500/25 transition-colors duration-500 pointer-events-none" />

              {/* FIXED, PERFECTLY ALIGNED SVG GRADIENT ARC RING */}
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                fill="none"
              >
                <defs>
                  {/* Eye-Soothing Luminous Arc Gradient (#2DD4BF -> #38BDF8 -> #60A5FA) */}
                  <linearGradient id="heroThemeArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2DD4BF" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>

                  {/* Soft Arc Glow Filter */}
                  <filter id="heroArcGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Subtle Inner Dashed Track */}
                <circle
                  cx="250"
                  cy="250"
                  r="215"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeDasharray="8 12"
                  strokeOpacity="0.35"
                />

                {/* Fixed Arc Ring wrapping ~270deg from top-right counterclockwise to bottom-right */}
                <motion.path
                  d="M 370 75 A 215 215 0 1 0 370 425"
                  stroke="url(#heroThemeArcGradient)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  filter="url(#heroArcGlow)"
                  initial={{ pathLength: 0.9, opacity: 0.9 }}
                  animate={{ pathLength: [0.9, 1, 0.9], opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              {/* Concentric Inner Image Container */}
              <div className="relative w-[78%] h-[78%] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-10 bg-navy-deep group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/our_commitment_advisors.png"
                  alt="Future Yatra Transparent Counselling"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-navy-deep/95 backdrop-blur-md text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/30 shadow-xl flex items-center space-x-2 z-30"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold text-sand-tint">
                  100% Ethical
                </span>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-navy-deep/95 backdrop-blur-md text-white px-3.5 sm:px-4 py-2 rounded-2xl border border-cyan-400/30 shadow-xl flex items-center space-x-3 z-30"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#2DD4BF] font-bold block leading-none">
                    VERIFIED STANDARD
                  </span>
                  <span className="text-xs sm:text-small font-bold text-white block mt-0.5 leading-none">
                    No Hidden Clauses
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ==================================================================== */}
          {/* RIGHT COLUMN: NUMBERED COMMITMENTS LIST (HERO THEME MATCHED)         */}
          {/* ==================================================================== */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Header Pill & Titles */}
            <div className="space-y-2 text-center lg:text-left">
              <span className="font-tempting bg-gradient-to-r from-[#2DD4BF] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent text-2xl sm:text-3xl font-normal block">
                Our Standard
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Our Commitment
              </h2>

              <p className="text-sm sm:text-body text-sand-tint/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Education and visa consulting in India has a trust problem. Future Yatra holds
                itself to a clear standard, across every brand:
              </p>
            </div>

            {/* Commitments Animated List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-3.5 sm:space-y-4"
            >
              {commitments.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveItem(item.id)}
                    onMouseLeave={() => setActiveItem(null)}
                    className={`group relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 ${
                      isActive
                        ? "bg-white/[0.12] border-cyan-400/50 shadow-xl shadow-cyan-950/30 scale-[1.01]"
                        : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-cyan-400/30"
                    }`}
                  >
                    <div className="flex items-start space-x-4 sm:space-x-5">
                      
                      {/* Eye-Soothing Multi-tone Gradient Circular Number Badge */}
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${item.badgeBg} flex items-center justify-center font-heading font-extrabold text-sm sm:text-base text-white flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 mt-0.5 border border-white/20`}
                      >
                        {item.number}
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1 flex-1">
                        <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-200 flex items-center justify-between">
                          <span>{item.title}</span>
                          <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                            isActive ? "text-[#38BDF8] opacity-100 scale-110" : "text-white/20 opacity-0 group-hover:opacity-100"
                          }`} />
                        </h3>

                        <p className="text-xs sm:text-small text-sand-tint/85 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
