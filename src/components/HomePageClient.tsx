"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Stethoscope,
  ChevronRight,
  Sparkles,
  Layers,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Users,
  Compass,
  HelpCircle,
  Briefcase,
  Lock,
  Target,
  Clock,
  Check,
} from "lucide-react";
import SignatureLine from "@/components/SignatureLine";
import Card3DTilt from "@/components/Card3DTilt";
import FaqAccordion from "@/components/FaqAccordion";
import CursiveMarqueeBanner from "@/components/CursiveMarqueeBanner";
import HeroImageCollage from "@/components/HeroImageCollage";
import HeroGraduateShowcase from "@/components/HeroGraduateShowcase";
import TopStudyDestinations from "@/components/TopStudyDestinations";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurTeamSection from "@/components/OurTeamSection";
import OurCommitmentSection from "@/components/OurCommitmentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CorePrinciplesSection from "@/components/CorePrinciplesSection";
import SuccessSnapshotSection from "@/components/SuccessSnapshotSection";
import PartnerAndCareersSection from "@/components/PartnerAndCareersSection";
import GrandCtaBannerSection from "@/components/GrandCtaBannerSection";
import FaqSection from "@/components/FaqSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function HomePageClient() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const brandPills = [
    {
      name: "University Yatra",
      desc: "Study Abroad & Admissions",
      href: "/coming-soon?brand=university-yatra",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    },
    {
      name: "Academic Yatra",
      desc: "IELTS, PTE & Test Prep",
      href: "/coming-soon?brand=academic-yatra",
      icon: BookOpen,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    },
    {
      name: "Medico Yatra",
      desc: "MBBS & Healthcare Education Abroad",
      href: "/medico-yatra",
      icon: Stethoscope,
      color: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
    },
    {
      name: "ApplyVisa Yatra",
      desc: "Visitor, Family & Immigration Visas",
      href: "/coming-soon?brand=applyvisa-yatra",
      icon: FileCheck2,
      color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    },
  ];

  const whatSetsUsApart = [
    {
      title: "One Company, Four Specialties",
      description: "Every stage of your journey, under one roof",
      icon: Layers,
    },
    {
      title: "Direct Accountability",
      description: "One company standard across every brand, every advisor",
      icon: ShieldCheck,
    },
    {
      title: "Compliance-First",
      description: "We never promise an admission, visa, or outcome we can't guarantee",
      icon: Award,
    },
    {
      title: "Transparent Process",
      description: "You'll always know exactly what happens next",
      icon: Clock,
    },
  ];

  const ourBrands = [
    {
      name: "University Yatra",
      tagline: "Admissions & Student Visas",
      description:
        "Choose the right course and university, understand your options and get support with your application.",
      link: "/coming-soon?brand=university-yatra",
      icon: GraduationCap,
      accent: "from-blue-600 to-indigo-600",
    },
    {
      name: "Academic Yatra",
      tagline: "Test Preparation & Languages",
      description:
        "Prepare for IELTS, PTE, DSAT, French and German with structured preparation.",
      link: "/coming-soon?brand=academic-yatra",
      icon: BookOpen,
      accent: "from-teal to-emerald-600",
    },
    {
      name: "Medico Yatra",
      tagline: "MBBS & Healthcare Pathways",
      description:
        "Get guidance on MBBS and healthcare education options abroad.",
      link: "/medico-yatra",
      icon: Stethoscope,
      accent: "from-rose-500 to-pink-600",
    },
    {
      name: "ApplyVisa Yatra",
      tagline: "Visitor & Family Visas",
      description:
        "Get support with visa documentation, application preparation and filing.",
      link: "/coming-soon?brand=applyvisa-yatra",
      icon: FileCheck2,
      accent: "from-amber-500 to-orange-600",
    },
  ];

  const commitmentPoints = [
    'We never say "guaranteed admission" or "guaranteed visa" — no company can honestly promise that.',
    "Visa and immigration decisions rest solely with the relevant embassy or immigration authority. Our role is to help you prepare the strongest, most accurate application — never a promised outcome.",
    "We explain the genuinely difficult parts of a pathway — timelines, costs, exam requirements — not just the appealing parts.",
    "Every advisor across every Future Yatra brand is held to the same company-wide standard of transparency.",
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
      desc: "Based on your profile, budget, and timeline, across the relevant Future Yatra brand — admissions, test prep, MBBS, or visa.",
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
      desc: "No promised admissions or visas. Every brand under Future Yatra is built around accurate, verifiable information — even when that means telling you something you didn't want to hear.",
      icon: ShieldCheck,
    },
    {
      title: "One Accountable Company",
      desc: "Not a franchise of disconnected offices. A single company standard applied consistently across every brand and every advisor you work with.",
      icon: Building2,
    },
    {
      title: "An Integrated Ecosystem",
      desc: "Most students need more than one service across their journey — a test score, an admission, a visa. Under Future Yatra, that journey can move between specialist teams without starting over with a new consultancy each time.",
      icon: Layers,
    },
    {
      title: "Built for the Long Term",
      desc: "The decisions we advise on shape your next several years — and in the case of MBBS and immigration pathways, decades. We treat every recommendation with that weight.",
      icon: Target,
    },
  ];



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
                      text="Future Yatra"
                      words={["University Yatra", "Academic Yatra", "Medico Yatra", "ApplyVisa Yatra"]}
                      duration={2800}
                    />
                  </motion.div>
                </Link>

                {/* Headline */}
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

                {/* Subheading */}
                <motion.h2
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-dark tracking-tight"
                >
                  Planning a Study Abroad Future With Clarity
                </motion.h2>

                {/* Body / Description */}
                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                  className="text-body sm:text-body-l text-muted leading-relaxed max-w-2xl font-normal"
                >
                  Get clear guidance on what to study, where to study, how to prepare and how to apply, based on your profile, goals and budget.
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
                      <span className="text-white">Get Free Consultation</span>
                      <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-150" />
                    </HoverBorderGradient>
                  </Link>

                  <Link href="/medico-yatra" className="inline-block w-full sm:w-auto">
                    <div className="w-full sm:w-auto bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] hover:brightness-110 text-white font-bold text-body px-6 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center space-x-2.5 shadow-lg shadow-blue-500/20 group transition-all transform hover:scale-[1.02]">
                      <Stethoscope className="w-5 h-5 text-amber-300" />
                      <span>Explore Medico Yatra</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Hero Right Visual: Backgroundless Graduate with Faded Bottom & 4 Floating Capsules */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeTier1 }}
                className="lg:col-span-5 relative mt-6 lg:mt-0 flex items-center justify-center"
              >
                {/* 
                  PREVIOUS HERO IMAGE COLLAGE (COMMENTED AS REQUESTED):
                  <HeroImageCollage />
                */}
                <HeroGraduateShowcase />
              </motion.div>
            </div>
          </section>
        </div>
      </BackgroundGradientAnimation>

      {/* ==================================================================== */}
      {/* INFINITE MOVING MARQUEE BANNER WITH CURSIVE FONTS                    */}
      {/* ==================================================================== */}
      <CursiveMarqueeBanner />

      {/* ==================================================================== */}
      {/* TOP STUDY DESTINATIONS (MODELED AFTER USER REFERENCE IMAGE 1)        */}
      {/* ==================================================================== */}
      <TopStudyDestinations />

      {/* ==================================================================== */}
      {/* WHAT SETS US APART (MODELED AFTER USER REFERENCE IMAGE 2)            */}
      {/* ==================================================================== */}
      <WhatSetsUsApartSection />

      {/* ==================================================================== */}
      {/* WHO WE ARE (MODELED AFTER USER SECOND REFERENCE IMAGE)              */}
      {/* ==================================================================== */}
      <WhoWeAreSection />

      {/* ==================================================================== */}
      {/* OUR COMMITMENT                                                       */}
      {/* ==================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <OurCommitmentSection />
      </div>

      {/* ==================================================================== */}
      {/* HOW IT WORKS (MODELED AFTER REF IMAGES 1 & 3 WITH HERO THEME)        */}
      {/* ==================================================================== */}
      <HowItWorksSection />

      {/* ==================================================================== */}
      {/* WHY FUTURE YATRA (CORE PRINCIPLES - SPLIT SHOWCASE STUDIO)           */}
      {/* ==================================================================== */}
      <CorePrinciplesSection />

      {/* ==================================================================== */}
      {/* SUCCESS SNAPSHOT & IMPACT STORIES (MODELED AFTER REF IMAGES 1 & 2)    */}
      {/* ==================================================================== */}
      <SuccessSnapshotSection />

      {/* ==================================================================== */}
      {/* PARTNER WITH US & CAREERS (DUAL LUXURY HERO STAGE BANNERS)           */}
      {/* ==================================================================== */}
      <PartnerAndCareersSection />

      {/* ==================================================================== */}
      {/* OUR TEAM                                                              */}
      {/* ==================================================================== */}
      <OurTeamSection />

      {/* ==================================================================== */}
      {/* FAQ SECTION (ORGANIC FLUID CAPSULE STUDIO)                           */}
      {/* ==================================================================== */}
      <FaqSection />

      {/* ==================================================================== */}
      {/* FINAL CTA (LUXURY GRAND CONSULTATION STAGE BANNER)                  */}
      {/* ==================================================================== */}
      <GrandCtaBannerSection />
    </div>
  );
}
