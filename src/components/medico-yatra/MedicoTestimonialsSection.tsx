"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/lib/medicoData";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface MedicoTestimonialsSectionProps {
  onOpenVideoModal?: (testimonial: typeof TESTIMONIALS_DATA[0]) => void;
  onOpenCounselling?: () => void;
}

export default function MedicoTestimonialsSection({
  onOpenVideoModal,
  onOpenCounselling,
}: MedicoTestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = TESTIMONIALS_DATA;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#0A192F] via-[#023E8A] to-[#0A192F] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none scroll-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top & Bottom Seamless Fade Overlays to Eliminate Sharp Section Division Lines */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-[#0A192F]/80 to-[#0A192F] pointer-events-none z-10" />

      {/* Aurora Background Wave Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <AuroraBackground className="w-full h-full min-h-full bg-transparent text-white" showRadialGradient={false}>
          <div />
        </AuroraBackground>
      </div>

      {/* Background City Skyline Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1477959858617-67f30ac4ce09?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#02A7BB]/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#4DA5EC]/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center space-y-1 mb-6 sm:mb-10">
          <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#FDE68A] font-normal tracking-wide drop-shadow-md">
            Our Client
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-sans tracking-widest uppercase drop-shadow-lg">
            TESTIMONIAL
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/80 font-poppins max-w-md mx-auto pt-1">
            Real stories from students and parents who evaluated Medico Yatra&apos;s guidance.
          </p>
        </div>

        {/* Outer White Line Box Frame with Overlapping Quote Badges */}
        <div className="relative border-2 border-white/40 rounded-3xl p-3 sm:p-8 md:p-10 pt-16 sm:pt-20 mt-14 sm:mt-16 mb-8 transition-all">
          
          {/* Top Left Quote Badge Icon */}
          <div className="absolute -top-5 sm:-top-6 left-6 sm:left-10 w-10 h-10 sm:w-14 sm:h-14 bg-[#0263CC] border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl z-20">
            <Quote className="w-5 h-5 sm:w-7 sm:h-7 fill-white transform scale-x-[-1]" />
          </div>

          {/* Bottom Right Quote Badge Icon */}
          <div className="absolute -bottom-5 sm:-bottom-6 right-6 sm:right-10 w-10 h-10 sm:w-14 sm:h-14 bg-[#0263CC] border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl z-20">
            <Quote className="w-5 h-5 sm:w-7 sm:h-7 fill-white" />
          </div>

          {/* Inner White Main Testimonial Card */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 pt-16 sm:pt-20 shadow-2xl text-slate-800 border border-slate-100">
            
            {/* Overlapping Center Profile Avatar */}
            <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 z-30">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-[#FBBF24] shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="w-full h-full rounded-full p-1 bg-[#0263CC]">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full rounded-full object-cover object-top shadow-inner"
                  />
                </div>
              </div>

              {/* Parent Voice Badge or Video Indicator */}
              {current.parentTag && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#02A7BB] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                  👨‍👩‍👧 Parent Voice
                </span>
              )}
            </div>

            {/* Testimonial Quote Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name + currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Quote Content */}
                <p className="text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed sm:leading-relaxed font-poppins font-normal text-center max-w-2xl mx-auto px-1 sm:px-4">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Footer Info: Name & Role on Left, 5 Stars on Right */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5">
                  <div className="text-center sm:text-left">
                    <h3 className="text-[#0263CC] font-extrabold text-base sm:text-xl font-manjari leading-tight">
                      {current.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium font-poppins mt-0.5">
                      {current.role} <span className="text-slate-400">({current.country})</span>
                    </p>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center space-x-1 text-[#0263CC]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0263CC] text-[#0263CC]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls & Navigation (Left & Right Buttons + Learn More) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-2 order-2 sm:order-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-[#FBBF24]" : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Yellow Action / Learn More Button (Matching Image 2) */}
          <div className="order-1 sm:order-2 flex items-center gap-3">
            {current.video && onOpenVideoModal ? (
              <button
                onClick={() => onOpenVideoModal(current)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:brightness-110 text-[#0A192F] font-black text-xs sm:text-sm tracking-wide uppercase shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Story ({current.videoDuration})</span>
              </button>
            ) : (
              <button
                onClick={onOpenCounselling}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:brightness-110 text-[#0A192F] font-black text-xs sm:text-sm tracking-wide uppercase shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Learn More</span>
                <span className="font-extrabold">»</span>
              </button>
            )}

            {/* Left and Right Carousel Arrow Controls */}
            <div className="flex items-center space-x-2 ml-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
