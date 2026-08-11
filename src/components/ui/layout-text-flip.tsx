"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
}

export const LayoutTextFlip = ({
  text,
  words = ["University Yatra", "Academic Yatra", "Medico Yatra", "ApplyVisa Yatra"],
  duration = 2800,
  className,
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={cn("inline-flex items-center space-x-2.5", className)}>
      {text && (
        <span className="font-heading font-extrabold text-xs sm:text-small tracking-wider uppercase text-navy/90">
          {text}
        </span>
      )}

      <motion.span
        layout
        className="relative inline-flex items-center overflow-hidden rounded-full border border-teal/30 bg-gradient-to-r from-teal-tint/80 to-white px-3 py-1 font-heading text-xs font-bold text-navy tracking-wide shadow-sm"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -24, filter: "blur(6px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{ y: 24, filter: "blur(6px)", opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block whitespace-nowrap text-teal-600 font-extrabold"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
