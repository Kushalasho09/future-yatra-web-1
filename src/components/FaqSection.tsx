"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export interface FaqItemData {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqData: FaqItemData[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What is Future Yatra Private Limited?",
    answer:
      "Future Yatra Private Limited is the single accountable parent company operating four specialist brands — University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra — serving Indian students and families across study abroad admissions, test preparation, MBBS counselling, and visa documentation.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "How is Future Yatra different from other consultancies?",
    answer:
      "Unlike traditional agencies that operate through unverified franchises or push sponsored university lists, Future Yatra operates with 100% direct company accountability, zero franchise handoffs, transparent fee structures, and dedicated specialists for each stage of your journey.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "How do I know which Future Yatra brand is right for me?",
    answer:
      "Depending on your goal: University Yatra handles university applications & admissions; Academic Yatra provides test preparation (IELTS, PTE, GRE); Medico Yatra specializes in MBBS abroad with FMGE/NExT screening support; and ApplyVisa Yatra manages visa & residency documentation.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Does Future Yatra guarantee admission or visa approval?",
    answer:
      "No ethical company can guarantee university admissions or embassy visa outcomes. Future Yatra guarantees 100% accurate, compliant, and transparent application preparation with zero hidden claims.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Where does Future Yatra operate?",
    answer:
      "Future Yatra provides direct online counselling and application management nationwide across India, as well as in-person consulting at our corporate headquarters.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sand-tint/20 to-white">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ==================================================================== */}
          {/* LEFT COLUMN: CALLIGRAPHY HEADER & LIVE SUPPORT CARD                  */}
          {/* ==================================================================== */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            <div className="space-y-2 text-center lg:text-left">
              {/* Calligraphy Subtitle */}
              <span className="font-tempting text-teal text-3xl sm:text-4xl font-normal block">
                Clear Answers
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>

              <p className="text-xs sm:text-body text-muted leading-relaxed font-normal pt-1 max-w-md mx-auto lg:mx-0">
                Everything you need to know about our single accountable model, study abroad counselling, and visa processes.
              </p>
            </div>

            {/* LIVE ASSISTANCE HELP CARD */}
            <div className="glass-card-light rounded-3xl p-6 border border-teal/30 bg-gradient-to-br from-teal-tint/50 via-white to-sand-tint/30 space-y-4 shadow-md hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-teal text-navy flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-navy">Still have questions?</h4>
                  <span className="text-[11px] text-muted block font-medium">Speak directly with our senior advisors</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full bg-navy hover:bg-navy-deep text-white px-5 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-sm group"
              >
                <span>TALK WITH AN ADVISOR</span>
                <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </div>

          {/* ==================================================================== */}
          {/* RIGHT COLUMN: FLUID PILL ACCORDION CAPSULES (NO RECTANGULAR BOXES)   */}
          {/* ==================================================================== */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "rounded-[28px] sm:rounded-[32px] bg-gradient-to-r from-teal-tint/40 via-white to-sand-tint/30 border border-teal shadow-xl"
                      : "rounded-2xl sm:rounded-full bg-white/90 border border-teal/20 hover:border-teal/50 hover:bg-white shadow-xs"
                  }`}
                >
                  {/* ACCORDION BUTTON HEADER */}
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-center space-x-3.5 sm:space-x-4 pr-3">
                      {/* Circle Number Badge */}
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-extrabold transition-colors duration-300 ${
                          isOpen
                            ? "bg-teal text-navy shadow-sm"
                            : "bg-teal-tint text-teal group-hover:bg-teal group-hover:text-navy"
                        }`}
                      >
                        {item.number}
                      </div>

                      {/* Question Text */}
                      <h3 className="font-heading text-sm sm:text-base font-bold text-navy group-hover:text-teal transition-colors duration-200 leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-navy text-teal-bright rotate-180"
                          : "bg-teal-tint text-teal group-hover:bg-navy group-hover:text-white"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* ACCORDION EXPANDABLE CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 text-xs sm:text-small text-muted leading-relaxed font-normal border-t border-teal/20 ml-11 sm:ml-13">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
