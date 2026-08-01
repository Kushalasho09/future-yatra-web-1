"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Clock,
  ShieldCheck,
  Building2,
  ChevronRight,
  X,
  CheckCircle2,
  BookOpen,
  Award,
  DollarSign,
  Compass,
  ArrowUpRight,
  Layers,
  FileCheck2,
  Users,
} from "lucide-react";

export interface DestinationData {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  img: string;
  accentColor: string;
  badge: string;
  workVisa: string;
  intakes: string;
  visaRate: string;
  tuitionRange: string;
  topInstitutions: string[];
  popularPrograms: string[];
  visaHighlights: string[];
  fullGuideDesc: string;
  financialReq: string;
}

const destinationsData: DestinationData[] = [
  {
    id: "canada",
    name: "Canada",
    tagline: "Top Universities, Co-op & PGWP Guidance",
    shortDesc: "World-class education with direct pathways for post-graduation work permits (PGWP) and co-op work terms.",
    img: "/images/dest_canada.png",
    accentColor: "from-red-500 to-rose-600",
    badge: "PGWP 3-Year Ready",
    workVisa: "Up to 3 Years (PGWP)",
    intakes: "Sept, Jan & May",
    visaRate: "98% Document Compliance",
    tuitionRange: "CAD 18,000 - 35,000 / yr",
    topInstitutions: [
      "University of Toronto",
      "University of British Columbia (UBC)",
      "McGill University",
      "University of Waterloo",
      "McMaster University",
    ],
    popularPrograms: [
      "Computer Science & AI",
      "Data Analytics & Business Tech",
      "Mechanical & Civil Engineering",
      "Healthcare & Nursing",
      "Business Administration (MBA)",
    ],
    visaHighlights: [
      "Guaranteed Post-Graduation Work Permit (PGWP) eligibility guidance",
      "Off-campus work permit during full-time studies (up to 24 hrs/week)",
      "Spousal open work permit options for eligible Master's students",
      "Provincial Nominee Program (PNP) aligned course selection",
    ],
    fullGuideDesc:
      "Canada remains a premier destination for Indian students due to high academic standards, safe multicultural campuses, and welcoming post-study work permits. Our University Yatra team guides you through SDS visa requirements, GIC financial verification, and institution shortlisting.",
    financialReq: "GIC Deposit (CAD $20,635) + 1 Year Tuition Proof",
  },
  {
    id: "usa",
    name: "United States",
    tagline: "Ivy League & STEM OPT Specialization",
    shortDesc: "Lead the global innovation economy with 3-year STEM OPT extension work authorization and world-leading research universities.",
    img: "/images/dest_usa.png",
    accentColor: "from-blue-500 to-indigo-600",
    badge: "3-Year STEM OPT",
    workVisa: "3 Years (STEM OPT)",
    intakes: "Fall (Aug/Sept) & Spring (Jan)",
    visaRate: "F-1 Interview Preparedness",
    tuitionRange: "$22,000 - $55,000 / yr",
    topInstitutions: [
      "Harvard & MIT Tier",
      "Stanford & UC Berkeley",
      "Carnegie Mellon & NYU",
      "University of Texas (UT Austin)",
      "Purdue & Georgia Tech",
    ],
    popularPrograms: [
      "Artificial Intelligence & ML",
      "Data Science & Cybersecurity",
      "Biomedical Engineering",
      "Financial Engineering",
      "Quantitative Business Analytics",
    ],
    visaHighlights: [
      "1-Year initial OPT + 24-Month STEM OPT Extension",
      "Curricular Practical Training (CPT) for summer internships",
      "Rigorous F-1 embassy interview preparation & mock sessions",
      "Institutional merit scholarships & Assistantship application support",
    ],
    fullGuideDesc:
      "The US offers unrivaled academic depth and high-impact career opportunities. We specialize in STEM-designated Master's programs that grant up to 36 months of US work authorization without requiring an immediate H-1B sponsor.",
    financialReq: "Form I-20 Liquid Funds (Tuition + $18,000-$25,000 Living)",
  },
  {
    id: "uk",
    name: "United Kingdom",
    tagline: "Russell Group Admissions & Graduate Route",
    shortDesc: "Accelerate your career with 1-year intensive Master's degrees from prestigious Russell Group institutions and 2-year Graduate Visas.",
    img: "/images/dest_uk.png",
    accentColor: "from-sky-500 to-blue-700",
    badge: "Russell Group Excellence",
    workVisa: "2 Years (Graduate Route)",
    intakes: "Sept/Oct & Jan/Feb",
    visaRate: "Fast-Track CAS Filing",
    tuitionRange: "£15,000 - £30,000 / yr",
    topInstitutions: [
      "Oxford & Cambridge",
      "Imperial College London",
      "London School of Economics (LSE)",
      "University of Manchester",
      "University of Edinburgh",
    ],
    popularPrograms: [
      "Finance & Fintech",
      "International Business & Management",
      "Law & Global Governance",
      "Public Health & Epidemiology",
      "Software Engineering",
    ],
    visaHighlights: [
      "1-Year focused Master's degree reduces living costs & tuition",
      "2-Year un-sponsored Graduate Route post-study work visa",
      "Streamlined Student Visa CAS documentation process",
      "No mandatory GRE/GMAT for many top-ranked programs",
    ],
    fullGuideDesc:
      "The UK is home to centuries of academic legacy. The 1-year Master's duration allows Indian graduates to enter the workforce faster while benefiting from the 2-year Graduate Route post-study visa.",
    financialReq: "28-Day Bank Statement (£1,334/mo London, £1,023/mo Outer)",
  },
  {
    id: "australia",
    name: "Australia",
    tagline: "Go8 Institutions & Post-Study Work Visas",
    shortDesc: "Experience premier research facilities, high quality of life, and generous post-study work rights across Group of Eight (Go8) universities.",
    img: "/images/dest_australia.png",
    accentColor: "from-amber-500 to-emerald-500",
    badge: "Go8 & High Quality of Life",
    workVisa: "2 to 4 Years Post-Study",
    intakes: "Feb (Sem 1) & July (Sem 2)",
    visaRate: "GTE & Subclass 500 Ready",
    tuitionRange: "AUD 24,000 - 45,000 / yr",
    topInstitutions: [
      "University of Melbourne",
      "University of Sydney",
      "UNSW Sydney",
      "Australian National University (ANU)",
      "University of Queensland",
    ],
    popularPrograms: [
      "Civil & Environmental Engineering",
      "Information Technology & Cloud",
      "Nursing & Healthcare Management",
      "Agribusiness & Biotechnology",
      "Accounting & Corporate Finance",
    ],
    visaHighlights: [
      "Extended post-study work rights in designated regional cities",
      "Subclass 500 student visa support with Genuine Student (GS) assessment",
      "Part-time work permissions (48 hours per fortnight during semesters)",
      "Direct credit transfers and articulation agreements",
    ],
    fullGuideDesc:
      "Australia combines prestigious Group of Eight (Go8) university rankings with an exceptional lifestyle and extended post-study work entitlements. We assist students in selecting programs with strong industry linkages.",
    financialReq: "Genuine Student (GS) Financial Proof (AUD $29,710 Living)",
  },
  {
    id: "europe",
    name: "Europe",
    tagline: "Germany, Ireland, Netherlands & Public Unis",
    shortDesc: "Unlock low or zero tuition fees in public German universities, vibrant tech hubs in Ireland, and Schengen borderless mobility.",
    img: "/images/dest_europe.png",
    accentColor: "from-emerald-400 to-teal",
    badge: "Low Tuition & Schengen Access",
    workVisa: "18 Mos (DE) / 2 Yrs (IE)",
    intakes: "Winter (Oct) & Summer (Apr)",
    visaRate: "APS & Embassy Compliant",
    tuitionRange: "€0 - €12,000 / yr (Public)",
    topInstitutions: [
      "Technical University of Munich (TUM)",
      "LMU Munich",
      "Trinity College Dublin (Ireland)",
      "TU Delft (Netherlands)",
      "RWTH Aachen (Germany)",
    ],
    popularPrograms: [
      "Automotive & Mechatronics Engineering",
      "Renewable Energy & Sustainability",
      "Software Systems & Cybersecurity",
      "Biomedical & Pharmaceutical Sciences",
      "Supply Chain & Global Logistics",
    ],
    visaHighlights: [
      "Free/Low tuition at public universities in Germany",
      "Schengen Area travel access across 27+ European nations",
      "18-Month job seeker visa in Germany upon graduation",
      "Ireland 2-Year Stamp 1G post-study work visa for Master's graduates",
    ],
    fullGuideDesc:
      "Europe is the premier destination for tuition-conscious students seeking world-leading STEM programs. Public German universities charge minimal administrative fees, while Ireland offers an English-speaking Silicon Valley hub in Europe.",
    financialReq: "Germany Blocked Account (€11,208/year) / Ireland €10,000",
  },
];

export default function GlobalDestinationsSection() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const [activeDestinationId, setActiveDestinationId] = useState<string>("canada");
  const [selectedModalDestination, setSelectedModalDestination] = useState<DestinationData | null>(null);
  const [modalTab, setModalTab] = useState<"universities" | "visa" | "financials">("universities");

  const activeDestination =
    destinationsData.find((d) => d.id === activeDestinationId) || destinationsData[0];

  return (
    <section
      id="global-destinations"
      className="py-12 sm:py-24 relative overflow-hidden bg-[#07111e] text-white border-y border-teal/20 my-6 sm:my-10 rounded-[28px] sm:rounded-[40px] shadow-2xl"
    >
      {/* AMBIENT NEON GLOW HALOS */}
      <div className="absolute top-0 left-1/4 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-teal/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeTier1 }}
            className="inline-flex items-center space-x-2 bg-teal/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal/30 text-xs font-semibold"
          >
            <Globe2 className="w-4 h-4 text-teal-bright animate-pulse" />
            <span className="font-tempting text-teal-bright text-base sm:text-lg">Global Destination Coverage</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
            className="font-heading text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            India-Based.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-teal-bright to-emerald-400">
              Globally Focused.
            </span>
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
            className="text-xs sm:text-body-l text-sand-tint/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Based in India, Future Yatra primarily serves Indian students and families. We specialize in five major study destinations with deep institutional knowledge.
          </motion.p>

        </div>

        {/* TOP DESTINATION SELECTOR STRIP (CLEAN & ELEGANT, NO CODE TAGS) */}
        <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center justify-start sm:justify-center space-x-2.5 min-w-max px-2">
            {destinationsData.map((dest) => {
              const isActive = activeDestinationId === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setActiveDestinationId(dest.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-small font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-navy bg-gradient-to-r from-teal to-teal-bright shadow-[0_0_20px_rgba(45,189,182,0.6)] border border-white/40 font-extrabold"
                      : "text-white/80 hover:text-white bg-white/5 border border-white/10"
                  }`}
                >
                  <Globe2 className={`w-3.5 h-3.5 ${isActive ? "text-navy" : "text-teal-bright"}`} />
                  <span>{dest.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BENTO SHOWCASE STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* MAIN ACTIVE HERO PANEL (65% Width) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDestination.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35, ease: easeTier1 }}
                className="h-full rounded-2xl sm:rounded-[32px] border border-teal/30 bg-gradient-to-br from-[#0b1728] via-[#091524] to-[#060e1a] overflow-hidden shadow-2xl relative flex flex-col justify-between"
              >
                {/* HERO LANDMARK BACKDROP PHOTO */}
                <div className="relative w-full h-52 sm:h-72 overflow-hidden">
                  <Image
                    src={activeDestination.img}
                    alt={activeDestination.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-center brightness-75"
                  />

                  {/* Gradient Mask Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1728] via-[#0b1728]/50 to-transparent" />

                  {/* TOP BADGES */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                    <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center space-x-1.5 shadow-md">
                      <Globe2 className="w-3.5 h-3.5 text-teal-bright" />
                      <span className="text-[11px] font-extrabold tracking-wide text-white uppercase">
                        {activeDestination.name}
                      </span>
                    </div>

                    <div className="bg-teal/20 backdrop-blur-md border border-teal/50 rounded-full px-3 py-1 text-[11px] font-bold text-teal-bright shadow-md truncate max-w-[180px]">
                      {activeDestination.badge}
                    </div>
                  </div>

                  {/* HERO TITLE OVERLAY */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 space-y-1">
                    <span className="text-[11px] font-bold text-teal-bright uppercase tracking-wider block">
                      {activeDestination.tagline}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                      {activeDestination.name} <span className="text-teal font-normal text-lg sm:text-2xl">Pathway</span>
                    </h3>
                  </div>
                </div>

                {/* SHOWCASE BODY CONTENT */}
                <div className="p-4 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  
                  {/* Short Description */}
                  <p className="text-xs sm:text-body text-sand-tint/90 font-normal leading-relaxed">
                    {activeDestination.shortDesc}
                  </p>

                  {/* 4 GLOWING GLASS METRIC CARDS */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center space-x-1 text-teal-bright text-[10px] sm:text-[11px] font-bold">
                        <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">Work Visa</span>
                      </div>
                      <span className="font-heading text-xs font-bold text-white block leading-tight truncate">
                        {activeDestination.workVisa}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center space-x-1 text-teal-bright text-[10px] sm:text-[11px] font-bold">
                        <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">Intakes</span>
                      </div>
                      <span className="font-heading text-xs font-bold text-white block leading-tight truncate">
                        {activeDestination.intakes}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center space-x-1 text-teal-bright text-[10px] sm:text-[11px] font-bold">
                        <DollarSign className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">Tuition Est.</span>
                      </div>
                      <span className="font-heading text-xs font-bold text-white block leading-tight truncate">
                        {activeDestination.tuitionRange}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center space-x-1 text-teal-bright text-[10px] sm:text-[11px] font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">Compliance</span>
                      </div>
                      <span className="font-heading text-xs font-bold text-white block leading-tight truncate">
                        {activeDestination.visaRate}
                      </span>
                    </div>

                  </div>

                  {/* POPULAR MAJORS CHIPS */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-teal-bright uppercase tracking-wider block">
                      Popular Specializations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDestination.popularPrograms.map((prog, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-medium bg-teal/10 text-sand-tint border border-teal/20 px-2.5 py-0.5 rounded-full"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* MAIN ACTION CTA BUTTON */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-sand-tint/70 font-medium text-center sm:text-left">
                      Direct admissions guidance for {activeDestination.name}
                    </span>

                    <button
                      onClick={() => setSelectedModalDestination(activeDestination)}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-teal to-teal-bright text-navy font-heading font-black text-xs px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg group cursor-pointer"
                    >
                      <span className="tracking-wider">EXPLORE {activeDestination.name.toUpperCase()} GUIDANCE</span>
                      <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-1 transition-transform stroke-[3]" />
                    </button>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BENTO SIDE QUICK-SWITCHER CARDS (35% Width) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-2.5">
            <span className="text-[11px] font-extrabold text-teal-bright uppercase tracking-wider px-1">
              Select Destination:
            </span>

            {destinationsData.map((dest) => {
              const isActive = dest.id === activeDestinationId;
              return (
                <div
                  key={dest.id}
                  onClick={() => setActiveDestinationId(dest.id)}
                  className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between space-x-3 ${
                    isActive
                      ? "bg-gradient-to-r from-teal/20 via-[#0b1728] to-[#0b1728] border-teal text-white shadow-md"
                      : "bg-white/5 border-white/10 hover:border-teal/30 text-white/80"
                  }`}
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-black/50 border border-white/20 flex items-center justify-center flex-shrink-0 text-teal-bright">
                      <GraduationCap className="w-5 h-5 text-teal-bright" />
                    </div>

                    <div className="truncate space-y-0.5">
                      <h4 className="font-heading text-sm font-bold text-white leading-tight truncate">
                        {dest.name}
                      </h4>
                      <span className="text-[10px] text-teal-bright font-medium block truncate">
                        {dest.badge}
                      </span>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                    isActive ? "bg-teal text-navy" : "bg-white/10 text-white/50"
                  }`}>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* EYE-SOOTHING DARK GLASS SPECIFICATIONS MODAL */}
      <AnimatePresence>
        {selectedModalDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pt-24 sm:pt-28 pb-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalDestination(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-40"
            />

            {/* Dark Glass Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: easeTier1 }}
              className="relative w-full max-w-3xl bg-[#081220] text-white rounded-2xl sm:rounded-[32px] border border-teal/40 shadow-2xl z-50 overflow-hidden max-h-[78vh] sm:max-h-[80vh] flex flex-col my-auto"
            >
              {/* MODAL HERO HEADER PHOTO */}
              <div className="relative w-full h-32 sm:h-44 bg-navy-deep flex-shrink-0">
                <Image
                  src={selectedModalDestination.img}
                  alt={selectedModalDestination.name}
                  fill
                  className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081220] via-[#081220]/60 to-transparent" />

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedModalDestination(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-teal hover:text-navy border border-white/20 flex items-center justify-center transition-all shadow-xl z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* HEADER CONTENT OVERLAY */}
                <div className="absolute bottom-3 left-4 right-4 space-y-1 z-10">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black bg-teal/20 text-teal-bright border border-teal/40 px-2.5 py-0.5 rounded uppercase">
                      {selectedModalDestination.name} Study Blueprint
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {selectedModalDestination.name} Study Pathway
                  </h3>
                  <p className="text-[11px] sm:text-xs text-sand-tint/90 font-medium">
                    {selectedModalDestination.tagline}
                  </p>
                </div>
              </div>

              {/* MODAL COMPACT TAB SWITCHER */}
              <div className="px-3 pt-3 bg-[#060e19] border-b border-white/10">
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/50 rounded-xl">
                  {[
                    { id: "universities", label: "Institutions", icon: Building2 },
                    { id: "visa", label: "Visa Rules", icon: Briefcase },
                    { id: "financials", label: "Financials", icon: FileCheck2 },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = modalTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setModalTab(tab.id as any)}
                        className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap cursor-pointer ${
                          isActive
                            ? "text-navy bg-teal shadow-md"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        <TabIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MODAL SCROLLABLE BODY */}
              <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 bg-[#081220]">
                
                {modalTab === "universities" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-xs sm:text-small text-sand-tint/90 leading-relaxed font-normal">
                      {selectedModalDestination.fullGuideDesc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Top Institutions List */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                        <div className="flex items-center space-x-2 text-teal-bright font-heading font-bold text-sm border-b border-white/10 pb-2">
                          <Building2 className="w-4 h-4 text-teal" />
                          <span>Top Ranked Institutions</span>
                        </div>
                        <ul className="space-y-2">
                          {selectedModalDestination.topInstitutions.map((inst, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs text-white">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Popular Majors */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                        <div className="flex items-center space-x-2 text-teal-bright font-heading font-bold text-sm border-b border-white/10 pb-2">
                          <GraduationCap className="w-4 h-4 text-teal" />
                          <span>Popular Specializations</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {selectedModalDestination.popularPrograms.map((prog, i) => (
                            <span key={i} className="text-xs font-semibold bg-teal/15 text-sand-tint border border-teal/25 px-2.5 py-1 rounded-full">
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {modalTab === "visa" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    {/* VISA METRICS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-teal/10 border border-teal/30 space-y-0.5">
                        <span className="text-[10px] font-bold text-teal-bright uppercase block">Post-Study Work</span>
                        <span className="font-heading text-xs font-extrabold text-white block">{selectedModalDestination.workVisa}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                        <span className="text-[10px] font-bold text-sand-tint/70 uppercase block">Intakes</span>
                        <span className="font-heading text-xs font-extrabold text-white block">{selectedModalDestination.intakes}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                        <span className="text-[10px] font-bold text-sand-tint/70 uppercase block">Compliance</span>
                        <span className="font-heading text-xs font-extrabold text-white block">{selectedModalDestination.visaRate}</span>
                      </div>
                    </div>

                    {/* VISA HIGHLIGHTS */}
                    <div className="p-4 rounded-xl bg-white/5 border border-teal/30 space-y-2.5">
                      <div className="flex items-center space-x-2 font-heading font-bold text-xs text-teal-bright border-b border-white/10 pb-2">
                        <ShieldCheck className="w-4 h-4 text-teal" />
                        <span>Embassy Filing & Work Rights Guidance</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedModalDestination.visaHighlights.map((vh, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-sand-tint/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                            <span>{vh}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {modalTab === "financials" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                      <div className="flex items-center space-x-2 text-teal-bright font-heading font-bold text-xs border-b border-white/10 pb-2">
                        <DollarSign className="w-4 h-4 text-teal" />
                        <span>Tuition & Financial Proof Guidance</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-sand-tint/70">Estimated Tuition Range:</span>
                          <span className="font-bold text-white">{selectedModalDestination.tuitionRange}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sand-tint/70">Required Proof of Funds:</span>
                          <span className="font-bold text-teal-bright">{selectedModalDestination.financialReq}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* MODAL FOOTER ACTION BAR (STACKED ON MOBILE, ROW ON DESKTOP) */}
              <div className="p-4 bg-[#050c18] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
                <span className="text-[11px] text-sand-tint/70 font-medium text-center sm:text-left hidden sm:block">
                  Direct university guidance for {selectedModalDestination.name}
                </span>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                  <Link
                    href="/our-story/"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-teal to-teal-bright text-navy px-6 py-3 rounded-full font-black text-xs hover:scale-105 transition shadow-lg tracking-wider"
                  >
                    <span>APPLY FOR {selectedModalDestination.name.toUpperCase()} PATHWAY</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </Link>

                  <button
                    onClick={() => setSelectedModalDestination(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/20 text-white/80 hover:text-white text-xs font-bold transition text-center cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
