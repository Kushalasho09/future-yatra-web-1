"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */
/*
const verticals = [
  {
    id: "university-yatra",
    name: "University Yatra™",
    tagline: "International Higher Education",
    desc: "International university admissions, study abroad consulting and higher education guidance in India and overseas.",
    icon: GraduationCap,
    badge: "Admissions & Mobility",
    accentBorder: "border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    gradientBar: "from-blue-600 to-indigo-600",
    href: "/coming-soon?brand=university-yatra",
  },
  {
    id: "academic-yatra",
    name: "Academic Yatra™",
    tagline: "Languages & Test Preparation",
    desc: "Language training, English proficiency test preparation and international entrance exam coaching.",
    icon: BookOpen,
    badge: "Test Prep & Coaching",
    accentBorder: "border-emerald-200 hover:border-emerald-400",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gradientBar: "from-teal to-emerald-600",
    href: "/coming-soon?brand=academic-yatra",
  },
  {
    id: "medico-yatra",
    name: "Medico Yatra™",
    tagline: "Healthcare & MBBS Pathways",
    desc: "International medical education consulting, including MBBS, nursing, pharmacy and allied healthcare programmes.",
    icon: Stethoscope,
    badge: "Medical Education",
    accentBorder: "border-rose-200 hover:border-rose-400",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    gradientBar: "from-rose-500 to-pink-600",
    href: "/medico-yatra",
  },
  {
    id: "applyvisa-yatra",
    name: "ApplyVisa Yatra™",
    tagline: "Visa & Immigration Consulting",
    desc: "Visa consulting, immigration guidance and application support for individuals, students and families.",
    icon: FileCheck2,
    badge: "Visa & Legal Advisory",
    accentBorder: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    gradientBar: "from-amber-500 to-orange-600",
    href: "/coming-soon?brand=applyvisa-yatra",
  },
];
*/
/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */

/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */
const verticals = [
  {
    id: "university-yatra",
    name: "University Yatra™",
    tagline: "International Higher Education",
    desc: "International university admissions, study abroad consulting and higher education guidance in India and overseas.",
    icon: GraduationCap,
    badge: "Admissions & Mobility",
    accentBorder: "border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    solidBar: "bg-[#122447]",
    href: "/coming-soon?brand=university-yatra",
  },
  {
    id: "academic-yatra",
    name: "Academic Yatra™",
    tagline: "Languages & Test Preparation",
    desc: "Language training, English proficiency test preparation and international entrance exam coaching.",
    icon: BookOpen,
    badge: "Test Prep & Coaching",
    accentBorder: "border-emerald-200 hover:border-emerald-400",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    solidBar: "bg-[#0D9488]",
    href: "/coming-soon?brand=academic-yatra",
  },
  {
    id: "medico-yatra",
    name: "Medico Yatra™",
    tagline: "Healthcare & MBBS Pathways",
    desc: "International medical education consulting, including MBBS, nursing, pharmacy and allied healthcare programmes.",
    icon: Stethoscope,
    badge: "Medical Education",
    accentBorder: "border-rose-200 hover:border-rose-400",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    solidBar: "bg-[#E11D48]",
    href: "/medico-yatra",
  },
  {
    id: "applyvisa-yatra",
    name: "ApplyVisa Yatra™",
    tagline: "Visa & Immigration Consulting",
    desc: "Visa consulting, immigration guidance and application support for individuals, students and families.",
    icon: FileCheck2,
    badge: "Visa & Legal Advisory",
    accentBorder: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    solidBar: "bg-[#D97706]",
    href: "/coming-soon?brand=applyvisa-yatra",
  },
];
/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */

export default function WhatWeAreSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/30 to-white relative overflow-hidden">
      {/* Decorative ambient glow orbs */}
      <div className="w-96 h-96 rounded-full bg-teal/10 blur-[130px] absolute -top-20 -left-20 pointer-events-none" />
      <div className="w-96 h-96 rounded-full bg-navy-glow/10 blur-[130px] absolute -bottom-20 -right-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
            <Layers className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">Our Business</span>
          </div>

          {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
          {/*
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            Integrated Mobility Ecosystem
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Four Verticals.{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
              One Integrated Organisation.
            </span>
          </h2>
          */}
          {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            Integrated Mobility Ecosystem
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Four Verticals.{" "}
            <span className="text-[#0D9488]">
              One Integrated Organisation.
            </span>
          </h2>
          {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}

          <p className="text-muted text-small sm:text-body leading-relaxed max-w-2xl mx-auto font-normal pt-1">
            Future Yatra operates through four specialised business verticals, each addressing a distinct area of education, professional development and international mobility. Together, they form an ecosystem of services designed to support students, professionals and families at different stages of their journeys.
          </p>

          {/* ==================== OLD GRADIENT UNDERLINE STARTS HERE ==================== */}
          {/*
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-teal to-teal-bright" />
          */}
          {/* ==================== OLD GRADIENT UNDERLINE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING UNDERLINE STARTS HERE ==================== */}
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#0D9488]" />
          {/* ==================== NEW SOLID COUNSELLING UNDERLINE ENDS HERE ==================== */}
        </div>

        {/* 4 Verticals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {verticals.map((v, idx) => {
            const Icon = v.icon;
            return (
              <Link
                key={v.id}
                href={v.href}
                className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-line shadow-sm hover:shadow-2xl hover:border-teal/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Top Bar */}
                {/* ==================== OLD GRADIENT BAR STARTS HERE ==================== */}
                {/*
                <div
                  className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${v.gradientBar} group-hover:w-24 transition-all duration-300 mb-6`}
                />
                */}
                {/* ==================== OLD GRADIENT BAR ENDS HERE ==================== */}

                {/* ==================== NEW SOLID BAR STARTS HERE ==================== */}
                <div
                  className={`h-1.5 w-12 rounded-full ${v.solidBar} group-hover:w-24 transition-all duration-300 mb-6`}
                />
                {/* ==================== NEW SOLID BAR ENDS HERE ==================== */}

                <div className="space-y-4">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl border ${v.iconBg} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${v.badgeBg}`}
                    >
                      {v.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy group-hover:text-teal transition-colors duration-200">
                      {v.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-dark mt-0.5">
                      {v.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-muted leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>

                {/* Bottom Link indicator */}
                <div className="pt-6 mt-4 border-t border-line/50 flex items-center justify-between text-xs font-bold text-navy group-hover:text-teal transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Explore Brands CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/our-brands" className="inline-block">
            <HoverBorderGradient
              as="div"
              containerClassName="rounded-full"
              innerBgClassName="bg-navy"
              className="bg-navy hover:bg-navy-glow text-white font-bold text-body px-8 py-4 rounded-full inline-flex items-center space-x-3 shadow-md group border border-teal/30"
            >
              <span className="text-white font-bold tracking-wide">Explore Our Brands</span>
              <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1.5 transition-transform duration-150" />
            </HoverBorderGradient>
          </Link>
        </div>

      </div>
    </section>
  );
}

