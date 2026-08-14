import type { Metadata } from "next";
import MedicoYatraClient from "@/components/medico-yatra/MedicoYatraClient";

export const metadata: Metadata = {
  title: "Study Healthcare Courses Abroad (MBBS, Nursing & more) | Medico Yatra",
  description:
    "Specialist guidance for healthcare careers abroad — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy & more. Find your country in 30 seconds, or book free counselling. NMC-recognised universities, FMGE/NExT & USMLE coaching.",
  keywords: [
    "healthcare courses abroad",
    "medical courses abroad for indian students",
    "study mbbs abroad",
    "nursing abroad for indian students",
    "bds pharmacy physiotherapy abroad",
    "nmc recognised universities",
    "fmge next coaching",
  ],
};

export default function MedicoYatraPage() {
  return <MedicoYatraClient />;
}
