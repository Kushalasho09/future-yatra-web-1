"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Building2,
  GraduationCap,
} from "lucide-react";

export interface FaqItemData {
  id: string;
  number: string;
  question: string;
  answer: string;
}

/* ==================================================================== */
/* OLD FAQ DATA (PREVIOUS VERSION) STARTS HERE                          */
/* ==================================================================== */
/*
const oldFaqData: FaqItemData[] = [
  {
    id: "faq-1",
    number: "01",
    question: "Which countries can I study in?",
    answer: "We currently help students explore options across Canada, the USA, UK, Australia and Europe.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Can you help me choose a university?",
    answer: "Yes. We can help you evaluate universities based on your academic profile, course, destination and budget.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Can you check my eligibility?",
    answer: "Yes. We review your academic profile against relevant admission requirements.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Do you provide scholarship guidance?",
    answer: "Yes. We help you understand relevant scholarship opportunities and eligibility requirements.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Do you provide test preparation?",
    answer: "Academic Yatra™ provides preparation for IELTS, PTE, DSAT, French and German.",
  },
  {
    id: "faq-6",
    number: "06",
    question: "Do you provide visa assistance?",
    answer: "Yes. ApplyVisa Yatra™ provides support with visa documentation and application preparation.",
  },
  {
    id: "faq-7",
    number: "07",
    question: "Do you guarantee admission or visa approval?",
    answer: "No. Admission and visa decisions are made by universities and government authorities. We provide guidance and application support.",
  },
];
*/
/* ==================================================================== */
/* OLD FAQ DATA ENDS HERE                                               */
/* ==================================================================== */

/* ==================================================================== */
/* NEW DUAL-TAB FAQ DATA (UPDATED CLIENT STRUCTURE) STARTS HERE         */
/* ==================================================================== */
const partnerFaqs: FaqItemData[] = [
  {
    id: "p-1",
    number: "01",
    question: "What is Future Yatra and what does the company specialise in?",
    answer:
      "Future Yatra Private Limited operates across international education consulting, language training and test preparation, healthcare education, and visa and immigration consulting through four specialised brands.",
  },
  {
    id: "p-2",
    number: "02",
    question: "What types of organisations can partner with Future Yatra?",
    answer:
      "We welcome collaboration with universities, educational institutions, international admission agencies, test preparation providers, healthcare education institutions and other relevant service providers.",
  },
  {
    id: "p-3",
    number: "03",
    question: "What kind of B2B collaborations does Future Yatra offer?",
    answer:
      "Our collaboration opportunities may include student recruitment, institutional representation, admission coordination, educational services, referral arrangements and other mutually agreed business engagements.",
  },
  {
    id: "p-4",
    number: "04",
    question: "Which geographical markets does Future Yatra operate in?",
    answer:
      "Our key markets include India, the Middle East, Canada and Europe. Our online-first service model also allows us to engage with clients and partners across international markets.",
  },
  {
    id: "p-5",
    number: "05",
    question: "How can an organisation initiate a partnership with Future Yatra?",
    answer:
      "Interested organisations can contact our corporate team through the website or official communication channels. Our team can discuss the proposed collaboration, business requirements and potential areas of mutual interest.",
  },
];

const studentFaqs: FaqItemData[] = [
  {
    id: "s-1",
    number: "01",
    question: "What services does Future Yatra offer to students?",
    answer:
      "Future Yatra provides support across international university admissions, language training, test preparation, medical education abroad and study visa assistance through its specialised brands.",
  },
  {
    id: "s-2",
    number: "02",
    question: "Which countries can I explore for higher education opportunities?",
    answer:
      "Students can explore opportunities across 50+ countries, including the UK, USA, Canada, Australia, Germany and other European and international destinations, depending on programme availability.",
  },
  {
    id: "s-3",
    number: "03",
    question: "Can Future Yatra help me choose the right course and university?",
    answer:
      "Yes. University Yatra assists students with profile evaluation, course selection and university shortlisting based on academic qualifications, budget, career objectives and preferred study destinations.",
  },
  {
    id: "s-4",
    number: "04",
    question: "Which language and entrance examinations can I prepare for?",
    answer:
      "Academic Yatra offers preparation for more than 10 international examinations, including IELTS, PTE, TOEFL, Duolingo English Test, CELPIP, SAT, GRE and GMAT.",
  },
  {
    id: "s-5",
    number: "05",
    question: "Does Future Yatra provide visa and admission assistance?",
    answer:
      "Yes. Through University Yatra, Medico Yatra and ApplyVisa Yatra, students can access admission guidance, application support, documentation assistance and relevant study visa consulting services.",
  },
];
/* ==================================================================== */
/* NEW DUAL-TAB FAQ DATA ENDS HERE                                      */
/* ==================================================================== */

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<"partner" | "student">("partner");
  const [openId, setOpenId] = useState<string | null>("p-1");

  const currentList = activeTab === "partner" ? partnerFaqs : studentFaqs;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleTabChange = (tab: "partner" | "student") => {
    setActiveTab(tab);
    setOpenId(tab === "partner" ? "p-1" : "s-1");
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sand-tint/20 to-white border-t border-line/60">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: CALLIGRAPHY HEADER & LIVE SUPPORT CARD            */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-dark shadow-xs">
                <HelpCircle className="w-3.5 h-3.5 text-teal" />
                <span className="uppercase tracking-wider">Frequently Asked Questions</span>
              </div>

              {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
              {/*
              <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
                Partner & Student Inquiries
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Clear Answers to{" "}
                <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
                  Key Questions.
                </span>
              </h2>
              */}
              {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

              {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
              <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
                Partner & Student Inquiries
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Clear Answers to{" "}
                <span className="text-[#0D9488]">
                  Key Questions.
                </span>
              </h2>
              {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}

              <p className="text-xs sm:text-body text-muted leading-relaxed font-normal pt-1 max-w-md mx-auto lg:mx-0">
                Transparent answers covering our B2B institutional engagements, regional footprint, and comprehensive student consulting services.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-line shadow-sm relative overflow-hidden">
              <div className="flex items-center space-x-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-tint border border-teal/20 flex items-center justify-center text-teal">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm sm:text-base">
                    Have a specific question?
                  </h4>
                  <p className="text-[11px] text-muted font-medium">
                    Our advisors respond within 24 hours
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted leading-relaxed mb-4">
                Whether you need institutional partnership details or personalized admission advice, our team is ready to assist.
              </p>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 bg-navy hover:bg-navy-glow text-white text-xs sm:text-small font-bold px-5 py-3 rounded-full transition-all duration-200 shadow-sm group"
              >
                <span>Connect With Corporate Team</span>
                <ArrowRight className="w-4 h-4 text-teal-bright group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: DUAL-TAB SWITCHER & ACCORDIONS                   */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Segmented Control Switcher */}
            <div className="flex p-1.5 rounded-2xl bg-sand-tint/70 border border-line max-w-md mx-auto lg:mx-0">
              <button
                type="button"
                onClick={() => handleTabChange("partner")}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-small font-bold transition-all duration-200 ${
                  activeTab === "partner"
                    ? "bg-navy text-white shadow-md"
                    : "text-muted hover:text-navy"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Partner With Us (B2B)</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange("student")}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-small font-bold transition-all duration-200 ${
                  activeTab === "student"
                    ? "bg-navy text-white shadow-md"
                    : "text-muted hover:text-navy"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>For Students</span>
              </button>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {currentList.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-teal/60 shadow-lg"
                        : "bg-white/80 border-line hover:border-teal/30 hover:bg-white shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center space-x-3.5 pr-4">
                        <span className="font-heading font-extrabold text-sm sm:text-base text-teal tabular-nums">
                          {item.number}.
                        </span>
                        <span className="font-heading font-bold text-navy text-sm sm:text-base leading-snug">
                          {item.question}
                        </span>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                          isOpen ? "bg-teal text-white" : "bg-teal-tint text-teal"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-line/40">
                            <p className="text-xs sm:text-small text-muted leading-relaxed font-normal pt-3.5">
                              {item.answer}
                            </p>
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

      </div>
    </section>
  );
}
