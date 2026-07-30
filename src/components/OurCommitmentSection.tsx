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
    badgeBg: "from-teal-bright via-teal to-navy-glow",
  },
  {
    id: "02",
    number: "02",
    title: "Embassy & University Authority",
    description:
      "Visa and immigration decisions rest solely with the relevant embassy or immigration authority. Our role is to help you prepare the strongest, most accurate application — never a promised outcome.",
    badgeBg: "from-teal via-navy-glow to-navy",
  },
  {
    id: "03",
    number: "03",
    title: "Unvarnished Reality",
    description:
      "We explain the genuinely difficult parts of a pathway — timelines, costs, exam requirements — not just the appealing parts.",
    badgeBg: "from-teal-bright via-teal to-navy-glow",
  },
  {
    id: "04",
    number: "04",
    title: "Group-Wide Accountability",
    description:
      "Every advisor across every Future Yatra brand is held to the same company-wide standard of transparency.",
    badgeBg: "from-teal via-navy-glow to-navy",
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
      <div className="bg-navy text-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-teal/30 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Hero Theme Glow Orbs */}
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-navy-glow/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent pointer-events-none" />

        {/* Main Grid: 2 Columns on Web (lg), Stacked 1 Column on Mobile App */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* ==================================================================== */}
          {/* LEFT COLUMN: PERFECTLY ALIGNED ARC RING + CIRCULAR ADVISOR IMAGE    */}
          {/* ==================================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] lg:w-[410px] lg:h-[410px] flex items-center justify-center group select-none">
              
              {/* Soft Hero Cyan Glow Behind Circle */}
              <div className="absolute inset-4 rounded-full bg-teal/20 blur-xl group-hover:bg-teal/30 transition-colors duration-500 pointer-events-none" />

              {/* FIXED, PERFECTLY ALIGNED SVG GRADIENT ARC RING (MATCHES REFERENCE IMAGE 1) */}
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                fill="none"
              >
                <defs>
                  {/* Hero Section Theme Gradient: Teal Bright (#3FE0D6) -> Teal (#2DBDB6) -> Navy Glow (#3A5EA8) */}
                  <linearGradient id="heroThemeArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3FE0D6" />
                    <stop offset="60%" stopColor="#2DBDB6" />
                    <stop offset="100%" stopColor="#3A5EA8" />
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
                  stroke="#3FE0D6"
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

              {/* Floating Badge 1 (Top Right) - Hero Teal Theme */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-navy-deep/95 backdrop-blur-md text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-teal/40 shadow-xl flex items-center space-x-2 z-30"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-bright animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold text-sand-tint">
                  100% Ethical
                </span>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left) - Hero Teal Theme */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-navy-deep/95 backdrop-blur-md text-white px-3.5 sm:px-4 py-2 rounded-2xl border border-teal/40 shadow-xl flex items-center space-x-3 z-30"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-teal-bright" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-teal-bright font-bold block leading-none">
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
              <span className="font-tempting text-teal-bright text-2xl sm:text-3xl font-normal block">
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
                        ? "bg-white/10 border-teal/50 shadow-lg shadow-teal/15 scale-[1.01]"
                        : "bg-white/[0.05] border-white/10 hover:bg-white/[0.09] hover:border-teal/30"
                    }`}
                  >
                    <div className="flex items-start space-x-4 sm:space-x-5">
                      
                      {/* Hero Theme Gradient Circular Number Badge (01, 02, 03, 04) */}
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${item.badgeBg} flex items-center justify-center font-heading font-extrabold text-sm sm:text-base text-white flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 mt-0.5 border border-teal/40`}
                      >
                        {item.number}
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1 flex-1">
                        <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-teal-bright transition-colors duration-200 flex items-center justify-between">
                          <span>{item.title}</span>
                          <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                            isActive ? "text-teal-bright opacity-100 scale-110" : "text-white/20 opacity-0 group-hover:opacity-100"
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
