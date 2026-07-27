"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  numericValue: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function AnimatedStatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats: StatItem[] = [
    { numericValue: 98.4, decimals: 1, suffix: "%", label: "Visa & Admission Success" },
    { numericValue: 50000, suffix: "+", label: "Students Placed Globally" },
    { numericValue: 120, suffix: "+", label: "Global Campus Partners" },
    { numericValue: 4.9, decimals: 1, suffix: " / 5", label: "Student & Parent Rating" },
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <StatCounterCard key={idx} stat={stat} isInView={isInView} />
      ))}
    </div>
  );
}

function StatCounterCard({ stat, isInView }: { stat: StatItem; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.numericValue;
    const duration = 2000; // ms
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = start + (end - start) * currentProgress;

      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isInView, stat.numericValue]);

  const formattedValue =
    stat.decimals !== undefined
      ? count.toFixed(stat.decimals)
      : Math.floor(count).toLocaleString();

  return (
    <div className="glass-card-navy rounded-card p-6 border border-teal/20 text-center card-hover-tier-1 shadow-lg group">
      <div className="font-heading text-[32px] sm:text-h1 font-bold text-teal-bright mb-2 tracking-tight group-hover:scale-105 transition-transform duration-200">
        {stat.prefix || ""}
        {formattedValue}
        {stat.suffix || ""}
      </div>
      <div className="text-small text-teal-tint/80 font-medium">
        {stat.label}
      </div>
    </div>
  );
}
