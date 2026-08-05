import type { Metadata } from "next";
import VisionValuesPageClient from "@/components/VisionValuesPageClient";

export const metadata: Metadata = {
  title: "Our Values & Vision | Future Yatra Private Limited",
  description:
    "Explore the vision, mission, and core operational values of Future Yatra Private Limited — guiding University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra.",
};

export default function OurValuesPage() {
  return <VisionValuesPageClient />;
}
