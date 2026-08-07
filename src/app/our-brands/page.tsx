import Metadata from "next";
import OurBrandsPageClient from "@/components/OurBrandsPageClient";

export const metadata = {
  title: "Our Brands | Future Yatra Private Limited",
  description:
    "University Yatra, Academic Yatra, Medico Yatra, and ApplyVisa Yatra — four specialist brands under Future Yatra Private Limited, one ecosystem for your entire journey.",
  keywords: [
    "Future Yatra brands",
    "University Yatra",
    "Academic Yatra",
    "Medico Yatra",
    "ApplyVisa Yatra",
    "study abroad ecosystem India",
    "study abroad consultants",
  ],
  openGraph: {
    title: "Our Brands — The Future Yatra Ecosystem",
    description:
      "Four specialist brands under Future Yatra Private Limited, one ecosystem for your entire journey.",
    url: "https://futureyatra.com/our-brands/",
    siteName: "Future Yatra",
    locale: "en_IN",
    type: "website",
  },
};

export default function OurBrandsPage() {
  return <OurBrandsPageClient />;
}
