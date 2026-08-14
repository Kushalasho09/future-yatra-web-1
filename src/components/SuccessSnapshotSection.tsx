"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface ImpactCardData {
  id: string;
  category: string;
  title: string;
  brandName: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge1Stat: string;
  badge1Label: string;
  badge2Stat: string;
  badge2Label: string;
  floatingTag: string;
  linkHref: string;
}

const impactCards: ImpactCardData[] = [
  {
    id: "students",
    category: "STUDENTS & ADMISSIONS",
    brandName: "University Yatra",
    title: "Global Campus Admissions",
    description:
      "Comprehensive admissions guidance, university shortlisting, and scholarship preparation for top global destinations.",
    imageSrc: "/images/person_university.png",
    imageAlt: "University Yatra Student Advisor",
    badge1Stat: "98%",
    badge1Label: "Accuracy Index",
    badge2Stat: "Top 100",
    badge2Label: "Global Unis",
    floatingTag: "Growing Future Leaders",
    linkHref: "/coming-soon?brand=university-yatra",
  },
  {
    id: "testprep",
    category: "TEST PREP & LANGUAGES",
    brandName: "Academic Yatra",
    title: "IELTS, PTE & Language Coaching",
    description:
      "Structured coaching for IELTS, PTE, TOEFL & GRE with personalised study plans to reach target score requirements.",
    imageSrc: "/images/person_academic.png",
    imageAlt: "Academic Yatra Test Prep Mentor",
    badge1Stat: "8.0+",
    badge1Label: "IELTS Band Target",
    badge2Stat: "95%",
    badge2Label: "Success Score",
    floatingTag: "Reigniting Passion",
    linkHref: "/coming-soon?brand=academic-yatra",
  },
  {
    id: "medico",
    category: "MBBS & HEALTHCARE",
    brandName: "Medico Yatra",
    title: "Transparent MBBS Pathways",
    description:
      "Honest counselling for MBBS abroad with clear, transparent FMGE and NExT screening exam pathways back into India.",
    imageSrc: "/images/person_medico.png",
    imageAlt: "Medico Yatra MBBS Consultant",
    badge1Stat: "100%",
    badge1Label: "FMGE Track",
    badge2Stat: "Direct",
    badge2Label: "Faculty Links",
    floatingTag: "Healthcare Excellence",
    linkHref: "/medico-yatra",
  },
  {
    id: "visas",
    category: "VISAS & DOCUMENTATION",
    brandName: "ApplyVisa Yatra",
    title: "Visa & Residency Support",
    description:
      "Accurate application documentation and filing support for visitor, family, spouse, and permanent residency visas.",
    imageSrc: "/images/person_visa.png",
    imageAlt: "ApplyVisa Yatra Visa Specialist",
    badge1Stat: "100%",
    badge1Label: "Embassy Compliant",
    badge2Stat: "Zero",
    badge2Label: "Hidden Fees",
    floatingTag: "Bridging Pathways",
    linkHref: "/coming-soon?brand=applyvisa-yatra",
  },
];

export default function SuccessSnapshotSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sand-tint/20 to-white">
      
      {/* Background Glow Ambient Orbs */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-2">
          {/* Cursive Handwriting Calligraphy Subtitle */}
          <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
            Stories of Impact
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            From Inspiration to Measurable Success
          </h2>

          <p className="text-xs sm:text-body text-muted leading-relaxed font-normal max-w-xl mx-auto pt-1">
            Quantifiable results across study abroad admissions, test preparation, medical pathways, and visa consulting.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 4 CLEAN UNOBSTRUCTED PORTRAIT CARDS GRID                              */}
        {/* ==================================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {impactCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group relative glass-card-light rounded-[32px] p-4 sm:p-5 border border-line/80 bg-white/95 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              
              {/* TOP IMAGE STAGE CONTAINER - 100% UNOBSTRUCTED PORTRAIT (NO OVERLAPPING BOXES ON FACE) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[260px] sm:h-[300px] bg-navy-deep border border-line/40">
                
                {/* Person Portrait Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 280px, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle Gradient Overlay at bottom for clean image separation */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent pointer-events-none" />

                {/* FLOATING CATEGORY BADGE (BOTTOM OVERLAY - AWAY FROM FACE) */}
                <div className="absolute bottom-3 left-3 bg-navy-deep/90 backdrop-blur-md border border-teal/40 rounded-full px-3 py-1 z-20 shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-bright animate-pulse flex-shrink-0" />
                  <span className="text-[10px] font-bold text-white tracking-wide">
                    {card.floatingTag}
                  </span>
                </div>

              </div>

              {/* STAT BAR ROW (PLACED CLEANLY BELOW IMAGE FRAME - ZERO FACE OVERLAP) */}
              <div className="my-3 bg-gradient-to-r from-teal-tint/80 via-white to-teal-tint/80 border border-teal/25 rounded-2xl p-2.5 flex items-center justify-around text-center shadow-xs">
                
                {/* Stat 1 */}
                <div className="space-y-0.5">
                  <span className="font-heading text-sm sm:text-base font-extrabold text-navy block leading-none">
                    {card.badge1Stat}
                  </span>
                  <span className="text-[10px] text-muted font-medium block leading-none">
                    {card.badge1Label}
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="h-6 w-px bg-teal/30" />

                {/* Stat 2 */}
                <div className="space-y-0.5">
                  <span className="font-heading text-sm sm:text-base font-extrabold text-navy block leading-none">
                    {card.badge2Stat}
                  </span>
                  <span className="text-[10px] text-muted font-medium block leading-none">
                    {card.badge2Label}
                  </span>
                </div>

              </div>

              {/* BOTTOM CARD CONTENT & ACTION BUTTON */}
              <div className="space-y-3.5 flex-1 flex flex-col justify-between pt-1">
                
                <div className="space-y-1.5">
                  {/* Category Tag */}
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-[11px] font-extrabold text-teal uppercase tracking-wider">
                      {card.category}
                    </span>
                  </div>

                  {/* Brand & Main Title */}
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-muted block">
                      {card.brandName}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-navy group-hover:text-teal transition-colors duration-200 leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-small text-muted leading-relaxed font-normal pt-1">
                    {card.description}
                  </p>
                </div>

                {/* Luxury Action Button */}
                <div className="pt-2">
                  <Link
                    href={card.linkHref}
                    className="inline-flex items-center justify-between w-full bg-navy text-white group-hover:bg-teal group-hover:text-navy px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs transition-all duration-300 shadow-md"
                  >
                    <span>EXPLORE PATHWAY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
