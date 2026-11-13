"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import SignatureLine from "@/components/SignatureLine";
import CursiveMarqueeBanner from "@/components/CursiveMarqueeBanner";
import HeroGraduateShowcase from "@/components/HeroGraduateShowcase";

/* ==================================================================== */
/* OLD IMPORTS (PREVIOUS HOMEPAGE) STARTS HERE                          */
/* ==================================================================== */
/*
import TopStudyDestinations from "@/components/TopStudyDestinations";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurTeamSection from "@/components/OurTeamSection";
import OurCommitmentSection from "@/components/OurCommitmentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CorePrinciplesSection from "@/components/CorePrinciplesSection";
import SuccessSnapshotSection from "@/components/SuccessSnapshotSection";
*/
/* ==================================================================== */
/* OLD IMPORTS ENDS HERE                                                */
/* ==================================================================== */

/* ==================================================================== */
/* NEW IMPORTS (UPDATED CLIENT STRUCTURE) STARTS HERE                   */
/* ==================================================================== */
import WhatWeAreSection from "@/components/WhatWeAreSection";
import OurApproachSection from "@/components/OurApproachSection";
import OurGlobalReachSection from "@/components/OurGlobalReachSection";
import StudentStorySection from "@/components/StudentStorySection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import PartnerAndCareersSection from "@/components/PartnerAndCareersSection";
import FaqSection from "@/components/FaqSection";
import GrandCtaBannerSection from "@/components/GrandCtaBannerSection";
/* ==================================================================== */
/* NEW IMPORTS ENDS HERE                                                */
/* ==================================================================== */

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function HomePageClient() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  /* ==================================================================== */
  /* OLD DATA ARRAYS (PREVIOUS HOMEPAGE) STARTS HERE                      */
  /* ==================================================================== */
  /*
  const brandPills = [
    {
      name: "University Yatra™",
      desc: "Study Abroad & Admissions",
      href: "/coming-soon?brand=university-yatra",
      color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    },
    {
      name: "Academic Yatra™",
      desc: "IELTS, PTE & Test Prep",
      href: "/coming-soon?brand=academic-yatra",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    },
    {
      name: "Medico Yatra™",
      desc: "MBBS & Healthcare Education Abroad",
      href: "/medico-yatra",
      color: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
    },
    {
      name: "ApplyVisa Yatra™",
      desc: "Visitor, Family & Immigration Visas",
      href: "/coming-soon?brand=applyvisa-yatra",
      color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    },
  ];

  const whatSetsUsApart = [
    {
      title: "One Company, Four Specialties",
      description: "Every stage of your journey, under one roof",
    },
    {
      title: "Direct Accountability",
      description: "One company standard across every brand, every advisor",
    },
    {
      title: "Compliance-First",
      description: "We never promise an admission, visa, or outcome we can't guarantee",
    },
    {
      title: "Transparent Process",
      description: "You'll always know exactly what happens next",
    },
  ];

  const ourBrands = [
    {
      name: "University Yatra™",
      tagline: "Admissions & Student Visas",
      description:
        "Choose the right course and university, understand your options and get support with your application.",
      link: "/coming-soon?brand=university-yatra",
      accent: "from-blue-600 to-indigo-600",
    },
    {
      name: "Academic Yatra™",
      tagline: "Test Preparation & Languages",
      description:
        "Prepare for IELTS, PTE, DSAT, French and German with structured preparation.",
      link: "/coming-soon?brand=academic-yatra",
      accent: "from-teal to-emerald-600",
    },
    {
      name: "Medico Yatra™",
      tagline: "MBBS & Healthcare Pathways",
      description:
        "Get guidance on MBBS and healthcare education options abroad.",
      link: "/medico-yatra",
      accent: "from-rose-500 to-pink-600",
    },
    {
      name: "ApplyVisa Yatra™",
      tagline: "Visitor & Family Visas",
      description:
        "Get support with visa documentation, application preparation and filing.",
      link: "/coming-soon?brand=applyvisa-yatra",
      accent: "from-amber-500 to-orange-600",
    },
  ];

  const commitmentPoints = [
    'We never say "guaranteed admission" or "guaranteed visa" — no company can honestly promise that.',
    "Visa and immigration decisions rest solely with the relevant embassy or immigration authority. Our role is to help you prepare the strongest, most accurate application — never a promised outcome.",
    "We explain the genuinely difficult parts of a pathway — timelines, costs, exam requirements — not just the appealing parts.",
    "Every advisor across every Future Yatra™ brand is held to the same company-wide standard of transparency.",
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Start with a free, no-obligation conversation.",
      desc: "Tell us your goals — we'll tell you honestly whether we're the right fit before anything else happens.",
    },
    {
      step: "02",
      title: "Get a personalised roadmap.",
      desc: "Based on your profile, budget, and timeline, across the relevant Future Yatra™ brand — admissions, test prep, MBBS, or visa.",
    },
    {
      step: "03",
      title: "Move forward with direct support.",
      desc: "Application, documentation, and preparation support at every stage of your journey.",
    },
  ];

  const whyFutureYatra = [
    {
      title: "Honest by Design",
      desc: "No promised admissions or visas. Every brand under Future Yatra™ is built around accurate, verifiable information — even when that means telling you something you didn't want to hear.",
    },
    {
      title: "One Accountable Company",
      desc: "Not a franchise of disconnected offices. A single company standard applied consistently across every brand and every advisor you work with.",
    },
    {
      title: "An Integrated Ecosystem",
      desc: "Most students need more than one service across their journey — a test score, an admission, a visa. Under Future Yatra™, that journey can move between specialist teams without starting over with a new consultancy each time.",
    },
    {
      title: "Built for the Long Term",
      desc: "The decisions we advise on shape your next several years — and in the case of MBBS and immigration pathways, decades. We treat every recommendation with that weight.",
    },
  ];
  */
  /* ==================================================================== */
  /* OLD DATA ARRAYS ENDS HERE                                            */
  /* ==================================================================== */

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* SIGNATURE SVG LINE */}
      <SignatureLine />

      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-navy-glow/10 rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-72 right-10 w-[450px] h-[450px] bg-teal-tint/80 rounded-pill blur-3xl pointer-events-none animate-orb-2" />

      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(255, 255, 255)"
        gradientBackgroundEnd="rgb(245, 253, 252)"
        firstColor="170, 235, 230"
        secondColor="185, 242, 238"
        thirdColor="195, 220, 250"
        fourthColor="215, 235, 255"
        fifthColor="235, 250, 248"
        pointerColor="170, 235, 230"
        blendingValue="soft-light"
        className="w-full min-h-screen relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full min-h-screen flex flex-col justify-center">
          {/* ==================================================================== */}
          {/* HERO SECTION                                                         */}
          {/* ==================================================================== */}
          <section className="pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-8">
                <Link href="/medico-yatra" className="inline-block max-w-full group/badge">
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: easeTier1 }}
                    className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(18,36,71,0.08)] hover:shadow-[0_6px_25px_-4px_rgba(45,189,182,0.25)] transition-all duration-300 cursor-pointer max-w-full hover:scale-[1.02]"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                      <span className="absolute w-3.5 h-3.5 rounded-full bg-teal/30 animate-ping" />
                    </div>

                    <LayoutTextFlip
                      text="Future Yatra™"
                      words={["University Yatra™", "Academic Yatra™", "Medico Yatra™", "ApplyVisa Yatra™"]}
                      duration={2800}
                    />
                  </motion.div>
                </Link>

                {/* ==================================================================== */}
                {/* OLD HERO CONTENT (PREVIOUS HOMEPAGE) STARTS HERE                     */}
                {/* ==================================================================== */}
                {/*
                <motion.h1
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                  className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.15]"
                >
                  Your Journey.{" "}
                  <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent font-extrabold">
                    Every Stage.
                  </span>{" "}
                  One Company.
                </motion.h1>

                <motion.h2
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-dark tracking-tight"
                >
                  Planning a Study Abroad Future With Clarity
                </motion.h2>

                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                  className="text-body sm:text-body-l text-muted leading-relaxed max-w-2xl font-normal"
                >
                  Get clear guidance on what to study, where to study, how to prepare and how to apply, based on your profile, goals and budget.
                </motion.p>

                <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="inline-block w-full sm:w-auto">
                    <div className="w-full sm:w-auto bg-navy text-white font-semibold px-6 py-3.5 rounded-full">
                      Get Free Consultation
                    </div>
                  </Link>
                </div>
                */}
                {/* ==================================================================== */}
                {/* OLD HERO CONTENT ENDS HERE                                           */}
                {/* ==================================================================== */}

                {/* ==================================================================== */}
                {/* NEW HERO CONTENT (UPDATED CLIENT STRUCTURE) STARTS HERE               */}
                {/* ==================================================================== */}
                {/* Headline */}
                <motion.h1
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                  className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.15]"
                >
                  A Unified Organisation for{" "}
                  {/* ==================== OLD GRADIENT TEXT STARTS HERE ==================== */}
                  {/*
                  <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent font-extrabold">
                    Global Education
                  </span>
                  */}
                  {/* ==================== OLD GRADIENT TEXT ENDS HERE ==================== */}
                  {/* ==================== NEW SOLID COUNSELLING TEXT STARTS HERE ==================== */}
                  <span className="text-[#0D9488] font-extrabold">
                    Global Education
                  </span>
                  {/* ==================== NEW SOLID COUNSELLING TEXT ENDS HERE ==================== */}
                  {" "}and Mobility.
                </motion.h1>

                {/* Subheading */}
                <motion.h2
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-dark tracking-tight"
                >
                  Building opportunities through specialised expertise and connected services.
                </motion.h2>

                {/* Body / Description */}
                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                  className="text-body sm:text-body-l text-muted leading-relaxed max-w-2xl font-normal"
                >
                  Future Yatra operates across international university admissions, language training and test preparation, medical education abroad, and visa and immigration consulting through four specialised brands.
                </motion.p>

                {/* Hero Primary Action Buttons */}
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: easeTier1 }}
                  className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3"
                >
                  <Link href="/contact" className="inline-block w-full sm:w-auto">
                    <HoverBorderGradient
                      as="div"
                      containerClassName="rounded-full w-full sm:w-auto"
                      innerBgClassName="bg-navy"
                      className="w-full sm:w-auto bg-navy hover:bg-navy-glow text-white font-semibold text-body px-6 sm:px-8 py-3.5 sm:py-4 rounded-full justify-center space-x-3 shadow-md group border border-teal/20"
                    >
                      <span className="text-white">Book a Free Consultation</span>
                      <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-150" />
                    </HoverBorderGradient>
                  </Link>

                  <Link href="/our-brands" className="inline-block w-full sm:w-auto">
                    <div className="w-full sm:w-auto bg-white/90 hover:bg-white text-navy font-semibold text-body px-6 sm:px-7 py-3.5 sm:py-4 rounded-full flex items-center justify-center space-x-2 border border-line shadow-xs group transition-all">
                      <span>Explore Brands</span>
                      <ChevronRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
                {/* ==================================================================== */}
                {/* NEW HERO CONTENT ENDS HERE                                           */}
                {/* ==================================================================== */}
              </div>

              {/* Hero Right Visual: Backgroundless Graduate Showcase */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeTier1 }}
                className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center"
              >
                <HeroGraduateShowcase />
              </motion.div>
            </div>
          </section>
        </div>
      </BackgroundGradientAnimation>

      {/* ==================================================================== */}
      {/* OLD SECTIONS FLOW (PREVIOUS HOMEPAGE) STARTS HERE                    */}
      {/* ==================================================================== */}
      {/*
      <TopStudyDestinations />
      <WhatSetsUsApartSection />
      <WhoWeAreSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <OurCommitmentSection />
      </div>
      <HowItWorksSection />
      <CorePrinciplesSection />
      <SuccessSnapshotSection />
      <PartnerAndCareersSection />
      <OurTeamSection />
      <FaqSection />
      <GrandCtaBannerSection />
      */}
      {/* ==================================================================== */}
      {/* OLD SECTIONS FLOW ENDS HERE                                          */}
      {/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* NEW SECTIONS FLOW (UPDATED CLIENT STRUCTURE) STARTS HERE             */}
      {/* ==================================================================== */}

      {/* INFINITE MOVING MARQUEE BANNER WITH CURSIVE FONTS */}
      <CursiveMarqueeBanner />

      {/* SECTION 02: WHAT WE ARE (OUR BUSINESS - 4 SPECIALIST VERTICALS) */}
      <WhatWeAreSection />

      {/* SECTION 03: OUR APPROACH (HOW WE THINK & OPERATE - 5 PILLARS) */}
      <OurApproachSection />

      {/* SECTION 04: OUR GLOBAL REACH (KEY MARKETS & 7 CAPABILITIES) */}
      <OurGlobalReachSection />

      {/* SECTION 05: TESTIMONIALS (CLIENT EXPERIENCES - TAUHEED KHAN STORY) */}
      <StudentStorySection />

      {/* SECTION 06: WHY FUTURE YATRA (6 ORGANIZATIONAL DIFFERENTIATORS) */}
      <WhatSetsUsApartSection />

      {/* SECTION 07 & 08: PARTNERSHIP, CAREERS & STUDENT CTA STAGE */}
      <PartnerAndCareersSection />

      {/* SECTION 09: FREQUENTLY ASKED QUESTIONS (B2B + STUDENT TABBED FAQ) */}
      <FaqSection />

      {/* SECTION 10: FINAL GRAND CONSULTATION BANNER */}
      <GrandCtaBannerSection />

      {/* ==================================================================== */}
      {/* NEW SECTIONS FLOW ENDS HERE                                          */}
      {/* ==================================================================== */}
    </div>
  );
}
