"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  GraduationCap,
  BookOpen,
  Stethoscope,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2,
  Users,
  HelpCircle,
  X,
  ChevronRight,
  Star,
  Clock,
  Compass,
  MapPin,
  Building2,
  Check,
  ChevronDown,
  Award,
  Send,
  MessageSquare,
  Sparkle,
  Zap,
  CheckCircle,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import SignatureLine from "@/components/SignatureLine";
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";
import CursiveMarqueeBanner from "@/components/CursiveMarqueeBanner";
import Interactive3DNodes from "@/components/Interactive3DNodes";
import GlobalDestinationsSection from "@/components/GlobalDestinationsSection";
import GrandCtaBannerSection from "@/components/GrandCtaBannerSection";

// --- BRAND DATA SPECIFICATION ---
const BRANDS_DATA = [
  {
    id: "university-yatra",
    name: "University Yatra",
    slug: "/coming-soon?brand=university-yatra",
    fallbackSlug: "/brands/brand-1/",
    tagline: "Study Abroad Admissions & Student Visa Guidance",
    badge: "Admissions & Visas",
    icon: GraduationCap,
    image: "/images/university_brand_hero.png",
    accentColor: "#2DBDB6", // Teal
    glowShadow: "rgba(45, 189, 182, 0.4)",
    accentBg: "bg-teal/10",
    borderAccent: "border-teal/30",
    gradientFrom: "from-teal/25",
    gradientTo: "to-navy-deep/80",
    description:
      "University Yatra helps students navigate university selection, applications, and admissions across Canada, the USA, the UK, Australia, and Europe — from shortlisting the right institutions to preparing a compelling Statement of Purpose and managing the student visa process.",
    bestFor:
      "Students ready to apply to universities abroad, or exploring which countries and programs fit their goals and budget.",
    destinations: ["Canada", "USA", "UK", "Australia", "Europe"],
    features: [
      "Personalized university & program shortlisting",
      "Statement of Purpose (SOP) & LOR guidance",
      "Application filing & deadline tracking",
      "Student visa documentation & interview prep",
      "Pre-departure orientation & accommodation support",
    ],
    stats: "200+ Partner Institutions",
  },
  {
    id: "academic-yatra",
    name: "Academic Yatra",
    slug: "/coming-soon?brand=academic-yatra",
    fallbackSlug: "/brands/brand-2/",
    tagline: "Test Preparation & Language Training",
    badge: "Test Prep & Languages",
    icon: BookOpen,
    image: "/images/academic_brand_hero.png",
    accentColor: "#E0A23F", // Amber
    glowShadow: "rgba(224, 162, 63, 0.4)",
    accentBg: "bg-amber/10",
    borderAccent: "border-amber/30",
    gradientFrom: "from-amber/25",
    gradientTo: "to-navy-deep/80",
    description:
      "Academic Yatra provides structured coaching for IELTS, PTE, CELPIP, TOEFL, Duolingo, GRE, and GMAT, along with German and French language training for students targeting Europe. The focus is on genuine skill-building, not shortcuts or guaranteed-score claims.",
    bestFor:
      "Students who need a qualifying test score before applying abroad, or who are building language skills for a specific destination.",
    destinations: ["IELTS", "PTE", "CELPIP", "TOEFL", "GRE", "German A1-B2"],
    features: [
      "Structured IELTS, PTE, TOEFL & Duolingo coaching",
      "GRE & GMAT strategic quantitative/verbal modules",
      "German & French language training for European study",
      "Full-length realistic mock tests with diagnostic score reports",
      "Small batch size with personalized instructor feedback",
    ],
    stats: "7 Test Types Covered",
  },
  {
    id: "medico-yatra",
    name: "Medico Yatra",
    slug: "/medico-yatra",
    fallbackSlug: "/brands/brand-3/",
    tagline: "MBBS & Healthcare Education Abroad",
    badge: "Medical & Healthcare",
    icon: Stethoscope,
    image: "/images/medico_brand_hero.png",
    accentColor: "#E8604C", // Coral
    glowShadow: "rgba(232, 96, 76, 0.4)",
    accentBg: "bg-coral/10",
    borderAccent: "border-coral/30",
    gradientFrom: "from-coral/25",
    gradientTo: "to-navy-deep/80",
    description:
      "Medico Yatra specializes in counselling for MBBS and allied healthcare education at WHO-recognised institutions abroad, with transparent cost breakdowns and honest guidance on the FMGE/NExT pathway required to practice in India afterward.",
    bestFor:
      "Students pursuing a medical or healthcare career who need destination, institution, and pathway guidance specific to healthcare education.",
    destinations: ["WHO Recognized Universities", "NMC Compliant Pathways", "FMGE / NExT Roadmap"],
    features: [
      "WHO & NMC (India) compliant university selection",
      "Transparent 6-year total fee & living cost breakdowns",
      "Comprehensive FMGE / NExT examination guidance",
      "On-ground hostel, safety & clinical rotation verification",
      "Direct medical admission assistance without hidden agent markups",
    ],
    stats: "100% WHO/NMC Compliant",
  },
  {
    id: "applyvisa-yatra",
    name: "ApplyVisa Yatra",
    slug: "/coming-soon?brand=applyvisa-yatra",
    fallbackSlug: "/brands/brand-4/",
    tagline: "Visitor, Family & Immigration Visa Support",
    badge: "Visas & Immigration",
    icon: FileCheck2,
    image: "/images/applyvisa_brand_hero.png",
    accentColor: "#3A5EA8", // Navy Glow
    glowShadow: "rgba(58, 94, 168, 0.4)",
    accentBg: "bg-navy-glow/10",
    borderAccent: "border-navy-glow/30",
    gradientFrom: "from-navy-glow/25",
    gradientTo: "to-navy-deep/80",
    description:
      "ApplyVisa Yatra handles documentation and application support for visitor visas, spouse and parent visas, and permanent residency guidance — helping families prepare accurate, complete applications for the relevant embassy or immigration authority to review.",
    bestFor:
      "Families and individuals who need visa or immigration documentation support, independent of a study program.",
    destinations: ["Visitor Visas", "Spouse Visas", "Parent Super Visas", "PR Pathways"],
    features: [
      "Tourist & visitor visa documentation preparation",
      "Spouse & dependent visa application filing",
      "Parent Super Visa & family sponsorship assistance",
      "Financial proof & SOP auditing for embassy compliance",
      "Refusal review & re-application strategy",
    ],
    stats: "Complete Family Support",
  },
];

// --- FAQS DATA ---
const BRAND_FAQS = [
  {
    question: "Why did Future Yatra create four specialist brands instead of one agency?",
    answer:
      "A student's journey moves through distinct phases — test preparation, university selection, medical registration, and visa processing. A single generalist agency often treats these as sales steps. By building four specialist brands under Future Yatra Private Limited, each brand focuses strictly on its core domain with specialized advisors, while maintaining company-wide transparency and ethics.",
  },
  {
    question: "Can I use multiple brands for my journey?",
    answer:
      "Absolutely. In fact, most students move seamlessly through our ecosystem — starting with Academic Yatra for IELTS/PTE coaching, moving to University Yatra for admissions and student visa guidance, and later using ApplyVisa Yatra to bring parents for graduation. Because all four brands belong to Future Yatra Private Limited, your records and preferences are unified without repeating yourself.",
  },
  {
    question: "Does Future Yatra guarantee university admissions or visas?",
    answer:
      "No. Future Yatra Private Limited and all four brands strictly prohibit guaranteed-outcome claims. University admissions rest solely with university committees, and visa approvals rest exclusively with government embassies. We guarantee thorough documentation, honest evaluation, transparent fee disclosures, and zero hidden agent fees.",
  },
  {
    question: "How do I know which brand is right for me?",
    answer:
      "If you are preparing for exams like IELTS or GRE, start with Academic Yatra. If you want to apply for Bachelor's or Master's degrees, start with University Yatra. If you are pursuing MBBS abroad, start with Medico Yatra. If you need tourist, spouse, or parent visas, start with ApplyVisa Yatra. You can also click 'Book Free Consultation' and our team will connect you to the right specialist.",
  },
];

export default function OurBrandsPageClient() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Active Carousel Brand index
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  // Goal Matcher interactive state
  const [selectedGoal, setSelectedGoal] = useState<string>("university");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBrand, setModalBrand] = useState<string>("General / Not Sure");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedBrand: "General / Not Sure",
    message: "",
  });

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Live Clock State
  const [currentTimeStr, setCurrentTimeStr] = useState("9:41am");
  const [currentDateStr, setCurrentDateStr] = useState("12 March, 2025");

  // Update Live Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;
      setCurrentTimeStr(`${hours}:${minutes}${ampm}`);

      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      setCurrentDateStr(now.toLocaleDateString("en-GB", options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto cycle hero carousel card every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBrandIndex((prev) => (prev + 1) % BRANDS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Handle Form Submit
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const openModalWithBrand = (brandName: string) => {
    setModalBrand(brandName);
    setFormData((prev) => ({ ...prev, selectedBrand: brandName }));
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const currentActiveBrand = BRANDS_DATA[activeBrandIndex];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden font-sans">

      {/* SIGNATURE SVG BACKGROUND LINE */}
      <SignatureLine />

      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-navy-glow/15 rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-80 right-10 w-[550px] h-[550px] bg-teal/20 rounded-pill blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute top-[1800px] left-1/4 w-[600px] h-[600px] bg-sand/60 rounded-pill blur-3xl pointer-events-none" />

      {/* ==================================================================== */}
      {/* 1. TOP HEADER STATUS BAR                                            */}
      {/* ==================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeTier1 }}
          className="flex items-center justify-between gap-4 py-3 px-5 bg-white/80 backdrop-blur-md border border-line rounded-2xl shadow-sm text-xs text-navy-deep"
        >
          <div className="flex items-center gap-2.5 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
            </span>
            <span className="font-bold text-navy tracking-tight">Future Yatra Ecosystem</span>
            <span className="hidden sm:inline text-muted">• 4 Specialist Brands</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Clock Chip */}
            <div className="hidden md:flex items-center gap-2.5 px-3 py-1 bg-navy-deep/5 rounded-full border border-line font-mono text-[11px] text-navy">
              <Clock className="w-3.5 h-3.5 text-teal" />
              <span>{currentTimeStr}</span>
              <span className="text-muted">•</span>
              <span>{currentDateStr}</span>
            </div>

            <button
              onClick={() => openModalWithBrand("General / Not Sure")}
              className="inline-flex items-center gap-1.5 font-heading font-semibold text-white bg-navy hover:bg-navy-deep px-4 py-1.5 rounded-full transition-all text-xs shadow-sm hover:shadow"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-teal-bright" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* ==================================================================== */}
        {/* SECTION 1: HERO — VIBRANT & ANIMATED HERO                           */}
        {/* ==================================================================== */}
        <section className="py-12 sm:py-16 lg:py-20 relative">

          {/* WATERMARK BACKGROUND TEXT */}
          <div className="absolute left-1/2 -translate-x-1/2 top-12 pointer-events-none select-none text-navy/5 font-extrabold text-[8rem] sm:text-[14rem] leading-none uppercase tracking-tighter whitespace-nowrap z-0">
            FUTURE YATRA
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">

              {/* Cursive Script Eyebrow (Matching User Screenshot) */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeTier1 }}
                className="font-tempting text-teal text-3xl sm:text-4xl lg:text-5xl font-normal block leading-none drop-shadow-sm"
              >
                Empowering Life&apos;s Meaningful Journeys
              </motion.span>

              {/* Main Bold Title (Matching User Screenshot) */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeTier1, delay: 0.15 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-navy-deep tracking-tight leading-[1.12]"
              >
                Guided by Transparency, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-navy-glow to-coral">
                  Ethical Guidance &amp; Long-Term Trust
                </span>
              </motion.h1>

              {/* Subtext (Matching User Screenshot) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeTier1, delay: 0.25 }}
                className="text-muted text-base sm:text-lg font-medium leading-relaxed max-w-2xl"
              >
                Future Yatra Private Limited — Parent company to University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra.
              </motion.p>

              {/* Ecosystem Concept Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeTier1, delay: 0.3 }}
                className="space-y-4 text-base sm:text-lg text-muted max-w-2xl leading-relaxed"
              >
                <p>
                  A student&apos;s journey rarely stops at one decision. It usually moves through a test score, a university application, sometimes a medical entrance pathway, and almost always a visa.
                </p>
                <p className="text-navy-deep font-semibold text-base sm:text-lg border-l-4 border-teal pl-4 py-1.5 bg-teal-tint/40 rounded-r-xl shadow-sm">
                  Rather than building one generalist consultancy trying to do everything, Future Yatra Private Limited built four specialist brands — each focused on one part of that journey, each held to the same company-wide standard of transparency, integrity, and student-first guidance.
                </p>
              </motion.div>

              {/* Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeTier1, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <MagneticButton>
                  <a
                    href="#brands-grid"
                    className="inline-flex items-center space-x-3 bg-navy text-white hover:bg-navy-deep px-7 py-4 rounded-full font-heading font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span>Explore Each Brand</span>
                    <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>

                <button
                  onClick={() => openModalWithBrand("General / Not Sure")}
                  className="inline-flex items-center space-x-2 bg-teal-tint text-navy border border-teal/40 hover:bg-teal/20 px-6 py-4 rounded-full font-heading font-semibold text-sm sm:text-base transition-all duration-300"
                >
                  <HelpCircle className="w-4 h-4 text-teal" />
                  <span>Not Sure Where to Start?</span>
                </button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center gap-4 pt-4 border-t border-line text-xs sm:text-sm text-muted font-medium"
              >
                <div className="flex text-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>
                <span>4 Specialist Brands • 100% Transparent • Zero Fake Guarantees</span>
              </motion.div>
            </div>

            {/* Right Interactive Carousel Card with AI Generated Imagery */}
            <div className="lg:col-span-5 relative">

              {/* Floating 3D Interactive Canvas Behind/Beside Card */}
              <div className="absolute -inset-10 opacity-50 pointer-events-none">
                <Interactive3DNodes />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeTier1, delay: 0.2 }}
                className="relative z-10"
              >

                {/* Brand Selector Tabs Bar */}
                <div className="flex items-center justify-between gap-1 p-1.5 bg-navy-deep/90 backdrop-blur-md rounded-2xl mb-3 border border-teal/30 shadow-lg overflow-x-auto">
                  {BRANDS_DATA.map((b, idx) => {
                    const isSelected = activeBrandIndex === idx;
                    return (
                      <button
                        key={b.id}
                        onClick={() => setActiveBrandIndex(idx)}
                        className={`relative px-3 py-2 rounded-xl text-xs font-heading font-semibold transition-all whitespace-nowrap ${isSelected ? "text-navy-deep font-bold" : "text-white/70 hover:text-white"
                          }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeBrandTab"
                            className="absolute inset-0 bg-teal-bright rounded-xl"
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          />
                        )}
                        <span className="relative z-10">{b.name.split(" ")[0]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Main Interactive Preview Glass Card with AI Generated Image */}
                <Card3DTilt>
                  <div className="p-2 sm:p-3 bg-white/80 backdrop-blur-xl border border-line rounded-3xl shadow-2xl">
                    <div className="bg-navy-deep text-white rounded-2xl p-5 sm:p-6 space-y-4 relative overflow-hidden">

                      {/* Dynamic Background Radial Glow */}
                      <motion.div
                        key={currentActiveBrand.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.35, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                        style={{ backgroundColor: currentActiveBrand.accentColor }}
                      />

                      {/* AI Generated Photorealistic Image Banner */}
                      <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden shadow-lg border border-white/15 group">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentActiveBrand.id + "-img"}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={currentActiveBrand.image}
                              alt={currentActiveBrand.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                          </motion.div>
                        </AnimatePresence>

                        {/* Overlaid Header Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider bg-navy-deep/80 backdrop-blur-md text-teal-bright border border-white/20 shadow">
                            Specialist 0{activeBrandIndex + 1} / 04
                          </span>
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-navy-deep/80 backdrop-blur-md text-white border border-white/20 shadow">
                            {currentActiveBrand.stats}
                          </span>
                        </div>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-3.5">
                        <motion.div
                          key={currentActiveBrand.id + "-icon"}
                          initial={{ rotate: -10, scale: 0.9 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg"
                          style={{ backgroundColor: currentActiveBrand.accentColor }}
                        >
                          {React.createElement(currentActiveBrand.icon, { className: "w-6 h-6" })}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                            {currentActiveBrand.name}
                          </h3>
                          <p className="text-xs font-semibold text-teal-bright/90">
                            {currentActiveBrand.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                        {currentActiveBrand.description}
                      </p>

                      {/* Key Offerings Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentActiveBrand.destinations.map((dest, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/10 text-white/90 border border-white/15"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>

                      {/* Target Audience Box */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white/90 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-teal-bright tracking-wider block">
                          Target Audience:
                        </span>
                        <p className="italic text-white/80">{currentActiveBrand.bestFor}</p>
                      </div>

                      {/* Card Action Row */}
                      <div className="pt-2 flex items-center justify-between">
                        <Link
                          href={currentActiveBrand.slug}
                          className="inline-flex items-center gap-2 font-heading font-bold text-xs text-teal-bright hover:underline"
                        >
                          <span>Explore Overview</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                        <button
                          onClick={() => openModalWithBrand(currentActiveBrand.name)}
                          className="px-4 py-2 rounded-full bg-teal-bright text-navy-deep font-heading font-bold text-xs hover:bg-white transition-colors"
                        >
                          Book Session
                        </button>
                      </div>

                    </div>
                  </div>
                </Card3DTilt>

              </motion.div>
            </div>

          </div>
        </section>

        {/* CONTINUOUS CURSIVE MARQUEE BANNER */}
        <CursiveMarqueeBanner />

        {/* ==================================================================== */}
        {/* SECTION 2: THE FUTURE YATRA ECOSYSTEM STANDARD                     */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Core Ecosystem Pillars
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-deep tracking-tight">
              Why Four Specialists Under One Entity?
            </h2>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              Replacing sales-driven generalist agencies with deep domain mastery, unified student records, and direct founder accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                icon: Layers,
                title: "Unified Student File",
                description:
                  "All 4 brands operate under Future Yatra Private Limited. Your test prep, admission files, and visa papers remain unified under one account.",
                badge: "One Platform",
              },
              {
                num: "02",
                icon: Award,
                title: "Domain Mastery",
                description:
                  "Dedicated specialist advisors for admissions, IELTS/PTE, medical pathways, and visas — instead of generalist tele-callers doing everything.",
                badge: "Four Specialists",
              },
              {
                num: "03",
                icon: ShieldCheck,
                title: "Zero False Claims",
                description:
                  "Strict company policy against artificial admission or visa guarantee promises. 100% honest evaluation and transparent cost disclosures.",
                badge: "100% Honest",
              },
              {
                num: "04",
                icon: HeartHandshake,
                title: "End-to-End Support",
                description:
                  "Guidance that continues far beyond university application filing — supporting you through visa approval, pre-departure, and family visitor visas.",
                badge: "Long-Term Trust",
              },
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-line shadow-md hover:shadow-xl hover:border-teal/50 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-teal-tint text-teal border border-teal/30 flex items-center justify-center group-hover:bg-navy group-hover:text-teal-bright transition-colors duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-teal bg-teal-tint/50 px-2.5 py-1 rounded-full border border-teal/20">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy-deep group-hover:text-teal transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line/50 mt-4 flex items-center justify-between text-xs text-muted font-medium">
                    <span>Pillar {pillar.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: THE 4 SPECIALIST BRANDS SHOWCASE GRID                     */}
        {/* ==================================================================== */}
        <section id="brands-grid" className="py-16 sm:py-24">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Specialist Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-deep tracking-tight">
              Designed for Every Step of Your Journey.
            </h2>
            <p className="text-muted text-base sm:text-lg">
              Click into any brand to view dedicated guidance, course offerings, university lists, and visa support.
            </p>
          </div>

          {/* Grid of 4 Brands */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BRANDS_DATA.map((brand, idx) => {
              const IconComp = brand.icon;
              return (
                <Card3DTilt key={brand.id} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="h-full bg-navy-deep text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-white/15 shadow-xl group hover:border-teal/50 transition-colors"
                  >
                    {/* Background Subtle Radial Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${brand.gradientFrom} ${brand.gradientTo} opacity-30 pointer-events-none`}
                    />

                    {/* AI Generated Photorealistic Image Header */}
                    <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 border border-white/15 shadow-md group">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />

                      {/* Top Badge Overlay */}
                      <div className="absolute top-3 left-3 z-10">
                        <span
                          className="px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white shadow-md"
                          style={{ backgroundColor: brand.accentColor }}
                        >
                          {brand.badge}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <Link
                          href={brand.slug}
                          className="w-10 h-10 rounded-full bg-navy-deep/80 backdrop-blur-md hover:bg-teal-bright hover:text-navy-deep border border-white/20 flex items-center justify-center text-white transition-all group-hover:rotate-45"
                          aria-label={`Open ${brand.name}`}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="relative z-10 space-y-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                          style={{ backgroundColor: brand.accentColor }}
                        >
                          <IconComp className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                            {brand.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-teal-bright/90">
                            {brand.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/85 leading-relaxed pt-2">
                        {brand.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="relative z-10 space-y-3 mb-6 bg-white/5 border border-white/10 rounded-2xl p-5">
                      <span className="text-xs uppercase font-heading font-bold tracking-wider text-teal-bright block">
                        Core Offerings & Support:
                      </span>
                      <ul className="space-y-2.5">
                        {brand.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                            <CheckCircle2 className="w-4.5 h-4.5 text-teal-bright shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience & Bottom Actions */}
                    <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-xs text-white/75 max-w-xs">
                        <strong className="text-white block font-semibold">Best for:</strong>
                        <span className="italic">{brand.bestFor}</span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          onClick={() => openModalWithBrand(brand.name)}
                          className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                        >
                          Book Guidance
                        </button>
                        <Link
                          href={brand.slug}
                          className="px-5 py-2.5 rounded-full text-xs font-heading font-bold bg-teal-bright text-navy-deep hover:bg-white transition-colors flex items-center gap-1.5 shadow-md"
                        >
                          <span>Visit Overview</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                  </motion.div>
                </Card3DTilt>
              );
            })}
          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: INTERACTIVE "NOT SURE WHERE TO START?" GOAL MATCHER        */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-20 bg-teal-tint/60 rounded-3xl border border-teal/20 px-6 sm:px-12 my-12 relative overflow-hidden">

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">

            <div className="text-center space-y-2">
              <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
                Interactive Goal Selector
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-navy-deep tracking-tight">
                Not Sure Where to Start Your Journey?
              </h2>
              <p className="text-muted text-sm sm:text-base">
                Select your current primary goal below, and we will highlight the exact specialist brand for your needs.
              </p>
            </div>

            {/* Goal Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { id: "university", label: "Apply to Universities", icon: GraduationCap, brand: "University Yatra" },
                { id: "academic", label: "IELTS / PTE / Test Prep", icon: BookOpen, brand: "Academic Yatra" },
                { id: "medico", label: "Study MBBS Abroad", icon: Stethoscope, brand: "Medico Yatra" },
                { id: "visa", label: "Visitor & Family Visas", icon: FileCheck2, brand: "ApplyVisa Yatra" },
              ].map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`p-4 rounded-2xl border text-left font-heading font-semibold text-xs sm:text-sm flex flex-col items-start gap-3 transition-all ${selectedGoal === goal.id
                    ? "bg-navy-deep text-white border-teal-bright shadow-lg scale-105"
                    : "bg-white text-navy-deep border-line hover:border-teal/50"
                    }`}
                >
                  <goal.icon className={`w-6 h-6 ${selectedGoal === goal.id ? "text-teal-bright" : "text-navy"}`} />
                  <span>{goal.label}</span>
                </button>
              ))}
            </div>

            {/* Selected Goal Highlight Result Box */}
            <AnimatePresence mode="wait">
              {BRANDS_DATA.filter((b) => {
                if (selectedGoal === "university") return b.id === "university-yatra";
                if (selectedGoal === "academic") return b.id === "academic-yatra";
                if (selectedGoal === "medico") return b.id === "medico-yatra";
                if (selectedGoal === "visa") return b.id === "applyvisa-yatra";
                return true;
              }).map((matchedBrand) => (
                <motion.div
                  key={matchedBrand.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-teal/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-xl">
                    <span className="text-xs font-mono uppercase tracking-wider text-teal font-bold flex items-center gap-1.5">
                      <Sparkle className="w-3.5 h-3.5 text-teal" />
                      Recommended Specialist Brand:
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy-deep">
                      {matchedBrand.name} — {matchedBrand.tagline}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted">
                      {matchedBrand.bestFor}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={matchedBrand.slug}
                      className="px-6 py-3 rounded-full bg-navy text-white font-heading font-semibold text-xs hover:bg-navy-deep transition-colors flex items-center gap-2 shadow-md"
                    >
                      <span>Go to {matchedBrand.name}</span>
                      <ArrowRight className="w-4 h-4 text-teal-bright" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: SYNERGY ROADMAP — HOW THE 4 BRANDS WORK TOGETHER          */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Unified Journey Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-deep tracking-tight">
              How Our Ecosystem Connects Your Story
            </h2>
            <p className="text-muted text-base">
              Moving through multiple steps? Because all four specialist brands belong to Future Yatra Private Limited, your documentation flows seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                brand: "Academic Yatra",
                title: "Qualifying Score",
                desc: "Get your IELTS, PTE, or language score built through transparent coaching.",
                color: "#E0A23F",
              },
              {
                step: "02",
                brand: "University Yatra",
                title: "University Offer",
                desc: "Shortlist institutions, submit SOPs, and secure your official offer letter.",
                color: "#2DBDB6",
              },
              {
                step: "03",
                brand: "ApplyVisa Yatra",
                title: "Student Visa",
                desc: "File your student visa application with audited financial documentation.",
                color: "#3A5EA8",
              },
              {
                step: "04",
                brand: "ApplyVisa Yatra",
                title: "Family Visitors",
                desc: "Bring your parents for graduation or vacation with family visitor visas.",
                color: "#E8604C",
              },
            ].map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-line rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-10 h-10 rounded-xl font-heading font-bold text-sm text-white flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: st.color }}
                  >
                    {st.step}
                  </span>
                  <span className="text-xs font-mono font-bold text-teal bg-teal-tint/60 px-2.5 py-1 rounded-full border border-teal/20">
                    Step {st.step}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg text-navy-deep mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Study Destinations Integration */}
        <GlobalDestinationsSection />

        {/* ==================================================================== */}
        {/* SECTION 6: FAQ ACCORDION                                            */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 max-w-4xl mx-auto">

          <div className="text-center mb-12 space-y-2">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-deep tracking-tight">
              Understanding Future Yatra&apos;s Multi-Brand Model
            </h2>
          </div>

          <div className="space-y-4">
            {BRAND_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-line rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-navy-deep flex items-center justify-between gap-4 hover:bg-teal-tint/40 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-teal shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-muted leading-relaxed border-t border-line/50 pt-4">
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

        {/* GRAND CTA BANNER */}
        <GrandCtaBannerSection />

      </div>

      {/* ==================================================================== */}
      {/* 7. REQUEST / CONSULTATION MODAL                                     */}
      {/* ==================================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-navy-deep/60 backdrop-blur-md">

            <div
              className="absolute inset-0"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-line z-10 text-navy-deep overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-sand/80 hover:bg-line flex items-center justify-center text-navy transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!formSubmitted ? (
                <form onSubmit={handleSubmitForm} className="space-y-4">

                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase text-teal font-bold">
                      Book Free Specialist Session
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-navy-deep">
                      Start Your Journey Today
                    </h3>
                    <p className="text-xs text-muted">
                      Tell us what you need and our founder or senior advisor will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-navy/70">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-teal-tint/30 text-sm focus:outline-none focus:border-teal"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-navy/70">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-line bg-teal-tint/30 text-sm focus:outline-none focus:border-teal"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-navy/70">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-line bg-teal-tint/30 text-sm focus:outline-none focus:border-teal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-navy/70">
                      Interested Specialist Brand
                    </label>
                    <select
                      value={formData.selectedBrand}
                      onChange={(e) => setFormData({ ...formData, selectedBrand: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-teal-tint/30 text-sm focus:outline-none focus:border-teal font-medium"
                    >
                      <option value="General / Not Sure">General / Not Sure (Guide Me)</option>
                      <option value="University Yatra">University Yatra (Admissions & Visas)</option>
                      <option value="Academic Yatra">Academic Yatra (Test Prep & Languages)</option>
                      <option value="Medico Yatra">Medico Yatra (MBBS Abroad)</option>
                      <option value="ApplyVisa Yatra">ApplyVisa Yatra (Visitor & Immigration)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-navy/70">
                      Your Message / Target Country
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your course goals, preferred destination, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-teal-tint/30 text-sm focus:outline-none focus:border-teal resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-navy text-white hover:bg-navy-deep font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-teal-bright" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-muted">
                    🔒 Zero spam guarantee. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-teal-tint text-teal border border-teal/40 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-navy-deep">
                    Consultation Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto">
                    Thank you, <strong className="text-navy">{formData.name}</strong>. Our senior specialist for{" "}
                    <strong className="text-teal">{formData.selectedBrand}</strong> will review your request and reach out within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-3 rounded-full bg-navy text-white text-xs font-semibold hover:bg-navy-deep transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
