"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Target } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function WhoWeAreSection() {
  return (
    <section className="py-14 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: VISUAL IMAGE WITH OFFSET FRAME & OVERLAPPING STAT BADGE (MODELED AFTER IMAGE 2 REFERENCE) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Offset Teal Frame behind image */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-teal/40 pointer-events-none hidden sm:block" />

              {/* Main Visual Image */}
              <div className="relative rounded-3xl overflow-hidden border border-line shadow-2xl bg-white group">
                <Image
                  src="/images/hero_campus_life.png"
                  alt="Future Yatra Student Life"
                  width={600}
                  height={650}
                  className="w-full h-[320px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Floating Overlapping Stat Badge (Modeled after Red Badge in Image 2) */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-navy text-white p-4 sm:p-6 rounded-2xl border-2 border-teal shadow-2xl flex items-center space-x-3.5 z-20">
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
              <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
                Who We Are
              </span>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy leading-tight tracking-tight">
                Built for the Complete Study Abroad & Visa Journey
              </h2>
            </div>

            {/* Preserved Original Content Paragraphs */}
            <div className="space-y-4 text-small sm:text-body text-muted leading-relaxed font-normal">
              <p>
                Future Yatra Private Limited exists because a study abroad journey is rarely just
                one decision. It moves through a test score, a university application, sometimes
                a medical entrance pathway, and almost always a visa.
              </p>
              <p>
                Instead of building one generalist consultancy, we built four specialist brands —
                each focused on one part of that journey, each held to the same company-wide
                standard of transparent, ethical counselling.
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

            {/* Primary CTA Button */}
            <div className="pt-2">
              <MagneticButton className="inline-block">
                <Link
                  href="/about-us/"
                  className="inline-flex items-center justify-center space-x-3 bg-navy text-white text-body font-semibold px-7 py-3.5 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_20px_rgba(45,189,182,0.4)] transition-all duration-300 shadow-md group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </MagneticButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
