"use client";

import React, { useRef, useState } from "react";

interface HeroBentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroBentoCard({ children, className = "" }: HeroBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden glass-card-light rounded-card p-8 border border-line shadow-lg transition-all duration-350 ${className}`}
    >
      {/* Tier 2: cursor-following radial glow (Teal Bright opacity) on the hero bento card only */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(450px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(63, 224, 214, 0.22), transparent 75%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
