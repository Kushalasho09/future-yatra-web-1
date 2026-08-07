import { Metadata } from "next";
import PartnerWithUsPageClient from "@/components/PartnerWithUsPageClient";

export const metadata: Metadata = {
  title: "Partner With Us | Future Yatra Private Limited",
  description:
    "Universities, schools, colleges, agents, institutes, and financial institutions — partner with Future Yatra Private Limited. Submit an enquiry and our team will connect with you.",
  keywords: [
    "partner with Future Yatra",
    "university tie-up India",
    "education agent partnership",
    "B2B education partnership",
    "Future Yatra institutional alliances",
    "study abroad agent network India",
  ],
  openGraph: {
    title: "Partner With Us | Future Yatra Private Limited",
    description:
      "Universities, schools, colleges, agents, institutes, and financial institutions — partner with Future Yatra Private Limited. Submit an enquiry and our team will connect with you.",
    url: "https://futureyatra.com/partner-with-us/",
    siteName: "Future Yatra",
    locale: "en_IN",
    type: "website",
  },
};

export default function PartnerWithUsPage() {
  return <PartnerWithUsPageClient />;
}
