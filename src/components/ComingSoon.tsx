"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, Compass, Sparkles, Rocket } from "lucide-react";
import Card3DTilt from "@/components/Card3DTilt";

interface ComingSoonProps {
  pageTitle?: string;
}

export default function ComingSoon({ pageTitle = "Coming Soon" }: ComingSoonProps) {
  const easeTier1 = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-white text-navy-deep flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* 3D Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-tint rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sand/80 rounded-pill blur-3xl pointer-events-none animate-orb-2" />

      <Card3DTilt maxTilt={8} className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeTier1 }}
          className="glass-card-light rounded-section p-10 sm:p-14 text-center space-y-8 border border-line shadow-2xl bg-white/95 relative overflow-hidden"
        >
          {/* Animated Glow Halo */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-teal/20 rounded-pill blur-2xl pointer-events-none" />

          {/* Animated Clock / Rocket Icon Badge */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-pill bg-teal-tint border-2 border-teal/40 flex items-center justify-center text-teal mx-auto shadow-lg relative"
          >
            <Sparkles className="w-10 h-10 text-teal animate-pulse" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-pill bg-teal-bright animate-ping" />
          </motion.div>

          <div className="space-y-4 relative z-10">
            {/* Animated Coming Soon Badge */}
            <div className="inline-flex items-center space-x-2 bg-navy text-teal-bright border border-teal/30 px-4 py-1.5 rounded-tag font-heading text-micro uppercase tracking-wider font-bold shadow-md">
              <span className="w-2 h-2 rounded-pill bg-teal-bright animate-pulse" />
              <span>Coming Soon • Module Under Construction</span>
            </div>

            <h1 className="font-heading text-h1 font-bold text-navy tracking-tight">
              {pageTitle}
            </h1>

            <p className="text-body text-muted leading-relaxed max-w-md mx-auto">
              This vertical is being actively fine-tuned for upcoming releases. Explore our flagship 3D interactive Homepage demo below!
            </p>
          </div>

          {/* CTA Action Button */}
          <div className="pt-4 flex justify-center relative z-10">
            <Link
              href="/"
              className="inline-flex items-center space-x-2.5 bg-navy text-white text-body font-semibold px-8 py-4 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_25px_rgba(45,189,182,0.45)] transition-all duration-350 shadow-lg group"
            >
              <ArrowLeft className="w-5 h-5 text-teal-bright group-hover:-translate-x-1 transition-transform" />
              <span>Return To Homepage</span>
            </Link>
          </div>
        </motion.div>
      </Card3DTilt>
    </div>
  );
}
