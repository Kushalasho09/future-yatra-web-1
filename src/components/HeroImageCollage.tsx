"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Card3DTilt from "@/components/Card3DTilt";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function HeroImageCollage() {
  const slides = [
    {
      id: "university",
      badge: "University Yatra — Admissions",
      subtext: "Campus Admissions & Scholarships",
      main: { src: "/images/hero_student_journey.png", alt: "Student Walking on Oxford Campus" },
      topLeft: { src: "/images/university_top.png", alt: "Historic University Library" },
      bottomLeft: { src: "/images/university_bottom.png", alt: "Happy Graduate Student" },
    },
    {
      id: "academic",
      badge: "Academic Yatra — Test Prep",
      subtext: "IELTS, PTE, TOEFL & GRE Coaching",
      main: { src: "/images/hero_test_prep.png", alt: "Student at IELTS Study Desk" },
      topLeft: { src: "/images/hero_campus_life.png", alt: "Global Student Group" },
      bottomLeft: { src: "/images/university_top.png", alt: "Study Environment" },
    },
    {
      id: "medico",
      badge: "Medico Yatra — MBBS Abroad",
      subtext: "Transparent FMGE & NExT Pathways",
      main: { src: "/images/hero_medical_student.png", alt: "Medical Student in Hospital Ward" },
      topLeft: { src: "/images/medico_top.png", alt: "Stethoscope & Medical Textbook" },
      bottomLeft: { src: "/images/medico_bottom.png", alt: "Medical Research Microscope Lab" },
    },
    {
      id: "visa",
      badge: "ApplyVisa Yatra — Visa Support",
      subtext: "Visitor, Spouse, Family & PR Visas",
      main: { src: "/images/hero_visa_passport.png", alt: "Approved Visa & Passport" },
      topLeft: { src: "/images/visa_top.png", alt: "Airplane Sunset Wing View" },
      bottomLeft: { src: "/images/visa_bottom.png", alt: "Approved Passport Handed at Airport" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 2.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const active = slides[currentIndex];

  return (
    <Card3DTilt maxTilt={6}>
      <div
        className="relative mx-auto max-w-md lg:max-w-none select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Hidden Preloader for all 12 unique images to guarantee instant cached loads on initial page visit */}
        <div className="hidden" aria-hidden="true">
          {slides.map((s, idx) => (
            <React.Fragment key={idx}>
              <Image src={s.main.src} alt="" width={600} height={600} priority />
              <Image src={s.topLeft.src} alt="" width={200} height={200} priority />
              <Image src={s.bottomLeft.src} alt="" width={200} height={200} priority />
            </React.Fragment>
          ))}
        </div>

        {/* Flight path decorative dashed SVG */}
        <svg
          className="absolute -top-10 -right-10 w-48 h-48 text-teal/30 pointer-events-none hidden sm:block z-0"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M20 180 C 80 120, 120 80, 180 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        {/* MAIN VISUAL IMAGE CARD WITH SMOOTH TRANSITION */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden border border-line shadow-xl sm:shadow-2xl bg-white group h-[300px] sm:h-[480px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={active.main.src}
                alt={active.main.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Soft Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-black/20" />

              {/* Top Right Live Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-navy shadow-md border border-line flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-teal-bright animate-ping" />
                <span>{active.badge}</span>
              </div>

              {/* Bottom Info Bar & Manual Slide Dots */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <div>
                  <p className="text-xs sm:text-small font-semibold text-sand-tint drop-shadow-sm">
                    {active.subtext}
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Switch to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-teal-bright" : "w-2 bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FLOATING TOP-LEFT SECONDARY CARD (COMPLETELY UNIQUE IMAGE PER SLIDE) */}
        <div className="absolute -top-6 -left-6 w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-white shadow-xl hidden sm:block z-20 bg-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.topLeft.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-28"
            >
              <Image
                src={active.topLeft.src}
                alt={active.topLeft.alt}
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FLOATING BOTTOM-LEFT SECONDARY CARD (COMPLETELY UNIQUE IMAGE PER SLIDE) */}
        <div className="absolute -bottom-6 -left-6 w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-white shadow-xl hidden sm:block z-20 bg-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.bottomLeft.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-28"
            >
              <Image
                src={active.bottomLeft.src}
                alt={active.bottomLeft.alt}
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </Card3DTilt>
  );
}
