"use client";

import React from "react";

export default function CursiveMarqueeBanner() {
  const marqueeItems = [
    "University Yatra",
    "Academic Yatra",
    "Medico Yatra",
    "ApplyVisa Yatra",
    "Future Yatra Group",
    "Global Student Pathways",
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-sand-tint/40 via-white to-sand-tint/40 border-y border-line/60 py-4 sm:py-5 overflow-hidden select-none">
      <div className="w-full relative flex items-center">
        {/* Soft Ambient Side Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Marquee Scrolling Track */}
        <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-12 sm:space-x-16 flex-shrink-0 group">
              {/* Pure Tempting Calligraphy Font Text */}
              <span className="font-tempting text-3xl sm:text-4xl lg:text-[42px] font-normal text-navy leading-none tracking-wide group-hover:text-teal transition-colors duration-200">
                {item}
              </span>

              {/* Professional Luxury Diamond Separator Symbol */}
              <span className="text-teal/70 text-xs sm:text-small font-semibold tracking-widest pointer-events-none">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
