"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Stethoscope,
  ChevronDown,
  Sparkles,
  Layers,
  Building2,
  CheckCircle2,
  Users,
  Compass,
  Target,
  HeartHandshake,
  MapPin,
  Clock,
  ArrowUpRight,
  Quote,
  Check,
} from "lucide-react";
import SignatureLine from "@/components/SignatureLine";
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";
import GlobalDestinationsSection from "@/components/GlobalDestinationsSection";
import TopStudyDestinations from "@/components/TopStudyDestinations";
import CorePrinciplesSection from "@/components/CorePrinciplesSection";
import LookingAheadSection from "@/components/LookingAheadSection";

export default function AboutUsPageClient() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Accordion open/close state for Section 7 FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 7: FAQs
  const faqs = [
    {
      question: "Is Future Yatra a new company?",
      answer:
        "Yes. Future Yatra Private Limited was officially registered in 2025. We choose to be upfront about this rather than claiming artificial legacy. The company was founded to solve a real problem: eliminating fragmented, commission-driven sales tactics in the study abroad sector by unifying four specialist brands under one founder-led, accountable entity.",
    },
    {
      question: "What's the difference between Future Yatra and its four brands?",
      answer:
        "Future Yatra Private Limited is the parent entity that governs company-wide quality, compliance, ethics, and operations. The four brands — University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra — are dedicated specialist divisions, each focused on one specific phase of your journey with specialized advisors.",
    },
    {
      question: "How big is the Future Yatra team?",
      answer:
        "We maintain a small, highly focused team by deliberate choice. Rather than scaling up call centers or hiring aggressive tele-callers, we keep our operations lean so that every student file remains directly accountable to our founder and senior advisors.",
    },
    {
      question: "Does Future Yatra guarantee admissions or visas?",
      answer:
        "No. Future Yatra Private Limited and all its brands strictly prohibit guaranteed-outcome claims. University admissions decisions rest solely with university admissions committees, and visa decisions rest exclusively with government embassies. We guarantee rigorous documentation, honest guidance, and complete transparency.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* SIGNATURE SVG BACKGROUND LINE */}
      <SignatureLine />

      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-navy-glow/15 rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-80 right-10 w-[450px] h-[450px] bg-teal/20 rounded-pill blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute top-[1800px] left-1/3 w-[500px] h-[500px] bg-sand/60 rounded-pill blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* ==================================================================== */}
        {/* SECTION 1: HERO — "WHO WE ARE"                                       */}
        {/* ==================================================================== */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Category Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeTier1 }}
                className="inline-flex items-center space-x-2.5 bg-navy text-white px-4 py-2 rounded-pill font-heading text-xs sm:text-micro uppercase tracking-wider font-semibold shadow-md max-w-full"
              >
                <Sparkles className="w-4 h-4 text-teal animate-pulse flex-shrink-0" />
                <span className="truncate">Parent Company • Future Yatra Private Limited</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12]"
              >
                India's <span className="text-teal">Founder-Led</span> Study Abroad & Visa Consulting Group
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
                className="text-body-l sm:text-xl text-navy font-semibold leading-relaxed"
              >
                Future Yatra Private Limited is the parent company behind four specialist brands —{" "}
                <span className="text-teal font-bold">University Yatra</span>,{" "}
                <span className="text-emerald-600 font-bold">Academic Yatra</span>,{" "}
                <span className="text-rose-600 font-bold">Medico Yatra</span>, and{" "}
                <span className="text-amber-600 font-bold">ApplyVisa Yatra</span>.
              </motion.p>

              {/* Honest Founder-Voice Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                className="text-body sm:text-body-l text-muted leading-relaxed max-w-2xl font-normal"
              >
                Officially registered in 2025, we offer no pretense of decades-old legacy or inflated
                vanity statistics. Future Yatra was built around one simple conviction: a student's global
                education journey deserves one accountable, transparent company — not scattered services
                each chasing a fast commission.
              </motion.p>

              {/* Dual Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: easeTier1 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/our-story/"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-navy text-white text-body font-semibold px-7 py-4 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_25px_rgba(45,189,182,0.45)] transition-all duration-300 shadow-lg group"
                  >
                    <span>Meet the Founder</span>
                    <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </MagneticButton>

                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/our-story/"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-teal-tint/80 border border-teal/40 text-navy text-body font-semibold px-7 py-4 rounded-pill hover:bg-teal-tint hover:border-teal transition-all duration-300 shadow-xs group"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowUpRight className="w-4 h-4 text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </MagneticButton>
              </motion.div>

              {/* Quick Trust Badges Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-small text-muted font-medium border-t border-line/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span>Registered MCA Company (2025)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span>100% Founder-Led Oversight</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                  <span>4 Integrated Brands</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Column (Founder Photo & Journey Card Showcase) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeTier1 }}
              className="lg:col-span-5 relative"
            >
              <Card3DTilt className="w-full">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Decorative Frame Glow */}
                  <div className="absolute -bottom-4 -left-4 w-full h-full rounded-section border-2 border-teal/40 pointer-events-none hidden sm:block" />

                  {/* Main Visual Image Wrapper */}
                  <div className="relative rounded-section overflow-hidden border border-line shadow-2xl bg-navy group">
                    <Image
                      src="/images/our_commitment_advisors.png"
                      alt="Future Yatra Founder and Counselling Team"
                      width={600}
                      height={680}
                      className="w-full h-[360px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/30 to-transparent" />

                    {/* Content Overlay at bottom of Hero Image */}
                    <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-2 text-white">
                      <span className="font-tempting text-teal-bright text-2xl font-normal block">
                        Our Vision & Purpose
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight">
                        One Accountable Partner for Your Entire Global Journey
                      </h3>
                      <p className="text-xs text-sand-tint/80 leading-relaxed font-normal">
                        From test preparation to university selection, medical pathway guidance, and final visa documentation.
                      </p>
                    </div>

                  </div>

                  {/* Floating Overlapping Founder Note Badge */}
                  <div className="absolute -top-5 -right-3 sm:-right-6 glass-card-navy p-4 rounded-card border border-teal/40 shadow-2xl flex items-center space-x-3.5 z-30 max-w-[280px]">
                    <div className="w-11 h-11 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-teal-bright" />
                    </div>
                    <div>
                      <span className="font-heading text-small font-extrabold text-white block">
                        Radically Honest
                      </span>
                      <span className="text-xs text-teal-bright font-medium block">
                        Direct Founder Oversight
                      </span>
                    </div>
                  </div>

                </div>
              </Card3DTilt>
            </motion.div>

          </div>
        </section>

        <TopStudyDestinations
          eyebrow="What We Do"
          title={
            <>
              Four Specialist Brands. <span className="text-teal">One Connected Pathway.</span>
            </>
          }
          description="A study-abroad journey moves through test scores → university application → sometimes a medical pathway → almost always a visa. Most consultancies specialize in only one stage — leaving students to stitch fragmented advice together."
        />

        {/* ==================================================================== */}
        {/* SECTION 3: WHY A SMALL TEAM, BY DESIGN (PHILOSOPHY CALLOUT)          */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/20 to-white relative rounded-section overflow-hidden my-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <span className="font-tempting text-teal text-3xl font-normal block">
                Our Operating Philosophy
              </span>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy leading-tight tracking-tight">
                Why a Small Team, <span className="text-teal">By Deliberate Design</span>
              </h2>

              <div className="space-y-4 text-small sm:text-body text-muted leading-relaxed font-normal">
                <p>
                  In an industry dominated by massive call-centers pushing monthly quotas, remaining a small, focused team is not a limitation — it is our greatest strategic strength.
                </p>
                <p>
                  When you work with Future Yatra, your profile is never handed off to junior interns or outsourced tele-callers. Every application, strategy session, and document check remains under direct founder-led supervision.
                </p>
              </div>

              {/* Key Philosophy Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-card bg-white border border-line shadow-xs flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-tint text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading text-small font-bold text-navy">Direct Accountability</h4>
                    <p className="text-xs text-muted mt-0.5">You talk to senior decision-makers, not scripted tele-sales reps.</p>
                  </div>
                </div>

                <div className="p-4 rounded-card bg-white border border-line shadow-xs flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-tint text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading text-small font-bold text-navy">Zero Franchise Dilution</h4>
                    <p className="text-xs text-muted mt-0.5">One company standard across every brand, without third-party agents.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Stylized Pull-Quote Card */}
            <div className="lg:col-span-5">
              <Card3DTilt className="w-full">
                <div className="glass-card-navy rounded-section p-8 sm:p-10 border border-teal/40 text-white relative shadow-2xl space-y-6 overflow-hidden">
                  
                  {/* Decorative Quote Icon */}
                  <Quote className="w-16 h-16 text-teal/20 absolute top-4 right-4 pointer-events-none" />

                  <div className="inline-flex items-center space-x-2 bg-teal/20 text-teal-bright px-3.5 py-1.5 rounded-pill text-xs font-bold border border-teal/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Founder's Quote</span>
                  </div>

                  {/* Stylized Disarming Quote */}
                  <blockquote className="font-heading text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight">
                    "We'd rather lose a client comparison than claim '10,000+ success stories' in our first year."
                  </blockquote>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <span className="font-heading text-small font-bold text-white block">
                        Future Yatra Leadership
                      </span>
                      <span className="text-xs text-teal-bright font-medium">
                        Founding Director Note
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              </Card3DTilt>
            </div>

          </div>
        </section>

        <GlobalDestinationsSection />

        <CorePrinciplesSection />

        <LookingAheadSection />

        {/* ==================================================================== */}
        {/* SECTION 7: FAQ ACCORDION                                             */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 border-t border-line/60">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="font-tempting text-teal text-3xl font-normal block">
              Frequently Asked Questions
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy leading-tight tracking-tight">
              Clear Answers. <span className="text-teal">No Fluff.</span>
            </h2>

            <p className="text-body sm:text-body-l text-muted font-normal">
              Everything you need to know about Future Yatra Private Limited and how we operate.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-card border border-line bg-white shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-bold text-navy hover:text-teal transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full bg-teal-tint text-teal flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-teal text-white" : ""}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeTier1 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-small text-muted leading-relaxed font-normal border-t border-line/40 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </section>

      </div>
    </div>
  );
}
