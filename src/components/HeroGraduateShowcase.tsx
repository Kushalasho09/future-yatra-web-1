"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  FileCheck2,
} from "lucide-react";

export default function HeroGraduateShowcase() {
  const capsules = [
    {
      id: "university",
      title: "Find Your University",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50 text-blue-600 border-blue-200/80",
      // Mobile: top-0 -left-1 (above diploma roll & top left of cap)
      positionClasses: "top-0 -left-1 sm:top-10 sm:-left-8 lg:-left-12",
      xRange: [-6, 6, -6],
      duration: 5.2,
      delay: 0,
    },
    {
      id: "test-prep",
      title: "Prepare for Your Test",
      icon: BookOpen,
      color: "from-teal to-emerald-600",
      bgLight: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
      // Mobile: top-2 -right-1 (high in upper-right sky, 100% away from face/mouth/neck)
      positionClasses: "top-2 -right-1 sm:top-18 sm:-right-6 lg:-right-10",
      xRange: [6, -6, 6],
      duration: 4.8,
      delay: 0.3,
    },
    {
      id: "medico",
      title: "Plan Your Medical Path",
      icon: Stethoscope,
      color: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50 text-rose-600 border-rose-200/80",
      // Mobile: bottom-24 -left-1 (by the lower left side)
      positionClasses: "bottom-24 -left-1 sm:bottom-36 sm:-left-10 lg:-left-14",
      xRange: [-6, 6, -6],
      duration: 5.6,
      delay: 0.6,
    },
    {
      id: "visa",
      title: "Get Your Visa Ready",
      icon: FileCheck2,
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50 text-amber-600 border-amber-200/80",
      // Mobile: bottom-2 -right-1 (by the lower right side)
      positionClasses: "bottom-2 -right-1 sm:bottom-20 sm:-right-6 lg:-right-8",
      xRange: [6, -6, 6],
      duration: 5.0,
      delay: 0.9,
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[540px] flex items-center justify-center py-2 select-none">
      {/* Decorative Aura / Soft Glow behind the student */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-tr from-teal/20 via-sky-400/15 to-indigo-500/15 blur-3xl animate-pulse" />
        <div className="absolute w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] rounded-full bg-amber-200/15 blur-2xl" />
      </div>

      {/* GRADUATE IMAGE CONTAINER WITH ORGANIC SEAMLESS BOTTOM FADE */}
      <div className="relative w-full max-w-[320px] sm:max-w-[410px] lg:max-w-[440px] h-[460px] sm:h-[580px] lg:h-[620px] flex items-end justify-center">
        {/* Main Cutout Image with multi-step smooth alpha mask - NO white boxes */}
        <div
          className="relative w-full h-full flex items-end justify-center"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.15) 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.15) 92%, transparent 100%)",
          }}
        >
          <Image
            src="/images/graduate_hero_cutout.png"
            alt="Successful Graduate Student - Future Yatra"
            width={682}
            height={1024}
            priority
            quality={95}
            className="w-auto h-full max-h-[620px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(18,36,71,0.12)]"
          />
        </div>
      </div>

      {/* 4 FLOATING PURE LABEL CAPSULES WITH LEFT & RIGHT MOVING ANIMATION */}
      {capsules.map((capsule) => {
        const IconComponent = capsule.icon;
        return (
          <motion.div
            key={capsule.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: capsule.xRange,
            }}
            transition={{
              opacity: { duration: 0.6, delay: capsule.delay },
              scale: { duration: 0.6, delay: capsule.delay },
              x: {
                duration: capsule.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className={`absolute z-30 ${capsule.positionClasses}`}
          >
            <div className="flex items-center space-x-2 sm:space-x-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_25px_rgba(18,36,71,0.12)] px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full max-w-[90vw]">
              {/* Icon Container */}
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border ${capsule.bgLight} shadow-sm flex-shrink-0`}
              >
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              {/* Capsule Text Label */}
              <div className="flex flex-col text-left pr-1 sm:pr-1.5">
                <span className="text-[11px] sm:text-sm font-bold text-navy tracking-tight whitespace-nowrap">
                  {capsule.title}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
