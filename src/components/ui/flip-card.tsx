'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  whyItMatters?: string;
  features?: string[];
  color?: string;
  icon?: LucideIcon;
  imageUrl?: string;
  actionText?: string;
  onActionClick?: () => void;
}

export default function CardFlip({
  title = 'NMC-Recognised Universities Only',
  subtitle = 'Verified global medical degree compliance',
  whyItMatters = 'Your degree has to count when you come home — this is the single most common thing families regret not checking.',
  features = [
    'Direct NMC Gazetted Compliance',
    '100% English Medium Instruction',
    'Valid FMGE / NExT Eligibility',
    'WHO & ECFMG Directory Listed',
  ],
  color = '#0263CC',
  icon: IconComponent,
  imageUrl,
  actionText = 'Explore Guidelines',
  onActionClick,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[340px] w-full [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]',
        )}
      >
        {/* ─── FRONT: Full-bleed image with gradient title overlay ─── */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-500',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Full-bleed image */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-teal-500" />
          )}

          {/* Dark gradient overlay — stronger at bottom for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

          {/* Colour accent stripe at top */}
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-80"
            style={{ background: `linear-gradient(90deg, ${color}, #02A7BB)` }}
          />

          {/* Bottom text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
            <h3 className="text-[15px] font-extrabold text-white font-manjari leading-snug drop-shadow-sm">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-300 font-poppins leading-relaxed line-clamp-2">
                {subtitle}
              </p>
            )}
            <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-slate-400">
              <span>Hover to explore</span>
              <span className="text-base leading-none rotate-90">↺</span>
            </div>
          </div>
        </div>

        {/* ─── BACK: Dark details panel ─── */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-2xl p-4',
            'bg-gradient-to-br from-slate-900 via-slate-900 to-[#0A192F]',
            'border border-slate-800 shadow-xl text-white',
            'flex flex-col justify-between overflow-hidden',
            'transition-all duration-700',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0263CC]/15 via-transparent to-[#02A7BB]/10 pointer-events-none" />

          <div className="relative z-10 space-y-2.5 flex-1 min-h-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              {IconComponent && (
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  <IconComponent className="w-3 h-3" />
                </div>
              )}
              <h3 className="text-[12.5px] font-extrabold text-white font-manjari leading-tight line-clamp-2">
                {title}
              </h3>
            </div>

            {/* Why it matters */}
            <div className="bg-slate-800/70 px-2.5 py-2 rounded-lg border border-slate-700/60">
              <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                Why It Matters:
              </span>
              <p className="text-[10.5px] text-slate-300 leading-snug font-poppins line-clamp-3">
                {whyItMatters}
              </p>
            </div>

            {/* Feature checklist */}
            <div className="space-y-1.5">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-1.5 text-[10.5px] text-slate-200 font-poppins transition-all duration-500"
                  style={{
                    transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 70 + 120}ms`,
                  }}
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 stroke-[2.5]" />
                  <span className="font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 pt-2 border-t border-slate-800/80 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onActionClick) onActionClick();
              }}
              className="w-full py-2 px-3 rounded-lg text-[10.5px] font-extrabold text-white flex items-center justify-between transition-all duration-300 group/btn shadow-md hover:brightness-110 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(90deg, ${color}, #02A7BB)`,
              }}
            >
              <span>{actionText}</span>
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
