"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Play,
  HelpCircle,
  ChevronDown,
  Landmark,
  BookOpenCheck,
  Handshake,
  Users,
  CheckCircle2,
  ExternalLink,
  Zap,
  Globe,
  Heart,
  UserCheck,
  Menu,
  X,
  Calendar,
} from "lucide-react";
import CountryFinder from "./CountryFinder";
import SalaryComparisonTable from "./SalaryComparisonTable";
import AgentComparisonSection from "./AgentComparisonSection";
import HonestyCheckSection from "./HonestyCheckSection";
import QuickCountryLookup from "./QuickCountryLookup";
import CounsellingModal from "./CounsellingModal";
import MedicoTestimonialsSection from "./MedicoTestimonialsSection";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { renderCanvas } from "@/components/ui/canvas";
import CardFlip from "@/components/ui/flip-card";
import {
  TRUST_BAR_ITEMS,
  CAREER_GROUPS,
  TESTIMONIALS_DATA,
  FAQ_ITEMS,
} from "@/lib/medicoData";

export default function MedicoYatraClient() {
  const [selectedCareer, setSelectedCareer] = useState<string>("mbbs");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCareer, setModalCareer] = useState("");
  const [modalCountry, setModalCountry] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    renderCanvas();
  }, []);

  const handleOpenCounselling = (career: string = "", country: string = "") => {
    setModalCareer(career);
    setModalCountry(country);
    setIsModalOpen(true);
  };

  const handleScrollToFinder = () => {
    const el = document.getElementById("country-finder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark":
        return <Landmark className="w-6 h-6 text-[#0263CC]" />;
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-[#02A7BB]" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-6 h-6 text-purple-600" />;
      case "Handshake":
        return <Handshake className="w-6 h-6 text-[#4DA5EC]" />;
      case "Users":
        return <Users className="w-6 h-6 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0263CC]" />;
    }
  };

  return (
    <div className="bg-[#F4F8FD] min-h-screen text-slate-800 font-poppins selection:bg-[#0263CC] selection:text-white">
      {/* -------------------------------------------------------------------------- */}
      {/* FLOATING GLASSMOPRHIC CAPSULE NAVBAR FOR MEDICO YATRA */}
      {/* -------------------------------------------------------------------------- */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 font-poppins">
        {/* Floating Glassmorphic Capsule Island */}
        <div className="pointer-events-auto max-w-7xl mx-auto bg-white/85 backdrop-blur-2xl border border-white/70 shadow-[0_10px_30px_-10px_rgba(2,99,204,0.15)] hover:shadow-[0_15px_35px_-8px_rgba(2,167,187,0.25)] rounded-full px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between transition-all duration-300 group/nav">
          
          {/* Brand Logo with Official Medico Yatra PNG */}
          <Link href="/medico-yatra" className="flex items-center group/logo flex-shrink-0">
            <Image
              src="/Logo Files/PNG/MEDICO YATRA LOGO final logo with TM.png"
              alt="Medico Yatra Logo"
              width={220}
              height={50}
              priority
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links with Interactive Hover Pills */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50 text-xs font-semibold text-slate-700">
            <a
              href="#country-finder"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Country Finder
            </a>
            <a
              href="#trust-bar"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Why Us
            </a>
            <a
              href="#careers"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Careers We Guide
            </a>
            <a
              href="#salary-table"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Salary Table
            </a>
            <a
              href="#us-vs-agent"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Us vs Agent
            </a>
            <a
              href="#honesty-check"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Honesty Check
            </a>
            <a
              href="#testimonials"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Stories
            </a>
            <a
              href="#faq"
              className="px-3 py-1.5 rounded-full hover:text-[#0263CC] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={() => handleOpenCounselling()}
              className="bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] hover:brightness-110 text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 transition-all transform hover:scale-105"
            >
              Book Free Counselling
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-800 hover:text-[#0263CC] bg-slate-100/80 rounded-full transition-colors"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="pointer-events-auto lg:hidden mt-3 max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-5 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 text-sm font-semibold text-slate-800">
            <a
              href="#country-finder"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Country Finder
            </a>
            <a
              href="#trust-bar"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Why Us
            </a>
            <a
              href="#careers"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Careers We Guide
            </a>
            <a
              href="#salary-table"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Salary Table
            </a>
            <a
              href="#us-vs-agent"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Us vs Agent
            </a>
            <a
              href="#honesty-check"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Honesty Check
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              Stories
            </a>
            <a
              href="#faq"
              onClick={() => setMobileNavOpen(false)}
              className="block px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-[#0263CC] transition-colors"
            >
              FAQ
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  handleOpenCounselling();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] text-white font-bold text-xs rounded-full shadow-md justify-center"
              >
                Book Free Counselling
              </button>
            </div>
          </div>
        )}
      </header>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER + COUNTRY FINDER CALCULATOR */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(255, 255, 255)"
          gradientBackgroundEnd="rgb(244, 248, 253)"
          firstColor="186, 230, 253"
          secondColor="199, 242, 249"
          thirdColor="224, 242, 254"
          fourthColor="191, 219, 254"
          fifthColor="238, 242, 255"
          pointerColor="186, 230, 253"
          size="100%"
          blendingValue="soft-light"
          containerClassName="w-full min-h-screen relative pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 h-auto"
        >
          {/* Interactive Wave Lines Canvas (Mouse-following animation layer) */}
          <canvas id="canvas" className="pointer-events-none absolute inset-0 mx-auto z-10 w-full h-full opacity-100" />

          {/* Subtle Background Decorative Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none z-10" />

          <div className="max-w-7xl mx-auto space-y-10 relative z-20">
            {/* Hero Headlines */}
            <div className="text-center space-y-5 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-md border border-blue-200/80 rounded-full shadow-[0_4px_20px_-4px_rgba(2,99,204,0.12)] max-w-full">
                <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#02A7BB] flex-shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase font-poppins whitespace-nowrap">
                  A Future Yatra brand
                </span>
                <span className="text-slate-300 text-xs">·</span>
                <span className="font-playfair italic text-xs sm:text-sm font-bold text-[#0B2545] whitespace-nowrap">
                  Healthcare Career Specialists
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-manjari text-slate-900 tracking-tight leading-[1.15]">
                Your Healthcare Career{" "}
                <span className="font-playfair italic font-extrabold bg-gradient-to-r from-[#0A192F] via-[#023E8A] to-[#005F9E] bg-clip-text text-transparent drop-shadow-sm">
                  Guided Properly
                </span>
                , From Class 12 to Licensed Professional.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-poppins max-w-3xl mx-auto">
                Medico Yatra isn't a general study-abroad agency. We specialise in healthcare careers — <strong className="text-slate-900 font-semibold">MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy, Respiratory Therapy, Medical Lab Technology</strong> and other allied-health courses — with NMC-recognised universities, honest counselling, and licensing support (FMGE / NExT & USMLE) built in.
              </p>

              {/* Micro-trust Line */}
              <div className="pt-2 text-xs font-semibold text-slate-500 flex flex-wrap items-center justify-center gap-3">
                <span className="flex items-center gap-1 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0263CC]" /> NMC-recognised universities only
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#02A7BB]" /> FMGE / NExT & USMLE coaching
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> End-to-end support
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" /> Parents welcomed at every step
                </span>
              </div>
            </div>

            {/* Interactive Flagship Tool: Country Finder */}
            <CountryFinder
              onSelectCareer={(cId) => setSelectedCareer(cId)}
              onOpenCounselling={handleOpenCounselling}
            />
          </div>
        </BackgroundGradientAnimation>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: TRUST BAR (EARNED, NOT JUST LISTED) */}
      {/* -------------------------------------------------------------------------- */}
      <section id="trust-bar" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#0263CC] uppercase tracking-widest">
              Earned Trust · Why Families Trust Us With This Decision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-manjari text-slate-900">
              Why Families Trust Us With Their{" "}
              <span className="font-playfair italic font-normal text-[#0263CC]">Healthcare Career Decision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <CardFlip
              title="NMC-Recognised Universities Only*"
              subtitle="Verified global medical degree compliance"
              whyItMatters="Your degree has to count when you come home — this is the single most common thing families regret not checking."
              features={[
                'Direct NMC Gazetted Compliance',
                '100% English Medium Instruction',
                'Valid FMGE / NExT Eligibility',
                'WHO & ECFMG Directory Listed',
              ]}
              color="#0263CC"
              icon={Landmark}
              imageUrl="/images/medico/nmc_university.png"
              actionText="Explore NMC Guidelines"
              onActionClick={() => handleOpenCounselling('NMC Guidelines')}
            />

            <CardFlip
              title="Many Healthcare Careers — Not Just MBBS"
              subtitle="Diverse clinical & non-clinical pathways"
              whyItMatters="A low NEET score or a different interest entirely doesn't mean fewer honest options, just different ones."
              features={[
                'MBBS, BDS, Nursing & Pharmacy',
                'Physiotherapy & Allied Health',
                'Transparent Eligibility Criteria',
                'Customized Career Mapping',
              ]}
              color="#02A7BB"
              icon={Stethoscope}
              imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
              actionText="Discover All Disciplines"
              onActionClick={() => handleOpenCounselling('Healthcare Careers')}
            />

            <CardFlip
              title="Integrated FMGE / NExT & USMLE Coaching"
              subtitle="Licensing preparation from Year 1"
              whyItMatters="Licensing prep starts with your course, not six years later in a panic."
              features={[
                'Year-1 Licensing Orientation',
                'Question Bank & Mock Tests',
                'USMLE Step 1/2 Clinical Guidance',
                'High Graduate Pass Rates',
              ]}
              color="#7C3AED"
              icon={BookOpenCheck}
              imageUrl="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=80"
              actionText="View Pass Rates"
              onActionClick={() => handleOpenCounselling('Licensing Exams')}
            />

            <CardFlip
              title="Honest, End-to-End Guidance"
              subtitle="Complete lifecycle support for 6 years"
              whyItMatters="We're still answering your calls after the admission fee clears — most agents aren't."
              features={[
                'Zero Hidden Fees Guarantee',
                'Document & Visa Assistance',
                'On-Campus Student Support',
                'Ongoing Parent Updates',
              ]}
              color="#059669"
              icon={Handshake}
              imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80"
              actionText="Book Guidance Session"
              onActionClick={() => handleOpenCounselling('End-to-End Guidance')}
            />

            <CardFlip
              title="Parents Are Part of Every Conversation"
              subtitle="Family-centered decision making"
              whyItMatters="This is a family decision — we treat it like one, not a one-on-one sales call."
              features={[
                'Dedicated Parent Helpline',
                'Safety & Hostel Audits',
                'Transparent Fee Breakdowns',
                'Direct Counsellor Access',
              ]}
              color="#D97706"
              icon={Users}
              imageUrl="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&auto=format&fit=crop&q=80"
              actionText="Parent Consultation"
              onActionClick={() => handleOpenCounselling('Parent Guidance')}
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: CAREERS WE GUIDE (STRUCTURED BY ENTRY PATH) */}
      {/* -------------------------------------------------------------------------- */}
      <section id="careers" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F8FD] scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5 text-purple-600" />
              Structured Entry Pathways
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-manjari text-slate-900">
              One Partner for Your{" "}
              <span className="font-playfair italic font-normal text-[#0263CC]">Entire Healthcare Journey</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Instead of one flat list, careers are structured by entry path — so Class 12 students know immediately whether a path starts right after 12th or requires prior qualifications.
            </p>
          </div>

          {/* Group A: Direct Entry After Class 12 */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-manjari text-slate-900">
                  {CAREER_GROUPS.groupA.title}
                </h3>
                <p className="text-xs text-slate-500">{CAREER_GROUPS.groupA.description}</p>
              </div>
              <span className="px-3 py-1 bg-blue-50 text-[#0263CC] text-xs font-bold rounded-full hidden sm:inline-block">
                7 Pathways
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {CAREER_GROUPS.groupA.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0263CC] hover:shadow-lg transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-base font-manjari group-hover:text-[#0263CC] transition-colors">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-extrabold rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>

                  <button
                    onClick={() => handleOpenCounselling(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0263CC] hover:text-[#02A7BB] pt-2"
                  >
                    <span>Learn more →</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Group B: Worth Exploring If You're Still Deciding */}
          <div className="space-y-4 pt-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold font-manjari text-slate-900">
                {CAREER_GROUPS.groupB.title}
              </h3>
              <p className="text-xs text-slate-500">{CAREER_GROUPS.groupB.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CAREER_GROUPS.groupB.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#02A7BB] hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-lg font-manjari">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenCounselling(item.title)}
                    className="px-5 py-2.5 bg-[#0263CC] hover:bg-[#02A7BB] text-white font-bold text-xs rounded-xl shadow transition-colors flex-shrink-0"
                  >
                    Ask Us About Your Goal
                  </button>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center italic bg-white p-3 rounded-xl border border-slate-200">
            💡 Not sure which fits you? Use the Country Finder above, or that's exactly what our free counselling is for.
          </p>
        </div>
      </section>



      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4: GLOBAL CAREER & SALARY COMPARISON TABLE */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80">
        <SalaryComparisonTable
          selectedCareer={selectedCareer}
          onScrollToFinder={handleScrollToFinder}
        />
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 5: HOW MEDICO YATRA HELPS — US VS A TYPICAL AGENT */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F8FD]">
        <AgentComparisonSection onOpenCounselling={() => handleOpenCounselling()} />
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 6: IS THIS REALLY FOR YOU? — AN HONESTY CHECK */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80">
        <HonestyCheckSection onOpenCounselling={() => handleOpenCounselling()} />
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 7: GRAND CTA BANNER (NO EMOJIS, THEME HEX CODES) */}
      {/* -------------------------------------------------------------------------- */}
      <section id="cta-band" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A192F] via-[#023E8A] to-[#0A192F] text-white overflow-hidden scroll-mt-20">
        {/* Seamless Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A192F] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A192F] pointer-events-none z-10" />

        {/* Background Mesh Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#02A7BB]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3FE0D6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(2,167,187,0.15),transparent_50%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#02A7BB]/15 border border-[#02A7BB]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#3FE0D6] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#3FE0D6]" />
            <span>Start Your Healthcare Career</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-manjari text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Your Healthcare Career Deserves a{" "}
            <span className="font-playfair italic font-normal text-[#3FE0D6]">Real Plan</span>{" "}
            — Not Guesswork.
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-poppins font-normal">
            Get free, honest counselling. We&apos;ll help you choose the right course, country, and licensing path — with zero pressure and no false promises. Already used the Country Finder above? A counsellor can build on those results with a recommendation tailored specifically to your profile.
          </p>

          {/* Notice Card (NO EMOJIS, THEME COLORS) */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-2xl max-w-2xl mx-auto text-xs sm:text-sm text-slate-100 font-poppins flex flex-col sm:flex-row items-center justify-center gap-3 shadow-xl">
            <div className="flex items-center gap-2 bg-[#FBBF24]/20 border border-[#FBBF24]/40 text-[#FBBF24] px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider flex-shrink-0">
              <Calendar className="w-3.5 h-3.5" />
              <span>Intake Notice</span>
            </div>
            <p className="text-center sm:text-left leading-snug">
              August/September intake applications are currently open for several of our partner universities — ask your counsellor about deadlines for your shortlisted countries.
            </p>
          </div>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleOpenCounselling()}
              className="px-8 py-4 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#3FE0D6] hover:brightness-110 text-white font-extrabold text-sm rounded-full shadow-[0_10px_25px_-5px_rgba(2,167,187,0.4)] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOpenCounselling("Apply Now")}
              className="px-7 py-4 bg-white text-[#0A192F] hover:bg-slate-100 font-extrabold text-sm rounded-full shadow-md transition-all transform hover:scale-105"
            >
              Apply Now
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi%20Medico%20Yatra,%20I%20want%20to%20know%20more%20about%20healthcare%20courses%20abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm rounded-full shadow-md transition-all flex items-center gap-2 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Micro Trust Indicators (NO EMOJIS) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300 border-t border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3FE0D6]" />
              <span>100% Free & Transparent Guidance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FBBF24]" />
              <span>NMC-Recognised Universities Only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#10B981]" />
              <span>Parents Welcomed at Every Step</span>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 8: TESTIMONIALS (MATCHING IMAGE 2 DESIGN) */}
      {/* -------------------------------------------------------------------------- */}
      <MedicoTestimonialsSection
        onOpenVideoModal={() => setVideoModalOpen(true)}
        onOpenCounselling={() => handleOpenCounselling()}
      />




      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 10: FOOTER (WITH QUICK COUNTRY LOOKUP & LEGAL DISCLAIMER) */}
      {/* -------------------------------------------------------------------------- */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 px-4 sm:px-6 lg:px-8 font-poppins border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Quick Country Lookup Module */}
          <QuickCountryLookup
            onSelectCountry={(cName) => handleOpenCounselling("Country Page", cName)}
          />

          {/* Standard Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-6 border-t border-slate-800">
            {/* Brand Block */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] flex items-center justify-center text-white font-extrabold text-xl">
                  MY
                </div>
                <div>
                  <span className="font-bold text-white font-manjari text-lg block">MEDICO YATRA</span>
                  <span className="text-[10px] text-[#4DA5EC] uppercase font-bold tracking-widest block">
                    Future Yatra Private Limited
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Guiding future healthcare professionals beyond borders. A Future Yatra Private Limited brand. Dedicated to honest, NMC-compliant healthcare education abroad.
              </p>
            </div>

            {/* Careers Column */}
            <div className="space-y-3">
              <h4 className="font-bold text-white font-manjari text-sm uppercase tracking-wider">Careers</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#careers" className="hover:text-white transition-colors">MBBS / Medicine</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Dentistry (BDS)</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Nursing</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Pharmacy</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Physiotherapy</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Respiratory Therapy</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Medical Lab Tech</a></li>
              </ul>
            </div>

            {/* Explore Column */}
            <div className="space-y-3">
              <h4 className="font-bold text-white font-manjari text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#country-finder" className="hover:text-white transition-colors">Country Finder</a></li>
                <li><a href="#salary-table" className="hover:text-white transition-colors">Salary Comparison</a></li>
                <li><a href="#us-vs-agent" className="hover:text-white transition-colors">Agent vs Us</a></li>
                <li><a href="#honesty-check" className="hover:text-white transition-colors">Honesty Check</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FMGE / NExT FAQs</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">USMLE Guidance</a></li>
              </ul>
            </div>

            {/* Company / Contact Column */}
            <div className="space-y-3">
              <h4 className="font-bold text-white font-manjari text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Mandatory Full Legal Disclaimer Box */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-[11px] text-slate-400 leading-relaxed space-y-2">
            <strong className="text-slate-200 font-bold block uppercase tracking-wider">
              Legal Compliance & Disclaimer (Future Yatra Private Limited):
            </strong>
            <p>
              Medico Yatra provides educational guidance and does not guarantee admission, visa, scholarship, examination, job, salary, or PR outcomes. Salary figures shown are illustrative, approximate, and require licensing/registration and immigration eligibility to achieve. The Country Finder tool provides general matching based on self-reported answers, not a personalised assessment — book a free counselling session for guidance tailored to your specific profile. University recognition and regulations change — verify the current NMC-approved list and applicable rules (nmc.org.in, natboard.edu.in) before enrolling. Guidance, not legal advice.
            </p>
          </div>

          <div className="pt-4 text-center text-xs text-slate-500 border-t border-slate-900">
            © {new Date().getFullYear()} Medico Yatra · Future Yatra Private Limited. All rights reserved.
          </div>
        </div>
      </footer>

      {/* -------------------------------------------------------------------------- */}
      {/* PERSISTENT STICKY MOBILE BOTTOM BAR */}
      {/* -------------------------------------------------------------------------- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 p-3 lg:hidden shadow-2xl flex items-center justify-between gap-3">
        <button
          onClick={() => handleOpenCounselling()}
          className="flex-1 py-3 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Free Counselling</span>
        </button>
        <a
          href="https://wa.me/919876543210?text=Hi%20Medico%20Yatra,%20I%20want%20to%20know%20more%20about%20healthcare%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Lead Capture Counselling Modal */}
      <CounsellingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCareer={modalCareer}
        initialCountry={modalCountry}
      />

      {/* Video Testimonial Modal Treatment */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[110] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-lg w-full text-center space-y-4 relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <div className="w-16 h-16 bg-[#0263CC] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h3 className="text-xl font-bold font-manjari text-white">
              Dr. Vikramaditya's Journey in Uzbekistan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              "Watch how Vikramaditya evaluated NMC recognition, host country safety, and FMGE preparation before enrolling in Uzbekistan."
            </p>
            <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-semibold">
              [ Video Testimonial Stream Player ]
            </div>
            <button
              onClick={() => setVideoModalOpen(false)}
              className="px-6 py-2 bg-white text-slate-900 font-bold text-xs rounded-full"
            >
              Close Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
