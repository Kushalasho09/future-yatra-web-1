"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  HeartPulse,
  Pill,
  Activity,
  Wind,
  HelpCircle,
  Coins,
  Zap,
  TrendingUp,
  Globe,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  MessageSquare,
  Send,
  Check,
  ExternalLink,
} from "lucide-react";
import {
  CAREER_OPTIONS,
  BUDGET_OPTIONS,
  PRIORITY_OPTIONS,
  DESTINATION_COUNTRIES,
  CountryResult,
} from "@/lib/medicoData";

interface CountryFinderProps {
  onSelectCareer: (careerId: string) => void;
  onOpenCounselling: (career?: string, country?: string) => void;
}

// Photographic visual images mapping for career options
const CAREER_IMAGE_MAP: Record<string, string> = {
  mbbs: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
  bds: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=80",
  nursing: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
  pharmacy: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=80",
  physio: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
  respiratory_mlt: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&auto=format&fit=crop&q=80",
  allied: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80",
};

// Photographic visual images mapping for destination countries
const COUNTRY_IMAGE_MAP: Record<string, string> = {
  russia: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=600&auto=format&fit=crop&q=80",
  uzbekistan: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=80",
  kazakhstan: "https://images.unsplash.com/photo-1558588942-930faae5a389?w=600&auto=format&fit=crop&q=80",
  georgia: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&auto=format&fit=crop&q=80",
  philippines: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=80",
  egypt: "https://images.unsplash.com/photo-1572252821143-035a0247a828?w=600&auto=format&fit=crop&q=80",
  germany: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80",
  uk: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80",
  usa_caribbean: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80",
};

export default function CountryFinder({
  onSelectCareer,
  onOpenCounselling,
}: CountryFinderProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedCareer, setSelectedCareer] = useState<string>("mbbs");
  const [selectedBudget, setSelectedBudget] = useState<string>("25_50");
  const [selectedPriority, setSelectedPriority] = useState<string>("nmc_trusted");

  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [whatsappSubmitted, setWhatsappSubmitted] = useState(false);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      case "Pill":
        return <Pill className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "Lungs":
      case "Wind":
        return <Wind className="w-5 h-5" />;
      case "Coins":
        return <Coins className="w-5 h-5 text-amber-500" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-blue-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#02A7BB]" />;
      default:
        return <HelpCircle className="w-5 h-5" />;
    }
  };

  const handleCareerSelect = (careerId: string) => {
    setSelectedCareer(careerId);
    onSelectCareer(careerId);
  };

  const calculateMatches = (): CountryResult[] => {
    return DESTINATION_COUNTRIES.filter((country) => {
      const matchCareer =
        selectedCareer === "all" ||
        country.careers.includes(selectedCareer) ||
        country.careers.includes("all");

      const matchBudget =
        selectedBudget === "any" ||
        country.budgetTiers.includes(selectedBudget) ||
        country.budgetTiers.includes("any");

      return matchCareer && matchBudget;
    }).slice(0, 4);
  };

  const matchedCountries = calculateMatches();
  const activeMatchedList = matchedCountries.length > 0 ? matchedCountries : DESTINATION_COUNTRIES.slice(0, 3);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappPhone) return;
    setWhatsappSubmitted(true);
    setTimeout(() => {
      setWhatsappSubmitted(false);
      setWhatsappPhone("");
    }, 4000);
  };

  const getDynamicWhyFit = (country: CountryResult) => {
    if (country.whyFitTemplates[selectedPriority]) {
      return country.whyFitTemplates[selectedPriority];
    }
    return country.defaultWhyFit;
  };

  return (
    <div id="country-finder" className="w-full max-w-7xl mx-auto scroll-mt-28">
      {/* Outer Wide Self-Contained Interactive Module Container */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(2,99,204,0.18)] overflow-hidden font-poppins relative">
        {/* Module Header Bar */}
        <div className="bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] p-6 sm:p-8 text-white relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold mb-5 sm:mb-6 text-white shadow-sm">
                <span className="tracking-wider uppercase font-poppins">
                  Interactive Finder
                </span>
                <span className="text-white/60">·</span>
                <span className="font-playfair italic font-bold text-amber-200 text-sm">
                  Step {step <= 3 ? `${step} of 3` : "Results"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-manjari text-white tracking-tight">
                Find Your Country in 30 Seconds
              </h2>
              <p className="text-sm sm:text-base text-blue-50/90 max-w-2xl mt-1.5 leading-relaxed">
                Answer three quick questions. We'll show you which countries genuinely fit your budget, career interest, and priorities — no sign-up required.
              </p>
            </div>

            {/* Step Progress Indicator Pills */}
            <div className="flex items-center gap-2.5 self-start md:self-center bg-white/15 p-2 rounded-2xl backdrop-blur-md border border-white/20">
              {[1, 2, 3].map((s) => (
                <button
                  key={s}
                  onClick={() => setStep(s)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                    step === s
                      ? "bg-white text-[#0263CC] shadow-md scale-105"
                      : step > s
                      ? "bg-white/40 text-white"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step Contents Container */}
        <div className="p-6 sm:p-8 lg:p-10 min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-white to-[#F8FAFC]">
          <AnimatePresence mode="wait">
            {/* STEP 1: CAREER INTEREST WITH VISUAL IMAGE CARDS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                    <span className="px-2.5 py-1 bg-blue-100 text-[#0263CC] font-extrabold text-xs rounded-lg whitespace-nowrap flex-shrink-0 mt-0.5 sm:mt-0">
                      STEP 1
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-manjari leading-snug">
                      Select Your Healthcare Career Interest
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Click on a healthcare discipline below to see matching international destinations:
                  </p>
                </div>

                {/* Grid of Interactive Visual Image Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {CAREER_OPTIONS.map((c) => {
                    const isSelected = selectedCareer === c.id;
                    const imageUrl = CAREER_IMAGE_MAP[c.id] || CAREER_IMAGE_MAP["allied"];

                    return (
                      <button
                        key={c.id}
                        onClick={() => handleCareerSelect(c.id)}
                        className={`text-left rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group relative ${
                          isSelected
                            ? "border-[#0263CC] bg-blue-50/60 shadow-xl ring-2 ring-[#0263CC] scale-[1.02]"
                            : "border-slate-200 bg-white hover:border-[#02A7BB] hover:shadow-lg hover:-translate-y-0.5"
                        }`}
                      >
                        {/* Visual Photographic Banner Image Header */}
                        <div className="relative h-28 w-full overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={c.label}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                          {/* Top Badges */}
                          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                            <div
                              className={`p-2 rounded-xl backdrop-blur-md ${
                                isSelected
                                  ? "bg-[#0263CC] text-white shadow-md"
                                  : "bg-white/90 text-slate-800"
                              } transition-colors`}
                            >
                              {getIconComponent(c.iconName)}
                            </div>
                            {c.fastPR && (
                              <span className="px-2.5 py-1 bg-amber-400 text-amber-950 font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                                ⚡ Fast-PR
                              </span>
                            )}
                          </div>

                          {/* Selection Check Indicator */}
                          {isSelected && (
                            <div className="absolute bottom-2.5 right-2.5 w-6 h-6 rounded-full bg-[#0263CC] text-white flex items-center justify-center shadow-md">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        {/* Card Body */}
                        <div className="p-4 space-y-1.5 flex-grow flex flex-col justify-between">
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-base font-manjari group-hover:text-[#0263CC] transition-colors leading-tight">
                              {c.label}
                            </h4>
                            {c.subLabel && (
                              <p className="text-xs text-slate-500 mt-1 leading-snug">
                                {c.subLabel}
                              </p>
                            )}
                          </div>

                          <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                            <span className={`transition-colors ${isSelected ? "text-[#0263CC] font-bold" : "text-slate-400 group-hover:text-[#02A7BB]"}`}>
                              {isSelected ? "Selected ✓" : "Click to select"}
                            </span>
                            <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1 text-[#0263CC]" : "text-slate-300 group-hover:translate-x-1 group-hover:text-[#02A7BB]"}`} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Navigation Button */}
                <div className="flex items-center justify-end pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    <span>Next: Budget Range →</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: BUDGET RANGE */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                    <span className="px-2.5 py-1 bg-blue-100 text-[#0263CC] font-extrabold text-xs rounded-lg whitespace-nowrap flex-shrink-0 mt-0.5 sm:mt-0">
                      STEP 2
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-manjari leading-snug">
                      What is your approximate total budget?
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Includes full degree tuition + estimated living expenses over the entire course:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {BUDGET_OPTIONS.map((b) => {
                    const isSelected = selectedBudget === b.id;
                    return (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBudget(b.id)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-4 ${
                          isSelected
                            ? "border-[#0263CC] bg-blue-50/70 shadow-lg ring-2 ring-[#0263CC]"
                            : "border-slate-200 bg-white hover:border-[#02A7BB] hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <Coins className={`w-6 h-6 ${isSelected ? "text-[#0263CC]" : "text-slate-400"}`} />
                          <div
                            className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "bg-[#0263CC] border-[#0263CC] text-white shadow-sm"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div>
                          <span className="font-extrabold text-slate-900 text-base font-manjari block">
                            {b.label}
                          </span>
                          <span className="text-xs text-slate-500 mt-1 block">
                            Full degree total package
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto px-5 py-3 sm:py-3.5 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-200 sm:border-0 hover:bg-slate-100 sm:hover:bg-transparent hover:text-[#0263CC] transition-colors text-center flex items-center justify-center whitespace-nowrap"
                  >
                    ← Back to Careers
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    <span>Next: Select Priorities →</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PRIORITY */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                    <span className="px-2.5 py-1 bg-blue-100 text-[#0263CC] font-extrabold text-xs rounded-lg whitespace-nowrap flex-shrink-0 mt-0.5 sm:mt-0">
                      STEP 3
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-manjari leading-snug">
                      What matters most to you and your family?
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Select your primary priority to tailor why each destination fits your needs:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {PRIORITY_OPTIONS.map((p) => {
                    const isSelected = selectedPriority === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPriority(p.id)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-4 ${
                          isSelected
                            ? "border-[#0263CC] bg-blue-50/70 shadow-lg ring-2 ring-[#0263CC]"
                            : "border-slate-200 bg-white hover:border-[#02A7BB] hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
                            {getIconComponent(p.iconName)}
                          </div>
                          <div
                            className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "bg-[#0263CC] border-[#0263CC] text-white shadow-sm"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <span className="font-extrabold text-slate-900 text-sm font-manjari block leading-snug">
                          {p.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-5 py-3 sm:py-3.5 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-200 sm:border-0 hover:bg-slate-100 sm:hover:bg-transparent hover:text-[#0263CC] transition-colors text-center flex items-center justify-center whitespace-nowrap"
                  >
                    ← Back to Budget
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    <span>See My Best-Fit Countries →</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* RESULTS SCREEN WITH PHOTOGRAPHIC COUNTRY CARDS */}
            {step === 4 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0263CC]">
                      Personalized Match Results
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-manjari mt-0.5">
                      Your Best-Fit Destination Countries
                    </h3>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0263CC] bg-slate-100 hover:bg-blue-50 px-4 py-2 rounded-full transition-colors self-start sm:self-auto border border-slate-200"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Start Matcher Over</span>
                  </button>
                </div>

                {/* Country Result Photographic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {activeMatchedList.map((country) => {
                    const countryImg = COUNTRY_IMAGE_MAP[country.id] || COUNTRY_IMAGE_MAP["russia"];

                    return (
                      <div
                        key={country.id}
                        className="rounded-2xl border border-slate-200/90 bg-white hover:border-[#0263CC] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                      >
                        {/* Country Photo Header Banner */}
                        <div className="relative h-36 w-full overflow-hidden">
                          <Image
                            src={countryImg}
                            alt={country.name}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                          {/* Flag Pill Badge */}
                          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-extrabold text-slate-900 shadow-md flex items-center gap-1.5">
                            <span className="text-base">{country.flag}</span>
                            <span>{country.name}</span>
                          </div>

                          {/* NMC Status Badge */}
                          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#0263CC]/90 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-white/20">
                            {country.nmcStatus}
                          </div>
                        </div>

                        {/* Card Details */}
                        <div className="p-5 space-y-3.5 flex-grow flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                              <span>Region: {country.region}</span>
                              <span className="text-emerald-600 font-bold">{country.language}</span>
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                              <strong className="text-slate-900">Why fit:</strong>{" "}
                              {getDynamicWhyFit(country)}
                            </p>

                            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold rounded-lg border border-amber-200/60">
                              Approx: {country.costBadge}
                            </div>
                          </div>

                          <button
                            onClick={() => onOpenCounselling(selectedCareer, country.name)}
                            className="w-full py-3 px-4 bg-slate-900 hover:bg-[#0263CC] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group/btn"
                          >
                            <span>Explore {country.name}</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp & Secondary CTA Row */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {/* WhatsApp Form */}
                  <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl space-y-2">
                    <span className="text-xs font-extrabold text-emerald-900 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      Get These Match Results Direct on WhatsApp
                    </span>
                    {whatsappSubmitted ? (
                      <p className="text-xs font-semibold text-emerald-700 bg-white p-2.5 rounded-xl text-center shadow-sm">
                        ✓ Sent! Check your WhatsApp shortly.
                      </p>
                    ) : (
                      <form onSubmit={handleWhatsAppSubmit} className="flex gap-2">
                        <input
                          type="tel"
                          required
                          placeholder="Enter 10-digit phone number"
                          value={whatsappPhone}
                          onChange={(e) => setWhatsappPhone(e.target.value)}
                          className="px-3.5 py-2.5 text-xs rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-grow text-slate-800 bg-white"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition-colors flex items-center gap-1.5 flex-shrink-0 shadow-md"
                        >
                          <span>Send</span>
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Counselling Secondary Button */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => onOpenCounselling(selectedCareer, "Matched Destination")}
                      className="flex-1 py-3.5 px-5 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] text-white font-extrabold text-xs rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Not Sure? Get Free Expert Counselling Call</span>
                    </button>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-slate-500 text-center italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  * These results are a starting point based on general matching, not a personalised recommendation. Costs, fees, and country fit vary by your specific NEET/academic profile — book a free counselling session for a recommendation tailored to you.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
