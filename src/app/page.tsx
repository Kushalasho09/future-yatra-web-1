import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Future Yatra | Study Abroad, Test Prep, MBBS & Visa Group",
  description:
    "Future Yatra Private Limited is the parent company behind University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra — one accountable partner for your entire journey.",
};

export default function HomePage() {
  return <HomePageClient />;
}
