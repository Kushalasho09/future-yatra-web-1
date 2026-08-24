"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Target } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function WhoWeAreSection() {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section className="py-14 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: VISUAL IMAGE WITH DIRECTION-AWARE HOVER & OVERLAPPING STAT BADGE */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative mx-auto max-w-md lg:max-w-none"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
            >
              {/* Decorative Offset Teal Frame behind image */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-teal/40 pointer-events-none hidden sm:block" />

              {/* Main Visual Image with Direction-Aware Hover Effect */}
              <DirectionAwareHover
                imageUrl="/images/hero_campus_life.png"
                className="w-full h-[320px] sm:h-[460px] border border-line shadow-2xl"
              >
                <div className="space-y-1 pr-4">
                  <p className="font-heading font-extrabold text-lg sm:text-xl text-white">
                    Empowering Global Dreams
                  </p>
                  <p className="text-xs sm:text-small text-teal-bright font-medium">
                    10,000+ Students Advised Across 4 Specialist Brands
                  </p>
                </div>
              </DirectionAwareHover>

              {/* Floating Overlapping Stat Badge (Fades out when hovered to reveal direction-aware content cleanly) */}
              <div
                className={`absolute -bottom-6 -right-3 sm:-right-6 bg-navy text-white p-4 sm:p-6 rounded-2xl border-2 border-teal shadow-2xl flex items-center space-x-3.5 z-20 transition-all duration-350 pointer-events-none ${
                  isCardHovered ? "opacity-0 scale-90 translate-y-2" : "opacity-100 scale-100 translate-y-0"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-teal-bright" />
                </div>
                <div>
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white block leading-none">
                    100%
                  </span>
                  <span className="text-xs sm:text-small font-semibold text-sand-tint block mt-0.5">
                    Transparent Counselling
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT WITH TEMPTING FONT SUBTITLE & FEATURE CALLOUTS (MODELED AFTER IMAGE 2 REFERENCE) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Subtitle in Tempting Calligraphy Font */}
            <div className="space-y-2">
              <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
                Our Story
              </span>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy leading-tight tracking-tight">
                Built Because Students Deserve Better Guidance
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-3.5 text-small sm:text-body text-muted leading-relaxed font-normal">
              <p>
                Our founder experienced misleading advice and incomplete information while planning his own move to Canada. After moving there, he saw many international students facing similar problems.
              </p>
              <p>
                That experience led to a simple belief: Students need honest answers before they make decisions that affect their education, finances and future.
              </p>
            </div>

            {/* Two Sub-Feature Cards (Modeled after Vision/Mission Callouts in Image 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card-light rounded-2xl p-4 border border-line bg-white/90 shadow-xs space-y-1.5">
                <div className="flex items-center space-x-2 text-navy font-bold text-small">
                  <Compass className="w-4 h-4 text-teal" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  One accountable parent company guiding every step of your study abroad dream.
                </p>
              </div>

              <div className="glass-card-light rounded-2xl p-4 border border-line bg-white/90 shadow-xs space-y-1.5">
                <div className="flex items-center space-x-2 text-navy font-bold text-small">
                  <Target className="w-4 h-4 text-teal" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Replacing fragmented consultancies with specialized, ethical student pathways.
                </p>
              </div>
            </div>

            {/* Primary CTA Button with Hover Border Gradient */}
            <div className="pt-2">
              <Link href="/our-story">
                <HoverBorderGradient
                  as="div"
                  containerClassName="rounded-full"
                  className="bg-white hover:bg-teal-tint/40 text-navy hover:text-teal font-extrabold text-small px-7 py-3 rounded-full border border-teal/20 shadow-sm"
                >
                  <span>Read Our Story</span>
                </HoverBorderGradient>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
