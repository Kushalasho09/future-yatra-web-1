import type { Metadata } from "next";
import AboutUsPageClient from "@/components/AboutUsPageClient";

export const metadata: Metadata = {
  title: "About Us | Future Yatra Private Limited",
  description:
    "Future Yatra Private Limited is India's founder-led study abroad and visa consulting group. Learn about our parent company and four specialist brands.",
  openGraph: {
    title: "About Us | Future Yatra Private Limited",
    description:
      "India's founder-led study abroad and visa consulting group. One accountable partner for your entire journey.",
  },
};

export default function AboutUsPage() {
  return <AboutUsPageClient />;
}
