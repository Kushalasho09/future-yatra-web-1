"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap, BookOpen, Stethoscope, FileCheck2 } from "lucide-react";

export default function TopStudyDestinations() {
  const brands = [
    {
      id: "university",
      name: "UNIVERSITY YATRA",
      tagline: "STUDY ABROAD ADMISSIONS & SCHOLARSHIPS",
      subtitle: "DIRECT UNIVERSITY APPLICATIONS & SCHOLARSHIP COUNSELLING",
      description: "Direct university applications, official scholarship guidance, and end-to-end admission counselling across top UK, USA, Canada & European universities.",
      image: "/images/hero_student_journey.png",
      personImage: "/images/person_university.png",
      icon: GraduationCap,
      badge: "Study Abroad Admissions",
      flags: "🇬🇧 🇺🇸 🇨🇦 🇦🇺",
      link: "/brands/brand-1",
    },
    {
      id: "academic",
      name: "ACADEMIC YATRA",
      tagline: "IELTS, PTE, TOEFL & GRE COACHING",
      subtitle: "RESULT-DRIVEN TEST PREP & BAND SCORE IMPROVEMENT",
      description: "Comprehensive test prep coaching with unlimited mock practice exams, certified expert faculty, and score improvement strategies.",
      image: "/images/hero_test_prep.png",
      personImage: "/images/person_academic.png",
      icon: BookOpen,
      badge: "Language & Test Prep",
      flags: "🇬🇧 🇺🇸 🇨🇦 🇦🇺",
      link: "/brands/brand-2",
    },
    {
      id: "medico",
      name: "MEDICO YATRA",
      tagline: "MBBS ABROAD & HEALTHCARE PATHWAYS",
      subtitle: "NMC APPROVED UNIVERSITIES & TRANSPARENT FEE GUARANTEE",
      description: "NMC-compliant medical university admissions, FMG/NEXT support, and 100% transparent tuition fee structures with on-ground teams.",
      image: "/images/hero_medical_student.png",
      personImage: "/images/person_medico.png",
      icon: Stethoscope,
      badge: "Medical Study Abroad",
      flags: "🇬🇧 🇺🇸 🇪🇺",
      link: "/brands/brand-3",
    },
    {
      id: "visa",
      name: "APPLYVISA YATRA",
      tagline: "VISITOR, SPOUSE, FAMILY & PR VISAS",
      subtitle: "EXPERT EMBASSY FILING & HIGHEST APPROVAL RATE",
      description: "Expert visa documentation, embassy interview preparation, financial proof verification, and end-to-end immigration support.",
      image: "/images/hero_visa_passport.png",
      personImage: "/images/person_visa.png",
      icon: FileCheck2,
      badge: "Visa Consulting",
      flags: "🇬🇧 🇺🇸 🇨🇦 🇪🇺",
      link: "/brands/brand-4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, brands.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % brands.length);
  };

  const active = brands[currentIndex];
  const IconComp = active.icon;

  return (
    <section className="py-10 sm:py-20 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/30 to-white">
      
      {/* SECTION HEADER OUTSIDE CARD */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-1.5 sm:space-y-2 px-4">
        <span className="font-tempting text-teal text-xl sm:text-3xl font-normal block">
          Four Specialist Verticals
        </span>

        <h2 className="font-heading text-2xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Our Brands
        </h2>

        <p className="text-muted text-xs sm:text-body max-w-xl mx-auto font-normal">
          Four specialist teams working together under one accountable parent company.
        </p>
      </div>

      {/* FEATURED BANNER CONTAINER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-line/80 shadow-2xl bg-[#091526] select-none group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Scene Photography Image */}
          <div className="relative w-full h-full">
            <Image
              src={active.image}
              alt={active.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.30] blur-[1px] group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Dark Ambient Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#091526]/95 via-[#091526]/85 to-[#091526]/40 z-0" />

            {/* RIGHT PERSON OVERLAY FOR DESKTOP */}
            <div 
              className="absolute right-0 bottom-0 h-full w-[45%] max-w-[480px] pointer-events-none z-10 hidden md:block"
              style={{
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                WebkitMaskComposite: "source-in",
                maskImage: "linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              }}
            >
              <Image
                src={active.personImage}
                alt={active.name}
                fill
                priority
                sizes="480px"
                className="object-cover object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* TOP LEFT BRAND LOGO OVERLAY (DESKTOP) */}
            <div className="absolute top-6 left-8 sm:left-12 z-20 flex items-center space-x-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal flex items-center justify-center text-teal-bright shadow-md">
                <IconComp className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-black text-white text-base leading-none tracking-tight">
                  {active.name}
                </p>
                <p className="text-[11px] text-teal-bright font-bold mt-0.5">
                  {active.badge}
                </p>
              </div>
            </div>

            {/* TOP CENTER HANGING GLASS PILL BADGE */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-b-xl sm:rounded-b-2xl border-x border-b border-white/20 shadow-md flex items-center space-x-1.5 sm:space-x-2.5 text-white font-heading text-[10px] sm:text-xs font-bold max-w-[90%] whitespace-nowrap">
              <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-bright flex-shrink-0" />
              <span className="truncate">{active.badge}</span>
              <span className="text-xs sm:text-sm ml-0.5">{active.flags}</span>
            </div>

            {/* CONTENT AREA */}
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-5 sm:px-14 md:pl-24 md:pr-[46%] py-10 z-20 space-y-3 sm:space-y-4">
              
              {/* Tagline Subtitle */}
              <p className="font-heading font-extrabold text-teal-bright text-[10px] sm:text-xs md:text-sm tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-full">
                {active.tagline}
              </p>

              {/* MAIN BRAND HEADER */}
              <h3 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-tight sm:leading-none">
                {active.name}
              </h3>

              {/* Subtext */}
              <p className="text-white font-extrabold text-[11px] sm:text-xs md:text-small tracking-wider uppercase max-w-sm sm:max-w-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-snug">
                {active.subtitle}
              </p>

              {/* Description Paragraph (Visible on sm & up) */}
              <p className="text-white text-xs sm:text-small max-w-lg leading-relaxed font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] hidden sm:block">
                {active.description}
              </p>

              {/* EXPLORE BRAND CTA BUTTON */}
              <div className="pt-2 sm:pt-4">
                <Link
                  href={active.link}
                  className="inline-flex items-center space-x-2.5 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-teal text-navy font-heading font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(45,189,182,0.6)] hover:bg-teal-bright hover:shadow-[0_0_35px_rgba(45,189,182,0.9)] hover:scale-105 transition-all duration-300 border-2 border-white/50 group/btn"
                >
                  <span className="text-navy font-black tracking-wider">
                    EXPLORE BRAND
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-navy group-hover/btn:translate-x-1 transition-transform stroke-[3]" />
                </Link>
              </div>

            </div>

            {/* MOBILE-ONLY PREV/NEXT <> BUTTONS POSITIONED AT BOTTOM CENTER */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex sm:hidden items-center justify-center space-x-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-2xl">
              <button
                onClick={handlePrev}
                aria-label="Previous Brand"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white active:bg-teal active:text-navy flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <span className="text-xs font-extrabold text-teal-bright tracking-widest min-w-[50px] text-center">
                0{currentIndex + 1} / 0{brands.length}
              </span>

              <button
                onClick={handleNext}
                aria-label="Next Brand"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white active:bg-teal active:text-navy flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* DESKTOP NAVIGATION ARROWS (HIDDEN ON MOBILE, PERFECT ON DESKTOP!) */}
            <button
              onClick={handlePrev}
              aria-label="Previous Brand"
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-teal hover:text-navy hover:scale-110 transition-all duration-200 hidden sm:flex items-center justify-center shadow-xl z-30"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Brand"
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-teal hover:text-navy hover:scale-110 transition-all duration-200 hidden sm:flex items-center justify-center shadow-xl z-30"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* BOTTOM NAVIGATION PILL TRACK (VISIBLE ON TABLET & DESKTOP ONLY, HIDDEN ON MOBILE!) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-auto hidden sm:block">
              <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25 flex items-center space-x-3 shadow-2xl">
                {brands.map((b, idx) => {
                  const BIcon = b.icon;
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-1.5 whitespace-nowrap ${
                        isActive
                          ? "bg-teal text-navy shadow-md scale-105"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <BIcon className={`w-3.5 h-3.5 ${isActive ? "text-navy" : "text-teal-bright"}`} />
                      <span>{b.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
