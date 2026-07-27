"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, GraduationCap } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  university: string;
  country: string;
  image: string;
  quote: string;
  rating: number;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "M.S. Computer Science Student",
      university: "Stanford University",
      country: "United States 🇺🇸",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      quote: "University Yatra and ApplyVisa Yatra transformed my dream into reality. From SOP refining to securing my F-1 visa on the first attempt, their guidance was invaluable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rhea Sen",
      role: "M.D. International Medicine Scholar",
      university: "King's College London",
      country: "United Kingdom 🇬🇧",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      quote: "Medico Yatra made my UK medical placement seamless. Their team handled complex eligibility checks, PLAB prep advice, and visa filing with zero stress.",
      rating: 5,
    },
    {
      id: 3,
      name: "Vikramaditya Rao",
      role: "Global Executive MBA Candidate",
      university: "INSEAD Singapore",
      country: "Singapore 🇸🇬",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      quote: "Academic Yatra's GMAT coaching helped me score 750+, while the executive consulting team helped position my career profile for INSEAD merit scholarships.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <div className="relative glass-card-navy rounded-section p-8 sm:p-12 border border-teal/25 shadow-2xl overflow-hidden">
      {/* Background quote mark */}
      <Quote className="absolute -right-6 -bottom-6 w-48 h-48 text-teal/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-teal/15 pb-6">
          <div className="flex items-center space-x-2 text-micro font-heading uppercase tracking-wider text-teal-bright font-semibold">
            <GraduationCap className="w-4 h-4 text-teal-bright" />
            <span>Success Stories & Alumni Trust</span>
          </div>

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber text-amber" />
            ))}
          </div>
        </div>

        {/* Dynamic Card Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Student Image & Info */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="relative w-24 h-24 rounded-pill overflow-hidden border-2 border-teal-bright p-1 shadow-lg">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover rounded-pill"
                />
              </div>

              <div>
                <h4 className="font-heading text-h3 font-bold text-white tracking-tight">
                  {active.name}
                </h4>
                <p className="text-small text-teal-bright font-medium">
                  {active.role}
                </p>
                <div className="inline-block bg-teal/15 border border-teal/30 px-2.5 py-0.5 rounded-tag text-micro font-semibold text-teal-tint mt-1">
                  {active.university} • {active.country}
                </div>
              </div>
            </div>

            {/* Quote Body */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-body-l sm:text-[20px] text-teal-tint/95 italic leading-relaxed">
                "{active.quote}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-teal/15">
          <div className="flex items-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-pill transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-teal-bright" : "bg-teal/30 hover:bg-teal/60"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-pill bg-navy/60 border border-teal/30 text-teal-bright hover:bg-teal hover:text-navy transition-all duration-150"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-pill bg-navy/60 border border-teal/30 text-teal-bright hover:bg-teal hover:text-navy transition-all duration-150"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
