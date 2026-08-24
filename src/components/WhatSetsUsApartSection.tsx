"use client";

import React from "react";
import { ShieldCheck, FileCheck2, UserCheck, Compass } from "lucide-react";

export default function WhatSetsUsApartSection() {
  const items = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "No False Promises",
      description: "We don't promise admissions, visas or scholarships that are decided by universities or authorities.",
      gradient: "from-blue-600 via-indigo-600 to-teal",
    },
    {
      num: "02",
      icon: FileCheck2,
      title: "Clear Information",
      description: "We explain requirements, costs, timelines and challenges before you make a decision.",
      gradient: "from-teal via-teal-bright to-navy-glow",
    },
    {
      num: "03",
      icon: UserCheck,
      title: "Direct Support",
      description: "You get guidance from people responsible for your application and decisions.",
      gradient: "from-indigo-600 via-teal to-blue-500",
    },
    {
      num: "04",
      icon: Compass,
      title: "Long-Term Thinking",
      description: "We consider where your education choice can take you, not just getting you through one application.",
      gradient: "from-teal via-navy-glow to-navy",
    },
  ];

  return (
    <section className="py-14 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/40 to-white relative overflow-hidden">
      {/* Decorative Ambient Radial Glow Orbs */}
      <div className="w-96 h-96 rounded-full bg-teal/10 blur-3xl absolute -top-20 -left-20 pointer-events-none" />
      <div className="w-96 h-96 rounded-full bg-navy/5 blur-3xl absolute -bottom-20 -right-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER WITH TEMPTING CALLIGRAPHY FONT SUBTITLE */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            Why Future Yatra
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy tracking-tight drop-shadow-xs">
            Honest Guidance Before You Decide
          </h2>

          <p className="text-muted text-small sm:text-body max-w-xl mx-auto leading-relaxed font-normal">
            An uncompromising commitment to ethical counselling, direct accountability, and complete transparency.
          </p>
        </div>

        {/* 4 PREMIUM GLASSMORPHISM CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-line shadow-md hover:shadow-2xl hover:border-teal/60 hover:-translate-y-2 transition-all duration-350 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Fixed Accent Gradient Bar */}
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-teal to-teal-bright group-hover:w-20 transition-all duration-300 mb-6" />

                {/* Top Right Decorative Step Number */}
                <span className="absolute top-5 right-6 text-3xl font-black text-navy/10 group-hover:text-teal/25 transition-colors duration-300 font-heading select-none pointer-events-none">
                  {item.num}
                </span>

                <div className="space-y-5 relative z-10">
                  {/* 3D Dual-Layer Gradient Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-teal group-hover:bg-navy group-hover:text-teal-bright transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-navy leading-snug group-hover:text-teal transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-small text-muted/90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
