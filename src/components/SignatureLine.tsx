"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SignatureLine() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (window.innerWidth >= 768 && pathRef.current && !prefersReducedMotion) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: "8, 8",
        strokeDashoffset: pathLength,
      });

      const animation = gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-teal/50 pointer-events-none z-10" />
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden md:block absolute left-8 top-0 bottom-0 w-12 pointer-events-none z-10 overflow-visible"
    >
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2DBDB6" />
            <stop offset="100%" stopColor="#3FE0D6" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M 24 0 V 4500"
          fill="none"
          stroke="url(#signatureGradient)"
          strokeWidth="3"
          className="signature-svg-path"
        />
      </svg>

      {/* Pulsing circular nodes */}
      <div className="absolute left-[18px] top-[400px] w-3 h-3 rounded-full bg-teal-bright animate-pulse shadow-[0_0_10px_#3FE0D6]" />
      <div className="absolute left-[18px] top-[1100px] w-3 h-3 rounded-full bg-teal-bright animate-pulse shadow-[0_0_10px_#3FE0D6]" />
      <div className="absolute left-[18px] top-[1800px] w-3 h-3 rounded-full bg-teal-bright animate-pulse shadow-[0_0_10px_#3FE0D6]" />
      <div className="absolute left-[18px] top-[2600px] w-3 h-3 rounded-full bg-teal-bright animate-pulse shadow-[0_0_10px_#3FE0D6]" />
    </div>
  );
}
