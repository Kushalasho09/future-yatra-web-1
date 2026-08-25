"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Sparkles,
  Target,
  ClipboardCheck,
  FileText,
  Globe2,
  Calculator,
  Scale,
  BarChart3,
  GraduationCap,
  ArrowRight,
  MousePointer2,
  Info,
  CheckCircle2,
  X,
  Play,
  RotateCcw,
} from "lucide-react";

// Hotspot definitions matching video and brand pillars
interface Hotspot {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targetX: number; // 0.0 (left) to 1.0 (right)
  side: "left" | "right" | "center";
  positionClass: string;
  icon: React.ElementType;
  accentColor: string;
  tag: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "best-fit",
    title: "Find Your Best-Fit Path",
    shortDesc: "Aligned with your authentic strengths & budget",
    fullDesc:
      "We replace generic college recommendations with a tailored match based on your academic profile, budget, long-term immigration goals, and true career aspirations.",
    targetX: 0.18,
    side: "left",
    positionClass: "top-[6%] left-[3%] sm:left-[8%] lg:left-[12%]",
    icon: Target,
    accentColor: "#2DBDB6",
    tag: "Strategy",
  },
  {
    id: "eligibility",
    title: "Know Your Eligibility",
    shortDesc: "No false hopes, purely verified assessments",
    fullDesc:
      "Transparent evaluation of your GPA, test scores, backlog counts, and financial requirements before you spend a single rupee on applications.",
    targetX: 0.12,
    side: "left",
    positionClass: "top-[28%] left-[2%] sm:left-[5%] lg:left-[7%]",
    icon: ClipboardCheck,
    accentColor: "#3A5EA8",
    tag: "Assessment",
  },
  {
    id: "application",
    title: "Build a Stronger Application",
    shortDesc: "Authentic SOPs, LORs & standout resumes",
    fullDesc:
      "Guidance to craft compelling, plagiarism-free statements of purpose and resumes that clearly convey your unique journey to admission committees.",
    targetX: 0.05,
    side: "left",
    positionClass: "top-[52%] left-[2%] sm:left-[5%] lg:left-[7%]",
    icon: FileText,
    accentColor: "#2DBDB6",
    tag: "Admissions",
  },
  {
    id: "visa",
    title: "Prepare for Visa Review",
    shortDesc: "Audit-grade documentation & mock interviews",
    fullDesc:
      "Rigorous pre-filing auditing of financial proof, ties to home country, and comprehensive mock interviews to minimize refusal risks.",
    targetX: 0.1,
    side: "left",
    positionClass: "top-[76%] left-[3%] sm:left-[8%] lg:left-[12%]",
    icon: Globe2,
    accentColor: "#805AD5",
    tag: "Compliance",
  },
  {
    id: "cost",
    title: "Understand the True Cost",
    shortDesc: "Zero hidden fees & living expense modeling",
    fullDesc:
      "Complete financial forecasting including tuition, health insurance, inflation, currency fluctuation, and real living expenses.",
    targetX: 0.82,
    side: "right",
    positionClass: "top-[6%] right-[3%] sm:right-[8%] lg:right-[12%]",
    icon: Calculator,
    accentColor: "#E0A23F",
    tag: "Financials",
  },
  {
    id: "options",
    title: "Weigh Your Options",
    shortDesc: "Cross-country comparison with zero bias",
    fullDesc:
      "Objective side-by-side analysis of Canada, US, UK, Australia, Ireland, and Europe based on post-study work policies and PR pathways.",
    targetX: 0.88,
    side: "right",
    positionClass: "top-[28%] right-[2%] sm:right-[5%] lg:right-[7%]",
    icon: Scale,
    accentColor: "#E8604C",
    tag: "Advisory",
  },
  {
    id: "admission",
    title: "Understand Your Admission Position",
    shortDesc: "Realistic acceptance odds & safety tiers",
    fullDesc:
      "Categorize universities into Dream, Target, and Safety tiers so you never risk having zero offers at the end of the application cycle.",
    targetX: 0.95,
    side: "right",
    positionClass: "top-[52%] right-[2%] sm:right-[5%] lg:right-[7%]",
    icon: BarChart3,
    accentColor: "#E8604C",
    tag: "Analytics",
  },
  {
    id: "graduation",
    title: "Plan Beyond Graduation",
    shortDesc: "Job market realities & PR transitions",
    fullDesc:
      "We design your study pathway not just for the visa, but with a 5-year outlook toward employment, sponsorship, and long-term settlement.",
    targetX: 0.9,
    side: "right",
    positionClass: "top-[76%] right-[3%] sm:right-[8%] lg:right-[12%]",
    icon: GraduationCap,
    accentColor: "#2DBDB6",
    tag: "Career",
  },
];

export default function InteractiveCharacterHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation Engine State
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [normalizedX, setNormalizedX] = useState(0.5); // 0.0 to 1.0 (0.5 = idle center)

  // Internal mutable refs for 60fps rAF loop
  const currentPosRef = useRef(0.5); // Current smoothed position (0.0 -> 1.0)
  const targetPosRef = useRef(0.5); // Target mouse position (0.0 -> 1.0)
  const lastActiveTimeRef = useRef(Date.now());
  const animationFrameIdRef = useRef<number | null>(null);
  const spriteImgRef = useRef<HTMLImageElement | null>(null);

  // Sprite sheet specification (Grid: 8x8 = 64 frames, 640x360 per frame)
  const GRID_COLS = 8;
  const GRID_ROWS = 8;
  const TOTAL_FRAMES = 64;
  const FRAME_WIDTH = 640;
  const FRAME_HEIGHT = 360;
  const IDLE_FRAME = 31; // Frame corresponding to 0.5 (center)

  // Initialize Sprite Sheet Image and start Canvas Render Loop
  useEffect(() => {
    const img = new Image();
    img.src = "/images/character-spritesheet-hq.webp";
    img.onload = () => {
      spriteImgRef.current = img;
      setIsLoaded(true);
      drawFrame(IDLE_FRAME);
    };

    // Fallback if HQ takes time, also load standard horizontal
    img.onerror = () => {
      const fallbackImg = new Image();
      fallbackImg.src = "/images/character-spritesheet.webp";
      fallbackImg.onload = () => {
        spriteImgRef.current = fallbackImg;
        setIsLoaded(true);
      };
    };

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Draw a specific frame onto Canvas
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const img = spriteImgRef.current;
      if (!canvas || !img) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));

      // Calculate column and row in 8x8 grid
      const col = clampedIndex % GRID_COLS;
      const row = Math.floor(clampedIndex / GRID_COLS);

      const sx = col * FRAME_WIDTH;
      const sy = row * FRAME_HEIGHT;

      // Handle High-DPI canvas
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const displayWidth = canvas.clientWidth || 640;
      const displayHeight = canvas.clientHeight || 360;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Draw frame to fill canvas nicely
      ctx.drawImage(img, sx, sy, FRAME_WIDTH, FRAME_HEIGHT, 0, 0, displayWidth, displayHeight);
      ctx.restore();
    },
    []
  );

  // Animation Loop: Smooth spring interpolation (lerp) & idle breathing
  useEffect(() => {
    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;

      const now = Date.now();
      const timeSinceActive = now - lastActiveTimeRef.current;

      // If inactive for > 1.2s and not hovering, slowly ease target to center (0.5)
      // plus a gentle subtle sinusoidal breathing motion (+/- 0.015)
      if (!isHovering && timeSinceActive > 1200) {
        const breathingOffset = Math.sin(now * 0.0018) * 0.018;
        targetPosRef.current = 0.5 + breathingOffset;
      }

      // Smooth Lerp Damping
      // currentPos = currentPos + (targetPos - currentPos) * easeFactor
      const easeFactor = 0.12;
      currentPosRef.current += (targetPosRef.current - currentPosRef.current) * easeFactor;

      // Map normalized position [0.0, 1.0] to frame [0, TOTAL_FRAMES - 1]
      const frameIndex = currentPosRef.current * (TOTAL_FRAMES - 1);
      drawFrame(frameIndex);

      setNormalizedX(currentPosRef.current);

      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawFrame, isHovering]);

  // Handle Mouse Move over the interactive hero container
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const clampedX = Math.max(0.0, Math.min(1.0, x));

    targetPosRef.current = clampedX;
    lastActiveTimeRef.current = Date.now();
    setIsHovering(true);
  }, []);

  // Handle Mouse Leave: Smooth return to center
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    targetPosRef.current = 0.5; // Return to center idle
    lastActiveTimeRef.current = Date.now();
    setActiveHotspot(null);
  }, []);

  // Handle Touch Move (for mobile/tablet gesture scrubbing)
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) / rect.width;
    const clampedX = Math.max(0.0, Math.min(1.0, x));

    targetPosRef.current = clampedX;
    lastActiveTimeRef.current = Date.now();
    setIsHovering(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsHovering(false);
    targetPosRef.current = 0.5;
    lastActiveTimeRef.current = Date.now();
  }, []);

  // Hotspot hover handler: Steers character to point at the pill
  const handleHotspotHover = (hotspot: Hotspot) => {
    targetPosRef.current = hotspot.targetX;
    lastActiveTimeRef.current = Date.now();
    setActiveHotspot(hotspot);
    setIsHovering(true);
  };

  // Hotspot unhover
  const handleHotspotLeave = () => {
    setActiveHotspot(null);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-navy-deep via-[#0d1c38] to-navy-deep text-white py-12 sm:py-16 md:py-20 border-y border-teal/20">
      {/* Ambient Radial Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] md:w-[700px] h-[320px] sm:h-[540px] md:h-[700px] bg-radial from-teal/25 via-teal/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-navy-glow/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-coral/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Modern High-Tech Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#3FE0D6_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-teal/10 border border-teal-bright/30 text-teal-bright text-micro sm:text-small font-semibold tracking-wide uppercase backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-bright animate-pulse" />
            <span>Interactive Guidance Core</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-h1 font-heading font-extrabold text-white tracking-tight leading-tight">
            Explore Your Complete{" "}
            <span className="bg-gradient-to-r from-teal-bright via-teal to-sand bg-clip-text text-transparent">
              Global Journey
            </span>
          </h2>

          <p className="text-small sm:text-body text-white/75 max-w-2xl mx-auto font-body leading-relaxed">
            Move your cursor across the stage to see how every stage of your journey connects — from profile preparation to life beyond graduation.
          </p>

          {/* Interactive Mouse Hint Bar */}
          <div className="inline-flex items-center gap-2.5 text-micro text-teal-bright/90 bg-white/5 border border-teal-bright/20 rounded-pill px-4 py-1.5 backdrop-blur-sm">
            <MousePointer2 className="w-3.5 h-3.5 text-teal-bright animate-bounce" />
            <span>Move cursor left or right • Hover over any milestone to explore</span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* INTERACTIVE STAGE & CANVAS SCRUBBER WRAPPER                     */}
        {/* ================================================================ */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-5xl h-[460px] sm:h-[540px] md:h-[620px] rounded-section border border-teal-bright/30 bg-gradient-to-b from-navy-deep/80 via-[#102244]/60 to-navy-deep/90 backdrop-blur-md shadow-2xl overflow-hidden cursor-crosshair select-none group"
        >
          {/* Subtle Ambient Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer Ring */}
            <div className="w-[380px] sm:w-[540px] md:w-[680px] h-[380px] sm:h-[540px] md:h-[680px] rounded-full border border-teal/15 border-dashed animate-spin-slow opacity-60" />
            {/* Inner Ring */}
            <div className="absolute w-[260px] sm:w-[380px] md:w-[480px] h-[260px] sm:h-[380px] md:h-[480px] rounded-full border border-teal-bright/20 opacity-70" />
            {/* Center Core Circle */}
            <div className="absolute w-[180px] sm:w-[260px] md:w-[320px] h-[180px] sm:h-[260px] md:h-[320px] rounded-full bg-gradient-to-b from-teal/10 to-transparent" />
          </div>

          {/* Dynamic Laser Connection Line pointing from character to active cursor/hotspot */}
          <div
            className="absolute top-1/2 left-1/2 h-[2px] pointer-events-none transition-all duration-300 origin-left z-10 opacity-40 group-hover:opacity-80"
            style={{
              width: "42%",
              transform: `translate(0, -50%) rotate(${
                (normalizedX - 0.5) * 140
              }deg)`,
              background:
                "linear-gradient(90deg, transparent, #3FE0D6 60%, transparent)",
            }}
          />

          {/* Canvas Rendering Character Frame */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain pointer-events-none transition-transform duration-300"
              style={{
                transform: `scale(${1 + Math.abs(normalizedX - 0.5) * 0.03})`,
              }}
            />
          </div>

          {/* Fallback Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-deep/80 backdrop-blur-sm z-30">
              <div className="w-12 h-12 rounded-full border-2 border-teal border-t-transparent animate-spin mb-3" />
              <p className="text-small text-teal-bright font-medium">
                Loading Interactive Character...
              </p>
            </div>
          )}

          {/* ============================================================== */}
          {/* HOTSPOT PILLS (Desktop / Tablet floating nodes)                */}
          {/* ============================================================== */}
          <div className="absolute inset-0 pointer-events-auto z-20">
            {HOTSPOTS.map((hotspot) => {
              const Icon = hotspot.icon;
              const isActive = activeHotspot?.id === hotspot.id;
              const isPillSideTargeted =
                (hotspot.side === "left" && normalizedX < 0.38) ||
                (hotspot.side === "right" && normalizedX > 0.62);

              return (
                <div
                  key={hotspot.id}
                  className={`absolute ${hotspot.positionClass} transition-transform duration-300`}
                  onMouseEnter={() => handleHotspotHover(hotspot)}
                  onMouseLeave={handleHotspotLeave}
                  onClick={() => setSelectedHotspot(hotspot)}
                >
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className={`group/pill flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-pill border backdrop-blur-md shadow-lg transition-all duration-300 ${
                      isActive || isPillSideTargeted
                        ? "bg-navy-deep/95 border-teal-bright text-white shadow-teal/30 shadow-md ring-2 ring-teal-bright/40"
                        : "bg-navy-deep/80 border-white/20 text-white/90 hover:border-teal/60 hover:bg-navy-deep/90"
                    }`}
                  >
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-xs transition-transform group-hover/pill:scale-110"
                      style={{ backgroundColor: hotspot.accentColor }}
                    >
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-micro sm:text-small font-bold tracking-tight font-heading group-hover/pill:text-teal-bright transition-colors">
                        {hotspot.title}
                      </span>
                    </div>

                    {/* Small Pulsing Dot for targeted side */}
                    {(isActive || isPillSideTargeted) && (
                      <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-bright opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-bright" />
                      </span>
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* ============================================================== */}
          {/* BOTTOM LIVE POSITION & DIRECTIONAL HUD                         */}
          {/* ============================================================== */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-2.5 bg-navy-deep/90 backdrop-blur-md border border-teal-bright/20 rounded-card px-4 py-2.5 sm:py-3 shadow-lg">
            {/* Left Stage Indicator */}
            <div className="flex items-center gap-2 text-micro sm:text-small text-white/80">
              <span
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  normalizedX < 0.4 ? "bg-teal-bright animate-pulse" : "bg-white/30"
                }`}
              />
              <span className={normalizedX < 0.4 ? "text-teal-bright font-bold" : "text-white/60"}>
                Left: Profile & Application
              </span>
            </div>

            {/* Interactive Progress Scrub Track */}
            <div className="w-full sm:w-64 flex items-center gap-2">
              <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-teal via-teal-bright to-sand rounded-full transition-all duration-75"
                  style={{ width: `${normalizedX * 100}%` }}
                />
              </div>
              <span className="text-micro font-mono text-teal-bright/90 w-10 text-right">
                {Math.round(normalizedX * 100)}%
              </span>
            </div>

            {/* Right Stage Indicator */}
            <div className="flex items-center gap-2 text-micro sm:text-small text-white/80">
              <span className={normalizedX > 0.6 ? "text-teal-bright font-bold" : "text-white/60"}>
                Right: Selection & Outcomes
              </span>
              <span
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  normalizedX > 0.6 ? "bg-teal-bright animate-pulse" : "bg-white/30"
                }`}
              />
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* MODAL / QUICK-DETAIL DRAWER FOR SELECTED MILESTONE              */}
        {/* ================================================================ */}
        <AnimatePresence>
          {selectedHotspot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedHotspot(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg bg-navy-deep border border-teal-bright/40 rounded-card p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
              >
                {/* Ambient Glow */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[70px] pointer-events-none opacity-40"
                  style={{ backgroundColor: selectedHotspot.accentColor }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Tag & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-card flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: selectedHotspot.accentColor }}
                  >
                    <selectedHotspot.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-micro font-bold uppercase tracking-wider text-teal-bright">
                      {selectedHotspot.tag} Milestone
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                      {selectedHotspot.title}
                    </h3>
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-body text-white/90 font-body leading-relaxed mb-6">
                  {selectedHotspot.fullDesc}
                </p>

                {/* Key Benefits List */}
                <div className="bg-white/5 border border-white/10 rounded-card p-4 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-small text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-teal-bright flex-shrink-0" />
                    <span>Independent review with no commission-driven bias</span>
                  </div>
                  <div className="flex items-center gap-2 text-small text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-teal-bright flex-shrink-0" />
                    <span>Direct pathway to accredited global universities</span>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="px-5 py-2.5 rounded-pill bg-teal text-navy-deep font-bold text-small hover:bg-teal-bright transition-colors shadow-md flex items-center gap-2"
                  >
                    <span>Got It</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Legend Cards for Mobile (under stage) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-5xl mt-6 lg:hidden">
          {HOTSPOTS.slice(0, 4).map((hotspot) => (
            <button
              key={hotspot.id}
              onClick={() => setSelectedHotspot(hotspot)}
              className="p-3 rounded-card bg-white/5 border border-white/10 text-left hover:border-teal/50 transition-colors"
            >
              <span className="text-micro text-teal-bright block font-bold">
                {hotspot.tag}
              </span>
              <span className="text-small font-semibold text-white truncate block">
                {hotspot.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
