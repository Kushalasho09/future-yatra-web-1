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
} from "lucide-react";
import Card3DTilt from "@/components/Card3DTilt";
import SignatureLine from "@/components/SignatureLine";

// Brand definitions for Section 6
const BRAND_DATA = [
  {
    name: "University Yatra",
    href: "/university-yatra/",
    icon: GraduationCap,
    tagline: "Higher Education & Admissions",
    description: "Personalized university selection, application strategy, and direct institutional admissions.",
    gradientClass: "from-teal/20 via-teal-tint to-white",
    borderGlow: "border-teal/40",
    badgeBg: "bg-teal-tint text-teal",
    accentColor: "#2DBDB6",
  },
  {
    name: "Academic Yatra",
    href: "/academic-yatra/",
    icon: BookOpen,
    tagline: "Prep & Coaching",
    description: "Standardized test preparation, academic readiness, and language proficiency mastery.",
    gradientClass: "from-navy-glow/20 via-navy/5 to-white",
    borderGlow: "border-navy-glow/40",
    badgeBg: "bg-navy/10 text-navy",
    accentColor: "#3A5EA8",
  },
  {
    name: "Medico Yatra",
    href: "/medico-yatra/",
    icon: HeartHandshake,
    tagline: "Healthcare Careers",
    description: "Specialized pathways for medical, nursing, and healthcare professionals globally.",
    gradientClass: "from-coral/20 via-coral/5 to-white",
    borderGlow: "border-coral/40",
    badgeBg: "bg-coral/10 text-coral",
    accentColor: "#E8604C",
  },
  {
    name: "Apply Visa Yatra",
    href: "/applyvisa-yatra/",
    icon: FileCheck2,
    tagline: "Visa & Legal Guidance",
    description: "Compliant student visa filing, documentation auditing, and pre-departure briefings.",
    gradientClass: "from-amber/20 via-amber/5 to-white",
    borderGlow: "border-amber/40",
    badgeBg: "bg-amber/10 text-amber",
    accentColor: "#E0A23F",
  },
];

// FAQ items for Section 10
const FAQ_DATA = [
  {
    question: "Why was Future Yatra founded?",
    answer:
      "Future Yatra was founded after its founder experienced misleading advice and incomplete information while planning his own move to Canada, and later saw international students facing the same problem — guided only toward admission or a visa, without support for their complete journey.",
  },
  {
    question: "Why does Future Yatra operate as four separate brands instead of one?",
    answer:
      "Each brand — University Yatra, Academic Yatra, Medico Yatra, and Apply Visa Yatra — focuses on one part of a student's journey, so guidance stays specialized rather than generic, while all four share the same underlying standard of transparency and ethics.",
  },
  {
    question: "What does the name 'Future Yatra' mean?",
    answer:
      "'Yatra' means journey. The name reflects the belief that every student's path toward their future is a distinct journey — one that deserves honest, complete guidance rather than a single transaction.",
  },
];

// Fail-safe animation variants (amount: 0 so triggers immediately on mobile & desktop)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function OurStoryPageClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Section 3 Mobile Active Tab State (0, 1, 2)
  const [mobileActiveTab, setMobileActiveTab] = useState<number>(0);

  // Section 4 Quote In-View Observer
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, amount: 0 });

  // Section 6 SVG Mesh Scroll Link
  const section6Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: gridScroll } = useScroll({
    target: section6Ref,
    offset: ["start end", "end start"],
  });
  const svgPathLength = useTransform(gridScroll, [0.1, 0.85], [0, 1]);

  // Section 8 Measure Success In-View Observer
  const section8Ref = useRef<HTMLDivElement>(null);
  const isSection8InView = useInView(section8Ref, { once: true, amount: 0 });

  // Section 10 Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Section 3 Card Data Definition
  const section3Cards = [
    {
      num: "01",
      pill: "THE ARRIVAL",
      pillBg: "bg-teal-tint text-teal",
      title: "Settling in Canada",
      description: "The problem turned out to be bigger than one difficult experience.",
      image: "/images/story_canada_settling.jpg",
      alt: "International student settling in Canada",
      footerIcon: Globe2,
      footerText: "Firsthand International Context",
      cardStyle: "glass-card-light border-line text-navy-deep",
      numColor: "text-teal/30",
      accentColor: "text-teal",
    },
    {
      num: "02",
      pill: "THE PATTERN",
      pillBg: "bg-teal-bright/20 text-teal-bright border border-teal-bright/30",
      title: "The Single-Focus Trap",
      description:
        "After settling in Canada, he met student after student struggling with the same pattern: guided by consultants who focused only on getting them admitted or getting them a visa...",
      image: "/images/story_single_focus_trap.jpg",
      alt: "International student overwhelmed by admission forms",
      footerIcon: ShieldCheck,
      footerText: "Systemic Industry Pattern",
      cardStyle: "glass-card-navy border-teal-bright/30 text-white",
      numColor: "text-teal-bright/30",
      accentColor: "text-teal-bright",
    },
    {
      num: "03",
      pill: "THE GAP",
      pillBg: "bg-coral/10 text-coral",
      title: "The Complete Journey",
      description:
        "...with almost no one helping them understand the complete journey — from choosing the right career to building a genuinely successful life post-graduation.",
      image: "/images/story_complete_journey.jpg",
      alt: "Successful international graduate walking in career district",
      footerIcon: Award,
      footerText: "Long-Term Value Creation",
      cardStyle: "glass-card-light border-line text-navy-deep",
      numColor: "text-coral/30",
      accentColor: "text-coral",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-navy-deep font-body selection:bg-teal selection:text-white overflow-x-hidden">
      {/* ==================================================================== */}
      {/* SECTION 1: Hero "The Story Behind Future Yatra"                     */}
      {/* ==================================================================== */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-center items-center bg-navy-deep text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        {/* Ambient Blur Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal/30 rounded-full blur-[120px] pointer-events-none animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-navy-glow/40 rounded-full blur-[140px] pointer-events-none animate-orb-2" />

        {/* 32px Teal Bright Dot Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#3FE0D6_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none z-0" />

        {/* Background Typography: Giant faint word-mark "YATRA" */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] sm:text-[22vw] font-extrabold text-white/[0.04] select-none pointer-events-none font-heading tracking-widest leading-none z-0">
          YATRA
        </span>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow in Tempting Cursive Font */}
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-tempting text-teal-bright text-3xl sm:text-4xl lg:text-[42px] font-normal block mb-3 select-none"
          >
            Our Origins & Values
          </motion.span>

          {/* Kinetic Headline: Word-by-word reveal sliding up from 100% with stagger */}
          <h1 className="text-3xl sm:text-5xl md:text-display font-extrabold font-heading tracking-tight text-white leading-tight sm:leading-none">
            {["The", "Story", "Behind", "Future Yatra"].map((word, idx) => {
              const isBrand = word === "Future Yatra";
              return (
                <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top py-1">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block ${
                      isBrand
                        ? "bg-gradient-to-r from-teal-bright via-teal to-sand bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-body sm:text-body-l md:text-xl text-white/80 max-w-xl text-center mt-5 font-body font-normal leading-relaxed"
          >
            Why Future Yatra Private Limited exists.
          </motion.p>

          {/* Action Link Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex items-center gap-4"
          >
            <a
              href="#founder-story"
              className="inline-flex items-center gap-2 bg-teal text-navy-deep font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-pill hover:bg-teal-bright transition-colors text-small sm:text-body shadow-lg shadow-teal/20"
            >
              <span>Read The Story</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#founder-story"
          aria-label="Scroll down to story section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/50 hover:text-teal-bright transition-colors"
        >
          <span className="text-micro tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-teal-bright" />
          </motion.div>
        </motion.a>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: The Story Behind Future Yatra (Sticky Editorial)         */}
      {/* ==================================================================== */}
      <section
        id="founder-story"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 border-b border-line"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column (Sticky 5 cols on MD+) */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0}
              className="space-y-2"
            >
              <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
                Founder's Genesis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-navy-deep tracking-tight leading-tight">
                The Story Behind{" "}
                <span className="bg-gradient-to-r from-teal via-navy to-navy-deep bg-clip-text text-transparent">
                  Future Yatra
                </span>
              </h2>
              {/* 20x6px teal gradient underline bar */}
              <div className="w-[80px] h-[6px] bg-gradient-to-r from-teal to-teal-bright rounded-full mt-4" />

              <p className="text-small sm:text-body text-muted mt-4 sm:mt-6 max-w-sm font-body leading-relaxed">
                Built from lived experience to fix the structural gaps in global education consulting.
              </p>
            </motion.div>
          </div>

          {/* Right Column (7 cols Scrollable Content) */}
          <div className="md:col-span-7 space-y-5 sm:space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.1}
            >
              <p className="border-l-4 border-teal pl-4 sm:pl-6 font-medium text-navy-deep/90 text-body sm:text-body-l md:text-xl leading-relaxed font-body">
                Future Yatra was not created because someone wanted to start another consultancy. It was created because our founder experienced the problems of this industry firsthand.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.2}
            >
              <p className="text-muted text-body sm:text-body-l leading-relaxed font-body">
                While planning his own move to Canada, he spent months researching countries, education pathways, immigration options, and career opportunities. Along the way, he encountered misleading advice, incomplete information, and unrealistic promises from multiple sources.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.3}
              className="bg-sand/60 p-5 sm:p-8 rounded-card border border-line text-navy font-semibold text-body sm:text-body-l leading-relaxed shadow-sm hover:shadow-md transition-shadow font-body"
            >
              "Those mistakes cost real time, real money, and real opportunities."
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: What He Saw After Moving to Canada (App Native View)       */}
      {/* ==================================================================== */}
      <section className="relative bg-gradient-to-b from-sand/40 via-white to-white py-14 sm:py-24 md:py-28 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 sm:mb-16">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
                Observational Grounding
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-navy-deep tracking-tight">
                What He Saw After Moving to Canada
              </h2>
            </div>
            <p className="text-muted text-small sm:text-body-l max-w-md font-body leading-relaxed">
              Firsthand insights from interacting with hundreds of international students navigating settlement realities.
            </p>
          </div>

          {/* MOBILE APP NATIVE VIEW (< 768px): Interactive Segmented Tab Switcher + Card Viewer */}
          <div className="md:hidden">
            {/* Segmented Control Pills */}
            <div className="flex items-center justify-between bg-sand/60 p-1.5 rounded-pill border border-line mb-6">
              {section3Cards.map((card, idx) => {
                const isActive = mobileActiveTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setMobileActiveTab(idx)}
                    className={`flex-1 py-2 px-3 rounded-pill text-micro font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      isActive
                        ? "bg-teal text-white shadow-md scale-[1.02]"
                        : "text-navy-deep/70 hover:text-navy"
                    }`}
                  >
                    <span>{card.num}</span>
                    <span className="truncate">{card.pill.replace("THE ", "")}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Card Viewer with AnimatePresence */}
            <AnimatePresence mode="wait">
              {(() => {
                const activeCard = section3Cards[mobileActiveTab];
                const Icon = activeCard.footerIcon;
                return (
                  <motion.div
                    key={mobileActiveTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`rounded-card border p-6 flex flex-col justify-between shadow-lg ${activeCard.cardStyle}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-4xl font-extrabold font-heading ${activeCard.numColor}`}>
                          {activeCard.num}
                        </span>
                        <span className={`${activeCard.pillBg} px-3 py-1 rounded-pill text-micro font-semibold uppercase`}>
                          {activeCard.pill}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold mb-2">
                        {activeCard.title}
                      </h3>

                      <p className="text-small font-body leading-relaxed mb-5 opacity-90">
                        {activeCard.description}
                      </p>
                    </div>

                    <div>
                      <div className="relative w-full h-44 rounded-card overflow-hidden mb-5 border border-black/10 shadow-xs">
                        <Image
                          src={activeCard.image}
                          alt={activeCard.alt}
                          fill
                          priority
                          unoptimized
                          className="object-cover"
                        />
                      </div>

                      <div className="pt-4 border-t border-current/15 flex items-center justify-between text-micro font-semibold">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${activeCard.accentColor}`} />
                          <span>{activeCard.footerText}</span>
                        </div>

                        {/* Prev / Next Card Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            disabled={mobileActiveTab === 0}
                            onClick={() => setMobileActiveTab((prev) => Math.max(0, prev - 1))}
                            className="p-1.5 rounded-full bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            aria-label="Previous story card"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            disabled={mobileActiveTab === section3Cards.length - 1}
                            onClick={() => setMobileActiveTab((prev) => Math.min(section3Cards.length - 1, prev + 1))}
                            className="p-1.5 rounded-full bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            aria-label="Next story card"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* DESKTOP WEB VIEW (>= 768px): 3-Card Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {section3Cards.map((card, idx) => {
              const Icon = card.footerIcon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                  custom={idx * 0.1}
                  className="h-full"
                >
                  <Card3DTilt maxTilt={6} className="h-full">
                    <div className={`h-full p-6 sm:p-8 rounded-card border flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ${card.cardStyle}`}>
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className={`text-4xl sm:text-5xl font-extrabold font-heading ${card.numColor}`}>
                            {card.num}
                          </span>
                          <span className={`${card.pillBg} px-3 py-1 rounded-pill text-micro font-semibold uppercase`}>
                            {card.pill}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-h3 font-heading font-bold mb-3">
                          {card.title}
                        </h3>
                        <p className="text-small sm:text-body font-body leading-relaxed mb-6 opacity-90">
                          {card.description}
                        </p>
                      </div>

                      <div>
                        <div className="relative w-full h-44 sm:h-48 rounded-card overflow-hidden mb-5 border border-black/10 shadow-xs">
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            priority
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="pt-4 border-t border-current/15 flex items-center gap-2 text-small font-semibold">
                          <Icon className={`w-4 h-4 ${card.accentColor} flex-shrink-0`} />
                          <span>{card.footerText}</span>
                        </div>
                      </div>
                    </div>
                  </Card3DTilt>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: The Realization (Cinematic Quote)                         */}
      {/* ==================================================================== */}
      <section
        ref={quoteRef}
        className="relative bg-navy-deep text-white py-20 sm:py-32 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Central Radial Teal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[40rem] h-72 sm:h-[40rem] bg-teal/20 rounded-full blur-[130px] sm:blur-[150px] pointer-events-none" />

        {/* Ambient Decorative Signature Line Component */}
        <SignatureLine />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow in Tempting Font */}
          <span className="font-tempting text-teal-bright text-3xl sm:text-4xl font-normal block mb-3 sm:mb-4">
            The Core Realization
          </span>

          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isQuoteInView || !mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-12 sm:w-16 h-12 sm:h-16 text-teal-bright/40 mb-6 sm:mb-8" />
          </motion.div>

          {/* Blockquote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            animate={isQuoteInView || !mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-3xl md:text-4xl font-heading font-medium text-white leading-relaxed md:leading-snug"
          >
            "Students and families don't just need admissions or visas. They need{" "}
            <span className="underline decoration-teal-bright underline-offset-4 text-teal-bright font-semibold">
              honest guidance
            </span>
            , <strong className="text-teal-bright font-bold">accurate information</strong>,{" "}
            <strong className="text-teal-bright font-bold">ethical advice</strong>, and{" "}
            <strong className="text-teal-bright font-bold">long-term support</strong> from people who genuinely care about their future."
          </motion.blockquote>

          {/* Flourish underline / Sub-element */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isQuoteInView || !mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 sm:mt-12 flex flex-col items-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-bright to-transparent rounded-full mb-6" />
            <span className="text-teal-bright text-micro tracking-[0.18em] font-bold uppercase text-center max-w-lg font-body px-2">
              THAT REALIZATION BECAME THE FOUNDATION OF FUTURE YATRA.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: Our Mission (FROM → TO Kinetic Flip Cards)                */}
      {/* ==================================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 border-b border-line">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
            The Core Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-navy-deep tracking-tight">
            Our Mission
          </h2>
          <p className="text-muted text-body sm:text-body-l mt-2 font-body leading-relaxed">
            Replacing standard consultancy traps with structural integrity and long-term clarity.
          </p>
        </div>

        {/* 3 Stacked Transformation Cards */}
        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {[
            {
              from: "Confusion",
              to: "Replace confusion with clarity.",
              delay: 0.1,
            },
            {
              from: "False Promises",
              to: "Replace false promises with transparency.",
              delay: 0.2,
            },
            {
              from: "Fragmented Services",
              to: "Replace fragmented services with one trusted ecosystem.",
              delay: 0.3,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={item.delay}
              className="group rounded-card border border-line bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
            >
              {/* Left Zone: FROM */}
              <div className="flex items-center gap-3 sm:gap-4 w-full md:w-1/3">
                <span className="bg-line text-muted px-3 py-1 rounded-pill text-micro font-semibold uppercase">
                  FROM
                </span>
                <span className="text-lg sm:text-h3 font-bold text-coral/80 group-hover:scale-95 transition-transform duration-300 line-through decoration-coral decoration-2 font-heading">
                  {item.from}
                </span>
              </div>

              {/* Center Zone: Arrow Icon */}
              <div className="flex items-center justify-center my-1 md:my-0">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-teal-tint flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Right Zone: TO */}
              <div className="flex items-center gap-3 sm:gap-4 w-full md:w-1/2 justify-start md:justify-end">
                <span className="bg-teal text-white px-3 py-1 rounded-pill text-micro font-semibold uppercase">
                  TO
                </span>
                <div className="bg-teal-tint/40 border border-teal/20 rounded-pill px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-navy text-small sm:text-body-l shadow-xs group-hover:border-teal/50 transition-colors w-full sm:w-auto font-body">
                  {item.to}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: Why Four Brands, Not One (Ecosystem Grid + SVG Mesh)     */}
      {/* ==================================================================== */}
      <section
        ref={section6Ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 border-b border-line overflow-hidden"
      >
        {/* Background SVG Mesh with Sharp Arrow Head Marker Cap */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0 hidden md:block"
          viewBox="0 0 1000 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Sharp Arrow Head Marker for SVG Path End */}
            <marker
              id="sharpPathArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <polygon points="0 0, 10 5, 0 10, 3 5" fill="#3FE0D6" />
            </marker>
          </defs>

          <motion.path
            d="M 250 150 Q 500 300 750 150 T 250 450 T 750 450"
            stroke="#2DBDB6"
            strokeWidth="3.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeDasharray="8 8"
            markerEnd="url(#sharpPathArrow)"
            style={{ pathLength: svgPathLength }}
          />
        </svg>

        <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
            Specialization & Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-navy-deep tracking-tight">
            Why Four Brands, Not One
          </h2>
          <p className="text-muted text-body sm:text-body-l mt-2 font-body leading-relaxed">
            Instead of a generic single consultancy, we built focused specialist divisions under one accountable parent entity.
          </p>
        </div>

        {/* 2x2 Brand Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {BRAND_DATA.map((brand, idx) => {
            const IconComp = brand.icon;
            return (
              <Card3DTilt key={idx} maxTilt={6} className="h-full">
                <div
                  className={`h-full rounded-card border ${brand.borderGlow} bg-gradient-to-br ${brand.gradientClass} p-5 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-card bg-white shadow-sm border border-line flex items-center justify-center text-navy group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="w-6 sm:w-7 h-6 sm:h-7" style={{ color: brand.accentColor }} />
                      </div>
                      <span className={`${brand.badgeBg} px-3 py-1 rounded-pill text-micro font-semibold uppercase`}>
                        {brand.tagline}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy-deep mb-2 sm:mb-3 flex items-center gap-2">
                      <span>{brand.name}</span>
                    </h3>
                    <p className="text-muted text-small sm:text-body font-body leading-relaxed mb-5">
                      {brand.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy-deep/10 flex items-center justify-between text-small font-semibold text-navy">
                    <Link
                      href={brand.href}
                      className="inline-flex items-center gap-2 text-teal hover:text-navy transition-colors"
                    >
                      <span>Explore Brand</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Summary Card Below Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          custom={0.2}
          className="relative z-10 bg-navy-deep p-6 sm:p-10 rounded-card border border-teal/30 text-white mt-8 sm:mt-12 shadow-2xl max-w-5xl mx-auto text-center"
        >
          <p className="text-body sm:text-body-l md:text-[20px] leading-relaxed text-white/90 font-body">
            Together, these brands operate under{" "}
            <span className="text-teal-bright font-bold">Future Yatra Private Limited</span> as one integrated ecosystem where every service has a clear purpose, while all four share the same values:{" "}
            <span className="text-sand font-semibold">transparency, integrity, professionalism, and a student-first approach.</span>
          </p>
        </motion.div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 7: What "Yatra" Means to Us (Cinematic Split)               */}
      {/* ==================================================================== */}
      <section className="relative bg-gradient-to-br from-navy-deep via-navy to-navy-deep text-white py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-teal/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left 6 Cols Image Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0}
              className="lg:col-span-6 relative"
            >
              <div className="glass-card-navy p-3 rounded-section border border-teal-bright/30 overflow-hidden shadow-2xl relative">
                <div className="relative w-full h-[280px] sm:h-[420px] rounded-card overflow-hidden bg-navy-deep">
                  <Image
                    src="/images/story_yatra_route.jpg"
                    alt="Global student pathways map and international route"
                    fill
                    priority
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Overlay Tile "Journey Coordinates" */}
                <div className="absolute bottom-5 left-5 right-5 bg-navy-deep/90 backdrop-blur-md p-3.5 sm:p-4 rounded-card border border-teal-bright/30 flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-teal-tint/20 border border-teal-bright/40 flex items-center justify-center text-teal-bright flex-shrink-0">
                    <Compass className="w-5 sm:w-6 h-5 sm:h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <h4 className="text-micro sm:text-small font-bold text-white uppercase tracking-wider font-heading">
                      Journey Coordinates
                    </h4>
                    <p className="text-micro text-teal-bright font-medium mt-0.5 font-body">
                      From India to 15+ Destinations Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right 6 Cols Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              custom={0.2}
              className="lg:col-span-6 space-y-4 sm:space-y-6"
            >
              <div className="space-y-2">
                <span className="font-tempting text-teal-bright text-3xl sm:text-4xl font-normal block">
                  Philosophy & Vision
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-white leading-tight tracking-tight">
                  What "Yatra" Means to Us
                </h2>
              </div>

              <p className="text-white/90 text-body sm:text-body-l md:text-[20px] leading-relaxed font-body">
                A <span className="text-teal-bright font-bold">yatra</span> is a journey — and every person has a different journey toward their future.
              </p>

              <p className="text-white/80 text-small sm:text-body leading-relaxed font-body">
                Today, that means helping students build their journey through education, skills, and global opportunities. Over time, our vision is to extend this same ecosystem to more of life's journeys, always guided by the same commitment to trust, ethics, and meaningful impact.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-micro sm:text-small text-white/70 font-body">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-bright" />
                  <span>Ethical Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-bright" />
                  <span>Lifelong Impact</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 8: How We Measure Success (Kinetic Metric Section)          */}
      {/* ==================================================================== */}
      <section
        ref={section8Ref}
        className="relative bg-sand/40 py-16 sm:py-24 md:py-32 border-b border-line px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
            The Metric That Matters
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-navy-deep tracking-tight">
            How We Measure Success
          </h2>
        </div>

        {/* Interactive Focal Card */}
        <div className="bg-white rounded-section border border-line p-6 sm:p-12 md:p-16 shadow-sm max-w-4xl mx-auto text-center relative overflow-hidden">
          {/* Top Line with animated strikethrough */}
          <p className="text-body sm:text-h3 font-medium text-navy-deep/80 leading-relaxed font-body">
            We don't measure success by{" "}
            <span className="relative inline-block text-coral line-through decoration-coral decoration-2 font-semibold">
              [applications submitted]
            </span>{" "}
            or{" "}
            <span className="relative inline-block text-coral line-through decoration-coral decoration-2 font-semibold">
              [visas approved]
            </span>
            .
          </p>

          {/* Divider Line */}
          <div className="border-t border-line my-5 sm:my-8 w-1/2 mx-auto" />

          {/* Bottom Line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isSection8InView || !mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl sm:text-4xl md:text-display text-teal font-extrabold font-heading tracking-tight leading-tight">
              We measure it by the futures we help people build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 9: Explore Further (CTA Row)                                 */}
      {/* ==================================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 border-b border-line text-center">
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
            Next Steps
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-h2 font-heading font-bold text-navy-deep">
            Explore Further
          </h2>
          <p className="text-muted text-small sm:text-body mt-1 font-body">
            Continue navigating our ecosystem.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {/* Button 1: Meet the Founder */}
          <Link
            href="/leadership/"
            className="w-full sm:w-auto bg-navy text-white hover:bg-navy-deep transition-all duration-300 rounded-pill px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-small sm:text-body inline-flex items-center justify-center gap-3 shadow-md hover:shadow-lg group font-body"
          >
            <span>Meet the Founder</span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Button 2: Explore Our Brands */}
          <Link
            href="/our-brands/"
            className="w-full sm:w-auto bg-teal text-white hover:bg-teal-bright shadow-lg shadow-teal/30 transition-all duration-300 rounded-pill px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-small sm:text-body inline-flex items-center justify-center gap-3 group font-body"
          >
            <span>Explore Our Brands</span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Button 3: About Future Yatra */}
          <Link
            href="/about-us/"
            className="w-full sm:w-auto bg-white border border-line text-navy-deep hover:bg-sand/50 transition-all duration-300 rounded-pill px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-small sm:text-body inline-flex items-center justify-center gap-3 shadow-sm group font-body"
          >
            <span>About Future Yatra</span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 10: Frequently Asked Questions (Accordion + Progress Bar)   */}
      {/* ==================================================================== */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 border-b border-line">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
            Clarifications & Insights
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-h1 font-heading font-extrabold text-navy-deep tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-card border border-line shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-4 sm:p-8 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal/50 rounded-card"
                >
                  <span className="text-small sm:text-h3 font-heading font-bold text-navy-deep">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-teal-tint flex items-center justify-center text-teal transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-teal text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-8 pb-5 sm:pb-8 pt-0 text-muted text-small sm:text-body-l leading-relaxed border-t border-line/50 mt-2 font-body">
                        {faq.answer}
                      </div>

                      {/* Active card animated teal progress bar */}
                      <div className="h-[2px] w-full bg-gradient-to-r from-teal via-teal-bright to-teal animate-pulse" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 11: Compliance & Disclaimer Strip                           */}
      {/* ==================================================================== */}
      <footer className="relative bg-sand/30 border-t border-line py-6 sm:py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-micro sm:text-small text-muted/70 leading-relaxed font-normal font-body">
            Future Yatra Private Limited is an independent education and career guidance ecosystem. Services provided under University Yatra, Academic Yatra, Medico Yatra, and Apply Visa Yatra adhere to strict ethical and transparent operational standards across all jurisdictions.
          </p>
        </div>
      </footer>
    </div>
  );
}
