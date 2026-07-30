"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Briefcase,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  CheckCircle2,
  Globe2,
} from "lucide-react";

export default function PartnerAndCareersSection() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-navy-glow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* ================================================================== */}
          {/* STAGE 1: PARTNER WITH US (DARK NAVY LUXURY GLASS STAGE)             */}
          {/* ================================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-gradient-to-br from-navy-deep via-navy to-[#102447] text-white rounded-3xl sm:rounded-[36px] p-7 sm:p-10 lg:p-11 border border-teal/30 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Background Stage Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal/20 rounded-full blur-3xl pointer-events-none group-hover:bg-teal/30 transition-colors duration-500" />

            <div className="space-y-6 relative z-10">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-white/10 border border-white/20 text-teal-bright px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-teal-bright animate-pulse" />
                  <span>Institutional Collaboration</span>
                </span>
              </div>

              {/* Calligraphy Subtitle & Main Title */}
              <div className="space-y-1.5">
                <span className="font-tempting text-teal-bright text-2xl sm:text-3xl font-normal block">
                  Institutional Network
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Partner With Future Yatra Group
                </h3>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-body text-sand-tint/90 leading-relaxed font-normal">
                Are you a school, college, university, or agent looking to collaborate with an established, multi-brand education & visa consulting group?
              </p>

              {/* Feature Pills Widget */}
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-semibold text-sand-tint border border-white/10">
                  <Globe2 className="w-3.5 h-3.5 text-teal-bright" />
                  <span>Global University Network</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-semibold text-sand-tint border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-bright" />
                  <span>100% Ethical Standards</span>
                </div>
              </div>

            </div>

            {/* Action CTA Button */}
            <div className="pt-8 relative z-10">
              <Link
                href="/coming-soon?section=partner"
                className="inline-flex items-center justify-between w-full bg-teal text-navy hover:bg-teal-bright px-6 py-3.5 rounded-full font-bold text-xs sm:text-small transition-all duration-300 shadow-lg group-hover:shadow-teal/30"
              >
                <span>PARTNER WITH FUTURE YATRA</span>
                <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </motion.div>

          {/* ================================================================== */}
          {/* STAGE 2: CAREERS (LIGHT TEAL GLASSMOPHISM LUXURY STAGE)             */}
          {/* ================================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-gradient-to-br from-teal-tint/90 via-white to-sand-tint/40 text-navy rounded-3xl sm:rounded-[36px] p-7 sm:p-10 lg:p-11 border border-teal/40 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Background Stage Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal/15 rounded-full blur-3xl pointer-events-none group-hover:bg-teal/25 transition-colors duration-500" />

            <div className="space-y-6 relative z-10">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-tint border border-teal/40 flex items-center justify-center text-teal flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-teal/15 border border-teal/30 text-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                  <span>Join Our Team</span>
                </span>
              </div>

              {/* Calligraphy Subtitle & Main Title */}
              <div className="space-y-1.5">
                <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
                  Life at Future Yatra
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                  Build Your Career With Us
                </h3>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-body text-muted leading-relaxed font-normal">
                We're building four specialist teams under one accountable company — looking for advisors, counselors, and growth leaders who take honest student counselling seriously.
              </p>

              {/* Feature Pills Widget */}
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl text-xs font-semibold text-navy border border-teal/20 shadow-xs">
                  <Building2 className="w-3.5 h-3.5 text-teal" />
                  <span>4 Specialist Brands</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-xl text-xs font-semibold text-navy border border-teal/20 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                  <span>Continuous Career Growth</span>
                </div>
              </div>

            </div>

            {/* Action CTA Button */}
            <div className="pt-8 relative z-10">
              <Link
                href="/coming-soon?section=careers"
                className="inline-flex items-center justify-between w-full bg-navy text-white hover:bg-navy-deep px-6 py-3.5 rounded-full font-bold text-xs sm:text-small transition-all duration-300 shadow-lg group-hover:shadow-navy/30"
              >
                <span>EXPLORE CAREERS</span>
                <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
