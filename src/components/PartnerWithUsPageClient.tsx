"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  GraduationCap,
  BookOpen,
  Users,
  Landmark,
  Compass,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
  ChevronDown,
  ArrowUpRight,
  HelpCircle,
  Send,
  Globe2,
  Briefcase,
  Layers,
  HeartHandshake,
  Lock,
  PhoneCall,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

import SignatureLine from "@/components/SignatureLine";
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";

// Types for form state
type PartnerCategory =
  | "University"
  | "School"
  | "College"
  | "Institute"
  | "Agent"
  | "Financial Institution"
  | "Other";

export default function PartnerWithUsPageClient() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Selected Category State for Form
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>("University");

  // Form input state
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate direct secure routing to partnerships team
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  // Copy to clipboard helper
  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  // Smooth scroll to form & pre-select category
  const selectCategoryAndScroll = (category: PartnerCategory) => {
    setSelectedCategory(category);
    const formElement = document.getElementById("enquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Partner Categories Data
  const partnerCategories = [
    {
      id: "University" as PartnerCategory,
      title: "Universities",
      tagline: "Global Academic Alliances",
      description:
        "Connect with highly qualified, prospective students across undergraduate, postgraduate, and research programs worldwide.",
      icon: GraduationCap,
      color: "from-blue-500/10 to-teal/10",
      accentBorder: "group-hover:border-teal",
      badgeBg: "bg-teal/15 text-navy-deep",
      points: [
        "Qualified student lead matching",
        "Direct admission guidance drives",
        "Joint campus awareness webinars",
      ],
    },
    {
      id: "School" as PartnerCategory,
      title: "Schools & Colleges",
      tagline: "Career & Guidance Partnerships",
      description:
        "Provide your senior secondary and college students with unbiased, high-touch study abroad counseling and career planning.",
      icon: Building2,
      color: "from-navy/10 to-blue-600/10",
      accentBorder: "group-hover:border-navy",
      badgeBg: "bg-navy/10 text-navy",
      points: [
        "In-campus career discovery workshops",
        "Dedicated student mentorship desks",
        "Parent orientation sessions",
      ],
    },
    {
      id: "Institute" as PartnerCategory,
      title: "Institutes",
      tagline: "Training & Skill Synergies",
      description:
        "Offer complementary test preparation (IELTS/PTE/GRE), language training, or specialized skill development programs.",
      icon: BookOpen,
      color: "from-amber/15 to-sand/40",
      accentBorder: "group-hover:border-amber",
      badgeBg: "bg-amber/20 text-navy-deep",
      points: [
        "Cross-promotional training pathways",
        "Integrated test prep modules",
        "Joint student certification support",
      ],
    },
    {
      id: "Agent" as PartnerCategory,
      title: "Agents & Advisors",
      tagline: "Transparent B2B Ecosystem",
      description:
        "Work within the trusted Future Yatra ecosystem with ethical standard operating procedures, sub-agency clarity, and shared growth.",
      icon: Users,
      color: "from-teal/15 to-emerald-500/10",
      accentBorder: "group-hover:border-teal-bright",
      badgeBg: "bg-teal-bright/20 text-navy-deep",
      points: [
        "Direct portal & application tracking",
        "Zero hidden commission terms",
        "Dedicated institutional desk support",
      ],
    },
    {
      id: "Financial Institution" as PartnerCategory,
      title: "Financial Institutions & Banks",
      tagline: "Loan & Financing Alliances",
      description:
        "Connect students and families with competitive education loan products, forex solutions, and tailored financial guidance.",
      icon: Landmark,
      color: "from-purple-500/10 to-navy/10",
      accentBorder: "group-hover:border-purple-400",
      badgeBg: "bg-purple-100 text-purple-900",
      points: [
        "Fast-track student loan processing",
        "Pre-visa disbursement verification",
        "Flexible collateral collateral options",
      ],
    },
    {
      id: "Other" as PartnerCategory,
      title: "Other Organizations",
      tagline: "Tailored Synergies & Alliances",
      description:
        "If your organization doesn't fit the above categories, tell us about your vision and how we can collaborate strategically.",
      icon: Compass,
      color: "from-coral/10 to-amber/10",
      accentBorder: "group-hover:border-coral",
      badgeBg: "bg-coral/15 text-coral",
      points: [
        "Custom B2B collaboration models",
        "Corporate employee education benefits",
        "Healthcare & specialized career tracks",
      ],
    },
  ];

  // 4 Specialist Brands Overview
  const specialistBrands = [
    {
      name: "University Yatra",
      focus: "Undergraduate & Postgraduate Admissions",
      desc: "Direct partner university placements, profile evaluation, and SOP craftsmanship.",
      color: "border-teal/40 bg-teal-tint/50",
    },
    {
      name: "Academic Yatra",
      focus: "Standardized Test Prep & Academic Mentorship",
      desc: "IELTS, PTE, TOEFL, and GRE coaching with personalized learning roadmaps.",
      color: "border-navy/30 bg-navy/5",
    },
    {
      name: "Medico Yatra",
      focus: "Global MBBS & Healthcare Careers",
      desc: "NMC/WDOMS approved medical university admissions across Russia, Georgia, Kazakhstan & beyond.",
      color: "border-coral/40 bg-coral/5",
    },
    {
      name: "ApplyVisa Yatra",
      focus: "Visa Guidance & Documentation",
      desc: "End-to-end student, spouse, and visitor visa documentation auditing.",
      color: "border-amber/40 bg-amber/5",
    },
  ];

  // How It Works Steps
  const howItWorksSteps = [
    {
      number: "01",
      title: "Submit Enquiry Form",
      description:
        "Fill out the short enquiry form below, and select the category that best describes your organization and strategic objectives.",
      badge: "Form Submission",
    },
    {
      number: "02",
      title: "Direct Team Evaluation",
      description:
        "Your enquiry is sent directly to our senior leadership & partnerships team for internal review within 24 business hours.",
      badge: "Fast Evaluation",
    },
    {
      number: "03",
      title: "Collaborative Strategic Dialogue",
      description:
        "We reach out to schedule an exploratory discussion to understand your goals and define mutually beneficial next steps.",
      badge: "Strategy Call",
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What kind of organizations does Future Yatra partner with?",
      answer:
        "Future Yatra welcomes partnership enquiries from universities, schools, colleges, institutes, agents, financial institutions, and other organizations interested in working with our ecosystem.",
    },
    {
      question: "What happens after I submit a partnership enquiry?",
      answer:
        "Your enquiry is sent directly to our team, and we'll reach out to you to understand your goals and discuss next steps.",
    },
    {
      question: "Can I contact Future Yatra about a partnership without filling the form?",
      answer:
        "Yes. You're welcome to call us directly using the phone number listed on this page (+91 88000 00000) or email our partnerships desk at partnerships@futureyatra.com.",
    },
    {
      question: "How does Future Yatra ensure compliance and ethical transparency in B2B partnerships?",
      answer:
        "Future Yatra Private Limited operates under strict corporate compliance and zero-misrepresentation policies. All partnership terms are backed by formal Memorandums of Understanding (MoUs) or clear contractual frameworks with transparent standard operating procedures.",
    },
    {
      question: "Is there any fee or financial commitment required to submit an enquiry?",
      answer:
        "No. Partnership initial discussions and enquiry evaluations are 100% free of charge. We explore strategic alignment before proposing any operational model.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* SIGNATURE BACKGROUND LINES & GLOW ORBS */}
      <SignatureLine />
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[140px] pointer-events-none animate-orb-1" />
      <div className="absolute top-[800px] right-10 w-[450px] h-[450px] bg-navy-glow/15 rounded-full blur-[130px] pointer-events-none animate-orb-2" />
      <div className="absolute top-[2200px] left-10 w-[500px] h-[500px] bg-amber/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* ==================================================================== */}
        {/* SECTION 1: HERO HEADER — "Become a Partner"                         */}
        {/* ==================================================================== */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Category Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeTier1 }}
                className="inline-flex items-center space-x-2.5 bg-navy text-white px-4 py-2 rounded-pill font-heading text-xs sm:text-micro uppercase tracking-wider font-semibold shadow-md"
              >
                <Sparkles className="w-4 h-4 text-teal-bright animate-pulse" />
                <span>B2B & Institutional Alliances</span>
              </motion.div>

              {/* H1 Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-display font-extrabold text-navy-deep leading-tight tracking-tight"
              >
                Become a Partner — <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-teal to-navy-glow">
                  Future Yatra Private Limited
                </span>
              </motion.h1>

              {/* Cursive Subtitle Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: easeTier1 }}
                className="font-tempting text-2xl sm:text-3xl text-teal font-normal -mt-2"
              >
                Building Global Synergy & Student Success Together
              </motion.p>

              {/* Main Body Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                className="text-body-l sm:text-lg text-muted leading-relaxed max-w-2xl font-normal"
              >
                Future Yatra Private Limited works with a wide range of organizations to support students and families across education, test preparation, healthcare careers, and visa guidance. If your organization is interested in working with us, we&apos;d like to hear from you.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeTier1 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <MagneticButton>
                  <a
                    href="#enquiry-form-section"
                    className="inline-flex items-center justify-center space-x-3 bg-navy hover:bg-navy-glow text-white font-heading text-body font-semibold px-8 py-4 rounded-pill shadow-lg hover:shadow-[0_0_25px_rgba(45,189,182,0.4)] transition-all duration-350 group"
                  >
                    <span>Submit Partner Enquiry</span>
                    <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </MagneticButton>

                <a
                  href="#direct-contact"
                  className="inline-flex items-center justify-center space-x-2 bg-teal-tint/80 hover:bg-teal-tint text-navy font-heading text-body font-semibold px-7 py-4 rounded-pill border border-teal/40 hover:border-teal transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-teal" />
                  <span>Talk Directly to Team</span>
                </a>
              </motion.div>

              {/* Trust Micro-Badge Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted font-medium border-t border-line/60"
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-teal flex-shrink-0" />
                  <span>100% Corporate Governance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe2 className="w-4 h-4 text-navy flex-shrink-0" />
                  <span>Single Unified Ecosystem</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span>Direct Leadership Review</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: 3D Card Visual */}
            <div className="lg:col-span-5 relative">
              <Card3DTilt className="w-full">
                <div className="relative rounded-card overflow-hidden shadow-2xl border border-teal/20 bg-navy-deep group">
                  <Image
                    src="/images/partner_hero_b2b.png"
                    alt="Future Yatra Partnership Alliance"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glassmorphic Overlay Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 glass-card-navy rounded-2xl text-white space-y-2 border border-teal/30">
                    <div className="flex items-center justify-between">
                      <span className="text-micro uppercase font-extrabold tracking-widest text-teal-bright">
                        Future Yatra B2B Synergy
                      </span>
                      <span className="w-2 h-2 rounded-full bg-teal-bright animate-ping" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Institutional & Strategic Collaborations
                    </h3>
                    <p className="text-xs text-sand-tint/80 leading-relaxed font-normal">
                      Partnering with universities, schools, agents, and financial leaders to streamline student journeys globally.
                    </p>
                  </div>
                </div>
              </Card3DTilt>

              {/* Floating Floating Stat Badge */}
              <div className="absolute -top-5 -left-5 hidden sm:flex items-center space-x-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-line shadow-xl z-30 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center text-teal">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted font-medium">Alliance Network</div>
                  <div className="font-heading text-small font-extrabold text-navy">
                    50+ Active Organizations
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: WHO CAN PARTNER WITH US (Interactive Persona Cards)      */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 border-t border-line/80 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Partner Ecosystem
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-deep tracking-tight">
              Who Can Partner With Us
            </h2>
            <p className="text-body-l sm:text-lg text-muted leading-relaxed font-normal pt-2">
              We welcome partnership enquiries from diverse organizations across the education, financial, and student support value chain. Select your category to submit a tailored enquiry.
            </p>
          </div>

          {/* 6 Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.id}
                  className={`group relative rounded-card p-7 bg-white border border-line/90 shadow-sm hover:shadow-xl transition-all duration-350 flex flex-col justify-between card-hover-tier-1 ${cat.accentBorder}`}
                >
                  <div className="space-y-5">
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${cat.color} text-navy-deep`}>
                        <IconComponent className="w-6 h-6 text-navy" />
                      </div>
                      <span className={`text-micro font-extrabold px-3 py-1 rounded-full ${cat.badgeBg}`}>
                        {cat.tagline}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy-deep group-hover:text-navy transition-colors duration-200">
                        {cat.title}
                      </h3>
                      <p className="text-small text-muted leading-relaxed mt-2 font-normal">
                        {cat.description}
                      </p>
                    </div>

                    {/* Key Bullet Points */}
                    <ul className="space-y-2 pt-2 border-t border-line/60 text-xs text-muted">
                      {cat.points.map((pt, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Quick Select & Scroll Button */}
                  <div className="pt-6 mt-6 border-t border-line/60">
                    <button
                      onClick={() => selectCategoryAndScroll(cat.id)}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-sand-tint/70 hover:bg-navy hover:text-white text-navy font-heading text-xs font-semibold py-3 rounded-xl transition-all duration-200 group/btn"
                    >
                      <span>Enquire as {cat.title}</span>
                      <ArrowRight className="w-4 h-4 text-teal group-hover/btn:text-teal-bright group-hover/btn:translate-x-1 transition-all duration-200" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 3: WHY PARTNER WITH FUTURE YATRA (The Ecosystem Advantage)  */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 rounded-section bg-gradient-to-b from-navy-deep via-navy to-navy-deep text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden my-8 shadow-2xl border border-teal/25">
          
          {/* Ambient Orbs inside Dark Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-glow/30 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-2 mb-16">
            <span className="font-tempting text-teal-bright text-2xl sm:text-3xl font-normal block">
              One Ecosystem • Four Brands
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Organizations Choose Future Yatra
            </h2>
            <p className="text-body-l sm:text-lg text-sand-tint/90 leading-relaxed font-normal pt-2">
              Future Yatra Private Limited is built on transparency, accountability, and end-to-end student support. Partnering with us grants your organization access to a unified, multi-specialty education group.
            </p>
          </div>

          {/* 4 Specialist Brands Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialistBrands.map((brand, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl glass-card-navy border ${brand.color} space-y-3 transition-transform duration-300 hover:-translate-y-2`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-teal-bright" />
                <h3 className="font-heading text-lg font-bold text-white">
                  {brand.name}
                </h3>
                <span className="text-micro font-semibold text-teal-bright block">
                  {brand.focus}
                </span>
                <p className="text-xs text-sand-tint/80 leading-relaxed">
                  {brand.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Key Value Pillars Banner */}
          <div className="relative z-10 mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="font-heading text-xl font-bold text-teal-bright flex items-center justify-center md:justify-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-teal-bright" />
                <span>100% Ethical SOPs</span>
              </div>
              <p className="text-xs text-sand-tint/80 leading-relaxed">
                Zero artificial admission guarantees, zero hidden commission cuts. Everything is backed by formal, compliant MoUs.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-xl font-bold text-teal-bright flex items-center justify-center md:justify-start space-x-2">
                <Globe2 className="w-5 h-5 text-teal-bright" />
                <span>Nationwide Reach</span>
              </div>
              <p className="text-xs text-sand-tint/80 leading-relaxed">
                Empowering students from tier-1, tier-2, and tier-3 Indian cities with direct access to global institutions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-xl font-bold text-teal-bright flex items-center justify-center md:justify-start space-x-2">
                <HeartHandshake className="w-5 h-5 text-teal-bright" />
                <span>Founder-Led Oversight</span>
              </div>
              <p className="text-xs text-sand-tint/80 leading-relaxed">
                Direct accountability to our senior leadership team — ensuring fast decision-making and genuine institutional relationships.
              </p>
            </div>
          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: HOW IT WORKS (3-Step Horizontal Timeline)                 */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 border-t border-line/80 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Simple 3-Step Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-deep tracking-tight">
              How It Works
            </h2>
            <p className="text-body-l sm:text-lg text-muted leading-relaxed font-normal pt-2">
              Connecting with Future Yatra Private Limited is straightforward, efficient, and transparent.
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-card p-8 border border-line/90 shadow-sm hover:shadow-xl transition-all duration-350 space-y-4 flex flex-col justify-between group card-hover-tier-1"
              >
                {/* Step Index Circle */}
                <div className="flex items-center justify-between">
                  <span className="w-14 h-14 rounded-2xl bg-navy text-teal-bright font-heading text-2xl font-extrabold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </span>
                  <span className="text-micro font-bold bg-teal-tint text-navy px-3 py-1 rounded-full">
                    {step.badge}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-heading text-xl font-bold text-navy-deep">
                    {step.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line/60 flex items-center text-xs font-semibold text-teal">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}

          </div>

          {/* Direct Phone Call Reminder Note */}
          <div className="mt-12 text-center bg-sand-tint/60 rounded-2xl p-6 border border-amber/30 max-w-2xl mx-auto space-y-2">
            <p className="text-small text-navy font-medium">
              <span className="font-bold text-navy-deep">Prefer to talk directly?</span> You are always welcome to call our partnerships desk directly.
            </p>
            <div className="flex justify-center items-center space-x-2 text-small font-bold text-teal">
              <Phone className="w-4 h-4 text-teal" />
              <a href="tel:+918800000000" className="hover:underline">
                +91 88000 00000
              </a>
            </div>
          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 5: PARTNERSHIP ENQUIRY FORM & DIRECT CONTACT HUB            */}
        {/* ==================================================================== */}
        <section id="enquiry-form-section" className="py-16 sm:py-24 border-t border-line/80 scroll-mt-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Interactive Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-section p-6 sm:p-10 border border-line shadow-xl relative overflow-hidden">
              
              <div className="space-y-2 mb-8">
                <span className="font-tempting text-teal text-2xl font-normal block">
                  Official Form
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-deep">
                  Partnership Enquiry Form
                </h2>
                <p className="text-small text-muted">
                  Fill out the fields below. Your enquiry will be routed directly to our leadership team.
                </p>
              </div>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-teal-tint/80 border border-teal/40 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-teal text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-deep">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-small text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Future Yatra Private Limited. Our partnerships director will review your enquiry and connect with you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex items-center space-x-2 bg-navy text-white text-xs font-semibold px-6 py-2.5 rounded-pill hover:bg-navy-glow transition-all"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Organization Name */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-navy">
                      Organization Name <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oxford University / Apex EduTech"
                      value={formData.organizationName}
                      onChange={(e) =>
                        setFormData({ ...formData, organizationName: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all bg-sand-tint/20"
                    />
                  </div>

                  {/* Contact Person Name */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-navy">
                      Contact Person Name <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Kumar / Ms. Sarah Jenkins"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        setFormData({ ...formData, contactPerson: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all bg-sand-tint/20"
                    />
                  </div>

                  {/* Grid for Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-navy">
                        Email Address <span className="text-coral">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="partnerships@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all bg-sand-tint/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider font-extrabold text-navy">
                        Phone Number <span className="text-coral">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all bg-sand-tint/20"
                      />
                    </div>
                  </div>

                  {/* Partner Category Interactive Selector */}
                  <div className="space-y-3">
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-navy">
                      I am partnering as a: <span className="text-coral">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          "University",
                          "School",
                          "College",
                          "Institute",
                          "Agent",
                          "Financial Institution",
                          "Other",
                        ] as PartnerCategory[]
                      ).map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3.5 py-2 rounded-pill text-xs font-bold transition-all duration-200 ${
                            selectedCategory === cat
                              ? "bg-navy text-teal-bright shadow-md scale-105"
                              : "bg-sand-tint/70 text-navy hover:bg-line/60"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-navy">
                      Brief Message & Partnership Interest <span className="text-coral">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your organization and how you'd like to work together..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-input border border-line focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none text-small transition-all bg-sand-tint/20 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-navy hover:bg-navy-glow text-white font-heading text-body font-semibold py-4 rounded-pill shadow-lg hover:shadow-[0_0_20px_rgba(45,189,182,0.35)] transition-all duration-300"
                  >
                    {formStatus === "submitting" ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-teal-bright" />
                      </>
                    )}
                  </button>

                  <p className="text-micro text-center text-muted">
                    Your details are processed securely according to our Privacy Policy.
                  </p>

                </form>
              )}

            </div>

            {/* RIGHT COLUMN: "Prefer to Talk Directly?" & Direct Hub (5 Cols) */}
            <div id="direct-contact" className="lg:col-span-5 space-y-6 scroll-mt-20">
              
              {/* Direct Talk Card */}
              <div className="rounded-card p-8 bg-gradient-to-br from-navy-deep to-navy text-white space-y-6 shadow-xl border border-teal/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal/15 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2">
                  <span className="text-micro font-extrabold uppercase tracking-widest text-teal-bright">
                    Direct Channel
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-white">
                    Prefer to Talk Directly?
                  </h3>
                  <p className="text-xs text-sand-tint/80 leading-relaxed">
                    Skip the form and speak directly with our senior partnerships desk. We are available Monday to Saturday.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/10">
                  
                  {/* Phone Row */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal-bright">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-micro text-sand-tint/70 font-medium">Direct Phone Line</div>
                        <a href="tel:+918800000000" className="font-heading text-body font-bold text-white hover:text-teal-bright transition-colors">
                          +91 88000 00000
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy("+91 88000 00000", "phone")}
                      aria-label="Copy phone number"
                      className="p-2 rounded-lg bg-white/10 hover:bg-teal hover:text-navy text-white transition-all"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-teal-bright" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Email Row */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center text-teal-bright">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-micro text-sand-tint/70 font-medium">Partnerships Email</div>
                        <a href="mailto:partnerships@futureyatra.com" className="font-heading text-small font-bold text-white hover:text-teal-bright transition-colors">
                          partnerships@futureyatra.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy("partnerships@futureyatra.com", "email")}
                      aria-label="Copy email address"
                      className="p-2 rounded-lg bg-white/10 hover:bg-teal hover:text-navy text-white transition-all"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-teal-bright" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                </div>

                {/* Office Info */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-sand-tint/80">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-teal-bright" />
                    <span>Mon – Sat: 10:00 AM – 6:30 PM IST</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-bright flex-shrink-0 mt-0.5" />
                    <span>Registered HQ: MG Road, CBD, Bengaluru, Karnataka, India</span>
                  </div>
                </div>

              </div>

              {/* Founder Governance Card */}
              <div className="rounded-card p-6 bg-sand-tint/60 border border-amber/30 space-y-3">
                <div className="flex items-center space-x-2 text-navy font-bold text-small">
                  <ShieldCheck className="w-4 h-4 text-amber" />
                  <span>Direct Accountability Guarantee</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Every partnership proposal is directly reviewed by our founder and executive board to maintain absolute brand compliance and service standards.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)              */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 border-t border-line/80 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
            <span className="font-tempting text-teal text-2xl sm:text-3xl font-normal block">
              Questions & Answers
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-deep tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-body-l sm:text-lg text-muted leading-relaxed font-normal pt-2">
              Everything you need to know about partnering with Future Yatra Private Limited.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-line/80 overflow-hidden shadow-sm hover:border-teal/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-heading text-body-l font-bold text-navy-deep">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeTier1 }}
                    >
                      <div className="px-6 pb-6 text-body text-muted leading-relaxed border-t border-line/40 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 7: INTERNAL LINKS SUGGESTED (Strategic Navigation Grid)     */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-20 border-t border-line/80">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-1">
            <span className="font-tempting text-teal text-2xl font-normal block">
              Seamless Navigation
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-deep">
              Explore More of Future Yatra
            </h3>
            <p className="text-small text-muted">
              Learn about our vision, specialist brands, or get in touch directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: About Us */}
            <Link
              href="/about"
              className="group p-6 rounded-card bg-white border border-line hover:border-teal shadow-sm hover:shadow-lg transition-all duration-350 space-y-4 card-hover-tier-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-tint flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-teal-bright transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-navy-deep group-hover:text-navy">
                  About Future Yatra
                </h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Discover our founding vision, single-entity structure, and leadership ethos.
                </p>
              </div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-teal group-hover:translate-x-1 transition-transform">
                <span>View About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Card 2: Our Brands */}
            <Link
              href="/brands"
              className="group p-6 rounded-card bg-white border border-line hover:border-teal shadow-sm hover:shadow-lg transition-all duration-350 space-y-4 card-hover-tier-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/10 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-teal-bright transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-navy-deep group-hover:text-navy">
                  Our Brands
                </h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Explore University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra.
                </p>
              </div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-teal group-hover:translate-x-1 transition-transform">
                <span>View Specialist Brands</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Card 3: Contact Us */}
            <Link
              href="/contact"
              className="group p-6 rounded-card bg-white border border-line hover:border-teal shadow-sm hover:shadow-lg transition-all duration-350 space-y-4 card-hover-tier-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber/15 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-teal-bright transition-colors">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-navy-deep group-hover:text-navy">
                  Contact Us
                </h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Get general student counseling support or locate our headquarters.
                </p>
              </div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-teal group-hover:translate-x-1 transition-transform">
                <span>View Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

          </div>

        </section>

        {/* ==================================================================== */}
        {/* SECTION 8: COMPLIANCE DISCLAIMER BANNER                              */}
        {/* ==================================================================== */}
        <section className="py-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-deep via-navy to-navy-deep border border-teal/30 text-center shadow-lg max-w-4xl mx-auto">
            <p className="text-white text-xs sm:text-small font-medium leading-relaxed">
              Future Yatra Private Limited provides educational counselling and application support services. We do not guarantee admission, visa approval, scholarship, employment outcomes, or permanent residency. All information provided is for guidance purposes only.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
