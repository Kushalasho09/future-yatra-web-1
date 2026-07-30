"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Compass,
  ArrowRightCircle,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export interface StepItem {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const steps: StepItem[] = [
  {
    id: "01",
    stepNumber: "01",
    badge: "Step 01",
    title: "Free Conversation",
    subtitle: "Start with an honest, no-obligation discussion.",
    description:
      "Tell us your study abroad or visa goals — we'll give you clear, straightforward guidance on whether we're the right fit before anything else happens.",
    icon: MessageSquare,
  },
  {
    id: "02",
    stepNumber: "02",
    badge: "Step 02",
    title: "Personalised Roadmap",
    subtitle: "Get a clear, tailored execution plan.",
    description:
      "Based on your profile, budget, and timeline, receive a customized roadmap across the relevant Future Yatra brand — admissions, test prep, MBBS, or visa.",
    icon: Compass,
  },
  {
    id: "03",
    stepNumber: "03",
    badge: "Step 03",
    title: "Direct Support",
    subtitle: "Move forward with dedicated experts.",
    description:
      "Full application, documentation, test preparation, and visa filing support at every single milestone of your journey.",
    icon: ArrowRightCircle,
  },
];

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sand-tint/20 to-white">
      
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-navy-glow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-2">
          <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
            Simple & Transparent
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            How It Works
          </h2>

          <p className="text-sm sm:text-body text-muted leading-relaxed font-normal max-w-xl mx-auto pt-1">
            Your journey across Future Yatra in three clear, transparent steps — zero hidden clauses, zero false promises.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* PROCESS FLOW CONTAINER (DESKTOP & MOBILE RESPONSIVE)                */}
        {/* ==================================================================== */}
        <div className="relative">
          
          {/* DESKTOP CURVED CONNECTING SVG DASHED ARCS (MODELED AFTER REF IMAGE 1) */}
          <div className="hidden lg:block absolute top-[90px] left-0 w-full pointer-events-none z-0">
            <svg viewBox="0 0 1200 120" className="w-full h-auto overflow-visible" fill="none">
              <defs>
                <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2DBDB6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#3FE0D6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#223D74" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Arc 1: Connecting Step 1 to Step 2 */}
              <motion.path
                d="M 330 40 C 420 10, 480 10, 570 40"
                stroke="url(#connectorGradient)"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Arc 2: Connecting Step 2 to Step 3 */}
              <motion.path
                d="M 680 40 C 770 70, 830 70, 920 40"
                stroke="url(#connectorGradient)"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* PROCESS STEP CARDS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative z-10"
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  className="group relative glass-card-light rounded-3xl p-6 sm:p-8 border border-line bg-white/95 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Hover Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-bright via-teal to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                  {/* HUGE ELEGANT WATERMARK NUMBER IN BACKGROUND (MODELED AFTER REF IMAGE 3) */}
                  <span className="font-heading font-extrabold text-7xl sm:text-8xl text-navy/[0.06] group-hover:text-teal/15 transition-colors duration-500 select-none absolute -top-3 right-4 pointer-events-none leading-none">
                    {step.stepNumber}
                  </span>

                  <div>
                    {/* Top Step Icon Header (Modeled after Ref Image 1) */}
                    <div className="flex items-center justify-between mb-6">
                      
                      {/* Interactive Step Icon Circle */}
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-teal-tint via-white to-teal-tint/50 border-2 border-teal/30 shadow-md flex items-center justify-center text-teal group-hover:border-teal group-hover:scale-110 group-hover:shadow-teal/20 transition-all duration-300">
                          <IconComponent className="w-7 h-7 sm:w-9 sm:h-9 text-teal group-hover:text-navy transition-colors duration-300" />
                        </div>
                        {/* Outer Pulse Ring */}
                        <div className="absolute inset-0 rounded-full border border-teal/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500 pointer-events-none" />
                      </div>

                      {/* Step Indicator Badge */}
                      <span className="inline-flex items-center space-x-1 bg-navy text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm group-hover:bg-teal group-hover:text-navy transition-colors duration-300">
                        <span>{step.badge}</span>
                      </span>

                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy group-hover:text-teal transition-colors duration-200 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-small font-semibold text-teal-dark font-medium leading-snug">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Step Description */}
                    <p className="text-xs sm:text-small text-muted leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Card Bottom Feature Indicator */}
                  <div className="pt-6 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-bold text-navy/70 group-hover:text-teal transition-colors duration-200">
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal" />
                      <span>Transparent Step</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform duration-200" />
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
