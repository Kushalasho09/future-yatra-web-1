"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, GraduationCap, Plane, Wallet } from "lucide-react";

export default function StudentStorySection() {
  return (
    <section
      aria-labelledby="student-testimonials-title"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sand-tint/25 to-white py-14 sm:py-20 lg:py-24 border-t border-b border-line/60"
    >
      {/* Background Ambient Glow Orbs matching Future Yatra Theme */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-glow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <header className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-teal-tint px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-teal-dark border border-teal/20 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-teal" />
            <span>Student Story</span>
          </div>

          {/* ==================== OLD GRADIENT CODE STARTS HERE ==================== */}
          {/*
          <span className="font-tempting bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent text-2xl sm:text-3xl font-medium block">
            Client Experiences
          </span>

          <h2
            id="student-testimonials-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mt-1"
          >
            A Journey of Support,{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#0F766E] bg-clip-text text-transparent">
              In His Own Words.
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mt-3.5 h-1.5 w-20 rounded-full bg-gradient-to-r from-teal to-teal-bright"
          />
          */}
          {/* ==================== OLD GRADIENT CODE ENDS HERE ==================== */}

          {/* ==================== NEW SOLID COUNSELLING CODE STARTS HERE ==================== */}
          <span className="font-tempting text-[#0D9488] text-2xl sm:text-3xl font-medium block">
            Client Experiences
          </span>

          <h2
            id="student-testimonials-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mt-1"
          >
            A Journey of Support,{" "}
            <span className="text-[#0D9488]">
              In His Own Words.
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mt-3.5 h-1.5 w-20 rounded-full bg-[#0D9488]"
          />
          {/* ==================== NEW SOLID COUNSELLING CODE ENDS HERE ==================== */}
        </header>

        {/* Content Container */}
        <div className="w-full">
          
          {/* ============================================================== */}
          {/* DESKTOP VERSION (hidden lg:block)                              */}
          {/* ============================================================== */}
          <div className="hidden lg:block">
            {/* Row 1: 3 Columns Grid (Card 01 - Tauheed Portrait - Card 03) */}
            <div className="relative mx-auto grid w-full max-w-[1040px] xl:max-w-[1100px] grid-cols-[minmax(0,1fr)_minmax(230px,270px)_minmax(0,1fr)] items-center gap-8 xl:gap-14">
              
              {/* LEFT COLUMN: Card 01 (Getting Into Algoma University) */}
              <div className="relative z-10 min-w-0">
                <article className="relative flex min-w-0 flex-col rounded-3xl border border-line bg-white/95 backdrop-blur-md p-6 shadow-md hover:shadow-xl hover:border-teal/50 transition-all duration-300">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="relative">
                      <span className="block text-[32px] font-extrabold leading-none tracking-[-0.06em] text-navy lg:text-[36px] font-heading">
                        01.
                      </span>
                      {/* Teal Spark Mark */}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 45 42"
                        fill="none"
                        className="absolute -right-5 -top-2 h-6 w-6"
                      >
                        <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                        <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                        <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                    </div>

                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal border border-teal/20 shadow-xs">
                      <GraduationCap className="w-5 h-5 text-teal" />
                    </span>
                  </div>

                  <h3 className="font-heading text-[16px] font-bold leading-snug tracking-tight text-navy">
                    Getting Into Algoma University
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted font-normal">
                    “I wasn&apos;t sure if my 3-year degree would be enough, but the UY team helped me figure things out and get into Algoma University.”
                  </p>
                </article>

                {/* Hand-drawn Arrow Connecting Card 01 to Portrait (FY Teal Theme) */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 160 110"
                  fill="none"
                  className="pointer-events-none absolute -right-[62px] xl:-right-[70px] top-[45%] z-20 h-[55px] w-[70px]"
                >
                  <path
                    d="M150 65 C120 102 79 96 82 65 C84 38 117 45 107 71 C93 105 28 86 22 20"
                    stroke="#0D9488"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 36 L22 20 L38 33"
                    stroke="#0D9488"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* CENTER COLUMN: Tauheed Portrait & FY Blob */}
              <div className="relative z-20 min-w-0">
                <div className="relative mx-auto w-full max-w-[270px]">
                  <div className="relative mx-auto h-[255px] w-[230px] lg:h-[265px] lg:w-[240px]">
                    {/* ==================== OLD GRADIENT BLOB STARTS HERE ==================== */}
                    {/*
                    <div className="absolute inset-x-3 bottom-5 top-2 rotate-[-5deg] rounded-[47%_53%_41%_59%/52%_39%_61%_48%] bg-gradient-to-br from-[#0D9488] via-[#0284C7] to-[#122447] shadow-xl shadow-teal/20" />
                    */}
                    {/* ==================== OLD GRADIENT BLOB ENDS HERE ==================== */}

                    {/* ==================== NEW SOLID COUNSELLING BLOB STARTS HERE ==================== */}
                    <div className="absolute inset-x-3 bottom-5 top-2 rotate-[-5deg] rounded-[47%_53%_41%_59%/52%_39%_61%_48%] bg-[#122447] shadow-xl shadow-teal/20" />
                    {/* ==================== NEW SOLID COUNSELLING BLOB ENDS HERE ==================== */}
                    
                    {/* Portrait Image masked inside Blob */}
                    <div className="absolute inset-x-3 bottom-5 top-2 overflow-hidden rounded-[47%_53%_41%_59%/52%_39%_61%_48%]">
                      <Image
                        src="/images/testimonials/tauheed-khan.png"
                        alt="Tauheed Khan - University Yatra student"
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1024px) 240px, 230px"
                        priority
                      />
                    </div>

                    {/* Floating Plane Badge */}
                    <span className="absolute right-0 top-[47%] z-10 grid h-11 w-11 rotate-12 place-items-center rounded-2xl bg-white text-teal border border-teal/30 shadow-lg">
                      <Plane className="w-5 h-5 text-teal" />
                    </span>

                    {/* Top Right Decorative Spark SVG (FY Teal) */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 100 85"
                      fill="none"
                      className="absolute -right-1 top-0 h-[50px] w-[50px] rotate-[-12deg]"
                    >
                      <path d="M14 44 L39 10" stroke="#2DBDB6" strokeWidth="6" strokeLinecap="round" />
                      <path d="M43 54 L72 25" stroke="#2DBDB6" strokeWidth="6" strokeLinecap="round" />
                      <path d="M54 75 L91 62" stroke="#2DBDB6" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Name Tag in FY Clean White/Teal Glass */}
                  <div className="relative z-20 mx-auto -mt-5 w-fit max-w-full rotate-[-3deg] rounded-2xl bg-white/95 backdrop-blur-md border border-teal/30 px-6 py-2 shadow-lg">
                    <h3 className="text-center font-heading text-[20px] font-extrabold tracking-tight text-navy sm:text-[22px]">
                      Tauheed Khan
                    </h3>
                    <span className="text-[10px] font-bold text-teal uppercase tracking-wider block text-center -mt-0.5">
                      University Yatra™ Student
                    </span>
                  </div>

                  {/* Bottom Accent Sparks under Name Tag */}
                  <div className="relative mx-auto mt-1 w-fit">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 45 42"
                      fill="none"
                      className="absolute -left-7 -top-10 h-7 w-7 rotate-[-20deg]"
                    >
                      <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 45 42"
                      fill="none"
                      className="absolute -right-7 -top-7 h-7 w-7 rotate-[130deg]"
                    >
                      <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Card 03 (Post Departure) */}
              <div className="relative z-10 min-w-0">
                <article className="relative flex min-w-0 flex-col rounded-3xl border border-line bg-white/95 backdrop-blur-md p-6 shadow-md hover:shadow-xl hover:border-teal/50 transition-all duration-300">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="relative">
                      <span className="block text-[32px] font-extrabold leading-none tracking-[-0.06em] text-navy lg:text-[36px] font-heading">
                        03.
                      </span>
                      {/* Teal Spark Mark */}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 45 42"
                        fill="none"
                        className="absolute -right-5 -top-2 h-6 w-6"
                      >
                        <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                        <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                        <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                    </div>

                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal border border-teal/20 shadow-xs">
                      <Plane className="w-5 h-5 text-teal" />
                    </span>
                  </div>

                  <h3 className="font-heading text-[16px] font-bold leading-snug tracking-tight text-navy">
                    Post Departure
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted font-normal">
                    “Even after my admission, UY has continued to support me with French classes and guidance on planning my life after moving abroad.”
                  </p>
                </article>

                {/* Hand-drawn Arrow Connecting Portrait to Card 03 (FY Navy Glow Blue) */}
                {/* Positioned strictly outside Card 03 with -left-[68px] and zero text overlap */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 160 110"
                  fill="none"
                  className="pointer-events-none absolute -left-[66px] xl:-left-[74px] top-[45%] z-20 h-[55px] w-[70px]"
                >
                  <path
                    d="M10 65 C40 102 81 96 78 65 C76 38 43 45 53 71 C67 105 132 86 138 20"
                    stroke="#0284C7"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M122 33 L138 20 L151 36"
                    stroke="#0284C7"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Row 2: BOTTOM CENTER (Card 02 - Securing Loan) */}
            <div className="relative mx-auto mt-12 lg:mt-16 max-w-[440px]">
              {/* Hand-drawn Arrow Connecting Portrait to Card 02 (FY Coral Warm Accent) */}
              {/* Perfectly positioned in the gap between the badge and Card 02 with zero overlap */}
              <svg
                aria-hidden="true"
                viewBox="0 0 160 110"
                fill="none"
                className="pointer-events-none absolute -top-[46px] left-[43%] z-20 h-[46px] w-[70px]"
              >
                <path
                  d="M37 5 C20 35 40 70 72 69 C104 68 98 34 77 40 C52 48 79 93 142 88"
                  stroke="#E8604C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M126 72 L142 88 L124 103"
                  stroke="#E8604C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <article className="relative flex min-w-0 flex-col rounded-3xl border border-line bg-white/95 backdrop-blur-md p-6 shadow-md hover:shadow-xl hover:border-teal/50 transition-all duration-300">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="relative">
                    <span className="block text-[32px] font-extrabold leading-none tracking-[-0.06em] text-navy lg:text-[36px] font-heading">
                      02.
                    </span>
                    {/* Teal Spark Mark */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 45 42"
                      fill="none"
                      className="absolute -right-5 -top-2 h-6 w-6"
                    >
                      <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>

                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal border border-teal/20 shadow-xs">
                    <Wallet className="w-5 h-5 text-teal" />
                  </span>
                </div>

                <h3 className="font-heading text-[16px] font-bold leading-snug tracking-tight text-navy">
                  Securing Loan
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted font-normal">
                  “Coming from a middle-class family, arranging the funds felt overwhelming. With UY’s guidance, I secured a ₹40 lakh education loan.”
                </p>
              </article>
            </div>
          </div>

          {/* ============================================================== */}
          {/* MOBILE / TABLET VERSION (lg:hidden)                            */}
          {/* ============================================================== */}
          <div className="lg:hidden">
            {/* Top Portrait */}
            <div className="relative mx-auto w-full max-w-[270px]">
              <div className="relative mx-auto h-[255px] w-[230px] sm:h-[275px] sm:w-[245px]">
                {/* ==================== OLD GRADIENT BLOB STARTS HERE ==================== */}
                {/*
                <div className="absolute inset-x-3 bottom-5 top-2 rotate-[-5deg] rounded-[47%_53%_41%_59%/52%_39%_61%_48%] bg-gradient-to-br from-[#0D9488] via-[#0284C7] to-[#122447] shadow-xl shadow-teal/20" />
                */}
                {/* ==================== OLD GRADIENT BLOB ENDS HERE ==================== */}

                {/* ==================== NEW SOLID COUNSELLING BLOB STARTS HERE ==================== */}
                <div className="absolute inset-x-3 bottom-5 top-2 rotate-[-5deg] rounded-[47%_53%_41%_59%/52%_39%_61%_48%] bg-[#122447] shadow-xl shadow-teal/20" />
                {/* ==================== NEW SOLID COUNSELLING BLOB ENDS HERE ==================== */}
                <div className="absolute inset-x-3 bottom-5 top-2 overflow-hidden rounded-[47%_53%_41%_59%/52%_39%_61%_48%]">
                  <Image
                    src="/images/testimonials/tauheed-khan.png"
                    alt="Tauheed Khan - University Yatra student"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 230px, 245px"
                  />
                </div>
                <span className="absolute right-0 top-[47%] z-10 grid h-11 w-11 rotate-12 place-items-center rounded-2xl bg-white text-teal border border-teal/30 shadow-lg">
                  <Plane className="w-5 h-5 text-teal" />
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 85"
                  fill="none"
                  className="absolute -right-1 top-0 h-[50px] w-[50px] rotate-[-12deg]"
                >
                  <path d="M14 44 L39 10" stroke="#2DBDB6" strokeWidth="6" strokeLinecap="round" />
                  <path d="M43 54 L72 25" stroke="#2DBDB6" strokeWidth="6" strokeLinecap="round" />
                  <path d="M54 75 L91 62" stroke="#2DBDB6" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>

              <div className="relative z-20 mx-auto -mt-5 w-fit max-w-full rotate-[-3deg] rounded-2xl bg-white/95 backdrop-blur-md border border-teal/30 px-6 py-2 shadow-lg">
                <h3 className="text-center font-heading text-[20px] font-extrabold tracking-tight text-navy sm:text-[22px]">
                  Tauheed Khan
                </h3>
                <span className="text-[10px] font-bold text-teal uppercase tracking-wider block text-center -mt-0.5">
                  University Yatra™ Student
                </span>
              </div>

              <div className="relative mx-auto mt-1 w-fit">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 45 42"
                  fill="none"
                  className="absolute -left-7 -top-10 h-7 w-7 rotate-[-20deg]"
                >
                  <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 45 42"
                  fill="none"
                  className="absolute -right-7 -top-7 h-7 w-7 rotate-[130deg]"
                >
                  <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                  <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Stacked Cards Grid */}
            <div className="mx-auto mt-8 grid max-w-[720px] gap-4 sm:grid-cols-2">
              {/* Card 01 */}
              <article className="relative flex min-w-0 flex-col rounded-3xl border border-line bg-white/95 backdrop-blur-md p-5 shadow-sm">
                <div className="mb-2.5 flex items-start justify-between gap-3">
                  <div className="relative">
                    <span className="block text-[30px] font-extrabold leading-none tracking-[-0.06em] text-navy font-heading">
                      01.
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 45 42"
                      fill="none"
                      className="absolute -right-5 -top-2 h-6 w-6"
                    >
                      <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal border border-teal/20">
                    <GraduationCap className="w-5 h-5 text-teal" />
                  </span>
                </div>
                <h3 className="font-heading text-[15px] font-bold text-navy">
                  Getting Into Algoma University
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                  “I wasn&apos;t sure if my 3-year degree would be enough, but the UY team helped me figure things out and get into Algoma University.”
                </p>
              </article>

              {/* Card 02 */}
              <article className="relative flex min-w-0 flex-col rounded-3xl border border-line bg-white/95 backdrop-blur-md p-5 shadow-sm">
                <div className="mb-2.5 flex items-start justify-between gap-3">
                  <div className="relative">
                    <span className="block text-[30px] font-extrabold leading-none tracking-[-0.06em] text-navy font-heading">
                      02.
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 45 42"
                      fill="none"
                      className="absolute -right-5 -top-2 h-6 w-6"
                    >
                      <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal border border-teal/20">
                    <Wallet className="w-5 h-5 text-teal" />
                  </span>
                </div>
                <h3 className="font-heading text-[15px] font-bold text-navy">
                  Securing Loan
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                  “Coming from a middle-class family, arranging the funds felt overwhelming. With UY’s guidance, I secured a ₹40 lakh education loan.”
                </p>
              </article>

              {/* Card 03 (full width on tablet) */}
              <div className="sm:col-span-2">
                <article className="relative flex min-w-0 flex-col rounded-3xl border border-line bg-white/95 backdrop-blur-md p-5 shadow-sm">
                  <div className="mb-2.5 flex items-start justify-between gap-3">
                    <div className="relative">
                      <span className="block text-[30px] font-extrabold leading-none tracking-[-0.06em] text-navy font-heading">
                        03.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 45 42"
                        fill="none"
                        className="absolute -right-5 -top-2 h-6 w-6"
                      >
                        <path d="M6 19 L18 4" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                        <path d="M21 25 L38 14" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                        <path d="M22 35 L39 35" stroke="#2DBDB6" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-tint text-teal border border-teal/20">
                      <Plane className="w-5 h-5 text-teal" />
                    </span>
                  </div>
                  <h3 className="font-heading text-[15px] font-bold text-navy">
                    Post Departure
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                    “Even after my admission, UY has continued to support me with French classes and guidance on planning my life after moving abroad.”
                  </p>
                </article>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
