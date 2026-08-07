"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-[#0b172e] text-white border-t border-teal/30 pt-16 pb-12 mt-20 relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-navy-glow/20 rounded-full blur-[140px] pointer-events-none" />

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
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-navy-deep via-navy to-navy-deep border border-teal/30 text-center shadow-lg max-w-4xl mx-auto">
          <p className="text-white text-xs sm:text-small font-medium leading-relaxed">
            Future Yatra Private Limited provides educational counselling and application support services. We do not guarantee admission, visa approval, scholarship, employment outcomes, or permanent residency. All information provided is for guidance purposes only.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-tint/70 gap-2">
          <p>© 2026 Future Yatra Private Limited. All rights reserved.</p>
          <p className="font-semibold text-teal-bright">
            Study Abroad • Test Prep • MBBS • Visa Consulting Group
          </p>
        </div>

      </div>
    </footer>
  );
}
