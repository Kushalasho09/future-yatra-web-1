"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Quote } from "lucide-react";
import { AGENT_VS_US_ROWS } from "@/lib/medicoData";

interface AgentComparisonSectionProps {
  onOpenCounselling: () => void;
}

export default function AgentComparisonSection({ onOpenCounselling }: AgentComparisonSectionProps) {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="us-vs-agent" className="w-full max-w-5xl mx-auto space-y-8 sm:space-y-10 scroll-mt-28 font-poppins py-6">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeTier1 }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0263CC]/10 text-[#0263CC] border border-[#0263CC]/20 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#02A7BB]" />
          <span>The Educate-First Contrast</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-manjari text-slate-900 tracking-tight leading-tight">
          What Actually Happens After You Pay an Admission Agent — <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#0D9488] bg-clip-text text-transparent">
            vs What Happens With Us
          </span>
        </h2>

        <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A list of "what we do" features is easy to skim past. Evaluate concrete differences yourself before entrusting your family's future.
        </p>
      </motion.div>

      {/* UNIFIED COMPARISON CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
        className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden"
      >
        {/* DESKTOP VIEW (hidden on mobile, visible on md and up) */}
        <div className="hidden md:block">
          {/* HARMONIOUS COLUMN HEADERS */}
          <div className="grid grid-cols-2">
            {/* Typical Agent Header */}
            <div className="bg-slate-100/90 p-5 sm:p-6 flex items-center justify-between border-r border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-heading text-slate-900 font-bold text-base sm:text-lg leading-tight">
                    A Typical Admission Agent
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block">Standard Agency Model</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full uppercase tracking-wider">
                Transaction
              </span>
            </div>

            {/* Medico Yatra Header */}
            <div className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] p-5 sm:p-6 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-heading text-white font-bold text-base sm:text-lg leading-tight">
                    Medico Yatra
                  </h3>
                  <span className="text-xs text-cyan-100 font-normal block">Single Accountable Standard</span>
                </div>
              </div>
              <span className="text-[11px] font-extrabold text-white bg-white/20 border border-white/40 px-3.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm">
                Specialist Partnership
              </span>
            </div>
          </div>

          {/* COMPARISON ROWS FOR DESKTOP */}
          <div className="divide-y divide-slate-100">
            {AGENT_VS_US_ROWS.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: easeTier1 }}
                className="grid grid-cols-2 text-xs sm:text-sm group"
              >
                {/* Left Side: Typical Agent */}
                <div className="p-5 sm:p-6 text-slate-700 bg-slate-50/60 border-r border-slate-100 flex items-start gap-3.5 group-hover:bg-rose-50/30 transition-colors duration-200">
                  <div className="w-5 h-5 rounded-full bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <p className="leading-relaxed font-poppins font-normal text-slate-700">
                    {row.typicalAgent}
                  </p>
                </div>

                {/* Right Side: Medico Yatra */}
                <div className="p-5 sm:p-6 text-slate-900 bg-[#0263CC]/[0.03] flex items-start gap-3.5 group-hover:bg-[#0263CC]/[0.07] transition-colors duration-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                  </div>
                  <p className="leading-relaxed font-poppins font-semibold text-slate-900">
                    {row.medicoYatra}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW (visible on mobile < md, hidden on desktop) */}
        <div className="block md:hidden p-4 space-y-4 bg-slate-50/50">
          <div className="text-center pb-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0263CC] bg-blue-100/80 px-3 py-1 rounded-full">
              Side-by-Side Mobile Comparison
            </span>
          </div>

          {AGENT_VS_US_ROWS.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3"
            >
              {/* Medico Yatra Row */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/90 to-teal-50/90 border border-blue-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#0263CC] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Medico Yatra
                  </span>
                  <span className="text-[10px] font-extrabold text-white bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-2.5 py-0.5 rounded-full shadow-xs">
                    Specialist Standard
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-900 leading-relaxed font-poppins">
                  {row.medicoYatra}
                </p>
              </div>

              {/* Typical Agent Row */}
              <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/70 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    A Typical Agent
                  </span>
                  <span className="text-[10px] font-semibold text-rose-700 bg-rose-100/80 px-2.5 py-0.5 rounded-full">
                    Transaction
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-poppins">
                  {row.typicalAgent}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CORE DIFFERENTIATOR BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: easeTier1 }}
        className="bg-gradient-to-r from-[#0F172A] via-[#023E8A] to-[#0263CC] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl relative overflow-hidden border border-white/10"
      >
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Differentiator</span>
            </div>
            <Quote className="w-7 h-7 text-white/20 hidden sm:block" />
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-slate-100 font-poppins">
            "We are specialists, not a general agency. A typical agent's job ends at the offer letter. Ours continues through licensing exams and career guidance — because becoming a healthcare professional is a journey, not a transaction. <span className="text-amber-300 font-bold font-manjari text-base sm:text-lg underline decoration-amber-300/40 underline-offset-4">(Yatra = journey.)</span>"
          </p>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={onOpenCounselling}
              className="px-6 py-3 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#38BDF8] hover:brightness-110 text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition-all transform hover:scale-105 inline-flex items-center gap-2 group"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs text-slate-300 font-medium">100% Transparent • Zero Hidden Agent Markups</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


