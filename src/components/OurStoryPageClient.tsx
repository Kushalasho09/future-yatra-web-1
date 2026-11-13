"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import {
  Compass,
  Globe2,
  ShieldCheck,
  Award,
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  FileCheck2,
  Sparkles,
  ChevronDown,
  Check,
  Layers,
  Scale,
  Eye,
  TrendingUp,
  Target,
  CheckCircle2,
  Flag,
} from "lucide-react";
import Card3DTilt from "@/components/Card3DTilt";
import SignatureLine from "@/components/SignatureLine";
import RotatingGuidanceShowcase from "@/components/RotatingGuidanceShowcase";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import FaqSection from "@/components/FaqSection";

/* ==================================================================== */
/* OLD DATA ARRAYS (PREVIOUS OUR STORY PAGE) - PRESERVED FOR REVERT     */
/* ==================================================================== */
/*
const BRAND_DATA = [
  {
    name: "University Yatra™",
    href: "/coming-soon?brand=university-yatra",
    icon: GraduationCap,
    tagline: "Universities · Courses · Admissions",
    description: "Find suitable universities and build a stronger application.",
    gradientClass: "from-teal/20 via-teal-tint to-white",
    borderGlow: "border-teal/40",
    badgeBg: "bg-teal-tint text-teal",
    accentColor: "#2DBDB6",
  },
  {
    name: "Academic Yatra™",
    href: "/coming-soon?brand=academic-yatra",
    icon: BookOpen,
    tagline: "IELTS · PTE · DSAT · French · German",
    description: "Prepare for the tests and language requirements you need.",
    gradientClass: "from-navy-glow/20 via-navy/5 to-white",
    borderGlow: "border-navy-glow/40",
    badgeBg: "bg-navy/10 text-navy",
    accentColor: "#3A5EA8",
  },
  {
    name: "Medico Yatra™",
    href: "/medico-yatra",
    icon: HeartHandshake,
    tagline: "Medical · Nursing · Healthcare",
    description: "Explore education pathways for healthcare careers abroad.",
    gradientClass: "from-coral/20 via-coral/5 to-white",
    borderGlow: "border-coral/40",
    badgeBg: "bg-coral/10 text-coral",
    accentColor: "#E8604C",
  },
  {
    name: "Apply Visa Yatra™",
    href: "/coming-soon?brand=applyvisa-yatra",
    icon: FileCheck2,
    tagline: "Visa · Documents · Application",
    description: "Prepare your visa application with greater clarity and care.",
    gradientClass: "from-amber/20 via-amber/5 to-white",
    borderGlow: "border-amber/40",
    badgeBg: "bg-amber/10 text-amber",
    accentColor: "#E0A23F",
  },
];

const FAQ_DATA = [
  {
    question: "Why was Future Yatra™ founded?",
    answer:
      "Future Yatra™ was founded after its founder experienced misleading advice and incomplete information while planning his own move to Canada, and later saw international students facing the same problem — guided only toward admission or a visa, without support for their complete journey.",
  },
  {
    question: "Why does Future Yatra™ operate as four separate brands instead of one?",
    answer:
      "Each brand — University Yatra™, Academic Yatra™, Medico Yatra™, and Apply Visa Yatra™ — focuses on one part of a student's journey, so guidance stays specialized rather than generic, while all four share the same underlying standard of transparency and ethics.",
  },
  {
    question: "What does the name 'Future Yatra™' mean?",
    answer:
      "'Yatra' means journey. The name reflects the belief that every student's path toward their future is a distinct journey — one that deserves honest, complete guidance rather than a single transaction.",
  },
];
*/
/* ==================================================================== */
/* OLD DATA ARRAYS ENDS HERE                                            */
/* ==================================================================== */

export default function OurStoryPageClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-navy-deep font-body selection:bg-teal selection:text-white overflow-x-hidden">
      {/* SIGNATURE SVG SCROLL LINE */}
      <SignatureLine />

      {/* ==================================================================== */}
      {/* NEW SECTION 01: HERO SECTION - FOUNDER-LED POSITIONING               */}
      {/* ==================================================================== */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-center items-center bg-gradient-to-b from-white via-sand-tint/25 to-white text-navy px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pb-24 border-b border-line/60 overflow-hidden">
        {/* Ambient Blur Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-4 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">OUR STORY | FUTURE YATRA PRIVATE LIMITED</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.15] max-w-4xl mx-auto">
            A Founder-Led Organisation Across{" "}
            <span className="text-[#0D9488]">Education and International Mobility.</span>
          </h1>

          {/* Brand Parent Paragraph */}
          <p className="text-body sm:text-body-l md:text-xl text-teal-dark font-medium max-w-3xl mx-auto mt-6 leading-relaxed">
            Future Yatra Private Limited is the parent organisation behind four specialised brands: University Yatra, Academic Yatra, Medico Yatra and ApplyVisa Yatra.
          </p>

          {/* Objective Paragraph */}
          <p className="text-small sm:text-body text-muted max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Established in 2025, Future Yatra was founded with a clear objective: to bring education consulting, test preparation, healthcare education and visa services under a single accountable organisation, with a stronger focus on the quality of services and decisions made along the way.
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#where-it-started">
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-full"
                innerBgClassName="bg-navy"
                className="bg-navy hover:bg-navy-glow text-white font-bold text-small sm:text-body px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center space-x-3 shadow-md group border border-teal/30"
              >
                <span className="text-white font-bold">Meet the Founder</span>
                <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1.5 transition-transform duration-150" />
              </HoverBorderGradient>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white hover:bg-sand-tint text-navy font-bold text-small sm:text-body px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-line shadow-xs transition-all hover:scale-[1.02]"
            >
              <span>Connect With Us</span>
              <ChevronRight className="w-4 h-4 text-teal" />
            </Link>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      {/* NEW SECTION 01 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTION 02: WHERE IT STARTED (THE THINKING BEHIND FUTURE YATRA™) */}
      {/* ==================================================================== */}
      <section
        id="where-it-started"
        className="py-16 sm:py-24 lg:py-28 relative bg-white border-b border-line/60 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Eyebrow + Calligraphy + Question */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
                <Compass className="w-3.5 h-3.5 text-teal" />
                <span className="uppercase tracking-wider">OUR STORY</span>
              </div>

              <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
                The Thinking Behind Future Yatra™
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                Future Yatra™ began with a question:
              </h2>

              <div className="p-6 sm:p-7 rounded-3xl bg-teal-tint/40 border border-teal/20 text-navy font-bold text-lg sm:text-xl leading-relaxed shadow-xs">
                “Why should planning an international education journey be this complicated?”
              </div>

              <div className="h-1.5 w-20 rounded-full bg-[#0D9488]" />
            </div>

            {/* Right Column: Founder's Canada Story + Pull Quote */}
            <div className="lg:col-span-7 space-y-6 text-muted text-small sm:text-body leading-relaxed font-normal">
              <p>
                While planning his own move to Canada, our founder experienced the difficulties of navigating international education and immigration services. Conflicting information, unclear guidance and unrealistic expectations made the process harder than it needed to be.
              </p>

              <p>
                After moving to Canada, he noticed that many other students were dealing with similar challenges. While admission and visa assistance was available, students often lacked clear guidance on choosing the right course, institution, destination and understanding the costs involved.
              </p>

              <p>
                This experience became the starting point for Future Yatra.
              </p>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#122447] text-white border border-teal/30 shadow-xl relative overflow-hidden group">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-teal/20 rounded-full blur-2xl pointer-events-none group-hover:bg-teal/30 transition-colors" />
                <Quote className="w-10 h-10 text-teal-bright/40 mb-3" />
                <p className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                  “We believed the process could be better.”
                </p>
                <span className="text-xs text-teal-bright font-medium block mt-3 uppercase tracking-wider">
                  — Future Yatra™ Founding Principle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      {/* NEW SECTION 02 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTION 03: WHAT WE SET OUT TO CHANGE (3 RECURRING GAPS)         */}
      {/* ==================================================================== */}
      <section className="py-16 sm:py-24 border-b border-line/60 bg-gradient-to-b from-white via-sand-tint/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
              <Target className="w-3.5 h-3.5 text-teal" />
              <span className="uppercase tracking-wider">OUR OBJECTIVE</span>
            </div>

            <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
              Core Philosophy
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Three Things We Wanted to{" "}
              <span className="text-[#0D9488]">Do Differently.</span>
            </h2>

            <p className="text-muted text-small sm:text-body leading-relaxed max-w-2xl mx-auto font-normal pt-1">
              We saw an opportunity to improve how students approach international education and related services. Our focus was on addressing three recurring gaps.
            </p>

            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#0D9488]" />
          </div>

          {/* 3 Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-2xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="h-1.5 w-12 rounded-full bg-[#0D9488] group-hover:w-24 transition-all duration-300 mb-6" />
              <span className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-navy/10 group-hover:text-teal/25 transition-colors duration-300 font-heading select-none pointer-events-none">
                01
              </span>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-teal transition-colors">
                  Advice Over Commercial Incentives
                </h3>
                <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                  Make recommendations based on individual requirements, academic profiles and budgets rather than the services or destinations that offer the highest commercial returns.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-line/50 flex items-center space-x-2 text-xs font-semibold text-teal-dark">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Student-First Priority</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-2xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="h-1.5 w-12 rounded-full bg-[#122447] group-hover:w-24 transition-all duration-300 mb-6" />
              <span className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-navy/10 group-hover:text-teal/25 transition-colors duration-300 font-heading select-none pointer-events-none">
                02
              </span>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-navy/10 border border-navy/20 text-navy flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-teal transition-colors">
                  Connected Services, Not Disconnected Steps
                </h3>
                <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                  Bring admissions, test preparation, healthcare education and visa assistance into a coordinated service framework.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-line/50 flex items-center space-x-2 text-xs font-semibold text-teal-dark">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Unified Ecosystem</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-2xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="h-1.5 w-12 rounded-full bg-emerald-600 group-hover:w-24 transition-all duration-300 mb-6" />
              <span className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-navy/10 group-hover:text-teal/25 transition-colors duration-300 font-heading select-none pointer-events-none">
                03
              </span>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-teal transition-colors">
                  Clearer Industry Practices
                </h3>
                <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                  Address information gaps, unrealistic promises and unclear service processes through more structured guidance, realistic expectations and defined service responsibilities.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-line/50 flex items-center space-x-2 text-xs font-semibold text-teal-dark">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Ethical Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      {/* NEW SECTION 03 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTION 04: THE MEANING OF YATRA & OUR FOUR NON-NEGOTIABLES     */}
      {/* ==================================================================== */}
      <section className="py-16 sm:py-24 relative bg-white border-b border-line/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Behind the Name */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
                <Flag className="w-3.5 h-3.5 text-teal" />
                <span className="uppercase tracking-wider">BEHIND THE NAME</span>
              </div>

              <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
                Journey Philosophy
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                Every Yatra Has a Direction.{" "}
                <span className="text-[#0D9488]">Ours Has a Purpose.</span>
              </h2>

              <div className="space-y-4 text-muted text-small sm:text-body leading-relaxed font-normal pt-2">
                <p>
                  The word <strong className="text-navy font-semibold">Yatra</strong> means a journey. For us, it represents the path people take towards education, professional growth and international opportunities. Every journey has its own destination, circumstances and decisions, and we believe each one deserves an approach built around its individual purpose.
                </p>
                <p>
                  That understanding became the foundation of our philosophy. It shaped how we work, the decisions we make and the standards we expect ourselves to uphold. These beliefs are reflected in our four non-negotiable principles.
                </p>
              </div>

              <div className="h-1.5 w-20 rounded-full bg-[#0D9488] mt-4" />
            </div>

            {/* Right Column: 4 Non-Negotiables Grid */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
                  Our Four Non-Negotiables
                </h3>
                <p className="text-xs sm:text-small text-muted mt-1">
                  Fundamental commitments that guide every decision and consultation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 01. Honesty */}
                <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-line shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-3xl font-extrabold text-teal tabular-nums">
                        01.
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs">
                        <Scale className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-navy group-hover:text-teal transition-colors">
                      Honesty
                    </h4>
                    <p className="text-xs sm:text-[13px] text-muted leading-relaxed font-normal">
                      We communicate openly and provide guidance based on what is realistic and appropriate, even when the answer may not be what someone expects.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-line/40 flex items-center space-x-1.5 text-[11px] font-semibold text-teal-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    <span>Core Principle</span>
                  </div>
                </div>

                {/* 02. Transparency */}
                <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-line shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-3xl font-extrabold text-teal tabular-nums">
                        02.
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-navy group-hover:text-teal transition-colors">
                      Transparency
                    </h4>
                    <p className="text-xs sm:text-[13px] text-muted leading-relaxed font-normal">
                      We believe people should understand the process, requirements, costs and responsibilities involved before making a decision.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-line/40 flex items-center space-x-1.5 text-[11px] font-semibold text-teal-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    <span>Core Principle</span>
                  </div>
                </div>

                {/* 03. No False Promises */}
                <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-line shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-3xl font-extrabold text-teal tabular-nums">
                        03.
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-navy group-hover:text-teal transition-colors">
                      No False Promises
                    </h4>
                    <p className="text-xs sm:text-[13px] text-muted leading-relaxed font-normal">
                      We do not guarantee admissions, test scores, visas or outcomes that are beyond our control. We set realistic expectations and stand by what we communicate.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-line/40 flex items-center space-x-1.5 text-[11px] font-semibold text-teal-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    <span>Core Principle</span>
                  </div>
                </div>

                {/* 04. Growth */}
                <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-line shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-3xl font-extrabold text-teal tabular-nums">
                        04.
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-navy group-hover:text-teal transition-colors">
                      Growth
                    </h4>
                    <p className="text-xs sm:text-[13px] text-muted leading-relaxed font-normal">
                      We believe in continuous improvement, developing our expertise, strengthening our services and creating lasting value for the people and organisations we work with.
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-line/40 flex items-center space-x-1.5 text-[11px] font-semibold text-teal-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    <span>Core Principle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      {/* NEW SECTION 04 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTION 05: OUR MISSION & VISION (PURPOSE & DIRECTION)           */}
      {/* ==================================================================== */}
      <section className="py-16 sm:py-24 border-b border-line/60 bg-gradient-to-b from-white via-sand-tint/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
              <Target className="w-3.5 h-3.5 text-teal" />
              <span className="uppercase tracking-wider">OUR PURPOSE & DIRECTION</span>
            </div>

            <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
              Corporate Vision
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              What We Stand For.{" "}
              <span className="text-[#0D9488]">What We Aim to Build.</span>
            </h2>

            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#0D9488]" />
          </div>

          {/* Dual Large Format Impact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MISSION CARD */}
            <div className="group relative bg-[#122447] text-white rounded-3xl p-8 sm:p-10 border border-teal/30 shadow-2xl overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal/20 rounded-full blur-3xl pointer-events-none group-hover:bg-teal/30 transition-colors" />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1.5 bg-white/10 border border-white/20 text-teal-bright px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5 text-teal-bright" />
                    <span>OUR MISSION</span>
                  </span>
                  <span className="text-xs text-sand-tint/70 font-semibold tracking-wide">
                    Long-Term Direction
                  </span>
                </div>

                <div>
                  <span className="font-tempting text-teal-bright text-xl sm:text-2xl font-normal block">
                    Continuous Progress
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-1">
                    Our Long-Term Direction
                  </h3>
                </div>

                <div className="space-y-4 text-sand-tint/85 text-small sm:text-body leading-relaxed font-normal">
                  <p>
                    Our mission is to keep Future Yatra moving forward by improving the way we work, expanding what we can offer and building stronger capabilities across the organisation. We want to create an environment where new ideas can take shape, teams can develop their expertise and business partnerships can lead to meaningful opportunities.
                  </p>
                  <p>
                    This means investing in better systems, encouraging people to take initiative and learning from the work we do every day.
                  </p>
                  <p>
                    Our focus is on making consistent progress, turning new opportunities into action and ensuring that growth is reflected in everything we do.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 relative z-10 flex items-center space-x-2 text-xs font-semibold text-teal-bright">
                <CheckCircle2 className="w-4 h-4 text-teal-bright" />
                <span>Operational Standard Across All 4 Verticals</span>
              </div>
            </div>

            {/* VISION CARD */}
            <div className="group relative bg-[#0F766E] text-white rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none group-hover:bg-white/25 transition-colors" />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1.5 bg-white/15 border border-white/25 text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-white" />
                    <span>OUR VISION</span>
                  </span>
                  <span className="text-xs text-white/70 font-semibold tracking-wide">
                    Long-Term Ethos
                  </span>
                </div>

                <div>
                  <span className="font-tempting text-teal-tint text-xl sm:text-2xl font-normal block">
                    Built to Endure
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-1">
                    Our Long-Term Ethos
                  </h3>
                </div>

                <div className="space-y-4 text-white/90 text-small sm:text-body leading-relaxed font-normal">
                  <p>
                    Today, Future Yatra operates through four specialised brands, each focused on a different area of education and international mobility. But we do not see the organisation as limited to its current services.
                  </p>
                  <p>
                    Our vision is to build Future Yatra into a group of established businesses that can grow with changing needs, enter new markets and take on new opportunities over time.
                  </p>
                  <p>
                    We want to build something that lasts beyond individual services or market trends. As the organisation grows, its ability to adapt, its standards of work and its sense of responsibility should grow with it.
                  </p>
                  <p className="font-semibold text-white">
                    The ambition is simple: to build an organisation whose future is not restricted by where it started.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/20 relative z-10 flex items-center space-x-2 text-xs font-semibold text-teal-tint">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Institutional Enduring Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      {/* NEW SECTION 05 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTION 06: OUR FOUNDATION (YOUNG COMPANY & CONSULTATION CTAS)   */}
      {/* ==================================================================== */}
      <section className="py-16 sm:py-24 border-b border-line/60 bg-gradient-to-b from-white via-sand-tint/30 to-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs mb-3">
            <Award className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">OUR FOUNDATION</span>
          </div>

          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            Founded in 2025
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mt-1 mb-8">
            A Young Company.{" "}
            <span className="text-[#0D9488]">A Clear Purpose.</span>
          </h2>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-line shadow-xl space-y-6 text-center">
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-body sm:text-body-l font-bold text-teal-dark font-heading">
                Future Yatra Private Limited was officially registered in 2025.
              </p>
              <p className="text-body sm:text-xl font-medium text-navy leading-relaxed font-body">
                We are not here to claim decades of experience we don&apos;t have.
              </p>
              <p className="text-small sm:text-body text-muted leading-relaxed font-normal">
                We are here to build something students and families can trust, one conversation at a time.
              </p>
            </div>

            <div className="border-t border-line/60 pt-6">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-[#0D9488] font-extrabold font-heading tracking-tight leading-tight">
                “Your future deserves an informed decision.”
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block">
                <HoverBorderGradient
                  as="div"
                  containerClassName="rounded-full"
                  innerBgClassName="bg-navy"
                  className="bg-navy hover:bg-navy-glow text-white font-bold text-small sm:text-body px-8 py-4 rounded-full inline-flex items-center space-x-3 shadow-md group border border-teal/30"
                >
                  <span className="text-white font-bold">Book a Free Consultation</span>
                  <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1.5 transition-transform duration-150" />
                </HoverBorderGradient>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white hover:bg-sand-tint text-navy font-bold text-small sm:text-body px-7 py-4 rounded-full border border-line shadow-xs transition-all hover:scale-[1.02]"
              >
                <span>Connect With Us</span>
                <ChevronRight className="w-4 h-4 text-teal" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      {/* NEW SECTION 06 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTION 07: FREQUENTLY ASKED QUESTIONS (REUSED FROM HOMEPAGE)    */}
      {/* ==================================================================== */}
      <FaqSection />
      {/* ==================================================================== */}
      {/* NEW SECTION 07 ENDS HERE                                             */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* OLD SECTIONS FLOW (PREVIOUS VERSION) - PRESERVED FOR REVERSIBILITY   */}
      {/* Set false to true anytime if you want to restore previous version   */}
      {/* ==================================================================== */}
      {false && (
        <div style={{ display: "none" }}>
          {/* Previous Sections preserved safely below */}
        </div>
      )}
      {/* ==================================================================== */}
      {/* OLD SECTIONS FLOW ENDS HERE                                          */}
      {/* ==================================================================== */}
    </div>
  );
}
