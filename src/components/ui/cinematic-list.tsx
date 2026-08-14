"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MoveRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export interface CinematicItemProps {
  id: string;
  title: string;
  location: string;
  src: string;
  alt: string;
  question?: string;
  answer?: string;
}

function CinematicListItem({
  id,
  title,
  location,
  src,
  alt,
  question,
  answer,
}: CinematicItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "group relative flex w-full cursor-pointer flex-col justify-center overflow-hidden border-b border-[#0263CC]/20 bg-white",
        "transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] p-5 sm:p-6 md:p-8",
        isOpen ? "bg-[#0A192F] text-white" : "hover:bg-[#0A192F]/95"
      )}
    >
      {/* --- Background Image Layer --- */}
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full transition-opacity duration-700 ease-out pointer-events-none",
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 scale-100"
        />
        {/* Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/60" />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 flex w-full flex-col space-y-4">
        {/* Top Row: ID, Title, Action */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Left Side: ID & Title */}
          <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
            <span
              className={cn(
                "font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded-lg border flex-shrink-0 transition-colors duration-300",
                isOpen
                  ? "bg-[#0263CC] text-white border-[#0263CC]"
                  : "bg-slate-100 text-[#0263CC] border-slate-200 group-hover:bg-[#0263CC] group-hover:text-white group-hover:border-[#0263CC]"
              )}
            >
              {id}
            </span>

            <div className="flex flex-col flex-1 min-w-0">
              <h3
                className={cn(
                  "text-base sm:text-xl md:text-2xl font-bold tracking-tight font-manjari transition-colors duration-300 leading-snug",
                  isOpen
                    ? "text-white"
                    : "text-[#0A192F] group-hover:text-white"
                )}
              >
                {title}
              </h3>
              
              {/* Category Location Tag */}
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={cn(
                    "inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-all duration-300 font-poppins",
                    isOpen
                      ? "bg-[#3FE0D6]/20 text-[#3FE0D6] border-[#3FE0D6]/40"
                      : "bg-[#0263CC]/10 text-[#0263CC] border-[#0263CC]/20 group-hover:bg-[#3FE0D6]/20 group-hover:text-[#3FE0D6] group-hover:border-[#3FE0D6]/40"
                  )}
                >
                  {location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Revealed Answer Box on Click or Hover */}
        {answer && (
          <div
            className={cn(
              "transition-all duration-500 pt-3 max-w-4xl",
              isOpen ? "block opacity-100" : "hidden group-hover:block opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-2xl text-slate-100 text-xs sm:text-sm font-poppins leading-relaxed shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-[#FBBF24] text-xs font-extrabold uppercase tracking-wider">
                <span>Direct Answer</span>
              </div>
              <p className="text-slate-100 font-poppins leading-relaxed">
                <strong className="text-[#3FE0D6] font-extrabold">Our Honest Answer:</strong> {answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CinematicList({ items }: { items?: CinematicItemProps[] }) {
  const defaultItems: CinematicItemProps[] = [
    {
      id: "01",
      title: "Alpine Lodge",
      location: "Switzerland",
      src: "https://images.unsplash.com/photo-1474110041259-8847cc6c0169?auto=format&fit=crop&w=1200&q=80",
      alt: "Snowy mountains",
    },
    {
      id: "02",
      title: "Desert Oasis",
      location: "Morocco",
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      alt: "Desert dunes",
    },
    {
      id: "03",
      title: "Coastal Villa",
      location: "Amalfi Coast",
      src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      alt: "Coastal view",
    },
    {
      id: "04",
      title: "Urban Loft",
      location: "New York",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      alt: "City skyline",
    },
  ];

  const listItems = items || defaultItems;

  return (
    <div className="w-full py-4">
      <div className="mx-auto w-full max-w-6xl px-2 sm:px-4">
        <div className="flex flex-col border-2 border-[#0263CC]/30 rounded-3xl overflow-hidden shadow-[0_10px_35px_-5px_rgba(2,99,204,0.15)] bg-white">
          {listItems.map((item) => (
            <CinematicListItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { CinematicList, CinematicListItem };
