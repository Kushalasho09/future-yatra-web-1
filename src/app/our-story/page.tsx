import type { Metadata } from "next";
import OurStoryPageClient from "@/components/OurStoryPageClient";

export const metadata: Metadata = {
  title: "Our Story | Future Yatra Private Limited",
  description:
    "Future Yatra was born from a personal experience with misleading advice during a move to Canada — built to replace confusion with clarity, and false promises with transparency.",
  keywords: [
    "Future Yatra story",
    "why Future Yatra was founded",
    "Future Yatra founder journey",
    "honest study abroad consulting India",
    "Future Yatra Private Limited",
  ],
  openGraph: {
    title: "Our Story | Future Yatra Private Limited",
    description:
      "Future Yatra was born from a personal experience with misleading advice during a move to Canada — built to replace confusion with clarity, and false promises with transparency.",
    url: "https://futureyatra.com/our-story/",
    siteName: "Future Yatra",
    type: "website",
  },
};

export default function OurStoryPage() {
  return <OurStoryPageClient />;
}
