"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowRight, Globe, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import { FOOTER_ALL_COUNTRIES } from "@/lib/medicoData";

interface QuickCountryLookupProps {
  onSelectCountry: (countryName: string) => void;
}

const DEFAULT_FALLBACK_IMAGE = "/images/hero_campus_life.png";

const COUNTRY_METADATA: Record<string, { image: string; tag: string }> = {
  Russia: {
    image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&w=600&q=80",
    tag: "NMC Recognized",
  },
  Georgia: {
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80",
    tag: "100% English",
  },
  Uzbekistan: {
    image: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?auto=format&fit=crop&w=600&q=80",
    tag: "Affordable Fees",
  },
  Kazakhstan: {
    image: "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=600&q=80",
    tag: "WHO Directory",
  },
  Philippines: {
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80",
    tag: "US Curriculum",
  },
  "United Kingdom": {
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    tag: "PLAB Pathway",
  },
  Germany: {
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    tag: "Zero Tuition",
  },
  Australia: {
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
    tag: "AMC Track",
  },
  Kyrgyzstan: {
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    tag: "6-Year MBBS",
  },
  Egypt: {
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80",
    tag: "Clinical Rotations",
  },
  Armenia: {
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    tag: "ECFMG Eligible",
  },
  Tajikistan: {
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    tag: "Low Living Cost",
  },
  Poland: {
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80",
    tag: "EU Standard",
  },
  Hungary: {
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80",
    tag: "Stipendium Track",
  },
  Malaysia: {
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
    tag: "Modern Hospitals",
  },
  USA: {
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
    tag: "USMLE Track",
  },
  Canada: {
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80",
    tag: "MCCQE Residency",
  },
  Ireland: {
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=600&q=80",
    tag: "EU Medical Degree",
  },
  Netherlands: {
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
    tag: "Top Research",
  },
  Sweden: {
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80",
    tag: "Karolinska Standards",
  },
  Norway: {
    image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=600&q=80",
    tag: "Nordic Healthcare",
  },
  Denmark: {
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=600&q=80",
    tag: "High Quality Life",
  },
  Nepal: {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    tag: "No Visa Needed",
  },
  Bangladesh: {
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=600&q=80",
    tag: "Similar NEET Syllabus",
  },
  "Czech Republic": {
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=600&q=80",
    tag: "Charles University",
  },
  Slovakia: {
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    tag: "EU Degree",
  },
  Romania: {
    image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=600&q=80",
    tag: "WHO Recognized",
  },
  Italy: {
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
    tag: "IMAT Exam",
  },
  Spain: {
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80",
    tag: "MIR Residency",
  },
  "New Zealand": {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    tag: "NZREX Track",
  },
};

export default function QuickCountryLookup({ onSelectCountry }: QuickCountryLookupProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(FOOTER_ALL_COUNTRIES.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (isPaused || searchTerm.trim() !== "") return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, searchTerm, totalPages]);

  const filteredCountries = FOOTER_ALL_COUNTRIES.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentPageCountries = FOOTER_ALL_COUNTRIES.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const handleImageError = (country: string) => {
    setFailedImages((prev) => ({ ...prev, [country]: true }));
  };

  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A192F] text-white p-6 sm:p-8 rounded-3xl sm:rounded-[32px] border border-slate-800 space-y-6 font-poppins shadow-2xl relative overflow-hidden"
    >
      {/* Ambient glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0263CC]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER ROW WITH PROPER LABEL SPACING */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800/80 pb-6 relative z-10">
        <div className="space-y-3 sm:space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal/15 border border-teal/40 text-teal-bright rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm mb-1">
            <Globe className="w-3.5 h-3.5 text-teal" />
            <span>Fast Direct Access</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-manjari text-white tracking-tight leading-snug">
            Looking for a specific country?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Click any destination card to jump straight to country-specific options and NMC guidelines.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          {/* SEARCH INPUT */}
          <div className="relative flex-1 lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search country (e.g. Germany, Russia)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* CAROUSEL ARROWS */}
          {searchTerm.trim() === "" && (
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => setPage((prev) => (prev - 1 + totalPages) % totalPages)}
                aria-label="Previous slide"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-[#0263CC] text-slate-300 hover:text-white border border-slate-700/80 transition-all shadow-md active:scale-95 hover:scale-105"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={() => setPage((prev) => (prev + 1) % totalPages)}
                aria-label="Next slide"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-[#0263CC] text-slate-300 hover:text-white border border-slate-700/80 transition-all shadow-md active:scale-95 hover:scale-105"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CAROUSEL DISPLAY */}
      <div className="relative z-10 min-h-[220px]">
        {searchTerm.trim() === "" ? (
          /* SLIDING PAGINATED CAROUSEL VIEW */
          <div className="space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: easeTier1 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
              >
                {currentPageCountries.map((country) => {
                  const meta = COUNTRY_METADATA[country] || {
                    image: DEFAULT_FALLBACK_IMAGE,
                    tag: "Verified University",
                  };
                  const imageSrc = failedImages[country] ? DEFAULT_FALLBACK_IMAGE : meta.image;

                  return (
                    <motion.div
                      key={country}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => onSelectCountry(country)}
                      className="group relative h-36 sm:h-40 rounded-2xl overflow-hidden border border-slate-700/70 hover:border-teal/60 shadow-lg cursor-pointer bg-slate-900"
                    >
                      {/* Background Landmark Image */}
                      <Image
                        src={imageSrc}
                        alt={country}
                        fill
                        unoptimized
                        onError={() => handleImageError(country)}
                        sizes="(max-width: 768px) 50vw, 300px"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 group-hover:from-slate-950/90 transition-colors duration-300" />

                      {/* Top Tag Badge — WHITE TEXT COLOR */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/25 rounded-full text-[10px] font-extrabold text-white shadow-sm">
                          <MapPin className="w-3 h-3 text-teal-bright" />
                          <span className="text-white">{meta.tag}</span>
                        </span>
                      </div>

                      {/* Bottom Content Row */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                        <div>
                          <h4 className="font-heading font-extrabold text-white text-base sm:text-lg leading-tight drop-shadow-md group-hover:text-teal-bright transition-colors">
                            {country}
                          </h4>
                          <span className="text-[10px] text-slate-300 font-medium block opacity-80 group-hover:opacity-100 transition-opacity">
                            View MBBS Options
                          </span>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#0263CC] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 flex-shrink-0">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* PAGE INDICATOR DOTS */}
            <div className="flex items-center justify-center space-x-2 pt-1">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx)}
                  aria-label={`Go to carousel page ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === page ? "w-8 bg-teal-bright shadow-sm" : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* SEARCH RESULTS GRID VIEW */
          <AnimatePresence>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-80 overflow-y-auto pr-1 custom-scrollbar">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, idx) => {
                  const meta = COUNTRY_METADATA[country] || {
                    image: DEFAULT_FALLBACK_IMAGE,
                    tag: "Verified University",
                  };
                  const imageSrc = failedImages[country] ? DEFAULT_FALLBACK_IMAGE : meta.image;

                  return (
                    <motion.div
                      key={country}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, delay: idx * 0.03 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      onClick={() => onSelectCountry(country)}
                      className="group relative h-36 rounded-2xl overflow-hidden border border-teal/40 shadow-lg cursor-pointer bg-slate-900"
                    >
                      <Image
                        src={imageSrc}
                        alt={country}
                        fill
                        unoptimized
                        onError={() => handleImageError(country)}
                        sizes="300px"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                      {/* Top Tag Badge — WHITE TEXT COLOR */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/25 rounded-full text-[10px] font-extrabold text-white shadow-sm">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          <span className="text-white">{meta.tag}</span>
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                        <div>
                          <h4 className="font-heading font-extrabold text-white text-base leading-tight drop-shadow-md">
                            {country}
                          </h4>
                          <span className="text-[10px] text-teal-bright font-medium block">
                            Explore Pathway
                          </span>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-[#0263CC] text-white flex items-center justify-center shadow-md">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full p-6 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2 text-center">
                  <p className="font-bold text-white text-sm">No matching country found for "{searchTerm}"</p>
                  <p className="text-slate-400">
                    Looking for advice on a specific destination? Click below to speak directly with an advisor.
                  </p>
                </div>
              )}
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}




