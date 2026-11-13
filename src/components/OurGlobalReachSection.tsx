"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Globe2,
  BookOpen,
  GraduationCap,
  Clock,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Sparkles,
  Award,
  FileCheck2,
} from "lucide-react";

interface MarketHub {
  country: string;
  hub: string;
  flag: string;
  timezone: string;
  utcOffset: number; // in hours from UTC
  desc: string;
}

const keyMarkets: MarketHub[] = [
  {
    country: "India",
    hub: "New Delhi",
    flag: "https://flagcdn.com/w160/in.png",
    timezone: "IST",
    utcOffset: 5.5,
    desc: "Our primary operational base and home market.",
  },
  {
    country: "Middle East",
    hub: "Dubai (UAE)",
    flag: "https://flagcdn.com/w160/ae.png",
    timezone: "GST",
    utcOffset: 4,
    desc: "Serving students, professionals and families across the region.",
  },
  {
    country: "Canada",
    hub: "Toronto",
    flag: "https://flagcdn.com/w160/ca.png",
    timezone: "EST",
    utcOffset: -5,
    desc: "Catering to education, visa and immigration-related requirements.",
  },
  {
    country: "Europe",
    hub: "London / Berlin",
    flag: "https://flagcdn.com/w160/eu.png",
    timezone: "GMT / CET",
    utcOffset: 1,
    desc: "Operating across key markets, including the UK, Germany and wider Europe.",
  },
];

const capabilities = [
  {
    metric: "50+",
    label: "Countries",
    title: "Global Destination Network",
    desc: "Access to an international network of education and mobility destinations.",
    icon: Globe2,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    metric: "2000+",
    label: "Courses",
    title: "Multidisciplinary Programs",
    desc: "A broad range of academic programmes across bachelor's, master's and healthcare disciplines.",
    icon: BookOpen,
    gradient: "from-teal to-emerald-600",
  },
  {
    metric: "10+",
    label: "Exams",
    title: "Test Preparation Programmes",
    desc: "Preparation for internationally recognised language proficiency exams & competitive entrance tests.",
    icon: Award,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    metric: "100%",
    label: "Online",
    title: "Worldwide Service Delivery",
    desc: "Services accessible seamlessly across international boundaries with digital onboarding.",
    icon: Laptop,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    metric: "24/7",
    label: "Access",
    title: "Digital Learning Infrastructure",
    desc: "Dedicated learning platforms, student dashboards and student management systems.",
    icon: Layers,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    metric: "Zero",
    label: "Physical Visits",
    title: "End-to-End Online Counselling",
    desc: "Online counselling and visa assistance with document processing handled digitally.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal",
  },
  {
    metric: "4 in 1",
    label: "Connected",
    title: "Integrated Service Coordination",
    desc: "Coordination across business verticals to support connected multi-stage service requirements.",
    icon: FileCheck2,
    gradient: "from-rose-500 to-pink-600",
  },
];

export default function OurGlobalReachSection() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const newTimes: { [key: string]: string } = {};

      keyMarkets.forEach((m) => {
        // Calculate time based on UTC offset
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const targetTime = new Date(utc + 3600000 * m.utcOffset);
        newTimes[m.country] = targetTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      });

      setTimes(newTimes);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24 border-t border-line/60 bg-gradient-to-b from-white via-sand-tint/20 to-white relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="w-96 h-96 rounded-full bg-teal/10 blur-[130px] absolute -top-10 left-10 pointer-events-none" />
      <div className="w-96 h-96 rounded-full bg-navy-glow/10 blur-[130px] absolute -bottom-10 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-teal" />
            <span className="uppercase tracking-wider">Where We Operate</span>
          </div>

          {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
          {/*
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            International Footprint
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Operating Across Key{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
              International Markets.
            </span>
          </h2>
          */}
          {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            International Footprint
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Operating Across Key{" "}
            <span className="text-[#0D9488]">
              International Markets.
            </span>
          </h2>
          {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}

          <p className="text-muted text-small sm:text-body leading-relaxed max-w-2xl mx-auto font-normal pt-1">
            Future Yatra serves clients across strategically important international markets, with an operational focus on India, the Middle East, Canada and Europe. Our online-first business model allows us to deliver services across geographical boundaries and engage with diverse markets.
          </p>

          {/* ==================== OLD GRADIENT UNDERLINE STARTS HERE ==================== */}
          {/*
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-teal to-teal-bright" />
          */}
          {/* ==================== OLD GRADIENT UNDERLINE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING UNDERLINE STARTS HERE ==================== */}
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#0D9488]" />
          {/* ==================== NEW SOLID COUNSELLING UNDERLINE ENDS HERE ==================== */}
        </div>

        {/* ============================================================== */}
        {/* BLOCK A: KEY MARKETS (UY-STYLE TIMEZONE & FLAG HUB CARDS)      */}
        {/* ============================================================== */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
                Our Key Markets
              </h3>
              <p className="text-xs sm:text-small text-muted mt-0.5">
                Primary regional hubs with connected online-first execution.
              </p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-teal-dark bg-teal-tint px-3 py-1 rounded-full border border-teal/20">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>Active Regional Hubs</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyMarkets.map((hub) => (
              <div
                key={hub.country}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-teal/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top: Flag + Country + Timezone Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-10 shrink-0 overflow-hidden rounded-md border border-line shadow-xs">
                        <img
                          src={hub.flag}
                          alt={`${hub.country} flag`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-bold text-navy group-hover:text-teal transition-colors">
                          {hub.country}
                        </h4>
                        <p className="text-[11px] text-muted font-medium">
                          {hub.hub}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full bg-teal-tint px-2 py-0.5 text-[10px] font-bold text-teal-dark border border-teal/20">
                      <Clock className="w-3 h-3 text-teal" />
                      <span>{hub.timezone}</span>
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed font-normal">
                    {hub.desc}
                  </p>
                </div>

                {/* Bottom Live Clock */}
                <div className="mt-4 pt-3.5 border-t border-line/50 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted font-medium">Regional Time:</span>
                  <span className="font-heading text-sm font-bold text-navy tabular-nums">
                    {times[hub.country] || "--:--"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* BLOCK B: OUR SERVICE CAPABILITIES (7 CORE METRIC CAPSULES)     */}
        {/* ============================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
              Our Service Capabilities
            </h3>
            <p className="text-xs sm:text-small text-muted mt-1">
              End-to-end infrastructure powering admissions, coaching, and international mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {capabilities.map((c, idx) => {
              const Icon = c.icon;
              const isSpan = idx === capabilities.length - 1;
              return (
                <div
                  key={c.title}
                  className={`group relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-line shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col justify-between ${
                    isSpan ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-teal-tint border border-teal/20 text-teal flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="text-right">
                        <span className="font-heading text-2xl font-extrabold text-navy block leading-none">
                          {c.metric}
                        </span>
                        <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mt-0.5">
                          {c.label}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-heading text-base font-bold text-navy group-hover:text-teal transition-colors">
                      {c.title}
                    </h4>

                    <p className="text-xs text-muted leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-line/40 flex items-center space-x-1.5 text-[11px] font-semibold text-teal-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    <span>Verified Capability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

