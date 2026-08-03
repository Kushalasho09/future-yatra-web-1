import { Metadata } from "next";
import ContactUsPageClient from "@/components/ContactUsPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Future Yatra Private Limited",
  description:
    "Get in touch with Future Yatra Private Limited — founder-led study abroad, test prep, medical admissions (MBBS), and visa consulting group based in Bengaluru, India.",
  openGraph: {
    title: "Contact Us | Future Yatra Private Limited",
    description:
      "Have questions about studying abroad, test prep, MBBS admissions, or visas? Reach out to Future Yatra's specialist teams.",
    images: ["/images/contact_hero_conversation.png"],
  },
};

export default function ContactPage() {
  return <ContactUsPageClient />;
}
