"use client";

import React from "react";
import {
  Layers,
  GraduationCap,
  Network,
  Cpu,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Award,
  FileCheck2,
  UserCheck,
  Compass,
} from "lucide-react";

/* ==================================================================== */
/* OLD CODE (PREVIOUS 4 ITEMS & HEADER) STARTS HERE                     */
/* ==================================================================== */
/*
const oldItems = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "No False Promises",
    description: "We don't promise admissions, visas or scholarships that are decided by universities or authorities.",
    gradient: "from-blue-600 via-indigo-600 to-teal",
  },
  {
    num: "02",
    icon: FileCheck2,
    title: "Clear Information",
    description: "We explain requirements, costs, timelines and challenges before you make a decision.",
    gradient: "from-teal via-teal-bright to-navy-glow",
  },
  {
    num: "03",
    icon: UserCheck,
    title: "Direct Support",
    description: "You get guidance from people responsible for your application and decisions.",
    gradient: "from-indigo-600 via-teal to-blue-500",
  },
  {
    num: "04",
    icon: Compass,
    title: "Long-Term Thinking",
    description: "We consider where your education choice can take you, not just getting you through one application.",
    gradient: "from-teal via-navy-glow to-navy",
  },
];
*/
/* ==================================================================== */
/* OLD CODE ENDS HERE                                                   */
/* ==================================================================== */

/* ==================================================================== */
/* NEW CODE (UPDATED 6 DIFFERENTIATORS AS PER DOC) STARTS HERE          */
/* ==================================================================== */
/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */
/*
const differentiators = [
  {
    num: "01",
    icon: Layers,
    title: "Specialised Industry Focus",
    description:
      "Dedicated expertise across international education, test preparation, healthcare education and immigration services.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "Education-Led Decisions",
    description:
      "Academic suitability and institutional quality take priority over destination popularity or commercial incentives.",
    gradient: "from-teal to-emerald-600",
  },
  {
    num: "03",
    icon: Network,
    title: "Connected Business Ecosystem",
    description:
      "Our brands operate within a shared organisational framework, creating opportunities for coordinated services and business development.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    num: "04",
    icon: Cpu,
    title: "Technology-Enabled Infrastructure",
    description:
      "Digital learning platforms, student dashboards, performance tracking and online service delivery support our operations.",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    num: "05",
    icon: Globe2,
    title: "Multi-Market Presence",
    description:
      "An established operational focus across India, the Middle East, Canada and Europe.",
    gradient: "from-emerald-500 to-teal",
  },
  {
    num: "06",
    icon: HeartHandshake,
    title: "Partnership-Oriented Growth",
    description:
      "We value sustainable institutional and business relationships built around shared objectives and long-term collaboration.",
    gradient: "from-amber-500 to-orange-600",
  },
];
*/
/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */

/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */
const differentiators = [
  {
    num: "01",
    icon: Layers,
    title: "Specialised Industry Focus",
    description:
      "Dedicated expertise across international education, test preparation, healthcare education and immigration services.",
    solidAccent: "bg-[#122447]",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "Education-Led Decisions",
    description:
      "Academic suitability and institutional quality take priority over destination popularity or commercial incentives.",
    solidAccent: "bg-[#0D9488]",
  },
  {
    num: "03",
    icon: Network,
    title: "Connected Business Ecosystem",
    description:
      "Our brands operate within a shared organisational framework, creating opportunities for coordinated services and business development.",
    solidAccent: "bg-[#0284C7]",
  },
  {
    num: "04",
    icon: Cpu,
    title: "Technology-Enabled Infrastructure",
    description:
      "Digital learning platforms, student dashboards, performance tracking and online service delivery support our operations.",
    solidAccent: "bg-[#4338CA]",
  },
  {
    num: "05",
    icon: Globe2,
    title: "Multi-Market Presence",
    description:
      "An established operational focus across India, the Middle East, Canada and Europe.",
    solidAccent: "bg-emerald-600",
  },
  {
    num: "06",
    icon: HeartHandshake,
    title: "Partnership-Oriented Growth",
    description:
      "We value sustainable institutional and business relationships built around shared objectives and long-term collaboration.",
    solidAccent: "bg-[#D97706]",
  },
];
/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */
/* ==================================================================== */
/* NEW CODE ENDS HERE                                                   */
/* ==================================================================== */

export default function WhatSetsUsApartSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/30 to-white relative overflow-hidden">
      {/* Decorative Ambient Radial Glow Orbs */}
      <div className="w-96 h-96 rounded-full bg-teal/10 blur-[130px] absolute -top-20 -left-20 pointer-events-none" />
      <div className="w-96 h-96 rounded-full bg-navy-glow/10 blur-[130px] absolute -bottom-20 -right-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">Why Work With Us</span>
          </div>

          {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
          {/*
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            Why Future Yatra
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            A Business Built on{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
              Expertise, Structure and Values.
            </span>
          </h2>
          */}
          {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            Why Future Yatra
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            A Business Built on{" "}
            <span className="text-[#0D9488]">
              Expertise, Structure and Values.
            </span>
          </h2>
          {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}

          <p className="text-muted text-small sm:text-body max-w-2xl mx-auto leading-relaxed font-normal pt-1">
            Future Yatra brings together industry-specific knowledge, dedicated operational capabilities and a shared business framework. Our focus is on delivering services with clear objectives, developing expertise within each area of operation and building partnerships that contribute to sustainable business growth.
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

        {/* Subhead */}
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
            What Sets Us Apart
          </h3>
          <p className="text-xs sm:text-small text-muted mt-1">
            Six organizational differentiators that define our standard of excellence.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-2xl hover:border-teal/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Top Bar (w-12 expanding to w-24 on hover, safely away from top-right number) */}
                {/* ==================== OLD GRADIENT BAR STARTS HERE ==================== */}
                {/*
                <div
                  className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.gradient} group-hover:w-24 transition-all duration-300 mb-6`}
                />
                */}
                {/* ==================== OLD GRADIENT BAR ENDS HERE ==================== */}

                {/* ==================== NEW SOLID COUNSELLING BAR STARTS HERE ==================== */}
                <div
                  className={`h-1.5 w-12 rounded-full ${item.solidAccent} group-hover:w-24 transition-all duration-300 mb-6`}
                />
                {/* ==================== NEW SOLID COUNSELLING BAR ENDS HERE ==================== */}

                {/* Top Right Decorative Step Number */}
                <span className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-navy/10 group-hover:text-teal/25 transition-colors duration-300 font-heading select-none pointer-events-none">
                  {item.num}
                </span>

                <div className="space-y-4 relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-navy group-hover:text-teal transition-colors duration-200">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-line/50 flex items-center space-x-2 text-xs font-semibold text-teal-dark">
                  <Award className="w-4 h-4 text-teal" />
                  <span>Future Yatra Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
