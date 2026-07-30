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
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";
import FaqAccordion from "@/components/FaqAccordion";
import CursiveMarqueeBanner from "@/components/CursiveMarqueeBanner";
import HeroImageCollage from "@/components/HeroImageCollage";
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
      href: "/coming-soon?brand=medico-yatra",
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
        "Study abroad admissions and student visa guidance for Canada, the USA, the UK, Australia, and Europe.",
      link: "/coming-soon?brand=university-yatra",
      icon: GraduationCap,
      accent: "from-blue-600 to-indigo-600",
    },
    {
      name: "Academic Yatra",
      tagline: "Test Preparation & Languages",
      description:
        "Test preparation for IELTS, PTE, CELPIP, TOEFL, GRE, GMAT, and language training for German and French.",
      link: "/coming-soon?brand=academic-yatra",
      icon: BookOpen,
      accent: "from-teal to-emerald-600",
    },
    {
      name: "Medico Yatra",
      tagline: "MBBS & Healthcare Pathways",
      description:
        "Specialist counselling for MBBS and allied healthcare education abroad, with an honest picture of the FMGE/NExT pathway back into India.",
      link: "/coming-soon?brand=medico-yatra",
      icon: Stethoscope,
      accent: "from-rose-500 to-pink-600",
    },
    {
      name: "ApplyVisa Yatra",
      tagline: "Visitor & Family Visas",
      description:
        "Documentation and application support for visitor, spouse, parent, and family visas, and permanent residency guidance.",
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

  const faqItems = [
    {
      question: "What is Future Yatra Private Limited?",
      answer:
        "Future Yatra Private Limited is the parent company of four specialist brands — University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra — serving Indian students and families across study abroad admissions, test preparation, MBBS counselling, and visa documentation.",
    },
    {
      question: "How is Future Yatra different from other consultancies?",
      answer:
        "Every brand under Future Yatra follows the same company-wide standard — we never use guaranteed-outcome language, and your journey can move between our specialist brands without starting over with a new consultancy.",
    },
    {
      question: "How do I know which Future Yatra brand is right for me?",
      answer:
        'If you need a test score, start with Academic Yatra. If you\'re applying to universities abroad, start with University Yatra. If you\'re pursuing MBBS abroad, start with Medico Yatra. If you need visa or documentation support, start with ApplyVisa Yatra. Or use "Book a Free Conversation" and we\'ll direct you.',
    },
    {
      question: "Does Future Yatra guarantee admission or visa approval?",
      answer:
        "No. Future Yatra Private Limited and its brands provide counselling, documentation, and application support. Admission decisions rest with universities, and visa decisions rest solely with the relevant embassy or immigration authority.",
    },
    {
      question: "Where does Future Yatra operate?",
      answer:
        "Future Yatra is based in India and primarily serves Indian students and families, with counselling coverage extending to study and visa destinations including Canada, the USA, the UK, Australia, and Europe.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* SIGNATURE SVG LINE */}
      <SignatureLine />

      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-navy-glow/15 rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-72 right-10 w-[450px] h-[450px] bg-teal/20 rounded-pill blur-3xl pointer-events-none animate-orb-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* ==================================================================== */}
        {/* HERO SECTION                                                         */}
        {/* ==================================================================== */}
        <section className="py-8 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-8">
              {/* Category Badge */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeTier1 }}
                className="inline-flex items-center space-x-2 bg-navy text-white px-3.5 sm:px-4 py-2 rounded-pill font-heading text-xs sm:text-micro uppercase tracking-wider font-semibold shadow-md max-w-full"
              >
                <Sparkles className="w-4 h-4 text-teal animate-pulse flex-shrink-0" />
                <span className="truncate">Future Yatra Private Limited</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.15]"
              >
                Your Journey. <span className="text-teal">Every Stage.</span> One Company.
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                className="text-body sm:text-body-l text-muted leading-relaxed max-w-2xl font-normal"
              >
                Future Yatra Private Limited brings together four specialist brands — study abroad
                admissions, test preparation, MBBS counselling, and visa documentation — so you
                never have to piece your journey together across unrelated consultancies.
              </motion.p>

              {/* Hero Primary Action Button */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeTier1 }}
                className="pt-1 sm:pt-2"
              >
                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-navy text-white text-body font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_25px_rgba(45,189,182,0.45)] transition-all duration-350 shadow-lg group"
                  >
                    <span>Book a Free Conversation</span>
                    <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-150" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Visual Collage with Auto-Rotating 2.5s Slider */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeTier1 }}
              className="lg:col-span-5 relative mt-4 lg:mt-0"
            >
              <HeroImageCollage />
            </motion.div>
          </div>
        </section>
      </div>

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
