"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    speed = 4,
    particleColor = "#FFFFFF",
    particleDensity = 40,
  } = props;

  const generatedId = useId();

  // Generate lightweight deterministic particle points
  const particles = React.useMemo(() => {
    return Array.from({ length: particleDensity }).map((_, i) => ({
      id: i,
      x: (i * 37) % 100,
      y: (i * 53) % 100,
      size: minSize + ((i * 17) % (maxSize - minSize + 0.1)),
      duration: 1.5 + ((i * 13) % speed),
      delay: (i * 0.3) % 2,
    }));
  }, [particleDensity, minSize, maxSize, speed]);

  return (
    <div
      id={id || generatedId}
      className={cn("relative overflow-hidden pointer-events-none", className)}
      style={{ background }}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: particleColor,
            boxShadow: `0 0 ${p.size * 2}px ${particleColor}`,
          }}
        />
      ))}
    </div>
  );
};
