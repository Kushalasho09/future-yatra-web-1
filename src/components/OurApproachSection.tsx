"use client";

import React from "react";
import {
  Layers,
  GraduationCap,
  Cpu,
  Globe2,
  HeartHandshake,
  Compass,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */
/*
const pillars = [
  {
    num: "01",
    title: "Dedicated Business Verticals",
    desc: "Four independent brands with their own market positioning and business objectives, operating across education consulting, test preparation, healthcare education and visa services.",
    icon: Layers,
    accent: "from-teal to-teal-bright",
  },
  {
    num: "02",
    title: "Education Before Destination",
    desc: "We prioritise the academic value, institutional suitability and career relevance of an education opportunity over the commercial preference.",
    icon: GraduationCap,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    num: "03",
    title: "Digital Infrastructure",
    desc: "Online learning platforms, student dashboards, performance monitoring systems and digital service delivery across relevant operations.",
    icon: Cpu,
    accent: "from-sky-500 to-teal",
  },
  {
    num: "04",
    title: "Multi-Market Operations",
    desc: "An online-first operating model serving clients across India, South Asia, the Middle East and western markets.",
    icon: Globe2,
    accent: "from-indigo-600 to-navy-glow",
  },
  {
    num: "05",
    title: "Long-Term Business Relationships",
    desc: "We aim to develop sustainable working relationships with institutions, agencies and service partners rather than focusing solely on individual transactions.",
    icon: HeartHandshake,
    accent: "from-emerald-500 to-teal",
  },
];
*/
/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */

/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */
const pillars = [
  {
    num: "01",
    title: "Dedicated Business Verticals",
    desc: "Four independent brands with their own market positioning and business objectives, operating across education consulting, test preparation, healthcare education and visa services.",
    icon: Layers,
    solidAccent: "bg-[#0D9488]",
  },
  {
    num: "02",
    title: "Education Before Destination",
    desc: "We prioritise the academic value, institutional suitability and career relevance of an education opportunity over the commercial preference.",
    icon: GraduationCap,
    solidAccent: "bg-blue-600",
  },
  {
    num: "03",
    title: "Digital Infrastructure",
    desc: "Online learning platforms, student dashboards, performance monitoring systems and digital service delivery across relevant operations.",
    icon: Cpu,
    solidAccent: "bg-[#0284C7]",
  },
  {
    num: "04",
    title: "Multi-Market Operations",
    desc: "An online-first operating model serving clients across India, South Asia, the Middle East and western markets.",
    icon: Globe2,
    solidAccent: "bg-[#122447]",
  },
  {
    num: "05",
    title: "Long-Term Business Relationships",
    desc: "We aim to develop sustainable working relationships with institutions, agencies and service partners rather than focusing solely on individual transactions.",
    icon: HeartHandshake,
    solidAccent: "bg-emerald-600",
  },
];
/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */

export default function OurApproachSection() {
  return (
    <section className="py-16 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/20 to-white relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="w-96 h-96 rounded-full bg-teal/10 blur-[130px] absolute top-10 right-10 pointer-events-none" />
      <div className="w-96 h-96 rounded-full bg-navy-glow/10 blur-[140px] absolute bottom-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
            <Compass className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">How We Think & Operate</span>
          </div>

          {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
          {/*
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            Business Philosophy
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Built Around Operational{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
              Specialisation and Integrity.
            </span>
          </h2>
          */}
          {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            Business Philosophy
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Built Around Operational{" "}
            <span className="text-[#0D9488]">
              Specialisation and Integrity.
            </span>
          </h2>
          {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}

          <p className="text-muted text-small sm:text-body leading-relaxed max-w-2xl mx-auto font-normal pt-1">
            Our approach is centred on understanding the needs of our clients before making business decisions. In practice, this means placing academic suitability and institutional quality ahead of commercial incentives. We believe recommendations should reflect individual profiles, objectives and long-term value rather than short-term business interests.
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

        {/* Model Subtitle Banner */}
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
            How Our Model Works
          </h3>
          <p className="text-xs sm:text-small text-muted mt-1">
            Five core principles governing every brand and operational decision under Future Yatra.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === pillars.length - 1;
            return (
              <div
                key={item.num}
                className={`group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-line shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Accent top bar (w-12 expanding to w-24 on hover, safely away from top-right number) */}
                {/* ==================== OLD GRADIENT BAR STARTS HERE ==================== */}
                {/*
                <div
                  className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.accent} group-hover:w-24 transition-all duration-300 mb-6`}
                />
                */}
                {/* ==================== OLD GRADIENT BAR ENDS HERE ==================== */}

                {/* ==================== NEW SOLID COUNSELLING BAR STARTS HERE ==================== */}
                <div
                  className={`h-1.5 w-12 rounded-full ${item.solidAccent} group-hover:w-24 transition-all duration-300 mb-6`}
                />
                {/* ==================== NEW SOLID COUNSELLING BAR ENDS HERE ==================== */}

                {/* Big Number in background */}
                <span className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-navy/10 group-hover:text-teal/25 transition-colors duration-300 font-heading select-none pointer-events-none">
                  {item.num}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-lg sm:text-xl font-bold text-navy group-hover:text-teal transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-line/50 flex items-center space-x-2 text-xs font-semibold text-teal-dark">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>Standard Operational Model</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

