"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#122447] via-[#0b172e] to-[#050b16] text-white border-t border-teal/30 pt-16 pb-6 mt-20 relative overflow-hidden group">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BRAND HIGHLIGHT STRIP */}
        <div className="pb-12 border-b border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="font-tempting text-teal-bright text-2xl sm:text-3xl font-normal block">
              One Accountable Company
            </span>
            <p className="text-xs sm:text-small text-sand-tint/80 font-normal">
              Empowering students, medical aspirants, and executives worldwide under 4 specialist brands.
            </p>
          </div>

          {/* 4 Brand Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link
              href="/coming-soon?brand=university-yatra"
              className="bg-white/10 hover:bg-teal hover:text-navy border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-bright transition-all duration-300 shadow-sm"
            >
              University Yatra
            </Link>
            <Link
              href="/coming-soon?brand=academic-yatra"
              className="bg-white/10 hover:bg-teal hover:text-navy border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-bright transition-all duration-300 shadow-sm"
            >
              Academic Yatra
            </Link>
            <Link
              href="/coming-soon?brand=medico-yatra"
              className="bg-white/10 hover:bg-teal hover:text-navy border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-bright transition-all duration-300 shadow-sm"
            >
              Medico Yatra
            </Link>
            <Link
              href="/coming-soon?brand=applyvisa-yatra"
              className="bg-white/10 hover:bg-teal hover:text-navy border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-bright transition-all duration-300 shadow-sm"
            >
              ApplyVisa Yatra
            </Link>
          </div>

        </div>

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Future Yatra Logo"
                width={220}
                height={46}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-small text-sand-tint/80 leading-relaxed font-normal">
              Premier global education and visa consulting group empowering students and ambitious executives with top university placements and visa assistance.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-teal-bright font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-bright flex-shrink-0" />
              <span>100% Transparent Counselling</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-wider text-teal-bright font-extrabold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-small text-sand-tint/80">
              <li>
                <Link href="/about" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Sub-Brands Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-wider text-teal-bright font-extrabold">
              Our Brands
            </h4>
            <ul className="space-y-2 text-xs sm:text-small text-sand-tint/80">
              <li>
                <Link href="/coming-soon?brand=university-yatra" className="hover:text-teal-bright hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  <span>University Yatra</span>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon?brand=academic-yatra" className="hover:text-teal-bright hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  <span>Academic Yatra</span>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon?brand=medico-yatra" className="hover:text-teal-bright hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  <span>Medico Yatra</span>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon?brand=applyvisa-yatra" className="hover:text-teal-bright hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                  <span>ApplyVisa Yatra</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-wider text-teal-bright font-extrabold">
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-xs sm:text-small text-sand-tint/80">
              <li>
                <Link href="/privacy" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-teal-bright hover:translate-x-1 inline-block transition-all duration-200">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Compliance Disclaimer Banner */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#101f3d] via-navy to-[#101f3d] border border-teal/25 text-center shadow-lg max-w-4xl mx-auto">
          <p className="text-white text-xs sm:text-small font-medium leading-relaxed">
            Future Yatra Private Limited provides educational counselling and application support services. We do not guarantee admission, visa approval, scholarship, employment outcomes, or permanent residency. All information provided is for guidance purposes only.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-4 pb-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-tint/70 gap-2 border-b border-white/10">
          <p>© 2026 Future Yatra Private Limited. All rights reserved.</p>
          <p className="font-semibold text-teal-bright">
            Study Abroad • Test Prep • MBBS • Visa Consulting Group
          </p>
        </div>

        {/* GLOBAL 7 TIME ZONES LIVE CLOCK WIDGET (INDIA CENTERED & HIGHLIGHTED ABOVE FUTURE YATRA TEXT) */}
        <div className="pt-8 pb-4">
          <GlobalTimeZonesClock />
        </div>

      </div>

      {/* DEVSTUDIO-STYLE GRAND FOOTER BRANDING DISPLAY BANNER (FULL WIDTH & SUBTLE AMBIENT HOVER) */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full relative overflow-hidden pt-6 pb-2 text-center select-none cursor-pointer group/brand"
      >
        {/* Dynamic Soft Light Beam Glow on Cursor Hover */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300 blur-3xl rounded-full"
          style={{
            width: "450px",
            height: "300px",
            left: `${mousePos.x - 225}px`,
            top: `${mousePos.y - 150}px`,
            background: "radial-gradient(circle, rgba(63, 224, 214, 0.22) 0%, rgba(45, 189, 182, 0.08) 60%, transparent 85%)",
            opacity: isHovered ? 0.9 : 0,
          }}
        />

        {/* Ambient Full-Width Background Gradient Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal/15 via-teal/5 to-transparent opacity-0 group-hover/brand:opacity-80 transition-opacity duration-700 pointer-events-none blur-3xl" />

        <div className="relative z-10 w-full overflow-hidden px-0">
          <h2 className="font-heading font-black text-[17.5vw] sm:text-[18.5vw] lg:text-[19.2vw] tracking-tighter leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white/18 via-teal/10 to-transparent transition-all duration-700 group-hover/brand:from-teal-bright/70 group-hover/brand:via-teal/35 group-hover/brand:to-transparent group-hover/brand:drop-shadow-[0_-4px_22px_rgba(63,224,214,0.25)] transform group-hover/brand:scale-[1.01] block w-full text-center">
            Future Yatra
          </h2>
        </div>
      </div>

    </footer>
  );
}



interface TimeZoneItem {
  country: string;
  zone: string;
  isHighlighted?: boolean;
  landmarkName: string;
  landmarkLocation: string;
  landmarkPhoto: string;
  stackX: number;
  stackY: number;
  stackRotate: number;
  stackScale: number;
  stackOpacity: number;
  stackZ: number;
  unfoldX: number;
}

const timeZonesData: TimeZoneItem[] = [
  {
    country: "USA",
    zone: "America/New_York",
    landmarkName: "Statue of Liberty",
    landmarkLocation: "New York",
    landmarkPhoto: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&h=560&fit=crop",
    stackX: -135,
    stackY: 34,
    stackRotate: -14,
    stackScale: 0.80,
    stackOpacity: 0.65,
    stackZ: 10,
    unfoldX: -510,
  },
  {
    country: "Canada",
    zone: "America/Toronto",
    landmarkName: "Banff Park",
    landmarkLocation: "Alberta",
    landmarkPhoto: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=560&fit=crop",
    stackX: -90,
    stackY: 22,
    stackRotate: -9,
    stackScale: 0.88,
    stackOpacity: 0.80,
    stackZ: 20,
    unfoldX: -340,
  },
  {
    country: "UK",
    zone: "Europe/London",
    landmarkName: "Big Ben",
    landmarkLocation: "London",
    landmarkPhoto: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=560&fit=crop",
    stackX: -45,
    stackY: 10,
    stackRotate: -4,
    stackScale: 0.96,
    stackOpacity: 0.92,
    stackZ: 30,
    unfoldX: -170,
  },
  {
    country: "India",
    zone: "Asia/Kolkata",
    isHighlighted: true,
    landmarkName: "Taj Mahal",
    landmarkLocation: "Agra (Global HQ)",
    landmarkPhoto: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=560&fit=crop",
    stackX: 0,
    stackY: 0,
    stackRotate: 0,
    stackScale: 1.06,
    stackOpacity: 1.0,
    stackZ: 40,
    unfoldX: 0,
  },
  {
    country: "Germany",
    zone: "Europe/Berlin",
    landmarkName: "Neuschwanstein",
    landmarkLocation: "Bavaria",
    landmarkPhoto: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=560&fit=crop",
    stackX: 45,
    stackY: 10,
    stackRotate: 4,
    stackScale: 0.96,
    stackOpacity: 0.92,
    stackZ: 30,
    unfoldX: 170,
  },
  {
    country: "Australia",
    zone: "Australia/Sydney",
    landmarkName: "Opera House",
    landmarkLocation: "Sydney",
    landmarkPhoto: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=560&fit=crop",
    stackX: 90,
    stackY: 22,
    stackRotate: 9,
    stackScale: 0.88,
    stackOpacity: 0.80,
    stackZ: 20,
    unfoldX: 340,
  },
  {
    country: "Japan",
    zone: "Asia/Tokyo",
    landmarkName: "Mount Fuji",
    landmarkLocation: "Honshu",
    landmarkPhoto: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=560&fit=crop",
    stackX: 135,
    stackY: 34,
    stackRotate: 14,
    stackScale: 0.80,
    stackOpacity: 0.65,
    stackZ: 10,
    unfoldX: 510,
  },
];

function GlobalTimeZonesClock() {
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [times, setTimes] = React.useState<Record<string, string>>({});
  const [isContainerHovered, setIsContainerHovered] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateTimes = () => {
      const formatted: Record<string, string> = {};
      timeZonesData.forEach((item) => {
        try {
          formatted[item.country] = new Intl.DateTimeFormat("en-US", {
            timeZone: item.zone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(new Date());
        } catch {
          formatted[item.country] = "--:-- --";
        }
      });
      setTimes(formatted);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, []);

  // Auto-center on India when expanded on mobile
  React.useEffect(() => {
    if (isMobile && isContainerHovered && scrollRef.current) {
      const timer = setTimeout(() => {
        if (scrollRef.current && scrollRef.current.children[3]) {
          const indiaElem = scrollRef.current.children[3] as HTMLElement;
          indiaElem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isContainerHovered]);

  // Auto-center on India when expanded on mobile
  React.useEffect(() => {
    if (isMobile && isContainerHovered && scrollRef.current) {
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          const containerWidth = scrollRef.current.offsetWidth;
          const indiaElem = scrollRef.current.children[3] as HTMLElement;
          if (indiaElem) {
            const cardLeft = indiaElem.offsetLeft;
            const cardWidth = indiaElem.offsetWidth;
            scrollRef.current.scrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isContainerHovered]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 relative z-30 overflow-hidden">
      
      {/* AMBIENT AURORA & TECH GRID BACKGROUND EFFECTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[300px] sm:h-[380px] bg-gradient-to-tr from-[#0D9488]/25 via-[#0284C7]/20 to-[#38BDF8]/15 rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none z-0" />

      {/* Eyebrow Header */}
      <div className="text-center mb-8 sm:mb-10 space-y-1.5 relative z-10">
        <span className="font-tempting text-[#2DD4BF] text-2xl sm:text-3xl font-normal block">
          Global Study Destinations
        </span>
        <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Live Destination Time Zones
        </h3>
      </div>

      {/* MOBILE EXPANDED TOUCH CAROUSEL (EXACT SCREENSHOT 1: INDIA CENTERED, UK & GERMANY 60% VISIBLE) */}
      {isMobile && isContainerHovered ? (
        <div
          ref={scrollRef}
          onClick={() => setIsContainerHovered(false)}
          className="w-full transition-all duration-500 py-6 relative z-10 min-h-[380px] flex items-center justify-start gap-4 overflow-x-auto no-scrollbar px-[calc(50vw-65px)] snap-x snap-mandatory"
        >
          {timeZonesData.map((item) => {
            const displayTime = mounted ? times[item.country] || "--:-- --" : "00:00 --";
            const isIndia = item.isHighlighted;

            return (
              <div
                key={item.country}
                className={cn(
                  "flex flex-col items-center gap-3 cursor-pointer group flex-shrink-0 snap-center transition-all duration-300",
                  isIndia ? "scale-105" : "scale-100"
                )}
              >
                {/* Stadium Pill Image Container */}
                <div
                  className={cn(
                    "relative w-[120px] h-44 rounded-full overflow-hidden transition-all duration-500",
                    isIndia
                      ? "border-2 border-[#2DD4BF] shadow-[0_0_35px_rgba(45,189,182,0.55)]"
                      : "border-1.5 border-teal/30 hover:border-[#2DD4BF] shadow-lg"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.landmarkPhoto}
                    alt={item.landmarkName}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale-[95%] contrast-[105%] brightness-[92%] opacity-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Dark Vignette Bottom Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111e]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Landmark Name on Scrim */}
                  <div className="absolute bottom-3 inset-x-2 text-center pointer-events-none">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block truncate">
                      {item.landmarkName}
                    </span>
                  </div>
                </div>

                {/* Info Below Image: Country Name & Live Time */}
                <div className="text-center space-y-0.5 max-w-[140px]">
                  <p className="font-heading font-extrabold text-sm text-white tracking-wide flex items-center justify-center space-x-1">
                    <span>{item.country}</span>
                    {isIndia && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
                      </span>
                    )}
                  </p>

                  <p
                    className={cn(
                      "font-sans font-bold text-xs tracking-normal",
                      isIndia ? "text-[#38BDF8] drop-shadow-sm" : "text-[#2DD4BF]"
                    )}
                  >
                    {displayTime}
                  </p>

                  {isIndia && (
                    <span className="inline-block mt-1 bg-[#2DD4BF]/20 text-[#2DD4BF] text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-[#2DD4BF]/40 uppercase tracking-widest">
                      HQ • IST
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* DESKTOP & MOBILE STACKED LOTUS DECK */
        <div
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => setIsContainerHovered(false)}
          onClick={() => setIsContainerHovered((prev) => !prev)}
          className="w-full max-w-7xl mx-auto transition-all duration-500 py-6 relative z-10 min-h-[380px] sm:min-h-[400px] flex items-center justify-center overflow-visible"
        >
          {timeZonesData.map((item) => {
            const displayTime = mounted ? times[item.country] || "--:-- --" : "00:00 --";
            const isIndia = item.isHighlighted;

            const targetX = isMobile
              ? item.stackX * 0.58
              : isContainerHovered
              ? item.unfoldX
              : item.stackX;

            const targetY = isContainerHovered ? 0 : isMobile ? item.stackY * 0.7 : item.stackY;

            return (
              <motion.div
                key={item.country}
                style={{ zIndex: isContainerHovered ? 20 : item.stackZ }}
                animate={{
                  x: `calc(-50% + ${targetX}px)`,
                  y: targetY,
                  rotate: isContainerHovered ? 0 : item.stackRotate,
                  scale: isContainerHovered
                    ? isIndia
                      ? 1.05
                      : 1
                    : isMobile
                    ? item.stackScale * 0.92
                    : item.stackScale,
                  opacity: isContainerHovered ? 1 : item.stackOpacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                  mass: 0.8,
                }}
                whileHover={{
                  scale: 1.12,
                  y: -12,
                  rotate: 0,
                  opacity: 1,
                  zIndex: 50,
                }}
                className="absolute left-1/2 top-4 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group flex-shrink-0"
              >
                {/* Stadium Pill Image Container */}
                <div
                  className={cn(
                    "relative w-[115px] sm:w-[138px] h-44 sm:h-56 rounded-full overflow-hidden transition-all duration-500",
                    isIndia
                      ? "border-2 border-[#2DD4BF] shadow-[0_0_35px_rgba(45,189,182,0.55)]"
                      : "border-1.5 border-teal/30 group-hover:border-[#2DD4BF] shadow-lg"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.landmarkPhoto}
                    alt={item.landmarkName}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale-[95%] contrast-[105%] brightness-[92%] opacity-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Dark Vignette Bottom Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111e]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Landmark Name on Scrim */}
                  <div className="absolute bottom-3 inset-x-2 text-center pointer-events-none">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block truncate">
                      {item.landmarkName}
                    </span>
                  </div>
                </div>

                {/* Info Below Image: Country Name & Live Time (HIDDEN WHEN STACKED, REVEALED ON EXPAND) */}
                <div
                  className={cn(
                    "text-center space-y-0.5 max-w-[140px] transition-all duration-300",
                    isContainerHovered
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-3 pointer-events-none hidden"
                  )}
                >
                  <p className="font-heading font-extrabold text-sm sm:text-base text-white tracking-wide flex items-center justify-center space-x-1">
                    <span>{item.country}</span>
                    {isIndia && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
                      </span>
                    )}
                  </p>

                  <p
                    className={cn(
                      "font-sans font-bold text-xs sm:text-small tracking-normal",
                      isIndia ? "text-[#38BDF8] drop-shadow-sm" : "text-[#2DD4BF]"
                    )}
                  >
                    {displayTime}
                  </p>

                  {isIndia && (
                    <span className="inline-block mt-1 bg-[#2DD4BF]/20 text-[#2DD4BF] text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-[#2DD4BF]/40 uppercase tracking-widest">
                      HQ • IST
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

    </div>
  );
}
