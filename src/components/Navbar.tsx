"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-line/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Future Yatra Logo"
            width={240}
            height={50}
            priority
            className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-small font-semibold text-muted hover:text-navy transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-navy text-white text-small font-semibold px-6 py-3 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_20px_rgba(45,189,182,0.35)] transition-all duration-350 shadow-md group"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-navy hover:text-teal transition-colors duration-150"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-line/80 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-body font-medium text-navy hover:text-teal transition-colors duration-150 py-2 border-b border-line/40"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center space-x-2 bg-navy text-white text-small font-semibold px-6 py-3 rounded-pill hover:bg-navy-glow transition-all duration-150 shadow-md"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-teal-bright" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
