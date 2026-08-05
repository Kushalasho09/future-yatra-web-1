"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Layers,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Lock,
  HeartHandshake,
  BookOpenCheck,
  Award,
  Cpu,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Target,
  Globe2,
  Scale,
  Quote
} from "lucide-react";
import Interactive3DNodes from "./Interactive3DNodes";

export default function VisionValuesPageClient() {
  // Video playback states for Section 1 hero video
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // FAQ accordion active state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Core Principles Stacked Carousel active index & auto-play state
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const missionPillars = [
    {
      num: "01",
      title: "Replace confusion with clarity.",
      description: "Clear, step-by-step guidance from day one through informed decision-making.",
      image: "/images/mission_clarity_reallife.png",
      icon: Target,
      tag: "Pillar 01",
      border: "border-teal/40",
      accent: "text-teal-bright",
    },
    {
      num: "02",
      title: "Replace false promises with transparency.",
      description: "Honest advice, upfront risks & realistic expectations with no hidden conditions.",
      image: "/images/mission_transparency_reallife.png",
      icon: ShieldCheck,
      tag: "Pillar 02",
      border: "border-teal-bright/50",
      accent: "text-teal-bright",
    },
    {
      num: "03",
      title: "Replace fragmented services with one trusted ecosystem.",
      description: "4 specialist brands operating cohesively under 1 accountable parent company.",
      image: "/images/mission_ecosystem_reallife.png",
      icon: Globe2,
      tag: "Pillar 03",
      border: "border-teal/40",
      accent: "text-teal-bright",
    },
  ];

  const valuesList = [
    {
      num: "01",
      title: "Transparency",
      icon: Eye,
      image: "/images/value_01_transparency.png",
      description:
        "Complete transparency; accurate information, realistic expectations, honest advice without hidden conditions; real difficulty/cost/risk is stated upfront even when a more appealing but less honest answer would be easier.",
      color: "from-teal/30 via-navy-glow/20 to-teal/10",
      border: "border-teal/50",
      accent: "text-teal-bright",
    },
    {
      num: "02",
      title: "Integrity",
      icon: Scale,
      image: "/images/value_02_integrity.png",
      description:
        "Always recommends what's genuinely best for the student, even when it isn't the most profitable option; ethics before revenue, including telling a student a country/program/pathway isn't right for them.",
      color: "from-navy-glow/30 via-teal/20 to-navy-glow/10",
      border: "border-teal-bright/50",
      accent: "text-teal-bright",
    },
    {
      num: "03",
      title: "Student-First Approach",
      icon: HeartHandshake,
      image: "/images/value_03_student_first.png",
      description:
        "Every decision begins with the student's goals, circumstances, and long-term success, not what's easiest to deliver; focused on informed decisions, not selling a destination.",
      color: "from-coral/30 via-amber/20 to-teal/10",
      border: "border-coral/40",
      accent: "text-coral",
    },
    {
      num: "04",
      title: "Long-Term Commitment",
      icon: Lock,
      image: "/images/value_04_longterm_commitment.png",
      description:
        "Responsibility doesn't end at admission or visa approval; builds long-term relationships supporting students throughout their educational and career journey.",
      color: "from-amber/30 via-teal/20 to-navy-glow/10",
      border: "border-amber/40",
      accent: "text-amber",
    },
    {
      num: "05",
      title: "One Trusted Ecosystem",
      icon: Layers,
      image: "/images/value_05_one_ecosystem.png",
      description:
        "University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra under one accountable parent company, giving students the right expertise at every stage with a consistent standard of quality, ethics, and service.",
      color: "from-teal/30 via-navy-glow/30 to-teal-bright/20",
      border: "border-teal/50",
      accent: "text-teal-bright",
    },
    {
      num: "06",
      title: "Knowledge & Continuous Learning",
      icon: BookOpenCheck,
      image: "/images/mission_clarity_reallife.png",
      description:
        "Guidance built on continuous research, learning, and real-world experience, not static information, to stay relevant as immigration rules, admissions criteria, and opportunities change.",
      color: "from-navy-glow/30 via-teal/20 to-teal/10",
      border: "border-teal/40",
      accent: "text-teal-bright",
    },
    {
      num: "07",
      title: "Professional Excellence",
      icon: Award,
      image: "/images/mission_transparency_reallife.png",
      description:
        "High standards through structured processes, compliance, accountability, and consistent service delivery, so guidance quality doesn't depend on chance.",
      color: "from-success/30 via-teal/20 to-navy-glow/10",
      border: "border-success/40",
      accent: "text-success",
    },
    {
      num: "08",
      title: "Innovation with Purpose",
      icon: Cpu,
      image: "/images/mission_ecosystem_reallife.png",
      description:
        "Embraces technology, AI, automation, and modern systems where they genuinely improve the experience for students, partners, and team; innovation only when it creates real, measurable value, not to look impressive.",
      color: "from-teal-bright/30 via-navy-glow/20 to-teal/10",
      border: "border-teal-bright/50",
      accent: "text-teal-bright",
    },
  ];

  const nextValueCard = () => {
    setActiveValueIndex((prev) => (prev + 1) % valuesList.length);
  };

  const prevValueCard = () => {
    setActiveValueIndex((prev) => (prev - 1 + valuesList.length) % valuesList.length);
  };

  // Auto-play interval for Stacked Carousel (Scroll every 2 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % valuesList.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, valuesList.length]);

  const faqs = [
    {
      q: "What is Future Yatra's mission?",
      a: "To replace confusion with clarity, false promises with transparency, and fragmented services with one trusted ecosystem — applied consistently across all four specialist brands under Future Yatra Private Limited.",
    },
    {
      q: "What makes Future Yatra's values different from a typical consultancy?",
      a: "Built around practical commitments rather than buzzwords: e.g., prioritizing integrity over revenue, stating upfront costs and risks honestly, and defining long-term commitment as support that continues long after an admission letter or visa is granted.",
    },
    {
      q: "What is Future Yatra's long-term vision?",
      a: "Extending its ecosystem approach beyond education to support more of life's meaningful journeys over time, while maintaining the exact same commitment to transparency, ethics, trust, and student-first guidance.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-navy-deep text-white selection:bg-teal selection:text-navy-deep min-h-screen">
      {/* 
        ========================================================================
        IMMERSIVE AMBIENT BACKGROUND VIDEO LAYER
        ========================================================================
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none z-0"
      >
        <source src="/video-1.mp4" type="video/mp4" />
        <source
          src="https://static.prod-images.emergentagent.com/jobs/2fea0cc8-c56b-4db9-8e3f-d0c67cbe3a66/videos/af7195690c9b47957e9e611969ff37015b248f08fae17a4b3fbd1a412a5d8be1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Overlay Gradients for Depth & Legibility */}
      <div className="fixed inset-0 bg-gradient-to-b from-navy-deep/90 via-navy/85 to-navy-deep/95 pointer-events-none z-[1]" />

      {/* Floating Ambient Mesh Glow Orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-teal/15 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="fixed bottom-1/3 -right-32 w-96 h-96 bg-navy-glow/25 rounded-full blur-[160px] pointer-events-none z-[1]" />

      {/* Main Container Content */}
      <div className="relative z-10">
        {/* 
          ========================================================================
          SECTION 1: HERO & VISION (Redesigned Cinematic Layout)
          ========================================================================
        */}
        <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Header Block with Signature Cursive Script */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12 space-y-3"
          >
            {/* Top Cursive Script Eyebrow */}
            <span className="font-tempting text-teal-bright text-3xl sm:text-4xl lg:text-5xl font-normal block leading-none drop-shadow-md">
              Empowering Life&apos;s Meaningful Journeys
            </span>

            {/* Main Bold Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.12] text-white">
              Guided by Transparency, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-bright via-teal to-sand">
                Ethical Guidance & Long-Term Trust
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sand-tint/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Future Yatra Private Limited — Parent company to University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra.
            </p>

            {/* 4 Specialist Brands Pill Row */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-small font-bold">
              <span className="bg-white/10 backdrop-blur-md border border-teal/40 px-4 py-1.5 rounded-full text-teal-bright shadow-sm hover:bg-teal hover:text-navy-deep transition-all duration-300">
                University Yatra
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-teal/40 px-4 py-1.5 rounded-full text-teal-bright shadow-sm hover:bg-teal hover:text-navy-deep transition-all duration-300">
                Academic Yatra
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-teal/40 px-4 py-1.5 rounded-full text-teal-bright shadow-sm hover:bg-teal hover:text-navy-deep transition-all duration-300">
                Medico Yatra
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-teal/40 px-4 py-1.5 rounded-full text-teal-bright shadow-sm hover:bg-teal hover:text-navy-deep transition-all duration-300">
                ApplyVisa Yatra
              </span>
            </div>
          </motion.div>

          {/* Hero Showcase Center Layout (Vision Card + Cinematic Video) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
            {/* Vision Statement Glass Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="p-8 sm:p-10 rounded-3xl glass-card-navy border border-teal/40 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal/15 rounded-full blur-3xl group-hover:bg-teal/25 transition-all duration-500" />
                
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal-bright shadow-inner">
                    <Compass className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-tempting text-teal-bright text-xl block leading-none">
                      Our Long-Term Pillar
                    </span>
                    <h2 className="text-2xl font-heading font-extrabold text-white uppercase tracking-wider">
                      Our Vision
                    </h2>
                  </div>
                </div>

                <div className="relative pl-4 border-l-2 border-teal-bright/40 space-y-4">
                  <p className="text-sm sm:text-base text-sand-tint/95 leading-relaxed font-normal">
                    Today, Future Yatra&apos;s primary focus is helping students through education, career development, language training, healthcare education, and visa guidance — delivered through four specialized brands operating under one accountable company.
                  </p>
                  <p className="text-sm sm:text-base text-sand-tint/95 leading-relaxed font-normal">
                    Looking ahead, Future Yatra is positioned as a long-term ecosystem, not a single service offering — as student and family needs evolve, the vision is to extend the same ecosystem to support more of life&apos;s meaningful journeys, guided by the same transparency, ethics, trust, and informed decision-making that define it today.
                  </p>
                  <p className="text-sm sm:text-base text-teal-bright font-medium leading-relaxed">
                    This vision isn&apos;t measured in specific future ventures or unearned promises — it&apos;s measured by one standard: wherever Future Yatra goes next, the same commitment to honest, student-first guidance goes with it.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Embedded Ecosystem Promo Video with 3D Background */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              {/* Interactive 3D Nodes Canvas backdrop */}
              <div className="absolute -inset-12 opacity-75 pointer-events-none">
                <Interactive3DNodes />
              </div>

              {/* Video Player Frame Container */}
              <div className="relative z-10 p-3 sm:p-4 rounded-3xl bg-gradient-to-tr from-teal/40 via-navy-glow/40 to-teal-bright/50 border border-teal/60 shadow-[0_0_60px_rgba(45,189,182,0.3)] group">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-navy-deep border border-white/20 shadow-2xl">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src="/video-2.mp4" type="video/mp4" />
                    <source
                      src="https://static.prod-images.emergentagent.com/jobs/2fea0cc8-c56b-4db9-8e3f-d0c67cbe3a66/videos/3a0e272fe9ae5cdd699da9eaa5a2863fad72e9d595be6716c34f70424b655a24.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* Video Hover Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-20">
                    <button
                      onClick={togglePlay}
                      className="bg-teal hover:bg-teal-bright text-navy-deep p-2.5 rounded-full transition-all shadow-lg flex items-center justify-center"
                      title={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>

                    <div className="text-xs text-white/90 font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-navy-deep/80 backdrop-blur-md border border-white/10">
                      Official Ecosystem Promo
                    </div>

                    <button
                      onClick={toggleMute}
                      className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full backdrop-blur-md transition-all flex items-center justify-center border border-white/20"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Floating Eco System Badge */}
                  <div className="absolute top-3 left-3 bg-navy-deep/85 backdrop-blur-md border border-teal/40 px-3 py-1 rounded-full text-micro text-teal-bright font-bold tracking-wide uppercase flex items-center space-x-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-teal-bright animate-ping" />
                    <span>Future Yatra Ecosystem</span>
                  </div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-bright/25 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* 
          ========================================================================
          SECTION 2: OUR MISSION (Visual 3-Pillar Cards with Custom Generated Assets)
          ========================================================================
        */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-2"
          >
            {/* Top Cursive Script Eyebrow */}
            <span className="font-tempting text-teal-bright text-3xl sm:text-4xl font-normal block leading-none">
              Three Fundamental Pillars
            </span>

            {/* Main Bold Heading */}
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Our Mission
            </h2>

            {/* Subheading */}
            <p className="text-sand-tint/80 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Three core transformations defining how we revolutionize the study abroad and visa experience for students and families worldwide.
            </p>
          </motion.div>

          {/* 3 Pillar Cards Grid with Custom AI Visual Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`glass-card-navy border ${pillar.border} rounded-3xl overflow-hidden group hover:border-teal-bright transition-all duration-500 hover:-translate-y-2.5 shadow-2xl flex flex-col justify-between`}
                >
                  {/* Top Image Showcase Box */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep border-b border-white/10">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                    
                    <span className="absolute bottom-3 right-4 text-4xl font-heading font-extrabold text-white/30 group-hover:text-teal-bright/60 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-3 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-teal-bright transition-colors leading-snug mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-small text-sand-tint/85 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                      <span className="text-xs text-teal-bright font-semibold flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-bright" />
                        <span>Core Operating Standard</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mission Subtext Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy via-navy-deep to-navy border border-teal/30 text-center max-w-4xl mx-auto shadow-xl"
          >
            <p className="text-sm sm:text-base text-sand-tint/95 leading-relaxed font-medium italic">
              &ldquo;This mission shapes how every brand under Future Yatra operates — from the first conversation with a student to the support that continues long after an admission letter or visa is granted.&rdquo;
            </p>
          </motion.div>
        </section>

        {/* 
          ========================================================================
          SECTION 3: OUR CORE PRINCIPLES (Interactive Animated 3D Stacked Carousel)
          ========================================================================
        */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 space-y-2"
          >
            {/* Top Cursive Script Eyebrow */}
            <span className="font-tempting text-teal-bright text-3xl sm:text-4xl font-normal block leading-none">
              8 Foundational Pillars
            </span>

            {/* Main Bold Heading */}
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Our Core Principles
            </h2>

            <p className="text-sand-tint/80 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Practical principles visible in how Future Yatra actually operates every single day.
            </p>
          </motion.div>


          {/* 3D Stacked Animated Card Carousel Container */}
          <div
            className="relative w-full max-w-6xl mx-auto min-h-[520px] sm:min-h-[560px] flex items-center justify-center py-4"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Arrow Buttons */}
            <button
              onClick={prevValueCard}
              className="absolute left-1 sm:-left-8 top-1/2 -translate-y-1/2 z-40 bg-navy-deep/90 hover:bg-teal text-teal-bright hover:text-navy-deep p-3.5 sm:p-4 rounded-full border border-teal/40 shadow-[0_0_30px_rgba(45,189,182,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Previous Principle"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextValueCard}
              className="absolute right-1 sm:-right-8 top-1/2 -translate-y-1/2 z-40 bg-navy-deep/90 hover:bg-teal text-teal-bright hover:text-navy-deep p-3.5 sm:p-4 rounded-full border border-teal/40 shadow-[0_0_30px_rgba(45,189,182,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Next Principle"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Stacked Cards Layout with 3D Perspective */}
            <div className="relative w-full h-[480px] sm:h-[510px] flex items-center justify-center perspective-1000">
              {valuesList.map((val, idx) => {
                // Calculate relative index position (-1, 0, 1, etc.)
                const total = valuesList.length;
                let offset = (idx - activeValueIndex + total) % total;
                if (offset > total / 2) offset -= total;

                // Determine display states for Center (0), Left (-1), Right (1), or Offscreen
                const isCenter = offset === 0;
                const isLeft = offset === -1 || (activeValueIndex === 0 && idx === total - 1);
                const isRight = offset === 1 || (activeValueIndex === total - 1 && idx === 0);
                const isVisible = isCenter || isLeft || isRight;

                const IconComponent = val.icon;

                return (
                  <motion.div
                    key={val.num}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1.02 : isVisible ? 0.86 : 0.72,
                      x: isCenter ? "0%" : isLeft ? "-54%" : isRight ? "54%" : offset < 0 ? "-115%" : "115%",
                      opacity: isCenter ? 1 : isVisible ? 0.65 : 0,
                      zIndex: isCenter ? 30 : isVisible ? 20 : 10,
                      rotateY: isCenter ? 0 : isLeft ? 8 : isRight ? -8 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 190,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className={`absolute w-[88%] sm:w-[460px] rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${val.color} backdrop-blur-xl border transform-gpu ${
                      isCenter ? "border-teal-bright shadow-[0_0_50px_rgba(45,189,182,0.35)]" : "border-white/20 shadow-xl"
                    } cursor-pointer flex flex-col justify-between`}
                    onClick={() => setActiveValueIndex(idx)}
                  >
                    {/* Top Image Showcase */}
                    <div>
                      <div className="relative h-52 sm:h-56 w-full rounded-2xl overflow-hidden mb-4 bg-navy-deep border border-white/15 shadow-md flex-shrink-0">
                        <Image
                          src={val.image}
                          alt={val.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-teal-bright mb-1.5 leading-snug">
                        {val.title}
                      </h3>

                      <p className="text-xs sm:text-small text-sand-tint/90 leading-relaxed font-normal">
                        {val.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between flex-shrink-0">
                      <span className="text-micro font-bold text-teal-bright tracking-wider uppercase">
                        Future Yatra Operational Standard
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-teal-bright" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-40">
              {valuesList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveValueIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeValueIndex === idx
                      ? "w-8 bg-teal-bright shadow-[0_0_12px_#3FE0D6]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 
          ========================================================================
          SECTION 4: OUR PROMISE & BRAND CTAS (Cinematic Gradient Banner)
          ========================================================================
        */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 lg:p-16 rounded-3xl glass-card-navy border border-teal/40 shadow-[0_0_80px_rgba(45,189,182,0.2)] relative overflow-hidden text-center group"
          >
            {/* Ambient Animated Orbs */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-teal/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-teal/30 transition-all duration-700" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-navy-glow/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
              {/* Top Fancy Cursive Eyebrow */}
              <span className="font-tempting text-teal-bright text-3xl sm:text-4xl lg:text-5xl font-normal block leading-none">
                Our Corporate Pledge
              </span>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                Our Promise to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-bright via-teal to-sand">
                  Every Student & Family
                </span>
              </h2>

              {/* 3 Commitment Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-teal/30 backdrop-blur-md space-y-2 hover:border-teal transition-colors">
                  <div className="flex items-center space-x-2 text-teal-bright font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Radical Transparency</span>
                  </div>
                  <p className="text-xs text-sand-tint/85 leading-relaxed">
                    Committed to honesty, realistic risks, and ethical guidance in every single interaction.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-teal/30 backdrop-blur-md space-y-2 hover:border-teal transition-colors">
                  <div className="flex items-center space-x-2 text-teal-bright font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Continuous Excellence</span>
                  </div>
                  <p className="text-xs text-sand-tint/85 leading-relaxed">
                    Constantly elevating our research, knowledge, processes, and service standards.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-teal/30 backdrop-blur-md space-y-2 hover:border-teal transition-colors">
                  <div className="flex items-center space-x-2 text-teal-bright font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Trust Over Transactions</span>
                  </div>
                  <p className="text-xs text-sand-tint/85 leading-relaxed">
                    Building lifelong relationships based on genuine care, not short-term sales goals.
                  </p>
                </div>
              </div>

              {/* Highlight Quote Box */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy via-navy-deep to-navy border border-white/10 text-sand-tint/95 text-sm sm:text-base leading-relaxed font-normal shadow-xl">
                <Quote className="w-8 h-8 text-teal-bright/30 absolute top-4 left-4 pointer-events-none" />
                <p className="relative z-10 italic max-w-3xl mx-auto">
                  &ldquo;To every student, parent, partner, and institution who works with Future Yatra: we are committed to ethical guidance, transparent communication, and lifelong trust — because these decisions are among the most important of a person&apos;s life.&rdquo;
                </p>
              </div>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/our-story"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-teal to-teal-bright hover:from-teal-bright hover:to-teal text-navy-deep font-heading font-extrabold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(45,189,182,0.4)] hover:scale-105 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/our-story#brands"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-teal/40 font-heading font-extrabold text-sm tracking-wide transition-all backdrop-blur-md hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Explore Our Brands</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 
          ========================================================================
          SECTION 5: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
          ========================================================================
        */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 space-y-2"
          >
            {/* Top Cursive Script Eyebrow */}
            <span className="font-tempting text-teal-bright text-3xl sm:text-4xl font-normal block leading-none">
              Got Questions?
            </span>

            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-2xl glass-card-navy border border-teal/30 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="font-heading font-bold text-white text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teal-bright transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-teal text-navy-deep" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sand-tint/85 text-xs sm:text-small leading-relaxed border-t border-white/10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
