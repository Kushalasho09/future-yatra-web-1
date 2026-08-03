"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Copy,
  Check,
  Building2,
  Sparkles,
  ShieldCheck,
  Globe,
  Compass,
  ArrowUpRight,
  UserCheck,
  HelpCircle,
  PhoneCall,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Users,
} from "lucide-react";

export default function ContactUsPageClient() {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "University Yatra – Admissions",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [highlightForm, setHighlightForm] = useState(false);

  // Office locations data for real interactive map switcher
  const officeLocations = [
    {
      id: "bengaluru",
      name: "Bengaluru (HQ)",
      tag: "Registered Office & HQ",
      address: "4th Floor, Tech Hub Towers, MG Road, Central Business District, Bengaluru, Karnataka 560001",
      mapUrl: "https://maps.google.com/maps?q=MG+Road,+Bengaluru,+Karnataka,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directUrl: "https://maps.google.com/?q=MG+Road,+Bengaluru,+Karnataka,+India",
      hours: "Mon–Sat: 10:00 AM – 7:00 PM IST",
      phone: "+91 98765 43210",
      status: "🟢 Registered HQ • Open for In-Person Visits",
    },
    {
      id: "delhi",
      name: "Delhi NCR",
      tag: "North India Regional Hub",
      address: "Central Business Tower, Connaught Place, New Delhi, Delhi 110001",
      mapUrl: "https://maps.google.com/maps?q=Connaught+Place,+New+Delhi,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directUrl: "https://maps.google.com/?q=Connaught+Place,+New+Delhi,+India",
      hours: "Mon–Sat: 10:00 AM – 7:00 PM IST",
      phone: "+91 98765 43210",
      status: "🟢 North India Desk • In-Person & Virtual",
    },
    {
      id: "mumbai",
      name: "Mumbai",
      tag: "Western Region Desk",
      address: "Financial Center, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051",
      mapUrl: "https://maps.google.com/maps?q=Bandra+Kurla+Complex,+Mumbai,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directUrl: "https://maps.google.com/?q=Bandra+Kurla+Complex,+Mumbai,+India",
      hours: "Mon–Sat: 10:00 AM – 7:00 PM IST",
      phone: "+91 98765 43210",
      status: "🟢 Western Region • Virtual & By Appointment",
    },
    {
      id: "hyderabad",
      name: "Hyderabad",
      tag: "South Tech & Student Desk",
      address: "Cyber Heights, HITEC City, Hyderabad, Telangana 500081",
      mapUrl: "https://maps.google.com/maps?q=HITEC+City,+Hyderabad,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
      directUrl: "https://maps.google.com/?q=HITEC+City,+Hyderabad,+India",
      hours: "Mon–Sat: 10:00 AM – 7:00 PM IST",
      phone: "+91 98765 43210",
      status: "🟢 Student Desk • Virtual Advisory Active",
    },
  ];

  const [activeLocationId, setActiveLocationId] = useState("bengaluru");
  const selectedLocation = officeLocations.find((loc) => loc.id === activeLocationId) || officeLocations[0];

  // Carousel slides data for interactive visual showcase
  const carouselSlides = [
    {
      id: "brands",
      category: "Our 4 Specialist Brands",
      tag: "4 Specialist Brands",
      cursiveSubtitle: "One Company Standard",
      title: "Explore Our 4 Specialist Brands",
      description: "University admissions, IELTS & PTE test prep, MBBS abroad, and visitor or student visa guidance — all operating under one accountable company.",
      image: "/images/carousel_explore_brands.png",
      badgeColor: "bg-teal/20 text-teal-bright border-teal/40",
      accentGlow: "from-teal/30 via-navy-glow/20 to-transparent",
      accentBorder: "border-teal/50 shadow-[0_0_50px_rgba(45,189,182,0.3)]",
      ctaText: "EXPLORE ALL BRANDS",
      ctaLink: "/brands",
      ctaColor: "bg-teal text-navy hover:bg-teal-bright",
      highlights: [
        { label: "University Yatra", type: "Admissions", icon: "🎓" },
        { label: "Academic Yatra", type: "Test Prep", icon: "📚" },
        { label: "Medico Yatra", type: "MBBS Abroad", icon: "🩺" },
        { label: "ApplyVisa Yatra", type: "Visa Guidance", icon: "🛂" },
      ],
    },
    {
      id: "partner",
      category: "Partner Alliances",
      tag: "Institutional Growth",
      cursiveSubtitle: "Global Ecosystem",
      title: "Partner With Future Yatra Group",
      description: "Are you a global university, high school, agent, or test prep center? Collaborate with India's most transparent, founder-led consulting group.",
      image: "/images/carousel_partner_alliances.png",
      badgeColor: "bg-amber/20 text-amber border-amber/40",
      accentGlow: "from-amber/30 via-navy-glow/20 to-transparent",
      accentBorder: "border-amber/50 shadow-[0_0_50px_rgba(224,162,63,0.3)]",
      ctaText: "BECOME A PARTNER",
      ctaLink: "/partner",
      ctaColor: "bg-amber text-navy hover:bg-amber-400",
      highlights: [
        { label: "Global University Alliances", type: "Direct Outreach", icon: "🌐" },
        { label: "B2B Agent & School Network", type: "Partnerships", icon: "🤝" },
        { label: "Ethical Transparent Operations", type: "Verified", icon: "🛡️" },
        { label: "Joint Global Education Fairs", type: "Events", icon: "✨" },
      ],
    },
    {
      id: "careers",
      category: "Careers & Culture",
      tag: "Join Our Mission",
      cursiveSubtitle: "Life at Future Yatra",
      title: "Build Your Career With Us",
      description: "Join four specialist teams under one accountable company. We are looking for counselors, visa strategists, and growth leaders who value honesty.",
      image: "/images/carousel_careers_team.png",
      badgeColor: "bg-coral/20 text-coral border-coral/40",
      accentGlow: "from-coral/30 via-navy-glow/20 to-transparent",
      accentBorder: "border-coral/50 shadow-[0_0_50px_rgba(232,96,76,0.3)]",
      ctaText: "EXPLORE CAREERS",
      ctaLink: "/coming-soon?brand=careers",
      ctaColor: "bg-coral text-white hover:bg-rose-500",
      highlights: [
        { label: "Education Counselors", type: "Full Time", icon: "👥" },
        { label: "Visa & Test Prep Faculty", type: "Specialists", icon: "🚀" },
        { label: "Continuous Career Growth", type: "Mentorship", icon: "📈" },
        { label: "Founder-Led Collaborative Culture", type: "Workplace", icon: "❤️" },
      ],
    },
    {
      id: "founder",
      category: "Direct Founder Access",
      tag: "Direct Access",
      cursiveSubtitle: "Honesty Over Hype",
      title: "Direct Founder Discovery Sessions",
      description: "Unsure which path fits your goals? Schedule a 1-on-1 discovery session directly with our leadership team for 100% transparent guidance.",
      image: "/images/carousel_founder_guidance.png",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      accentGlow: "from-emerald-500/30 via-navy-glow/20 to-transparent",
      accentBorder: "border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.3)]",
      ctaText: "SCHEDULE DISCOVERY CALL",
      ctaLink: "#contact-form",
      ctaColor: "bg-emerald-500 text-white hover:bg-emerald-400",
      highlights: [
        { label: "100% Free Initial Discovery", type: "No Obligation", icon: "💬" },
        { label: "Parents Welcome to Join", type: "Family Friendly", icon: "👨‍👩‍👧" },
        { label: "Transparent Fee Breakdown", type: "Clarity", icon: "📋" },
        { label: "Personalized Strategy Roadmap", type: "Custom", icon: "🎯" },
      ],
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCarouselPaused, carouselSlides.length]);

  const currentSlide = carouselSlides[activeSlide];

  // Interest options as specified in prompt
  const interestOptions = [
    { id: "uni", label: "University Yatra – Admissions", icon: "🎓" },
    { id: "acad", label: "Academic Yatra – Test Prep", icon: "📚" },
    { id: "med", label: "Medico Yatra – MBBS & Healthcare", icon: "🩺" },
    { id: "visa", label: "ApplyVisa Yatra – Visa Guidance", icon: "🛂" },
    { id: "partner", label: "Partnership Enquiry", icon: "🤝" },
    { id: "careers", label: "Careers", icon: "💼" },
    { id: "other", label: "Something Else", icon: "💬" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1200);
  };

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlightForm(true);
      setTimeout(() => setHighlightForm(false), 2500);
    }
  };

  const faqs = [
    {
      q: "How quickly will I get a response?",
      a: "We read every message personally. You can expect a direct response within 1–2 business days. For urgent queries, reaching us via WhatsApp or phone often yields an answer within hours during working time.",
    },
    {
      q: "I'm not sure which Future Yatra brand I need — can I still contact you here?",
      a: "Absolutely! Simply select 'Something Else' or describe your goals in the message area. Our central team will evaluate your request and immediately connect you with the appropriate brand specialist.",
    },
    {
      q: "Can I speak to someone by phone instead of filling the form?",
      a: "Yes! You can call us directly at +91 98765 43210 during business hours (Mon–Sat, 10 AM–7 PM IST), or start a direct WhatsApp chat using the link above.",
    },
    {
      q: "Are initial counselling sessions free of charge?",
      a: "Yes, your initial discovery and orientation call with Future Yatra is 100% free with complete transparency and zero obligation.",
    },
    {
      q: "Can parents join the consultation session?",
      a: "We strongly encourage parents to join! We believe study-abroad decisions are family journeys, and we ensure parents have complete clarity on costs, safety, and institution credibility.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden selection:bg-teal selection:text-white">
      
      {/* 🌊 SVG BACKGROUND CONTINUITY PATH THREAD */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 3200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 200 C 400 400, 1000 100, 1500 500 C 2000 900, 200 1200, -100 1600 C 400 2000, 1200 1800, 1500 2400 C 1800 2900, 200 3000, -100 3200"
            stroke="url(#gradient-path)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="gradient-path" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DBDB6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3A5EA8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E8604C" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO — "Get in Touch / Let's Find Your Right Starting Point" */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-teal-tint/40 via-white to-white">
        
        {/* Dynamic Orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal/15 rounded-full blur-[120px] animate-orb-1 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-glow/15 rounded-full blur-[120px] animate-orb-2 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >


            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-display font-extrabold tracking-tight text-navy-deep leading-[1.1]">
                Let’s Find Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-navy to-navy-glow">
                  Right Starting Point
                </span>
              </h1>
              
              <p className="font-tempting text-teal text-2xl sm:text-3xl font-normal tracking-wide">
                A journey begins with a real conversation.
              </p>
            </div>

            {/* Emotional Paragraph */}
            <p className="text-body-l sm:text-lg text-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Have a question, or not sure which Future Yatra brand fits your goals? Reach out — we’ll either answer directly or connect you with the right team.
            </p>

            {/* Quick Contact Chips Action Bar */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center space-x-2.5 bg-navy text-white text-small font-semibold px-6 py-3.5 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_25px_rgba(45,189,182,0.4)] transition-all duration-300 shadow-md group"
              >
                <span>Send Us a Message</span>
                <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-teal-tint/80 border border-teal/40 text-navy hover:bg-teal hover:text-navy text-small font-semibold px-5 py-3.5 rounded-pill transition-all duration-300 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-teal fill-teal/20" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center space-x-2 bg-white border border-line text-muted hover:text-navy hover:border-navy text-small font-semibold px-5 py-3.5 rounded-pill transition-all duration-300 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-navy" />
                <span>+91 98765 43210</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-line/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="block font-heading text-lg font-bold text-navy">100%</span>
                <span className="text-xs text-muted">Direct Guidance</span>
              </div>
              <div>
                <span className="block font-heading text-lg font-bold text-navy">&lt; 24h</span>
                <span className="text-xs text-muted">Average Reply</span>
              </div>
              <div>
                <span className="block font-heading text-lg font-bold text-navy">4 Brands</span>
                <span className="text-xs text-muted">Specialist Teams</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Image Card with Parallax & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal via-navy-glow to-coral rounded-[32px] opacity-20 blur-xl animate-pulse" />

              {/* Main Image Surface */}
              <div className="relative rounded-card overflow-hidden shadow-2xl border border-white/40 bg-white">
                <Image
                  src="/images/contact_hero_conversation.png"
                  alt="A student having a warm conversation with a Future Yatra advisor"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Glass Badge Floating Bottom Left */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card-light border border-white/60 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold flex-shrink-0">
                      FY
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy">Future Yatra Central Desk</p>
                      <p className="text-[11px] text-muted">Bengaluru HQ • Supporting All 4 Specialist Brands</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Cue Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted mb-1">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-teal" />
          </motion.div>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: CONTACT DETAILS — "Reach Us Directly" */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header & Live Status Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line pb-8">
            <div className="space-y-3">
              <span className="font-tempting text-teal text-2xl font-normal block">
                Direct Communication
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep">
                Reach Us Directly
              </h2>
              <p className="text-muted text-body max-w-xl">
                Choose the channel that best suits your comfort. We value direct, prompt human connection over automated forms.
              </p>
            </div>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center space-x-3 bg-teal-tint/80 border border-teal/40 px-5 py-3 rounded-2xl shadow-sm self-start md:self-auto">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <div>
                <span className="block text-xs font-bold text-navy">Advisors Active Now</span>
                <span className="text-[11px] text-muted">Average Response Time: Under 2 Hours</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Contact Method Cards Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-card bg-gradient-to-br from-slate-50 to-teal-tint/30 border border-line hover:border-teal/50 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal/15 text-teal flex items-center justify-center group-hover:scale-110 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6 group-hover:animate-bounce" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-muted border border-line">
                  Voice Call
                </span>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-navy">Direct Phone</h3>
                <p className="text-xs text-muted">Speak with our central enquiry coordinator</p>
              </div>

              <div className="pt-2 flex items-center justify-between bg-white p-3 rounded-xl border border-line">
                <span className="font-heading text-base font-bold text-navy-deep">[Phone Number] +91 98765 43210</span>
                <button
                  onClick={() => handleCopy("+91 98765 43210", "phone")}
                  className="p-1.5 text-muted hover:text-teal transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href="tel:+919876543210"
                className="w-full inline-flex items-center justify-center space-x-2 bg-navy text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-navy-glow transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-card bg-gradient-to-br from-slate-50 to-teal-tint/30 border border-line hover:border-teal/50 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-navy/15 text-navy flex items-center justify-center group-hover:scale-110 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-md text-muted border border-line">
                  General Email
                </span>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-navy">General Enquiries</h3>
                <p className="text-xs text-muted">Detailed proposals & document submissions</p>
              </div>

              <div className="pt-2 flex items-center justify-between bg-white p-3 rounded-xl border border-line">
                <span className="font-heading text-sm font-bold text-navy-deep truncate mr-2">
                  [General Email] info@futureyatra.com
                </span>
                <button
                  onClick={() => handleCopy("info@futureyatra.com", "email")}
                  className="p-1.5 text-muted hover:text-teal transition-colors flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href="mailto:info@futureyatra.com"
                className="w-full inline-flex items-center justify-center space-x-2 bg-navy text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-navy-glow transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Email</span>
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-card bg-gradient-to-br from-emerald-50 to-teal-tint/40 border border-emerald-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center group-hover:scale-110 shadow-md transition-all duration-300">
                  <MessageSquare className="w-6 h-6 fill-white/20" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                  Fastest Support
                </span>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-navy">WhatsApp Helpline</h3>
                <p className="text-xs text-muted">Quick chat with an intake advisor</p>
              </div>

              <div className="pt-2 flex items-center justify-between bg-white p-3 rounded-xl border border-emerald-200">
                <span className="font-heading text-base font-bold text-emerald-900">[WhatsApp] +91 98765 43210</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat</span>
              </a>
            </motion.div>

          </div>

          {/* Business Hours & Office Address Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900 text-white p-8 rounded-card border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

            {/* Office Address */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center space-x-2 text-teal-bright text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Registered Office Address</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                [Registered Office Address] Future Yatra Private Limited
              </h3>
              <p className="text-xs sm:text-small text-slate-300 leading-relaxed max-w-xl">
                4th Floor, Tech Hub Towers, MG Road, Central Business District, Bengaluru, Karnataka 560001, India
              </p>
            </div>

            {/* Business Hours */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8 space-y-3 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-teal-bright text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Business Hours</span>
              </div>
              <p className="font-heading text-lg font-bold text-white">
                [Business Hours] Mon–Sat: 10:00 AM – 7:00 PM IST
              </p>
              <p className="text-xs text-slate-400">
                Closed on Sundays & National Holidays. Online enquiries are monitored 24/7.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 3: LOCATION MOMENT — "Where We're Based" (Real Interactive Map) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-teal-tint/30 to-white relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line pb-6">
            <div className="space-y-2">
              <span className="font-tempting text-teal text-2xl font-normal block">
                Geographic Presence & Trust
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep">
                Where We’re Based
              </h2>
              <p className="text-muted text-body max-w-xl">
                Future Yatra Private Limited is proudly headquartered in Bengaluru, India — serving students & families across all 28 states & 8 UTs.
              </p>
            </div>

            {/* City Hub Switcher Pills */}
            <div className="flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-2xl border border-line self-start md:self-auto">
              {officeLocations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-1.5 ${
                    activeLocationId === loc.id
                      ? "bg-navy text-white shadow-md scale-105"
                      : "text-muted hover:text-navy hover:bg-white"
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${activeLocationId === loc.id ? "text-teal-bright" : "text-muted"}`} />
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Map Container Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Interactive City Info Cards */}
            <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  Select Regional Hub to View Map
                </p>
                {officeLocations.map((loc) => {
                  const isSelected = activeLocationId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLocationId(loc.id)}
                      className={`w-full text-left p-4 rounded-card border transition-all duration-300 space-y-2 ${
                        isSelected
                          ? "bg-white border-teal shadow-xl ring-2 ring-teal/20"
                          : "bg-slate-50/80 border-line hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-heading text-small font-bold ${isSelected ? "text-navy" : "text-navy-deep"}`}>
                          {loc.name}
                        </span>
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                          isSelected ? "bg-teal-tint text-teal" : "bg-white text-muted border border-line"
                        }`}>
                          {loc.id === "bengaluru" ? "HQ" : "Desk"}
                        </span>
                      </div>

                      <p className="text-xs text-muted leading-relaxed line-clamp-2">
                        {loc.address}
                      </p>

                      <div className="pt-1 flex items-center justify-between text-[11px]">
                        <span className="text-teal font-semibold">{loc.hours}</span>
                        {isSelected && <span className="text-navy font-bold flex items-center">Active Map <ArrowRight className="w-3 h-3 ml-1" /></span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Founder Trust Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-navy to-navy-deep text-white text-xs space-y-2 shadow-lg">
                <div className="flex items-center space-x-2 text-teal-bright font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Pan-India Virtual & In-Person Advisory</span>
                </div>
                <p className="text-[11px] text-sand-tint/80 leading-relaxed">
                  Visitors and parents are welcome to schedule an in-person discovery session at our Bengaluru registered office.
                </p>
              </div>

            </div>

            {/* Right Side: Real Interactive Google Maps Window */}
            <div className="lg:col-span-8 relative">
              <div className="h-[580px] sm:h-[520px] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-line shadow-2xl relative bg-slate-100 flex flex-col">
                
                {/* Top Glass Control Bar over Map */}
                <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/95 backdrop-blur-md border-b border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-20">
                  <div className="flex items-center space-x-2 text-xs font-bold text-navy">
                    <Globe className="w-4 h-4 text-teal flex-shrink-0" />
                    <span className="truncate">{selectedLocation.tag}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 inline-flex items-center space-x-1">
                      <span>{selectedLocation.status}</span>
                    </span>
                    <a
                      href={selectedLocation.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-teal hover:text-navy transition-colors bg-teal-tint px-2.5 py-1 rounded-lg flex-shrink-0"
                    >
                      <span>Open Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Real Google Maps iFrame */}
                <div className="relative flex-1 w-full h-full">
                  <iframe
                    title={`Google Map for ${selectedLocation.name}`}
                    src={selectedLocation.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[15%] contrast-[105%]"
                  />

                  {/* Floating Location Overlay Card (Bottom Left) - Optimized for Mobile */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md p-3.5 sm:p-4 rounded-2xl glass-card-light border border-white/90 shadow-2xl z-20 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center space-x-2 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal/20 text-teal flex items-center justify-center font-bold text-xs flex-shrink-0">
                          FY
                        </div>
                        <h4 className="font-heading text-xs sm:text-small font-bold text-navy truncate">
                          {selectedLocation.name} — Future Yatra
                        </h4>
                      </div>
                      <span className="text-[10px] text-muted font-bold bg-white px-2 py-0.5 rounded border border-line flex-shrink-0 whitespace-nowrap">
                        Live Location
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-muted leading-relaxed line-clamp-2">
                      {selectedLocation.address}
                    </p>

                    <div className="pt-1.5 flex items-center justify-between border-t border-line/60 text-[11px] sm:text-xs">
                      <span className="text-navy font-semibold truncate mr-2">📞 {selectedLocation.phone}</span>
                      <a
                        href={selectedLocation.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 font-bold text-teal hover:underline flex-shrink-0"
                      >
                        <span>Get Directions</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 4: THE FORM — "Send Us a Message" */}
      {/* ========================================================================= */}
      <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-tempting text-teal text-3xl font-normal block">
              Founder-Led Reassurance
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-deep">
              Send Us a Message
            </h2>
            <p className="text-body-l text-muted">
              We read every message personally. Tell us about your goals or questions, and we’ll respond with clear, honest direction.
            </p>
          </div>

          {/* Split Screen Form Container */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 rounded-[32px] overflow-hidden border transition-all duration-500 ${
              highlightForm
                ? "border-teal shadow-[0_0_50px_rgba(45,189,182,0.4)] ring-4 ring-teal/30"
                : "border-line shadow-2xl bg-white"
            }`}
          >
            
            {/* Left Side: Calm Supporting Workspace Visual + Founder Reassurance */}
            <div className="lg:col-span-5 bg-gradient-to-b from-navy-deep to-navy text-white p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden">
              
              {/* Background Workspace Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/contact_form_workspace.png"
                  alt="Calm desk workspace setting soft light"
                  fill
                  className="object-cover opacity-20 hover:opacity-25 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-transparent" />
              </div>

              <div className="relative z-10 space-y-8">
                {/* Brand Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs text-teal-bright font-bold">
                  <ShieldCheck className="w-4 h-4 text-teal-bright" />
                  <span>Direct Founder & Advisor Access</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                    "We read every message personally — no automated dead ends."
                  </h3>
                  <p className="text-xs sm:text-small text-sand-tint/80 leading-relaxed font-normal">
                    Whether you are an ambitious student aiming for Ivy League admission, a medical student looking for MBBS abroad, or a partner organisation — your enquiry receives real human attention.
                  </p>
                </div>

                {/* What to expect checklist */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs sm:text-small text-sand-tint font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-bright flex-shrink-0" />
                    <span>Response within 1–2 business days</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-small text-sand-tint font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-bright flex-shrink-0" />
                    <span>No sales calls or hidden pressure</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-small text-sand-tint font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-bright flex-shrink-0" />
                    <span>Direct connection to brand specialist</span>
                  </div>
                </div>
              </div>

              {/* Founder quote at bottom */}
              <div className="relative z-10 pt-8 border-t border-white/15 mt-8 space-y-2">
                <p className="font-tempting text-teal-bright text-xl font-normal">
                  — The Future Yatra Team
                </p>
                <p className="text-[11px] text-sand-tint/70">
                  Future Yatra Private Limited • Bengaluru, India
                </p>
              </div>

            </div>

            {/* Right Side: Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white relative z-10 flex flex-col justify-center">
              
              {formState === "success" ? (
                /* Success Animated State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-navy-deep">
                      Enquiry Received!
                    </h3>
                    <p className="text-body text-muted max-w-md mx-auto">
                      Thank you, <strong className="text-navy">{formData.fullName}</strong>. Your message has been logged in our priority queue. A specialist from Future Yatra will reach out shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-tint/50 border border-teal/30 text-xs text-navy max-w-md mx-auto">
                    📧 Confirmation sent to: <span className="font-bold text-teal">{formData.email}</span>
                  </div>

                  <button
                    onClick={() => {
                      setFormState("idle");
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        interest: "University Yatra – Admissions",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center space-x-2 bg-navy text-white text-xs font-semibold px-6 py-3 rounded-pill hover:bg-navy-glow transition-colors"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Full Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-navy">
                        Full Name <span className="text-coral">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy">
                        Email Address <span className="text-coral">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. ananya@example.com"
                        className="w-full px-4 py-3 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy">
                      Phone Number <span className="text-muted font-normal">(With WhatsApp)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all"
                    />
                  </div>

                  {/* Segmented Brand / Category Interest Selector */}
                  <div className="space-y-3">
                    <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-navy">
                      I'm interested in: <span className="text-coral">*</span>
                    </label>
                    
                    {/* Visual Segmented Chips for Desktop/Tablet */}
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, interest: option.label }))}
                          className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 flex items-center space-x-1.5 ${
                            formData.interest === option.label
                              ? "bg-navy text-white border-navy shadow-sm scale-105"
                              : "bg-slate-50 text-muted border-line hover:border-teal hover:text-navy"
                          }`}
                        >
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Native Select Fallback */}
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all bg-white font-medium text-navy"
                    >
                      {interestOptions.map((option) => (
                        <option key={option.id} value={option.label}>
                          {option.icon} {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy">
                      Your Message <span className="text-coral">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your target degree, country preference, visa situation, or partnership idea..."
                      className="w-full px-4 py-3 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button with Micro-Interaction */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-navy via-navy to-navy-glow text-white text-body font-bold px-8 py-4 rounded-pill hover:shadow-[0_0_30px_rgba(45,189,182,0.4)] transition-all duration-300 disabled:opacity-75 shadow-lg group"
                  >
                    {formState === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-teal-bright group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-muted">
                    🔒 We respect your privacy. No spam ever. See our <Link href="/privacy" className="underline hover:text-teal">Privacy Policy</Link>.
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 5: INTERACTIVE SHOWCASE CAROUSEL — "Looking for Something Specific?" */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-deep via-[#0a1529] to-navy-deep text-white relative z-10 overflow-hidden">
        
        {/* Dynamic Background Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-teal/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-coral/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Header Title & Category Tab Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div className="space-y-3">
              <span className="font-tempting text-teal-bright text-3xl font-normal block">
                Portals & Pathways
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Looking for Something Specific?
              </h2>
              <p className="text-sand-tint/80 text-body max-w-xl font-normal">
                Swipe or select a category below to explore dedicated gateways for our specialist brands, global alliances, and direct founder access.
              </p>
            </div>
          </div>

          {/* Main Stage Interactive Carousel Box */}
          <div
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            className={`relative rounded-[36px] overflow-hidden border bg-gradient-to-br from-navy-deep/90 via-navy to-[#0c1c38] shadow-2xl transition-all duration-500 ${currentSlide.accentBorder}`}
          >
            
            {/* Top Progress Bar */}
            <div className="h-1.5 w-full bg-white/10 relative overflow-hidden">
              <motion.div
                key={activeSlide}
                initial={{ width: "0%" }}
                animate={{ width: isCarouselPaused ? "100%" : "100%" }}
                transition={{ duration: isCarouselPaused ? 0 : 5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-teal via-teal-bright to-coral"
              />
            </div>

            {/* Slide Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              
              {/* Left Column: Custom Gemini Generated Image Stage */}
              <div className="lg:col-span-6 relative h-80 sm:h-[480px] lg:h-auto overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-deep/60 lg:to-navy-deep" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Slide Text & Interactive Action Controls */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 relative z-20">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    {/* Subtitle & Title */}
                    <div className="space-y-2">
                      <span className="font-tempting text-teal-bright text-3xl font-normal block">
                        {currentSlide.cursiveSubtitle}
                      </span>
                      <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                        {currentSlide.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-small text-sand-tint/90 leading-relaxed font-normal">
                      {currentSlide.description}
                    </p>

                    {/* Interactive Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {currentSlide.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-sand-tint hover:bg-white/10 transition-colors"
                        >
                          <span className="flex items-center space-x-2 truncate">
                            <span className="text-base">{item.icon}</span>
                            <span className="truncate">{item.label}</span>
                          </span>
                          <span className="text-[10px] text-teal-bright font-bold uppercase ml-2 flex-shrink-0">
                            {item.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Action Row: Arrow Controls & Primary CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Primary CTA Link */}
                  {currentSlide.ctaLink.startsWith("#") ? (
                    <button
                      onClick={scrollToForm}
                      className={`inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-extrabold text-xs sm:text-small transition-all duration-300 shadow-xl group ${currentSlide.ctaColor}`}
                    >
                      <span>{currentSlide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <Link
                      href={currentSlide.ctaLink}
                      className={`inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-extrabold text-xs sm:text-small transition-all duration-300 shadow-xl group ${currentSlide.ctaColor}`}
                    >
                      <span>{currentSlide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}

                  {/* Navigation Arrows & Pause Indicator */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                      className="w-11 h-11 rounded-full bg-white/10 hover:bg-teal hover:text-navy border border-white/20 flex items-center justify-center transition-all duration-300 text-white shadow-md"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setActiveSlide((prev) => (prev + 1) % carouselSlides.length)}
                      className="w-11 h-11 rounded-full bg-white/10 hover:bg-teal hover:text-navy border border-white/20 flex items-center justify-center transition-all duration-300 text-white shadow-md"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 6: TRUST / RESPONSE-TIME — "What Happens Next" */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-teal-tint/20 to-white relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-tempting text-teal text-3xl font-normal block">
              Transparent Workflow
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep">
              What Happens Next
            </h2>
            <p className="text-muted text-body">
              No endless waiting or automated silence. Here is our step-by-step commitment when you submit an enquiry.
            </p>
          </div>

          {/* Timeline Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative Steps */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1 */}
              <div className="flex items-start space-x-6 p-6 rounded-card bg-white border border-line shadow-md hover:border-teal transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal text-white font-heading font-extrabold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Message Received & Logged
                  </h3>
                  <p className="text-xs sm:text-small text-muted leading-relaxed">
                    Your request enters our central intake desk immediately. If you selected a specific brand (e.g. University Yatra or ApplyVisa Yatra), it is routed directly to that specialist team.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6 p-6 rounded-card bg-white border border-line shadow-md hover:border-navy transition-all">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white font-heading font-extrabold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Specialist Review
                  </h3>
                  <p className="text-xs sm:text-small text-muted leading-relaxed">
                    A dedicated senior advisor or founder lead reviews your background, preferences, or questions to ensure tailored responses rather than canned templates.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6 p-6 rounded-card bg-white border border-line shadow-md hover:border-coral transition-all">
                <div className="w-12 h-12 rounded-2xl bg-coral text-white font-heading font-extrabold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    Direct Response & Discovery Call
                  </h3>
                  <p className="text-xs sm:text-small text-muted leading-relaxed">
                    You receive a personal email or phone/WhatsApp message within 1–2 business days with clear next steps and an option to schedule a free 1-on-1 discovery call.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Human Reassurance Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-card overflow-hidden border border-white/60 shadow-2xl bg-white">
                <Image
                  src="/images/contact_trust_human.png"
                  alt="Future Yatra advisor listening attentively to student and parent"
                  width={600}
                  height={600}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 bg-navy text-white space-y-2">
                  <p className="font-tempting text-teal-bright text-2xl font-normal">
                    "Honesty over hype — always."
                  </p>
                  <p className="text-xs text-sand-tint/80 leading-relaxed">
                    We tell you what you need to know about universities, visas, and costs, never just what sounds nice.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 7: FAQ — "Frequently Asked Questions" */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-tempting text-teal text-3xl font-normal block">
              Clear Answers
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-body">
              Everything you need to know before getting in touch.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-teal bg-teal-tint/20 shadow-md"
                      : "border-line bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-navy">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-teal text-white rotate-180" : "bg-slate-100 text-navy"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-6 pb-6 text-xs sm:text-small text-muted leading-relaxed border-t border-teal/20 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 8: FINAL CTA — "Start the Conversation" */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-deep via-navy to-[#0b172e] text-white relative z-10 overflow-hidden">
        
        {/* Background CTA Invitation Image Overlay - Clear at top, smooth blur gradient below */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact_cta_invitation.png"
            alt="Golden pathway towards glowing horizon"
            fill
            priority
            className="object-cover opacity-85 backdrop-blur-[1px]"
          />
          {/* Smooth 10 -> 0 Gradient Blur & Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-navy-deep/70 to-navy-deep" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">

          <div className="space-y-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Start the Conversation Today
            </h2>
            
            <p className="font-tempting text-teal-bright text-3xl sm:text-4xl font-normal">
              Reach out — we're ready when you are.
            </p>
          </div>

          <p className="text-body-l sm:text-lg text-sand-tint/90 max-w-2xl mx-auto leading-relaxed">
            Whether you need admissions guidance, test preparation, medical university consultation, or visa advice — Future Yatra is here to walk every step with you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-teal text-navy text-body font-extrabold px-8 py-4 rounded-pill hover:bg-teal-bright hover:shadow-[0_0_35px_rgba(63,224,214,0.6)] transition-all duration-300 shadow-xl group"
            >
              <span>Fill Contact Form</span>
              <ArrowRight className="w-5 h-5 text-navy group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-body font-semibold px-8 py-4 rounded-pill transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-teal-bright" />
              <span>Call +91 98765 43210</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
