export interface CareerOption {
  id: string;
  label: string;
  subLabel?: string;
  iconName: string;
  columnKey: string;
  tagline: string;
  fastPR?: boolean;
}

export interface BudgetOption {
  id: string;
  label: string;
}

export interface PriorityOption {
  id: string;
  label: string;
  iconName: string;
}

export interface CountryResult {
  id: string;
  name: string;
  flag: string;
  region: string;
  careers: string[];
  budgetTiers: string[];
  priorities: string[];
  costBadge: string;
  nmcStatus: string;
  whyFitTemplates: Record<string, string>;
  defaultWhyFit: string;
  language: string;
}

export interface SalaryRow {
  country: string;
  flag: string;
  physician: string;
  dentist: string;
  nurse: string;
  pharmacist: string;
  physiotherapist: string;
  respiratoryTherapist: string;
  physicianVal: number;
  dentistVal: number;
  nurseVal: number;
  pharmacistVal: number;
  physiotherapistVal: number;
  respiratoryTherapistVal: number;
}

export const CAREER_OPTIONS: CareerOption[] = [
  {
    id: "mbbs",
    label: "MBBS / Medicine",
    subLabel: "Become a licensed physician",
    iconName: "Stethoscope",
    columnKey: "physician",
    tagline: "Become a physician with NMC-compliant curriculum & FMGE/NExT prep.",
  },
  {
    id: "bds",
    label: "Dentistry (BDS)",
    subLabel: "Smile & oral health specialist",
    iconName: "Sparkles",
    columnKey: "dentist",
    tagline: "Smile & oral health specialist with modern clinical training.",
  },
  {
    id: "nursing",
    label: "Nursing",
    subLabel: "Globally in-demand care profession",
    iconName: "HeartPulse",
    columnKey: "nurse",
    tagline: "Globally in-demand healthcare career with high placement rates.",
    fastPR: true,
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    subLabel: "Medicines, clinical & community roles",
    iconName: "Pill",
    columnKey: "pharmacist",
    tagline: "Pharmaceutical sciences, clinical research & community roles.",
  },
  {
    id: "physio",
    label: "Physiotherapy",
    subLabel: "Movement & rehabilitation",
    iconName: "Activity",
    columnKey: "physiotherapist",
    tagline: "Rehabilitation, sports medicine, & movement therapy specialists.",
    fastPR: true,
  },
  {
    id: "respiratory_mlt",
    label: "Respiratory Therapy / MLT",
    subLabel: "Critical care & laboratory diagnostics",
    iconName: "Lungs",
    columnKey: "respiratoryTherapist",
    tagline: "Critical care ventilation & diagnostics behind every diagnosis.",
  },
  {
    id: "all",
    label: "Not Sure Yet — Show Me Everything",
    subLabel: "Explore all healthcare options",
    iconName: "HelpCircle",
    columnKey: "nurse",
    tagline: "Explore all allied health & medical opportunities worldwide.",
  },
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  { id: "under_25", label: "Under ₹25 Lakh" },
  { id: "25_50", label: "₹25–50 Lakh" },
  { id: "50_75", label: "₹50–75 Lakh" },
  { id: "75_plus", label: "₹75 Lakh+" },
  { id: "any", label: "Not Sure — I Need Guidance on This Too" },
];

export const PRIORITY_OPTIONS: PriorityOption[] = [
  { id: "lowest_cost", label: "Lowest Overall Cost", iconName: "Coins" },
  { id: "fast_pr", label: "Fastest Path to Settlement / PR", iconName: "Zap" },
  { id: "high_salary", label: "Highest Long-Term Salary", iconName: "TrendingUp" },
  { id: "english_medium", label: "English-Medium Only (No New Language)", iconName: "Globe" },
  { id: "nmc_trusted", label: "Most Established / NMC-Trusted Destination", iconName: "ShieldCheck" },
];

export const DESTINATION_COUNTRIES: CountryResult[] = [
  {
    id: "russia",
    name: "Russia",
    flag: "🇷🇺",
    region: "Eastern Europe",
    careers: ["mbbs", "bds", "pharmacy", "all"],
    budgetTiers: ["under_25", "25_50", "any"],
    priorities: ["lowest_cost", "nmc_trusted"],
    costBadge: "₹18 – ₹28 Lakh total",
    nmcStatus: "100% NMC & WHO Recognised",
    defaultWhyFit: "Offers top government medical universities with 100+ years of pedigree and low cost of living.",
    whyFitTemplates: {
      lowest_cost: "Ideal for high-quality MBBS education under ₹25 Lakhs with low living expenses.",
      nmc_trusted: "Established government universities with thousands of practicing Indian doctors worldwide.",
    },
    language: "Bilingual / English Medium",
  },
  {
    id: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    region: "Europe",
    careers: ["mbbs", "bds", "nursing", "physio", "all"],
    budgetTiers: ["25_50", "50_75", "any"],
    priorities: ["english_medium", "nmc_trusted", "high_salary"],
    costBadge: "₹28 – ₹38 Lakh total",
    nmcStatus: "100% 6-Year USMLE/NMC Pattern",
    defaultWhyFit: "100% English medium instruction, European lifestyle, and direct EU/US licensing compatibility.",
    whyFitTemplates: {
      english_medium: "Strict 100% English-medium curriculum across all 6 years of training.",
      high_salary: "High USMLE pass rates opening pathways to high-paying residency in USA & UK.",
    },
    language: "100% English Medium",
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    flag: "🇺🇿",
    region: "Central Asia",
    careers: ["mbbs", "bds", "pharmacy", "nursing", "all"],
    budgetTiers: ["under_25", "25_50", "any"],
    priorities: ["lowest_cost", "nmc_trusted"],
    costBadge: "₹16 – ₹22 Lakh total",
    nmcStatus: "NMC Compliant 6-Year Course",
    defaultWhyFit: "Modern clinical simulation labs, safe environment, and affordable tuition tailored for Indian students.",
    whyFitTemplates: {
      lowest_cost: "One of the most budget-friendly destinations in Central Asia for MBBS and Allied Health.",
    },
    language: "English Medium with Uzbek Basics",
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    flag: "🇰🇿",
    region: "Central Asia",
    careers: ["mbbs", "bds", "pharmacy", "all"],
    budgetTiers: ["under_25", "25_50", "any"],
    priorities: ["lowest_cost", "nmc_trusted"],
    costBadge: "₹18 – ₹24 Lakh total",
    nmcStatus: "NMC Recognized Universities",
    defaultWhyFit: "High NExT/FMGE pass rates, proximity to India, and government medical academies.",
    whyFitTemplates: {
      lowest_cost: "High ROI medical training with tuition payable in comfortable yearly installments.",
    },
    language: "English Medium",
  },
  {
    id: "philippines",
    name: "Philippines",
    flag: "🇵🇭",
    region: "Southeast Asia",
    careers: ["mbbs", "nursing", "physio", "all"],
    budgetTiers: ["25_50", "50_75", "any"],
    priorities: ["english_medium", "high_salary"],
    costBadge: "₹25 – ₹35 Lakh total",
    nmcStatus: "US Curriculum Aligned",
    defaultWhyFit: "American education pattern with high USMLE success rate and tropical disease exposure.",
    whyFitTemplates: {
      english_medium: "3rd largest English-speaking nation worldwide; zero language barrier in hospital rotations.",
    },
    language: "100% English Medium",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Western Europe",
    careers: ["nursing", "physio", "pharmacy", "respiratory_mlt", "bds", "all"],
    budgetTiers: ["50_75", "75_plus", "any"],
    priorities: ["fast_pr", "high_salary", "english_medium"],
    costBadge: "₹45 – ₹75 Lakh total",
    nmcStatus: "GMC / NMC & NHS Recognized",
    defaultWhyFit: "Direct NHS employment opportunities, fast-track Health and Care Worker visa, and high global prestige.",
    whyFitTemplates: {
      fast_pr: "Direct path to permanent residency via NHS sponsorship for nurses & physiotherapists.",
      high_salary: "Competitive starting NHS salaries with rapid Band promotion pathways.",
    },
    language: "100% English Medium",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Central Europe",
    careers: ["nursing", "physio", "pharmacy", "mbbs", "all"],
    budgetTiers: ["under_25", "25_50", "any"],
    priorities: ["fast_pr", "lowest_cost", "high_salary"],
    costBadge: "₹12 – ₹22 Lakh total (Zero Tuition at Public Universities)",
    nmcStatus: "EU Recognized Qualification",
    defaultWhyFit: "Zero or low tuition fees at public universities, world-class healthcare tech, and strong PR prospects.",
    whyFitTemplates: {
      lowest_cost: "Public universities charge zero tuition fee for qualified healthcare applicants.",
      fast_pr: "Severe healthcare shortage enables PR eligibility in as early as 3 years.",
    },
    language: "German B2/C1 + English",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    careers: ["nursing", "physio", "pharmacy", "respiratory_mlt", "all"],
    budgetTiers: ["75_plus", "any"],
    priorities: ["high_salary", "fast_pr", "english_medium"],
    costBadge: "₹65 – ₹95 Lakh total",
    nmcStatus: "AHPRA Accredited Pathways",
    defaultWhyFit: "Highest average nurse & allied health salaries globally with clear regional PR pathways.",
    whyFitTemplates: {
      high_salary: "Top global earning potential (~$65,000 - $100,000/yr) for healthcare workers.",
      fast_pr: "High demand on Medium and Long-term Strategic Skills List (MLTSSL).",
    },
    language: "100% English Medium",
  },
];

export const SALARY_TABLE_DATA: SalaryRow[] = [
  {
    country: "USA",
    flag: "🇺🇸",
    physician: "$220,000",
    dentist: "$170,000",
    nurse: "$85,000",
    pharmacist: "$125,000",
    physiotherapist: "$95,000",
    respiratoryTherapist: "$75,000",
    physicianVal: 220000,
    dentistVal: 170000,
    nurseVal: 85000,
    pharmacistVal: 125000,
    physiotherapistVal: 95000,
    respiratoryTherapistVal: 75000,
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    physician: "$150,000",
    dentist: "$130,000",
    nurse: "$70,000",
    pharmacist: "$90,000",
    physiotherapist: "$70,000",
    respiratoryTherapist: "$65,000",
    physicianVal: 150000,
    dentistVal: 130000,
    nurseVal: 70000,
    pharmacistVal: 90000,
    physiotherapistVal: 70000,
    respiratoryTherapistVal: 65000,
  },
  {
    country: "UK",
    flag: "🇬🇧",
    physician: "$95,000",
    dentist: "$80,000",
    nurse: "$45,000",
    pharmacist: "$55,000",
    physiotherapist: "$45,000",
    respiratoryTherapist: "$42,000",
    physicianVal: 95000,
    dentistVal: 80000,
    nurseVal: 45000,
    pharmacistVal: 55000,
    physiotherapistVal: 45000,
    respiratoryTherapistVal: 42000,
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    physician: "$120,000",
    dentist: "$100,000",
    nurse: "$65,000",
    pharmacist: "$70,000",
    physiotherapist: "$60,000",
    respiratoryTherapist: "$60,000",
    physicianVal: 120000,
    dentistVal: 100000,
    nurseVal: 65000,
    pharmacistVal: 70000,
    physiotherapistVal: 60000,
    respiratoryTherapistVal: 60000,
  },
  {
    country: "Norway",
    flag: "🇳🇴",
    physician: "$110,000",
    dentist: "$90,000",
    nurse: "$60,000",
    pharmacist: "$70,000",
    physiotherapist: "$55,000",
    respiratoryTherapist: "$55,000",
    physicianVal: 110000,
    dentistVal: 90000,
    nurseVal: 60000,
    pharmacistVal: 70000,
    physiotherapistVal: 55000,
    respiratoryTherapistVal: 55000,
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    physician: "$110,000",
    dentist: "$90,000",
    nurse: "$58,000",
    pharmacist: "$70,000",
    physiotherapist: "$55,000",
    respiratoryTherapist: "$52,000",
    physicianVal: 110000,
    dentistVal: 90000,
    nurseVal: 58000,
    pharmacistVal: 70000,
    physiotherapistVal: 55000,
    respiratoryTherapistVal: 52000,
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    physician: "$95,000",
    dentist: "$80,000",
    nurse: "$50,000",
    pharmacist: "$65,000",
    physiotherapist: "$50,000",
    respiratoryTherapist: "$48,000",
    physicianVal: 95000,
    dentistVal: 80000,
    nurseVal: 50000,
    pharmacistVal: 65000,
    physiotherapistVal: 50000,
    respiratoryTherapistVal: 48000,
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    physician: "$110,000",
    dentist: "$85,000",
    nurse: "$50,000",
    pharmacist: "$65,000",
    physiotherapist: "$50,000",
    respiratoryTherapist: "$48,000",
    physicianVal: 110000,
    dentistVal: 85000,
    nurseVal: 50000,
    pharmacistVal: 65000,
    physiotherapistVal: 50000,
    respiratoryTherapistVal: 48000,
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    physician: "$100,000",
    dentist: "$85,000",
    nurse: "$48,000",
    pharmacist: "$60,000",
    physiotherapist: "$48,000",
    respiratoryTherapist: "$45,000",
    physicianVal: 100000,
    dentistVal: 85000,
    nurseVal: 48000,
    pharmacistVal: 60000,
    physiotherapistVal: 48000,
    respiratoryTherapistVal: 45000,
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
    physician: "$95,000",
    dentist: "$80,000",
    nurse: "$45,000",
    pharmacist: "$60,000",
    physiotherapist: "$45,000",
    respiratoryTherapist: "$45,000",
    physicianVal: 95000,
    dentistVal: 80000,
    nurseVal: 45000,
    pharmacistVal: 60000,
    physiotherapistVal: 45000,
    respiratoryTherapistVal: 45000,
  },
];

export const COST_RECOVERY_EXAMPLES: Record<string, { profession: string; country: string; salary: string; cost: string; timeline: string }> = {
  physician: {
    profession: "Physician (MBBS/MD)",
    country: "Russia / Georgia / UK",
    salary: "~$95,000/year",
    cost: "~$30,000 – $45,000",
    timeline: "1.5–2.5 years of licensed practice",
  },
  dentist: {
    profession: "Dentist (BDS)",
    country: "UK / Australia",
    salary: "~$80,000/year",
    cost: "~$40,000 – $60,000",
    timeline: "1.5–2 years of qualified employment",
  },
  nurse: {
    profession: "Nurse",
    country: "UK",
    salary: "~$45,000/year",
    cost: "~$35,000 – $55,000",
    timeline: "1.5–2 years of qualified employment",
  },
  pharmacist: {
    profession: "Pharmacist",
    country: "UK / Germany",
    salary: "~$55,000/year",
    cost: "~$40,000 – $50,000",
    timeline: "1.5–2 years of practice",
  },
  physiotherapist: {
    profession: "Physiotherapist",
    country: "Australia / UK",
    salary: "~$60,000/year",
    cost: "~$45,000 – $60,000",
    timeline: "1.5–2 years of clinical practice",
  },
  respiratoryTherapist: {
    profession: "Respiratory Therapist / MLT",
    country: "USA / Canada",
    salary: "~$75,000/year",
    cost: "~$40,000 – $55,000",
    timeline: "1.5–2 years of employment",
  },
};

export const TRUST_BAR_ITEMS = [
  {
    iconName: "Landmark",
    claim: "We deal only with NMC-recognised universities*",
    whyItMatters: "Your degree has to count when you come home — this is the single most common thing families regret not checking.",
  },
  {
    iconName: "Stethoscope",
    claim: "Many healthcare careers — not just MBBS",
    whyItMatters: "A low NEET score or a different interest entirely doesn't mean fewer honest options, just different ones.",
  },
  {
    iconName: "BookOpenCheck",
    claim: "Integrated FMGE / NExT & USMLE coaching",
    whyItMatters: "Licensing prep starts with your course, not six years later in a panic.",
  },
  {
    iconName: "Handshake",
    claim: "Honest, end-to-end guidance (counselling → licensing)",
    whyItMatters: "We're still answering your calls after the admission fee clears — most agents aren't.",
  },
  {
    iconName: "Users",
    claim: "Parents are part of every conversation",
    whyItMatters: "This is a family decision — we treat it like one, not a one-on-one sales call.",
  },
];

export const CAREER_GROUPS = {
  groupA: {
    title: "Group A — Direct Entry After Class 12",
    description: "Start your healthcare journey immediately after Class 12 (PCB/PCM) with recognized international bachelor's degrees.",
    items: [
      {
        title: "MBBS / MD",
        description: "Become a licensed physician with NMC-compliant 5.5 to 6-year programs.",
        link: "#finder",
        badge: null,
      },
      {
        title: "BDS / Dentistry",
        description: "Smile & oral health specialist with hands-on hospital phantom lab experience.",
        link: "#finder",
        badge: null,
      },
      {
        title: "Nursing",
        description: "Globally in-demand care profession with high salary & immediate hospital placement.",
        link: "#finder",
        badge: "⚡ fast-PR tag",
        badgeTooltip: "Eligible for fast-track residency (e.g., NZ Green List, UK NHS Skilled Worker)",
      },
      {
        title: "Pharmacy",
        description: "Medicines, clinical pharmacy, industrial & community pharmaceutical roles.",
        link: "#finder",
        badge: null,
      },
      {
        title: "Physiotherapy",
        description: "Movement, sports injury & rehabilitation therapy in top clinical setups.",
        link: "#finder",
        badge: "⚡ fast-PR tag",
        badgeTooltip: "High demand list in UK, Australia & NZ with streamlined registration",
      },
      {
        title: "Respiratory Therapy",
        description: "Critical care, ICU ventilation management & pulmonary diagnostics.",
        link: "#finder",
        badge: null,
      },
      {
        title: "Medical Lab Technology (MLT)",
        description: "Diagnostics, pathology, and laboratory analysis behind every medical decision.",
        link: "#finder",
        badge: null,
      },
    ],
  },
  groupB: {
    title: "Group B — Worth Exploring If You're Still Deciding",
    description: "Flexible allied health pathways tailored to your academic background, career goal, and budget.",
    items: [
      {
        title: "Other Allied Health Pathways",
        description: "Radiology, Clinical Research, Public Health, Healthcare Management & occupational therapy. Ask us about your specific goal; we guide pathways beyond this list too.",
        link: "#finder",
        badge: null,
      },
    ],
  },
};

export const AGENT_VS_US_ROWS = [
  {
    typicalAgent: "Job ends once your offer letter and visa are issued",
    medicoYatra: "We stay involved through licensing exams (FMGE/NExT/USMLE) and into your early career",
  },
  {
    typicalAgent: "May work with whichever university pays the highest commission",
    medicoYatra: "We work only with NMC-recognised institutions, and tell you so you can verify it yourself",
  },
  {
    typicalAgent: "FMGE/NExT prep, if mentioned at all, is \"something to figure out later\"",
    medicoYatra: "FMGE/NExT and USMLE coaching is planned in from your very first counselling session",
  },
  {
    typicalAgent: "Salary promises are often vague or inflated to close the sale",
    medicoYatra: "We show illustrative, sourced figures and explain exactly what licensing is required to earn them",
  },
  {
    typicalAgent: "Parents are looped in only for the payment conversation",
    medicoYatra: "Parents are welcomed into every stage of the conversation, not just the invoice",
  },
  {
    typicalAgent: "\"Best country for you\" usually means \"the one we have a tie-up with\"",
    medicoYatra: "We help you compare honestly — including countries where we may have no direct partnership, if that's genuinely the better fit",
  },
];

export const HONESTY_CHECK_ITEMS = [
  {
    id: "q1",
    question: "What if the degree isn't valid when I come back to India?",
    answer: "This is exactly why we work only with NMC-recognised universities and walk you through how to verify that status yourself — not just take our word for it. We also explain FMGE/NExT clearly from day one, because a foreign degree alone isn't the finish line; licensing is.",
  },
  {
    id: "q2",
    question: "What if my child is alone and unsafe abroad?",
    answer: "We give honest, country-specific safety context as part of counselling — not generic reassurance. Where a destination has real risk factors worth knowing about, we say so, including in our published country guides and senior student community support.",
  },
  {
    id: "q3",
    question: "What if we spend the money and it doesn't work out?",
    answer: "We don't promise outcomes — no admission, visa, exam, or job is ever guaranteed by us or by anyone honest in this industry. What we do promise is a transparent process: real costs explained upfront, a realistic licensing pathway, and no pressure to commit before you're ready.",
  },
  {
    id: "q4",
    question: "Is this actually cheaper than studying in India, or is that a myth?",
    answer: "It depends entirely on the course, country, and your specific situation — sometimes yes, sometimes no. Private medical seats in India can cost ₹80L to ₹1.5 Cr, whereas quality NMC government universities abroad range between ₹18L to ₹35L. We show you real, illustrative cost comparisons rather than a blanket claim either way, so you can judge for yourself.",
  },
  {
    id: "q5",
    question: "My marks/NEET score aren't great — will anyone even take this seriously?",
    answer: "Yes. Many strong healthcare careers — Nursing, Pharmacy, Physiotherapy, and others — don't require NEET at all, and even within MBBS, several established destinations have realistic entry requirements (such as qualifying NEET score only). This is a genuinely common starting point for our students, not an edge case.",
  },
];

export const TESTIMONIALS_DATA = [
  {
    type: "student",
    name: "Dr. Ananya Sharma",
    role: "MBBS Graduate, Georgia",
    quote: "Unlike local agents who disappeared after visa stamping, Medico Yatra provided NExT coaching modules right from my 2nd year. Cleared FMGE in my first attempt!",
    country: "Georgia 🇬🇪",
    avatar: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=400&q=80",
    video: false,
  },
  {
    type: "student",
    name: "Rahul Verma",
    role: "BSc Nursing, United Kingdom",
    quote: "They gave me a clear breakdown of NHS salary bands and registration requirements before I paid a single rupee. Now working as a registered nurse in Manchester.",
    country: "UK 🇬🇧",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
    video: false,
  },
  {
    type: "parent",
    name: "Rajeshwar & Sunita Rao",
    role: "Parents of Priya Rao (MBBS Student, Russia)",
    quote: "As parents, safety and degree recognition were our primary concerns. Medico Yatra invited us to every zoom session, verified NMC listings in front of us, and connected us with senior parents.",
    country: "Russia 🇷🇺",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    video: false,
    parentTag: true,
  },
  {
    type: "video",
    name: "Dr. Vikramaditya Singh",
    role: "MD Physician, Uzbekistan",
    quote: "Watch Vikramaditya explain how Medico Yatra helped him choose Uzbekistan over high-cost private Indian colleges.",
    country: "Uzbekistan 🇺🇿",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80",
    video: true,
    videoDuration: "2:45",
  },
  {
    type: "student",
    name: "Priyanka Patel",
    role: "BSc Physiotherapy, Germany",
    quote: "Zero tuition at public university plus German language orientation done in India. Medico Yatra took care of my block account and embassy visa interview without any hassle.",
    country: "Germany 🇩🇪",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    video: false,
  },
  {
    type: "student",
    name: "Dr. Rohan Kapoor",
    role: "MD Physician, Philippines",
    quote: "The US-based curriculum and 100% English medium clinical rotations prepared me for USMLE Step 1 while completing my degree.",
    country: "Philippines 🇵🇭",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    video: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Does Medico Yatra only help with MBBS?",
    answer: "No — we guide many healthcare careers: MBBS, Dentistry (BDS), Nursing, Pharmacy, Physiotherapy, Respiratory Therapy, Medical Lab Technology and more.",
  },
  {
    question: "What is the Country Finder, and is it accurate?",
    answer: "It's a quick tool matching your career interest, budget, and priorities against our 30 country dataset to give you a relevant starting shortlist. It's general matching, not a personalised assessment — a faster way to narrow 30 options to 3–5, before a counsellor refines further based on your actual academic profile.",
  },
  {
    question: "Do I need to give my phone number to use the Country Finder?",
    answer: "No — results are free, no sign-up required. We only ask for contact details if you want results delivered directly on WhatsApp or want to book a free counselling session.",
  },
  {
    question: "Are the universities recognised?",
    answer: "We work only with NMC-recognised universities and help you verify current status on nmc.org.in before enrolling.",
  },
  {
    question: "Will I really earn the salaries in your table?",
    answer: "Those are illustrative averages for qualified and licensed professionals. You'd need to clear local licensing exams (USMLE, PLAB, NCLEX, AMC) and meet immigration rules — which we help you plan. No salary is guaranteed.",
  },
  {
    question: "How is Medico Yatra actually different from a regular admission agent?",
    answer: "In short, we stay involved through licensing and early career, work only with NMC-recognised institutions, and plan your FMGE/NExT or USMLE pathway from day one rather than treating it as an afterthought.",
  },
  {
    question: "Do you help with licensing exams?",
    answer: "Yes — integrated FMGE / NExT coaching, and USMLE guidance for the USA.",
  },
  {
    question: "Is this suitable if my NEET score is low or I'm exploring non-MBBS options?",
    answer: "Absolutely — several strong careers don't require NEET at all (like Nursing, Physio, Pharmacy), and even within MBBS, several established destinations have realistic entry requirements.",
  },
  {
    question: "Do you guarantee admission, visa, or jobs?",
    answer: "No, and be cautious of anyone who does. We provide honest, organised, end-to-end support.",
  },
];

export const FOOTER_ALL_COUNTRIES = [
  "Russia", "Georgia", "Uzbekistan", "Kazakhstan", "Philippines", "United Kingdom", "Germany", "Australia",
  "Kyrgyzstan", "Egypt", "Armenia", "Tajikistan", "Poland", "Hungary", "Malaysia", "USA", "Canada", "Ireland",
  "Netherlands", "Sweden", "Norway", "Denmark", "Nepal", "Bangladesh", "Czech Republic", "Slovakia",
  "Romania", "Italy", "Spain", "New Zealand"
];
