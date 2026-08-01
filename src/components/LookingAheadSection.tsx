"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Globe2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Compass,
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";

export default function LookingAheadSection() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const milestones = [
    {
      num: "01",
      title: "Global Institutional Tie-Ups",
      desc: "Expanding direct university program partnerships across UK, USA, Canada, Australia & Europe.",
      icon: Globe2,
      badge: "In Progress",
      badgeColor: "bg-teal/20 text-teal-bright border-teal/40",
    },
    {
      num: "02",
      title: "Tech-Enabled Student Tracker",
      desc: "Introducing real-time application status portals, SOP milestones & visa document trackers.",
      icon: Cpu,
      badge: "Upcoming Q3",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
    },
    {
      num: "03",
      title: "Founder-Led Accountability",
      desc: "Zero franchise dilution — maintaining 100% radical transparency on every student file.",
      icon: ShieldCheck,
      badge: "Permanent Standard",
      badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-line/60 relative">
      <Card3DTilt className="w-full">
        <div className="glass-card-navy rounded-section p-8 sm:p-12 border border-teal/40 text-white relative shadow-2xl overflow-hidden my-6">
          
          {/* AMBIENT FLOATING GLOW HALOS */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none animate-orb-1" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-orb-2" />
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

          {/* MAIN SPLIT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* LEFT COLUMN: NARRATIVE & CTAS (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: easeTier1 }}
                  className="inline-flex items-center space-x-2 bg-teal/20 text-teal-bright px-3.5 py-1 rounded-pill text-xs font-bold border border-teal/30"
                >
                  <TrendingUp className="w-4 h-4 text-teal-bright" />
                  <span className="font-tempting text-teal-bright text-xl font-normal">
                    Looking Ahead
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                  className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight"
                >
                  Where We&apos;re Headed:{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-bright via-emerald-300 to-amber-300">
                    Building in Public.
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
                className="text-body sm:text-body-l text-sand-tint/90 leading-relaxed font-normal"
              >
                Future Yatra is early in its journey. As we grow, our goal is to expand the reach of our four specialist brands, deepen destination program partnerships, and introduce tech-enabled tracking tools for students — while maintaining strict founder-led accountability.
              </motion.p>

              {/* ACTION BUTTONS ROW */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/our-story/"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-teal to-teal-bright text-navy text-body font-extrabold px-8 py-4 rounded-pill hover:scale-105 transition-all duration-300 shadow-xl group"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowRight className="w-5 h-5 text-navy group-hover:translate-x-1 transition-transform stroke-[3]" />
                  </Link>
                </MagneticButton>

                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/our-story/"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 text-white border border-white/20 text-body font-semibold px-7 py-4 rounded-pill hover:bg-white/20 transition-all duration-300"
                  >
                    <Compass className="w-4 h-4 text-teal-bright" />
                    <span>Meet the Founder</span>
                  </Link>
                </MagneticButton>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: 3 ROADMAP MILESTONE CARDS (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-extrabold text-teal-bright uppercase tracking-widest block px-1">
                Strategic Roadmap & Goals:
              </span>

              {milestones.map((m, idx) => {
                const MIcon = m.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12, ease: easeTier1 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/50 hover:bg-white/10 transition-all duration-300 space-y-2 group shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-teal/20 text-teal-bright border border-teal/30 flex items-center justify-center group-hover:bg-teal group-hover:text-navy transition-colors duration-300">
                          <MIcon className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <h4 className="font-heading text-base font-bold text-white group-hover:text-teal-bright transition-colors">
                          {m.title}
                        </h4>
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${m.badgeColor}`}>
                        {m.badge}
                      </span>
                    </div>

                    <p className="text-xs text-sand-tint/80 leading-relaxed font-normal pl-12">
                      {m.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </Card3DTilt>
    </section>
  );
}
