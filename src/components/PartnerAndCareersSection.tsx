"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Briefcase,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Users,
} from "lucide-react";

export default function PartnerAndCareersSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/20 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
            <Users className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">Collaboration & Opportunities</span>
          </div>

          {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
          {/*
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            Engage With Future Yatra
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Partnerships, Careers &{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
              Student Guidance.
            </span>
          </h2>
          */}
          {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            Engage With Future Yatra
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Partnerships, Careers &{" "}
            <span className="text-[#0D9488]">
              Student Guidance.
            </span>
          </h2>
          {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}

          <p className="text-muted text-small sm:text-body leading-relaxed max-w-2xl mx-auto font-normal pt-1">
            Whether you are an institution seeking a trusted representative, a professional eager to make an impact, or a student planning your overseas journey—connect with our specialized teams.
          </p>

          {/* ==================== OLD GRADIENT UNDERLINE STARTS HERE ==================== */}
          {/*
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-teal to-teal-bright" />
          */}
          {/* ==================== OLD GRADIENT UNDERLINE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING UNDERLINE STARTS HERE ==================== */}
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#0D9488]" />
          {/* ==================== NEW SOLID COUNSELLING UNDERLINE ENDS HERE ==================== */}
        </div>

        {/* ==================================================================== */}
        {/* OLD 2-CARD LAYOUT (PREVIOUS VERSION) STARTS HERE                     */}
        {/* ==================================================================== */}
        {/*
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-navy-deep via-navy to-[#102447] text-white rounded-3xl p-8">
            <h3>Partner With Future Yatra™ Group</h3>
            <p>Institutional collaborations with universities and global partners.</p>
            <Link href="/partner-with-us">Partner With Us</Link>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-line">
            <h3>Careers at Future Yatra™</h3>
            <p>Join our team of advisors and specialists.</p>
            <Link href="/contact">View Open Roles</Link>
          </div>
        </div>
        */}
        {/* ==================================================================== */}
        {/* OLD 2-CARD LAYOUT ENDS HERE                                          */}
        {/* ==================================================================== */}

        {/* ==================================================================== */}
        {/* NEW 3-CARD LAYOUT (INCL. STUDENT CTA CARD) STARTS HERE                */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* CARD 1: PARTNER WITH US (B2B INSTITUTIONS) */}
          {/* ==================== OLD GRADIENT CARD STARTS HERE ==================== */}
          {/*
          <div className="group relative bg-gradient-to-br from-navy-deep via-navy to-[#102447] text-white rounded-3xl p-7 sm:p-8 border border-teal/30 shadow-xl overflow-hidden flex flex-col justify-between">
          */}
          {/* ==================== OLD GRADIENT CARD ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CARD STARTS HERE ==================== */}
          <div className="group relative bg-[#122447] text-white rounded-3xl p-7 sm:p-8 border border-teal/30 shadow-xl overflow-hidden flex flex-col justify-between">
          {/* ==================== NEW SOLID COUNSELLING CARD ENDS HERE ==================== */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal/20 rounded-full blur-3xl pointer-events-none group-hover:bg-teal/30 transition-colors duration-500" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-white/10 border border-white/20 text-teal-bright px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-teal-bright" />
                  <span>Institutional B2B</span>
                </span>
              </div>

              <div>
                <span className="font-tempting text-teal-bright text-xl sm:text-2xl font-normal block">
                  Institutional Network
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white leading-tight mt-1">
                  Partner With Future Yatra™
                </h3>
              </div>

              <p className="text-sand-tint/80 text-xs sm:text-small leading-relaxed font-normal">
                We welcome collaboration with universities, colleges, international admission agencies, and test preparation centers seeking ethical, compliant student recruitment.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 relative z-10">
              <Link
                href="/partner-with-us"
                className="w-full inline-flex items-center justify-center space-x-2 bg-teal hover:bg-teal-bright text-navy font-bold text-xs sm:text-small px-5 py-3.5 rounded-full transition-all duration-200 shadow-md group/btn"
              >
                <span>Initiate Partnership</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 2: STUDENT CTA (STUDENTS & PARENTS) */}
          {/* ==================== OLD GRADIENT CARD STARTS HERE ==================== */}
          {/*
          <div className="group relative bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#0284C7] text-white rounded-3xl p-7 sm:p-8 border border-white/20 shadow-xl overflow-hidden flex flex-col justify-between">
          */}
          {/* ==================== OLD GRADIENT CARD ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CARD STARTS HERE ==================== */}
          <div className="group relative bg-[#0F766E] text-white rounded-3xl p-7 sm:p-8 border border-white/20 shadow-xl overflow-hidden flex flex-col justify-between">
          {/* ==================== NEW SOLID COUNSELLING CARD ENDS HERE ==================== */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/15 rounded-full blur-3xl pointer-events-none group-hover:bg-white/25 transition-colors duration-500" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-white/15 border border-white/25 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                  <span>Students & Families</span>
                </span>
              </div>

              <div>
                <span className="font-tempting text-teal-tint text-xl sm:text-2xl font-normal block">
                  Begin Your Journey
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white leading-tight mt-1">
                  Plan Your Study Abroad
                </h3>
              </div>

              <p className="text-white/90 text-xs sm:text-small leading-relaxed font-normal">
                Get honest profile evaluations, university shortlisting, language test coaching, and study visa assistance across 50+ countries with complete transparency.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 relative z-10">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 bg-white hover:bg-sand-tint text-navy font-bold text-xs sm:text-small px-5 py-3.5 rounded-full transition-all duration-200 shadow-md group/btn"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-teal-dark group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 3: CAREERS (TALENT & JOBS) */}
          <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-line shadow-xl hover:border-teal/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal/20 transition-colors duration-500" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-tint border border-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-navy/5 border border-navy/10 text-navy px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-teal" />
                  <span>Join Our Team</span>
                </span>
              </div>

              <div>
                <span className="font-tempting text-teal text-xl sm:text-2xl font-normal block">
                  Careers at Future Yatra
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-navy leading-tight mt-1">
                  Build Meaningful Careers
                </h3>
              </div>

              <p className="text-muted text-xs sm:text-small leading-relaxed font-normal">
                Join our expanding organization across academic counselling, language coaching, medical education advising, and corporate operations.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-line/50 relative z-10">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 bg-navy hover:bg-navy-glow text-white font-bold text-xs sm:text-small px-5 py-3.5 rounded-full transition-all duration-200 shadow-md group/btn"
              >
                <span>View Opportunities</span>
                <ArrowRight className="w-4 h-4 text-teal-bright group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
        {/* ==================================================================== */}
        {/* NEW 3-CARD LAYOUT ENDS HERE                                          */}
        {/* ==================================================================== */}

      </div>
    </section>
  );
}
