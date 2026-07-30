"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageSquare } from "lucide-react";

export default function GrandCtaBannerSection() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-teal/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-navy-glow/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* LUXURY STAGE CONTAINER */}
        <div className="relative rounded-3xl sm:rounded-[40px] bg-gradient-to-r from-navy-deep via-navy to-[#102447] text-white p-6 sm:p-12 lg:p-14 border border-teal/40 shadow-2xl overflow-hidden">
          
          {/* Animated Background Arc Ring Graphic */}
          <svg
            className="absolute -right-20 -bottom-20 w-[450px] h-[450px] text-teal/10 pointer-events-none"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* LEFT COLUMN: CALLIGRAPHY, HEADLINE, FEATURE BADGES & DUAL BUTTONS */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
              
              {/* Calligraphy Subtitle & Main Title */}
              <div className="space-y-2">
                <span className="font-tempting text-teal-bright text-3xl sm:text-4xl lg:text-5xl font-normal block">
                  Your Next Step
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Start With a Free, No-Obligation Conversation
                </h2>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-body text-sand-tint/90 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                No pressure, no sales pitch — just an honest first conversation about your goals, study abroad aspirations, and how Future Yatra can build your roadmap.
              </p>

              {/* Feature Badges Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xs px-3 sm:px-3.5 py-2 rounded-2xl border border-white/10 text-[11px] sm:text-xs font-medium text-sand-tint">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-bright flex-shrink-0" />
                  <span className="truncate">100% Free Counsel</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xs px-3 sm:px-3.5 py-2 rounded-2xl border border-white/10 text-[11px] sm:text-xs font-medium text-sand-tint">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-bright flex-shrink-0" />
                  <span className="truncate">Zero Sales Push</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xs px-3 sm:px-3.5 py-2 rounded-2xl border border-white/10 text-[11px] sm:text-xs font-medium text-sand-tint">
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-bright flex-shrink-0" />
                  <span className="truncate">1-on-1 Specialist</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xs px-3 sm:px-3.5 py-2 rounded-2xl border border-white/10 text-[11px] sm:text-xs font-medium text-sand-tint">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-bright flex-shrink-0" />
                  <span className="truncate">Personal Roadmap</span>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-3 bg-teal text-navy hover:bg-teal-bright px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-small transition-all duration-300 shadow-xl hover:shadow-teal/40 group"
                >
                  <span>Book a Free Conversation</span>
                  <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <Link
                  href="/coming-soon?section=brands"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-small transition-all duration-300"
                >
                  <span>Explore Specialist Brands</span>
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: 3D ADVISOR VISUAL STAGE & PERFECTLY ALIGNED FLOATING BADGES */}
            <div className="lg:col-span-5 relative flex justify-center items-center pt-4 lg:pt-0">
              
              <div className="relative">
                
                {/* FLOATING GLASS STATUS CARD (TOP RIGHT) */}
                <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 bg-navy-deep/95 backdrop-blur-md border border-teal/40 rounded-2xl px-3 sm:px-3.5 py-2 shadow-2xl z-30 flex items-center space-x-2.5 max-w-[210px]">
                  <div className="relative flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block absolute inset-0 animate-ping opacity-75" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-teal-bright uppercase tracking-wider block leading-tight">
                      NEXT AVAILABLE SPOT
                    </span>
                    <span className="text-xs font-extrabold text-white block leading-tight">
                      Today • 4:00 PM IST
                    </span>
                  </div>
                </div>

                {/* Central Advisor Portrait Frame */}
                <div className="relative w-[260px] sm:w-[310px] h-[280px] sm:h-[340px] rounded-3xl overflow-hidden border-2 border-teal/40 shadow-2xl group bg-gradient-to-b from-navy-deep to-navy">
                  
                  {/* Glow Ring Behind Image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal/30 rounded-full blur-2xl pointer-events-none" />

                  {/* Team Advisors Image */}
                  <Image
                    src="/images/our_commitment_advisors.png"
                    alt="Future Yatra Education Advisors"
                    fill
                    sizes="(max-width: 640px) 260px, 310px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />

                  {/* Subtle Bottom Gradient Fade */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent pointer-events-none" />

                </div>

                {/* FLOATING GLASS STATUS CARD (BOTTOM LEFT) */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 bg-navy-deep/95 backdrop-blur-md border border-teal/40 rounded-2xl px-3 sm:px-3.5 py-2 shadow-2xl z-30 flex items-center space-x-2.5 max-w-[210px]">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-teal-bright flex-shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-extrabold text-white block leading-tight">
                      100% Confidential
                    </span>
                    <span className="text-[9px] text-sand-tint/80 block font-medium leading-tight">
                      Single Accountable Company
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
