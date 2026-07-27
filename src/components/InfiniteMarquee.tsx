"use client";

import React from "react";
import { GraduationCap, Award, ShieldCheck, Globe2, Sparkles, Building2 } from "lucide-react";

export default function InfiniteMarquee() {
  const items = [
    { icon: GraduationCap, text: "Harvard University Placement" },
    { icon: Award, text: "AIRC & ICEF Accredited" },
    { icon: ShieldCheck, text: "100% Visa Compliance" },
    { icon: Globe2, text: "50,000+ Global Alumni" },
    { icon: Sparkles, text: "Top 500 Ivy League Campuses" },
    { icon: Building2, text: "Oxford & Cambridge Admissions" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-teal-tint/60 border-y border-teal/20 backdrop-blur-sm">
      {/* Gradient Fades on Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center space-x-2.5 bg-white/80 border border-teal/30 px-4 py-2 rounded-pill shadow-xs shrink-0"
          >
            <item.icon className="w-4 h-4 text-teal animate-pulse" />
            <span className="text-small font-semibold text-navy tracking-tight">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
