"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white border-teal/50 shadow-lg shadow-teal/5"
                : "bg-white/80 border-line/80 hover:border-teal/30 hover:bg-white"
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-2xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center space-x-4 pr-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    isOpen ? "bg-teal text-navy font-bold" : "bg-teal-tint text-teal"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-body font-semibold text-navy leading-snug">
                  {item.question}
                </h3>
              </div>
              <div
                className={`p-2 rounded-full transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-teal-tint text-teal" : "text-muted"
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-1 text-muted text-small leading-relaxed border-t border-line/40 ml-12">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
