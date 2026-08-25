"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Target,
  ClipboardList,
  FileEdit,
  Globe2,
  Calculator,
  Scale,
  BarChart2,
  GraduationCap,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface CapsuleData {
  id: string;
  title: string;
  shortTitle: string;
  tag: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  hasVisaBadge?: boolean;
  hasCurrency?: boolean;
  baseAngleDeg: number; // Base angular position in degrees
}

const CAPSULES: CapsuleData[] = [
  {
    id: "best-fit",
    title: "Find Your Best-Fit Path",
    shortTitle: "Best-Fit Path",
    tag: "Strategy",
    icon: Target,
    iconColor: "#16A34A",
    iconBg: "bg-green-50 border-green-200 text-green-600",
    baseAngleDeg: 270, // Top center
  },
  {
    id: "cost",
    title: "Understand the True Cost",
    shortTitle: "True Cost",
    tag: "Financials",
    icon: Calculator,
    iconColor: "#D97706",
    iconBg: "bg-amber-50 border-amber-200 text-amber-600",
    hasCurrency: true,
    baseAngleDeg: 315, // Top right
  },
  {
    id: "options",
    title: "Weigh Your Options",
    shortTitle: "Global Options",
    tag: "Advisory",
    icon: Scale,
    iconColor: "#9333EA",
    iconBg: "bg-purple-50 border-purple-200 text-purple-600",
    baseAngleDeg: 0, // Mid right
  },
  {
    id: "admission",
    title: "Understand Your Admission Position",
    shortTitle: "Admission Odds",
    tag: "Assessment",
    icon: BarChart2,
    iconColor: "#E11D48",
    iconBg: "bg-rose-50 border-rose-200 text-rose-600",
    baseAngleDeg: 45, // Bottom right
  },
  {
    id: "graduation",
    title: "Plan Beyond Graduation",
    shortTitle: "Post-Graduation",
    tag: "Career & PR",
    icon: GraduationCap,
    iconColor: "#0284C7",
    iconBg: "bg-sky-50 border-sky-200 text-sky-600",
    baseAngleDeg: 90, // Bottom center
  },
  {
    id: "visa",
    title: "Prepare for Visa Review",
    shortTitle: "Visa Review",
    tag: "Compliance",
    icon: Globe2,
    iconColor: "#7C3AED",
    iconBg: "bg-violet-50 border-violet-200 text-violet-600",
    hasVisaBadge: true,
    baseAngleDeg: 135, // Bottom left
  },
  {
    id: "application",
    title: "Build a Stronger Application",
    shortTitle: "Strong Application",
    tag: "Profile",
    icon: FileEdit,
    iconColor: "#0D9488",
    iconBg: "bg-teal-50 border-teal-200 text-teal-600",
    baseAngleDeg: 180, // Mid left
  },
  {
    id: "eligibility",
    title: "Know Your Eligibility",
    shortTitle: "Eligibility",
    tag: "Verification",
    icon: ClipboardList,
    iconColor: "#2563EB",
    iconBg: "bg-blue-50 border-blue-200 text-blue-600",
    baseAngleDeg: 225, // Top left
  },
];

export default function RotatingGuidanceShowcase() {
  const [angleOffset, setAngleOffset] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ rx: 440, ry: 300 });

  const isPausedRef = useRef(false);
  const autoReleaseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Measure stage dimensions for responsive orbit radius
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      const mobile = width < 640;
      setIsMobile(mobile);

      if (width < 380) {
        // Small Mobile (iPhone SE, compact Androids)
        setDimensions({ rx: 125, ry: 165 });
      } else if (width < 640) {
        // Standard & Large Mobile (380px - 639px)
        setDimensions({ rx: 140, ry: 180 });
      } else if (width < 1024) {
        // Tablet (640px - 1023px)
        setDimensions({ rx: 310, ry: 270 });
      } else if (width < 1280) {
        // Desktop
        setDimensions({ rx: 430, ry: 300 });
      } else {
        // Large Desktop (>= 1280px)
        setDimensions({ rx: 475, ry: 325 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // 60FPS continuous rotation loop via requestAnimationFrame
  useEffect(() => {
    let lastTime = performance.now();
    // 1 full revolution every 36 seconds
    const speedRadPerMs = (2 * Math.PI) / 36000;

    const loop = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!isPausedRef.current) {
        setAngleOffset((prev) => (prev + speedRadPerMs * dt) % (2 * Math.PI));
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (autoReleaseTimerRef.current) {
        clearTimeout(autoReleaseTimerRef.current);
      }
    };
  }, []);

  // Handler for tapping/clicking a capsule or control without stopping continuous orbit
  const selectCapsule = (id: string) => {
    setSelectedId(id);
    // Keep rotation running smoothly!
    isPausedRef.current = false;

    if (autoReleaseTimerRef.current) {
      clearTimeout(autoReleaseTimerRef.current);
    }

    // Auto-release manual selection after 3.2s so the spotlight resumes tracking the live orbit
    autoReleaseTimerRef.current = setTimeout(() => {
      setSelectedId(null);
    }, 3200);
  };

  // Calculate active capsule index for spotlight on mobile
  const getActiveCapsule = () => {
    if (selectedId) {
      const found = CAPSULES.find((c) => c.id === selectedId);
      if (found) return found;
    }
    if (hoveredId) {
      const found = CAPSULES.find((c) => c.id === hoveredId);
      if (found) return found;
    }
    // Calculate which capsule is closest to top (270 deg / -PI/2)
    let closestCapsule = CAPSULES[0];
    let minDiff = Infinity;
    const targetAngle = 1.5 * Math.PI; // Top position

    CAPSULES.forEach((capsule) => {
      const baseRad = (capsule.baseAngleDeg * Math.PI) / 180;
      const currentRad = (baseRad + angleOffset) % (2 * Math.PI);
      let diff = Math.abs(currentRad - targetAngle);
      if (diff > Math.PI) diff = 2 * Math.PI - diff;
      if (diff < minDiff) {
        minDiff = diff;
        closestCapsule = capsule;
      }
    });

    return closestCapsule;
  };

  const activeCapsule = getActiveCapsule();
  const ActiveIcon = activeCapsule.icon;

  const handleNext = () => {
    const currentIndex = CAPSULES.findIndex((c) => c.id === activeCapsule.id);
    const nextIndex = (currentIndex + 1) % CAPSULES.length;
    selectCapsule(CAPSULES[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = CAPSULES.findIndex((c) => c.id === activeCapsule.id);
    const prevIndex = (currentIndex - 1 + CAPSULES.length) % CAPSULES.length;
    selectCapsule(CAPSULES[prevIndex].id);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-2 sm:py-6 px-2 sm:px-4 select-none overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] md:w-[820px] h-[340px] sm:h-[620px] md:h-[820px] bg-blue-50/70 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      {/* Main Orbit Stage Container */}
      <div
        ref={stageRef}
        className="relative w-full h-[470px] xs:h-[500px] sm:h-[680px] md:h-[750px] lg:h-[820px] flex items-center justify-center overflow-visible"
      >
        {/* ============================================================== */}
        {/* 2 CONCENTRIC BACKGROUND ORBIT CIRCLES                          */}
        {/* ============================================================== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Circle Ring */}
          <div
            className="rounded-full border border-blue-200/60 shadow-[0_0_40px_rgba(59,130,246,0.08)] transition-all duration-300"
            style={{
              width: `${dimensions.rx * 2}px`,
              height: `${dimensions.ry * 2}px`,
            }}
          />

          {/* Inner Circle Ring */}
          <div
            className="absolute rounded-full border border-blue-200/40 transition-all duration-300"
            style={{
              width: `${dimensions.rx * 1.45}px`,
              height: `${dimensions.ry * 1.45}px`,
            }}
          />

          {/* Center Plate Radial Gradient */}
          <div
            className="absolute rounded-full bg-radial from-blue-50/70 via-blue-50/20 to-transparent transition-all duration-300"
            style={{
              width: `${dimensions.rx * 1.05}px`,
              height: `${dimensions.ry * 1.05}px`,
            }}
          />
        </div>

        {/* ============================================================== */}
        {/* CENTER STUDENT (Larger & Prominent)                            */}
        {/* ============================================================== */}
        <div className="relative z-10 w-[240px] xs:w-[270px] sm:w-[480px] md:w-[580px] lg:w-[660px] h-[340px] xs:h-[380px] sm:h-[600px] md:h-[700px] lg:h-[780px] flex items-end justify-center pointer-events-none translate-y-3 sm:translate-y-8 lg:translate-y-10">
          <Image
            src="/images/student_cutout.png"
            alt="Indian Student with Backpack and Laptop"
            width={660}
            height={780}
            priority
            unoptimized
            className="w-full h-full object-contain object-bottom drop-shadow-xl sm:drop-shadow-2xl"
          />
        </div>

        {/* ============================================================== */}
        {/* CONTINUOUSLY ORBITING CAPSULES                                  */}
        {/* ============================================================== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          {CAPSULES.map((capsule) => {
            const Icon = capsule.icon;
            const isActive = activeCapsule.id === capsule.id;
            const isHovered = hoveredId === capsule.id || selectedId === capsule.id;

            // Compute current position in orbit using trigonometry
            const baseRad = (capsule.baseAngleDeg * Math.PI) / 180;
            const currentAngle = baseRad + angleOffset;
            const x = dimensions.rx * Math.cos(currentAngle);
            const y = dimensions.ry * Math.sin(currentAngle);

            return (
              <div
                key={capsule.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto transition-transform duration-75 ease-linear"
                style={{
                  transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${
                    isHovered || (isMobile && isActive) ? 1.12 : 1
                  })`,
                }}
                onMouseEnter={() => {
                  setHoveredId(capsule.id);
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                }}
                onClick={() => {
                  selectCapsule(capsule.id);
                }}
              >
                {/* ======================================================= */}
                {/* MOBILE VIEW: SLEEK CIRCULAR ORBS (ZERO CLIPPING EVER)   */}
                {/* ======================================================= */}
                <div className="block sm:hidden">
                  <div
                    className={`relative w-10 h-10 xs:w-11 xs:h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md bg-white border ${
                      isActive || isHovered
                        ? "border-blue-400 ring-4 ring-blue-200/90 shadow-xl scale-110 z-30"
                        : "border-slate-200/90 hover:border-blue-300"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 xs:w-8 xs:h-8 rounded-full flex items-center justify-center ${capsule.iconBg}`}
                    >
                      <Icon
                        className="w-3.5 h-3.5 xs:w-4 xs:h-4"
                        style={{ color: capsule.iconColor }}
                      />
                    </div>

                    {capsule.hasVisaBadge && (
                      <span className="absolute -bottom-1 text-[6px] font-black text-violet-600 bg-violet-50 px-1 rounded-full border border-violet-200 uppercase tracking-tighter scale-90">
                        VISA
                      </span>
                    )}
                    {capsule.hasCurrency && (
                      <span className="absolute -bottom-0.5 -right-0.5 text-[7px] font-bold text-amber-700 bg-amber-50 rounded-full w-3.5 h-3.5 flex items-center justify-center border border-amber-200">
                        ₹
                      </span>
                    )}

                    {/* Active pulse */}
                    {(isActive || isHovered) && (
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                      </span>
                    )}
                  </div>
                </div>

                {/* ======================================================= */}
                {/* TABLET / DESKTOP VIEW: RICH HORIZONTAL CAPSULES         */}
                {/* ======================================================= */}
                <div className="hidden sm:block">
                  <div
                    className={`flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? "shadow-2xl border-blue-400 ring-4 ring-blue-100/90 z-30 scale-105"
                        : "border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:border-blue-300 hover:shadow-lg"
                    }`}
                  >
                    {/* Icon Container */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 relative ${capsule.iconBg}`}
                    >
                      <Icon
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        style={{ color: capsule.iconColor }}
                      />
                      {capsule.hasVisaBadge && (
                        <span className="absolute -bottom-1 text-[7px] font-extrabold text-violet-600 tracking-tighter uppercase scale-90">
                          VISA
                        </span>
                      )}
                      {capsule.hasCurrency && (
                        <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold text-amber-600">
                          ₹
                        </span>
                      )}
                    </div>

                    {/* Capsule Title Text */}
                    <span className="text-micro sm:text-[13px] md:text-small font-bold text-slate-800 whitespace-nowrap tracking-tight font-heading">
                      {capsule.title}
                    </span>

                    {/* Pulsing indicator when hovered */}
                    {isHovered && (
                      <span className="relative flex h-2 w-2 ml-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================================ */}
      {/* MOBILE INTERACTIVE SPOTLIGHT BAR (Appears directly below student) */}
      {/* ================================================================ */}
      <div className="block sm:hidden mt-2 px-2">
        <div className="relative bg-white/95 backdrop-blur-md border border-blue-200/90 rounded-2xl p-3 shadow-lg shadow-blue-500/5">
          <div className="flex items-center justify-between gap-2">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 flex items-center justify-center flex-shrink-0 active:scale-95 transition-all"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Active Milestone Info */}
            <div className="flex items-center gap-2.5 min-w-0 flex-1 px-1">
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ${activeCapsule.iconBg}`}
              >
                <ActiveIcon
                  className="w-4 h-4"
                  style={{ color: activeCapsule.iconColor }}
                />
              </div>

              <div className="flex flex-col min-w-0 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] uppercase font-extrabold tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">
                    {activeCapsule.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Step {CAPSULES.findIndex((c) => c.id === activeCapsule.id) + 1}/8
                  </span>
                </div>
                <h4 className="text-[13px] font-bold text-slate-900 truncate font-heading leading-tight mt-0.5">
                  {activeCapsule.title}
                </h4>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 flex items-center justify-center flex-shrink-0 active:scale-95 transition-all"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-2 pt-2 border-t border-slate-100">
            {CAPSULES.map((capsule) => (
              <button
                key={capsule.id}
                onClick={() => {
                  selectCapsule(capsule.id);
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeCapsule.id === capsule.id
                    ? "w-5 h-1.5 bg-blue-600"
                    : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={capsule.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
