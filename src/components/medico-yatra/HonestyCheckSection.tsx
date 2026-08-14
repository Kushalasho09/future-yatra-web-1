"use client";

import { ShieldAlert, ArrowRight } from "lucide-react";
import { CinematicListItem, CinematicItemProps } from "@/components/ui/cinematic-list";
import { HONESTY_CHECK_ITEMS } from "@/lib/medicoData";

interface HonestyCheckSectionProps {
  onOpenCounselling: () => void;
}

export default function HonestyCheckSection({ onOpenCounselling }: HonestyCheckSectionProps) {
  const imagesMap: Record<string, { src: string; location: string; alt: string }> = {
    q1: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      location: "NMC & Degree Licensing",
      alt: "Medical degree and university lab",
    },
    q2: {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      location: "Safety & Student Welfare",
      alt: "Students on campus",
    },
    q3: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      location: "Transparent Process",
      alt: "Honest counselling session",
    },
    q4: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      location: "Cost Comparison: India vs Abroad",
      alt: "Fee breakdown analysis",
    },
    q5: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      location: "NEET & Career Options",
      alt: "Medical career guidance",
    },
  };

  const items: CinematicItemProps[] = HONESTY_CHECK_ITEMS.map((item, index) => {
    const meta = imagesMap[item.id] || {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      location: "Guidance & Verification",
      alt: item.question,
    };

    return {
      id: `0${index + 1}`,
      title: item.question,
      question: item.question,
      answer: item.answer,
      location: meta.location,
      src: meta.src,
      alt: meta.alt,
    };
  });

  return (
    <section id="honesty-check" className="w-full max-w-6xl mx-auto space-y-8 scroll-mt-28 font-poppins py-6">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-manjari text-slate-900 tracking-tight">
          Before You Go Further — Let's Address What You're Actually Worried About
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-poppins">
          Families rarely voice their real hesitations directly. We prefer saying the quiet part out loud with complete honesty.
        </p>
      </div>

      {/* Cinematic List with Unsplash Stock Images & Theme Styling */}
      <div className="w-full border-2 border-[#0263CC]/30 rounded-3xl overflow-hidden shadow-[0_10px_35px_-5px_rgba(2,99,204,0.15)] bg-white">
        {items.map((item) => (
          <CinematicListItem key={item.id} {...item} />
        ))}
      </div>

      {/* Supporting Banner & CTA */}
      <div className="bg-gradient-to-r from-[#0A192F] via-[#023E8A] to-[#0263CC] text-white p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl border border-white/10">
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto font-poppins">
          If your specific worry isn't listed here, that's exactly the right question to bring to a free counselling session — we'd rather answer it honestly now than have it linger unspoken.
        </p>
        <button
          onClick={onOpenCounselling}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-[#0A192F] font-black text-xs sm:text-sm rounded-full shadow-lg hover:brightness-110 transition-all transform hover:scale-105"
        >
          <span>Talk to Us About Your Specific Concern</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
