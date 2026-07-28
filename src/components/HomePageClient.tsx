"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  GraduationCap,
  FileCheck2,
  BookOpen,
  Stethoscope,
  ChevronRight,
  Sparkles,
  Layers,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Users,
  Compass,
  HelpCircle,
  Briefcase,
  Lock,
  Target,
  Clock,
  Check,
} from "lucide-react";
import SignatureLine from "@/components/SignatureLine";
import MagneticButton from "@/components/MagneticButton";
import Card3DTilt from "@/components/Card3DTilt";
import FaqAccordion from "@/components/FaqAccordion";

export default function HomePageClient() {
  const easeTier1: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const brandPills = [
    {
      name: "University Yatra",
      desc: "Study Abroad & Admissions",
      href: "/coming-soon?brand=university-yatra",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    },
    {
      name: "Academic Yatra",
      desc: "IELTS, PTE & Test Prep",
      href: "/coming-soon?brand=academic-yatra",
      icon: BookOpen,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    },
    {
      name: "Medico Yatra",
      desc: "MBBS & Healthcare Education Abroad",
      href: "/coming-soon?brand=medico-yatra",
      icon: Stethoscope,
      color: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
    },
    {
      name: "ApplyVisa Yatra",
      desc: "Visitor, Family & Immigration Visas",
      href: "/coming-soon?brand=applyvisa-yatra",
      icon: FileCheck2,
      color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    },
  ];

  const whatSetsUsApart = [
    {
      title: "One Company, Four Specialties",
      description: "Every stage of your journey, under one roof",
      icon: Layers,
    },
    {
      title: "Direct Accountability",
      description: "One company standard across every brand, every advisor",
      icon: ShieldCheck,
    },
    {
      title: "Compliance-First",
      description: "We never promise an admission, visa, or outcome we can't guarantee",
      icon: Award,
    },
    {
      title: "Transparent Process",
      description: "You'll always know exactly what happens next",
      icon: Clock,
    },
  ];

  const ourBrands = [
    {
      name: "University Yatra",
      tagline: "Admissions & Student Visas",
      description:
        "Study abroad admissions and student visa guidance for Canada, the USA, the UK, Australia, and Europe.",
      link: "/coming-soon?brand=university-yatra",
      icon: GraduationCap,
      accent: "from-blue-600 to-indigo-600",
    },
    {
      name: "Academic Yatra",
      tagline: "Test Preparation & Languages",
      description:
        "Test preparation for IELTS, PTE, CELPIP, TOEFL, GRE, GMAT, and language training for German and French.",
      link: "/coming-soon?brand=academic-yatra",
      icon: BookOpen,
      accent: "from-teal to-emerald-600",
    },
    {
      name: "Medico Yatra",
      tagline: "MBBS & Healthcare Pathways",
      description:
        "Specialist counselling for MBBS and allied healthcare education abroad, with an honest picture of the FMGE/NExT pathway back into India.",
      link: "/coming-soon?brand=medico-yatra",
      icon: Stethoscope,
      accent: "from-rose-500 to-pink-600",
    },
    {
      name: "ApplyVisa Yatra",
      tagline: "Visitor & Family Visas",
      description:
        "Documentation and application support for visitor, spouse, parent, and family visas, and permanent residency guidance.",
      link: "/coming-soon?brand=applyvisa-yatra",
      icon: FileCheck2,
      accent: "from-amber-500 to-orange-600",
    },
  ];

  const commitmentPoints = [
    'We never say "guaranteed admission" or "guaranteed visa" — no company can honestly promise that.',
    "Visa and immigration decisions rest solely with the relevant embassy or immigration authority. Our role is to help you prepare the strongest, most accurate application — never a promised outcome.",
    "We explain the genuinely difficult parts of a pathway — timelines, costs, exam requirements — not just the appealing parts.",
    "Every advisor across every Future Yatra brand is held to the same company-wide standard of transparency.",
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Start with a free, no-obligation conversation.",
      desc: "Tell us your goals — we'll tell you honestly whether we're the right fit before anything else happens.",
    },
    {
      step: "02",
      title: "Get a personalised roadmap.",
      desc: "Based on your profile, budget, and timeline, across the relevant Future Yatra brand — admissions, test prep, MBBS, or visa.",
    },
    {
      step: "03",
      title: "Move forward with direct support.",
      desc: "Application, documentation, and preparation support at every stage of your journey.",
    },
  ];

  const whyFutureYatra = [
    {
      title: "Honest by Design",
      desc: "No promised admissions or visas. Every brand under Future Yatra is built around accurate, verifiable information — even when that means telling you something you didn't want to hear.",
      icon: ShieldCheck,
    },
    {
      title: "One Accountable Company",
      desc: "Not a franchise of disconnected offices. A single company standard applied consistently across every brand and every advisor you work with.",
      icon: Building2,
    },
    {
      title: "An Integrated Ecosystem",
      desc: "Most students need more than one service across their journey — a test score, an admission, a visa. Under Future Yatra, that journey can move between specialist teams without starting over with a new consultancy each time.",
      icon: Layers,
    },
    {
      title: "Built for the Long Term",
      desc: "The decisions we advise on shape your next several years — and in the case of MBBS and immigration pathways, decades. We treat every recommendation with that weight.",
      icon: Target,
    },
  ];

  const faqItems = [
    {
      question: "What is Future Yatra Private Limited?",
      answer:
        "Future Yatra Private Limited is the parent company of four specialist brands — University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra — serving Indian students and families across study abroad admissions, test preparation, MBBS counselling, and visa documentation.",
    },
    {
      question: "How is Future Yatra different from other consultancies?",
      answer:
        "Every brand under Future Yatra follows the same company-wide standard — we never use guaranteed-outcome language, and your journey can move between our specialist brands without starting over with a new consultancy.",
    },
    {
      question: "How do I know which Future Yatra brand is right for me?",
      answer:
        'If you need a test score, start with Academic Yatra. If you\'re applying to universities abroad, start with University Yatra. If you\'re pursuing MBBS abroad, start with Medico Yatra. If you need visa or documentation support, start with ApplyVisa Yatra. Or use "Book a Free Conversation" and we\'ll direct you.',
    },
    {
      question: "Does Future Yatra guarantee admission or visa approval?",
      answer:
        "No. Future Yatra Private Limited and its brands provide counselling, documentation, and application support. Admission decisions rest with universities, and visa decisions rest solely with the relevant embassy or immigration authority.",
    },
    {
      question: "Where does Future Yatra operate?",
      answer:
        "Future Yatra is based in India and primarily serves Indian students and families, with counselling coverage extending to study and visa destinations including Canada, the USA, the UK, Australia, and Europe.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-navy-deep overflow-hidden">
      {/* SIGNATURE SVG LINE */}
      <SignatureLine />

      {/* AMBIENT BACKGROUND GLOW ORBS */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-navy-glow/15 rounded-pill blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-72 right-10 w-[450px] h-[450px] bg-teal/20 rounded-pill blur-3xl pointer-events-none animate-orb-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* ==================================================================== */}
        {/* HERO SECTION                                                         */}
        {/* ==================================================================== */}
        <section className="py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeTier1 }}
                className="inline-flex items-center space-x-2 bg-navy text-white px-4 py-2 rounded-pill font-heading text-micro uppercase tracking-wider font-semibold shadow-md"
              >
                <Sparkles className="w-4 h-4 text-teal animate-pulse" />
                <span>Future Yatra Private Limited</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeTier1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.12]"
              >
                Your Journey. <span className="text-teal">Every Stage.</span> One Company.
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeTier1 }}
                className="text-body-l text-muted leading-relaxed max-w-2xl font-normal"
              >
                Future Yatra Private Limited brings together four specialist brands — study abroad
                admissions, test preparation, MBBS counselling, and visa documentation — so you
                never have to piece your journey together across unrelated consultancies.
              </motion.p>

              {/* Hero Primary Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeTier1 }}
                className="pt-2"
              >
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 bg-navy text-white text-body font-semibold px-8 py-4 rounded-pill hover:bg-navy-glow hover:shadow-[0_0_25px_rgba(45,189,182,0.45)] transition-all duration-350 shadow-lg group"
                  >
                    <span>Book a Free Conversation</span>
                    <ArrowRight className="w-5 h-5 text-teal-bright group-hover:translate-x-1 transition-transform duration-150" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Visual Collage (Inspired by User's Reference Layouts) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeTier1 }}
              className="lg:col-span-5 relative"
            >
              <Card3DTilt maxTilt={6}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative flight/path dashes graphics */}
                  <svg
                    className="absolute -top-10 -right-10 w-48 h-48 text-teal/30 pointer-events-none hidden sm:block"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <path
                      d="M20 180 C 80 120, 120 80, 180 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </svg>

                  {/* Main Visual Image Card */}
                  <div className="relative rounded-[32px] overflow-hidden border border-line shadow-2xl bg-white group">
                    <Image
                      src="/images/hero_student_journey.png"
                      alt="Future Yatra Student Journey"
                      width={600}
                      height={650}
                      className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Floating Secondary Image Cards */}
                  <div className="absolute -bottom-6 -left-6 w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                    <Image
                      src="/images/hero_test_prep.png"
                      alt="Academic Prep"
                      width={200}
                      height={200}
                      className="w-full h-28 object-cover"
                    />
                  </div>

                  <div className="absolute -top-6 -left-6 w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-white shadow-xl hidden sm:block">
                    <Image
                      src="/images/hero_visa_passport.png"
                      alt="Visa Support"
                      width={200}
                      height={200}
                      className="w-full h-28 object-cover"
                    />
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* WHAT SETS US APART                                                   */}
        {/* ==================================================================== */}
        <section className="py-16 border-t border-line/60">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-heading text-micro uppercase tracking-wider text-teal font-semibold">
              Distinct Standard
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatSetsUsApart.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-light rounded-2xl p-6 border border-line flex flex-col justify-between hover:border-teal/50 hover:shadow-lg transition-all duration-300 bg-white/80"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-tint border border-teal/30 flex items-center justify-center text-teal">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-small text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* WHO WE ARE                                                           */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="glass-card-light rounded-3xl p-8 sm:p-12 border border-line bg-gradient-to-br from-white via-sand-tint to-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 bg-teal-tint text-teal px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Who We Are</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
                Built for the Complete Study Abroad & Visa Journey
              </h2>

              <div className="space-y-4 text-body text-muted leading-relaxed font-normal">
                <p>
                  Future Yatra Private Limited exists because a study abroad journey is rarely just
                  one decision. It moves through a test score, a university application, sometimes
                  a medical entrance pathway, and almost always a visa.
                </p>
                <p>
                  Instead of building one generalist consultancy, we built four specialist brands —
                  each focused on one part of that journey, each held to the same company-wide
                  standard of transparent, ethical counselling.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about-us/"
                  className="inline-flex items-center space-x-2 text-teal font-semibold text-body hover:text-navy transition-colors duration-150 group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* OUR BRANDS                                                           */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-heading text-micro uppercase tracking-wider text-teal font-semibold">
              The Verticals
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Our Brands</h2>
            <p className="text-muted text-body">
              Four specialist teams working together under one accountable parent company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourBrands.map((brand, idx) => {
              const IconComp = brand.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-light rounded-3xl p-8 border border-line flex flex-col justify-between hover:border-teal hover:shadow-xl transition-all duration-300 bg-white group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-teal-tint border border-teal/30 flex items-center justify-center text-navy shadow-sm">
                        <IconComp className="w-7 h-7 text-teal" />
                      </div>
                      <span className="text-micro font-bold uppercase tracking-wider text-muted/80 bg-sand px-3 py-1 rounded-full border border-line">
                        {brand.tagline}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-navy group-hover:text-teal transition-colors duration-200">
                      {brand.name}
                    </h3>

                    <p className="text-body text-muted leading-relaxed font-normal">
                      {brand.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-line/60">
                    <Link
                      href={brand.link}
                      className="inline-flex items-center space-x-2 text-navy font-semibold text-small hover:text-teal transition-colors duration-150 group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 text-teal group-hover/link:translate-x-1 transition-transform duration-150" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* OUR COMMITMENT                                                       */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 bg-teal/20 border border-teal/40 text-teal-bright px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-teal-bright" />
                <span>Our Standard</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Our Commitment
              </h2>

              <p className="text-body-l text-sand-tint/90 leading-relaxed">
                Education and visa consulting in India has a trust problem. Future Yatra holds
                itself to a clear standard, across every brand:
              </p>

              <div className="space-y-4 pt-2">
                {commitmentPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-7 h-7 rounded-full bg-teal/20 border border-teal/40 text-teal-bright flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-small text-sand-tint/90 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* HOW IT WORKS                                                         */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-heading text-micro uppercase tracking-wider text-teal font-semibold">
              Simple & Transparent
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="glass-card-light rounded-3xl p-8 border border-line bg-white/90 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="font-heading text-4xl font-extrabold text-teal/40 block">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* WHY FUTURE YATRA                                                     */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-heading text-micro uppercase tracking-wider text-teal font-semibold">
              Core Principles
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Why Future Yatra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyFutureYatra.map((prop, idx) => {
              const IconC = prop.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-light rounded-3xl p-8 border border-line bg-white/90 flex items-start space-x-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-tint border border-teal/30 flex items-center justify-center text-teal flex-shrink-0">
                    <IconC className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-navy">{prop.title}</h3>
                    <p className="text-small text-muted leading-relaxed font-normal">{prop.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SUCCESS SNAPSHOT (COMPLIANCE MANDATED PLACEHOLDER)                    */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="glass-card-light rounded-3xl p-8 sm:p-10 border border-teal/30 bg-teal-tint/30 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-teal/40 text-xs font-semibold text-navy shadow-sm">
              <Lock className="w-4 h-4 text-teal" />
              <span>Compliance Notice — Success Snapshot</span>
            </div>

            <p className="text-body sm:text-body-l text-navy max-w-2xl mx-auto leading-relaxed font-medium">
              Verified success stories will be added here as they become available. We will not
              publish testimonials or outcome claims that cannot be verified.
            </p>

            <div>
              <Link
                href="/coming-soon?section=success-stories"
                className="inline-flex items-center space-x-2 text-teal font-semibold text-body hover:text-navy transition-colors duration-150 group"
              >
                <span>View Success Stories</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* PARTNER WITH US & CAREERS (2-COL BANNERS)                            */}
        {/* ==================================================================== */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partner With Us */}
            <div className="glass-card-light rounded-3xl p-8 border border-line bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-tint flex items-center justify-center text-teal">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy">Partner With Us</h3>
                <p className="text-small text-muted leading-relaxed">
                  Are you a school, college, university, or agent looking to work with an
                  established, multi-brand education and visa consulting group?
                </p>
              </div>

              <div>
                <Link
                  href="/coming-soon?section=partner"
                  className="inline-flex items-center space-x-2 text-teal font-semibold text-small hover:text-navy transition-colors duration-150 group"
                >
                  <span>Partner With Future Yatra</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>
            </div>

            {/* Careers */}
            <div className="glass-card-light rounded-3xl p-8 border border-line bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-tint flex items-center justify-center text-teal">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-micro font-bold uppercase tracking-wider text-teal">
                    Life at Future Yatra
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-navy">Careers</h3>
                </div>
                <p className="text-small text-muted leading-relaxed">
                  We're building four specialist teams under one accountable company — and we're
                  looking for people who take honest student counselling as seriously as we do.
                </p>
              </div>

              <div>
                <Link
                  href="/coming-soon?section=careers"
                  className="inline-flex items-center space-x-2 text-teal font-semibold text-small hover:text-navy transition-colors duration-150 group"
                >
                  <span>Explore Careers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* FAQ SECTION (ACCORDION COMPONENT)                                    */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-heading text-micro uppercase tracking-wider text-teal font-semibold">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqAccordion items={faqItems} />
        </section>

        {/* ==================================================================== */}
        {/* FINAL CTA                                                            */}
        {/* ==================================================================== */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-navy via-navy-deep to-navy text-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden border border-teal/20">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Start With a Free, No-Obligation Conversation
              </h2>
              <p className="text-body-l text-sand-tint/90 leading-relaxed font-normal">
                No pressure, no sales pitch — just an honest first conversation about your goals,
                and how Future Yatra can help.
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 bg-teal text-navy text-body font-semibold px-9 py-4 rounded-pill hover:bg-teal-bright hover:shadow-[0_0_30px_rgba(45,189,182,0.6)] transition-all duration-350 shadow-xl group"
                >
                  <span>Book a Free Conversation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
