import type { Metadata } from "next";
import VisionValuesPageClient from "@/components/VisionValuesPageClient";

export const metadata: Metadata = {
  title: "Vision, Mission & Values | Future Yatra Private Limited",
  description:
    "Explore the vision, mission, and core operational values of Future Yatra Private Limited — guiding University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra.",
};

export default function VisionMissionValuesPage() {
  return <VisionValuesPageClient />;
}
