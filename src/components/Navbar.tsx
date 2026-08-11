"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/our-story" },
    { name: "Vision & Values", href: "/vision" },
    { name: "Our Brands", href: "/brands" },
    { name: "Contact Us", href: "/contact" },
    { name: "Partner With Us", href: "/partner" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      {/* Floating Glassmorphic Capsule Island */}
      <div className="pointer-events-auto max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_10px_30px_-10px_rgba(18,36,71,0.12)] hover:shadow-[0_15px_35px_-8px_rgba(45,189,182,0.2)] rounded-full px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between transition-all duration-300 group/nav">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group/logo flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Future Yatra Logo"
            width={240}
            height={50}
            priority
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links with Interactive Hover Pills */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/40">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative px-4 py-2 rounded-full text-small font-semibold text-muted hover:text-navy hover:bg-white hover:shadow-sm transition-all duration-200 group/link flex items-center space-x-1"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Primary CTA Button with Hover Border Gradient */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link href="/contact">
            <HoverBorderGradient
              as="div"
              containerClassName="rounded-full"
              className="bg-white hover:bg-teal-tint/40 text-navy hover:text-teal font-extrabold text-small px-6 py-2.5 rounded-full border border-teal/20 shadow-sm"
            >
              <span>Get Free Consultation</span>
            </HoverBorderGradient>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-navy hover:text-teal bg-slate-100/80 rounded-full transition-colors duration-150"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Card Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden mt-3 max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-5 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-body font-semibold text-navy hover:text-teal hover:bg-teal-tint/50 px-4 py-2.5 rounded-xl transition-all duration-150"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-full w-full"
                className="w-full bg-white hover:bg-teal-tint/40 text-navy hover:text-teal font-extrabold text-small px-6 py-3 rounded-full justify-center border border-teal/20 shadow-sm"
              >
                <span>Get Free Consultation</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
