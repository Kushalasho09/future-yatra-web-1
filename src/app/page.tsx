"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
  Globe2,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Stethoscope,
  ChevronRight,
  PlaneTakeoff,
  Sparkles,
  Layers,
  Building2,
  Cpu,
} from "lucide-react";
import SignatureLine from "@/components/SignatureLine";
import MagneticButton from "@/components/MagneticButton";
import HeroBentoCard from "@/components/HeroBentoCard";
import Card3DTilt from "@/components/Card3DTilt";
import AnimatedStatsCounter from "@/components/AnimatedStatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import InfiniteMarquee from "@/components/InfiniteMarquee";

export default function HomePage() {
  const easeTier1 = [0.16, 1, 0.3, 1];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* SIGNATURE SVG LINE: Animated stroke path on desktop, static 2px line on mobile */}
      <SignatureLine />

      {/* AMBIENT 3D BACKGROUND GLOW ORBS */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-navy-glow/15 rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-72 right-10 w-[450px] h-[450px] bg-teal/20 rounded-pill blur-3xl pointer-events-none animate-orb-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* ==================================================================== */}
        {/* SECTION 1: HERO (ASYMMETRIC BENTO GRID - 3D TILT & ENTRANCE)        */}
        {/* ==================================================================== */}
        <section className="py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* DOMINANT 2x2 TILE (Spans 2 columns desktop) - 3D Tilt & Tier 2 Radial Glow */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeTier1 }}
              className="lg:col-span-2"
            >
              <Card3DTilt maxTilt={6} className="h-full">
                <HeroBentoCard className="h-full flex flex-col justify-between min-h-[480px] sm:min-h-[520px] glass-card-light border border-line shadow-xl bg-white/90">
                  <div className="space-y-6">
                    {/* Category Tag */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: easeTier1 }}
                      className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/40 px-3.5 py-1.5 rounded-tag text-teal font-heading text-micro uppercase tracking-wider font-semibold shadow-sm"
                    >
                      <Sparkles className="w-4 h-4 text-teal animate-pulse" />
                      <span>Global Education & Visa Consulting</span>
                    </motion.div>

                    {/* Display Heading 56px */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                      className="font-heading text-[32px] sm:text-[44px] lg:text-display font-bold text-navy tracking-tight leading-[1.12]"
                    >
                      Architecting Global Pathways for Ambitious Scholars & Professionals
                    </motion.h1>

                    {/* Subheading Body-L 18px */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: easeTier1 }}
                      className="text-body-l text-muted max-w-2xl leading-relaxed font-normal"
                    >
                      Empowering students and executives with end-to-end university admissions matching, study-abroad guidance, and hassle-free global visa consulting.
                    </motion.p>
                  </div>

                  {/* Action Buttons Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: easeTier1 }}
                    className="pt-8 flex flex-wrap items-center gap-4"
                  >
                    {/* Tier 2 Magnetic Cursor Pull (±20px) on Primary CTA */}
                    <MagneticButton>
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-3 bg-navy text-white text-body font-semibold px-8 py-4 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_25px_rgba(45,189,182,0.45)] transition-all duration-350 shadow-lg group"
                      >
                        <span>Book Free Consultation</span>
                        <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-150" />
                      </Link>
                    </MagneticButton>

                    {/* Secondary Button */}
                    <Link
                      href="/about"
                      className="inline-flex items-center space-x-2 bg-teal-tint text-navy text-body font-semibold px-8 py-4 rounded-pill border border-teal/40 hover:bg-teal/20 transition-all duration-150"
                    >
                      <span>Explore Our Story</span>
                    </Link>
                  </motion.div>
                </HeroBentoCard>
              </Card3DTilt>
            </motion.div>

            {/* 1x1 BENTO TILE A (Top 500 Ivy Placement) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeTier1 }}
            >
              <Card3DTilt maxTilt={8} className="h-full">
                <div className="glass-card-light rounded-card p-6 md:p-8 border border-line flex flex-col justify-between card-hover-tier-1 shadow-lg bg-white/95 h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-tag bg-teal-tint border border-teal/30 flex items-center justify-center text-teal shadow-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="inline-block bg-teal-tint px-3 py-1 rounded-tag text-teal font-heading text-micro uppercase tracking-wider font-semibold border border-teal/30">
                      Global Campus Network
                    </div>
                    <h3 className="font-heading text-h3 font-bold text-navy">
                      Top 500 Ivy & World Campus Placement
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      Direct admission partnerships across USA, UK, Canada, Australia, and Europe with full scholarship support.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-line flex items-center justify-between text-micro text-navy font-semibold uppercase tracking-wider">
                    <span>Placement Success</span>
                    <span className="text-teal font-bold text-body">98.6%</span>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>

            {/* 1x1 BENTO TILE B (Visa Filing) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeTier1 }}
              className="lg:col-span-3 xl:col-span-1"
            >
              <Card3DTilt maxTilt={8} className="h-full">
                <div className="glass-card-light rounded-card p-6 md:p-8 border border-line flex flex-col justify-between card-hover-tier-1 shadow-lg bg-white/95 h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-tag bg-teal-tint border border-teal/30 flex items-center justify-center text-teal shadow-sm">
                      <FileCheck2 className="w-6 h-6" />
                    </div>
                    <div className="inline-block bg-sand px-3 py-1 rounded-tag text-navy font-heading text-micro uppercase tracking-wider font-semibold border border-line">
                      Visa & Legal Advisory
                    </div>
                    <h3 className="font-heading text-h3 font-bold text-navy">
                      100% Compliant Visa Processing
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      Personalized financial documentation strategy, mock embassy interview drills, and priority processing.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-line flex items-center justify-between text-micro text-navy font-semibold uppercase tracking-wider">
                    <span>Visas Processed</span>
                    <span className="text-teal font-bold text-body">50,000+</span>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>

          </div>
        </section>

      </div>

      {/* ==================================================================== */}
      {/* SECTION 2: CONTINUOUS MOVING TICKER MARQUEE                          */}
      {/* ==================================================================== */}
      <InfiniteMarquee />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* ==================================================================== */}
        {/* SECTION 3: ANIMATED STATS COUNTER BAR                                 */}
        {/* ==================================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeTier1 }}
          className="py-12"
        >
          <div className="bg-sand/70 rounded-section p-8 border border-line/80 shadow-sm">
            <AnimatedStatsCounter />
          </div>
        </motion.section>


        {/* ==================================================================== */}
        {/* SECTION 4: THE 4 VERTICALS — EXACT LOCKED NAMES (3D BENTO GRID)      */}
        {/* ==================================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeTier1 }}
          className="py-16 md:py-24"
        >
          <div className="bg-white rounded-section p-8 sm:p-12 lg:p-16 border border-line/80 shadow-lg space-y-12 relative overflow-hidden">
            {/* Ambient section glow */}
            <div className="absolute -right-20 top-0 w-80 h-80 bg-teal-tint rounded-pill blur-3xl pointer-events-none" />

            {/* Section Header */}
            <div className="max-w-3xl space-y-3 relative z-10">
              <span className="text-micro font-heading uppercase tracking-wider text-teal font-semibold">
                Our 4 Strategic Brands
              </span>
              <h2 className="font-heading text-h1 font-bold text-navy tracking-tight">
                Specialized Global Education Verticals
              </h2>
              <p className="text-body-l text-muted">
                Explore our specialized sub-brands tailored for university placement, test prep, medical study, and student visa processing.
              </p>
            </div>

            {/* Asymmetric 3D Bento Grid for the 4 Locked Verticals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">
              
              {/* VERTICAL 1: University Yatra (Spans 7 cols desktop) */}
              <div className="lg:col-span-7">
                <Card3DTilt maxTilt={7} className="h-full">
                  <div className="glass-card-light rounded-card p-8 border border-line/80 flex flex-col justify-between card-hover-tier-1 group bg-white shadow-md h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-tag bg-navy text-teal font-heading font-bold text-h3 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                          <GraduationCap className="w-6 h-6 text-teal-bright" />
                        </div>
                        <span className="text-micro font-bold uppercase tracking-wider text-teal bg-teal-tint px-3 py-1 rounded-tag border border-teal/30">
                          Primary Vertical
                        </span>
                      </div>

                      <h3 className="font-heading text-h2 font-bold text-navy group-hover:text-teal transition-colors duration-150">
                        University Yatra
                      </h3>

                      <p className="text-body text-muted leading-relaxed">
                        Direct university admissions placement and campus matching across top-ranked institutions in USA, UK, Canada, Australia, and Europe.
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                      <span className="text-micro uppercase tracking-wider text-navy font-semibold">
                        Global Admissions
                      </span>
                      <Link
                        href="/brands"
                        className="text-small font-semibold text-teal hover:text-navy transition-colors duration-150 inline-flex items-center space-x-1 group/link"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

              {/* VERTICAL 2: Academic Yatra (Spans 5 cols desktop) */}
              <div className="lg:col-span-5">
                <Card3DTilt maxTilt={7} className="h-full">
                  <div className="glass-card-light rounded-card p-8 border border-line/80 flex flex-col justify-between card-hover-tier-1 group bg-white shadow-md h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-tag bg-navy text-teal font-heading font-bold text-h3 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                          <BookOpen className="w-6 h-6 text-teal-bright" />
                        </div>
                        <span className="text-micro font-bold uppercase tracking-wider text-teal bg-teal-tint px-3 py-1 rounded-tag border border-teal/30">
                          Test & Writing
                        </span>
                      </div>

                      <h3 className="font-heading text-h2 font-bold text-navy group-hover:text-teal transition-colors duration-150">
                        Academic Yatra
                      </h3>

                      <p className="text-body text-muted leading-relaxed">
                        IELTS, TOEFL, GRE, GMAT test preparation, statement of purpose (SOP) writing guidance, and academic skill building.
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                      <span className="text-micro uppercase tracking-wider text-navy font-semibold">
                        Test Prep
                      </span>
                      <Link
                        href="/brands"
                        className="text-small font-semibold text-teal hover:text-navy transition-colors duration-150 inline-flex items-center space-x-1 group/link"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

              {/* VERTICAL 3: Medico Yatra (Spans 5 cols desktop) */}
              <div className="lg:col-span-5">
                <Card3DTilt maxTilt={7} className="h-full">
                  <div className="glass-card-light rounded-card p-8 border border-line/80 flex flex-col justify-between card-hover-tier-1 group bg-white shadow-md h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-tag bg-navy text-teal font-heading font-bold text-h3 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                          <Stethoscope className="w-6 h-6 text-teal-bright" />
                        </div>
                        <span className="text-micro font-bold uppercase tracking-wider text-teal bg-teal-tint px-3 py-1 rounded-tag border border-teal/30">
                          Medical Track
                        </span>
                      </div>

                      <h3 className="font-heading text-h2 font-bold text-navy group-hover:text-teal transition-colors duration-150">
                        Medico Yatra
                      </h3>

                      <p className="text-body text-muted leading-relaxed">
                        Specialized international medical study abroad advisory, MBBS/MD placements, licensing exam guidance, and hospital clinical electives.
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                      <span className="text-micro uppercase tracking-wider text-navy font-semibold">
                        Medical Admissions
                      </span>
                      <Link
                        href="/brands"
                        className="text-small font-semibold text-teal hover:text-navy transition-colors duration-150 inline-flex items-center space-x-1 group/link"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

              {/* VERTICAL 4: ApplyVisa Yatra (Spans 7 cols desktop) */}
              <div className="lg:col-span-7">
                <Card3DTilt maxTilt={7} className="h-full">
                  <div className="glass-card-light rounded-card p-8 border border-line/80 flex flex-col justify-between card-hover-tier-1 group bg-white shadow-md h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-tag bg-navy text-teal font-heading font-bold text-h3 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                          <PlaneTakeoff className="w-6 h-6 text-teal-bright" />
                        </div>
                        <span className="text-micro font-bold uppercase tracking-wider text-teal bg-teal-tint px-3 py-1 rounded-tag border border-teal/30">
                          Immigration & Visa
                        </span>
                      </div>

                      <h3 className="font-heading text-h2 font-bold text-navy group-hover:text-teal transition-colors duration-150">
                        ApplyVisa Yatra
                      </h3>

                      <p className="text-body text-muted leading-relaxed">
                        End-to-end student visa processing, legal financial documentation review, mock embassy interview drills, and post-study work permit filing.
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                      <span className="text-micro uppercase tracking-wider text-navy font-semibold">
                        Visa Advisory
                      </span>
                      <Link
                        href="/brands"
                        className="text-small font-semibold text-teal hover:text-navy transition-colors duration-150 inline-flex items-center space-x-1 group/link"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

            </div>
          </div>
        </motion.section>


        {/* ==================================================================== */}
        {/* SECTION 5: TESTIMONIAL CAROUSEL SECTION                             */}
        {/* ==================================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeTier1 }}
          className="py-16 md:py-24"
        >
          <TestimonialCarousel />
        </motion.section>


        {/* ==================================================================== */}
        {/* SECTION 6: DARK/NAVY CONTRAST FLOATING CTA CONTAINER                 */}
        {/* ==================================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeTier1 }}
          className="py-16 md:py-24"
        >
          <div className="glass-card-dark rounded-section p-10 sm:p-16 text-center space-y-8 relative overflow-hidden border border-teal-bright/30 shadow-2xl">
            {/* Glow background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-navy-glow/50 rounded-pill blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="text-micro font-heading uppercase tracking-wider text-teal-bright font-semibold">
                Begin Your Application Today
              </span>
              <h2 className="font-heading text-h1 font-bold text-white tracking-tight">
                Ready to Secure Your Overseas Education & Student Visa?
              </h2>
              <p className="text-body-l text-teal-tint/90">
                Book a 1-on-1 strategic consultation with our senior educational counselors and visa specialists.
              </p>
            </div>

            <div className="relative z-10 pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-teal text-navy text-body font-semibold px-8 py-4 rounded-pill hover:bg-teal-bright hover:shadow-[0_0_30px_rgba(63,224,214,0.7)] transition-all duration-350 shadow-xl group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-navy group-hover:translate-x-1 transition-transform duration-150" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
