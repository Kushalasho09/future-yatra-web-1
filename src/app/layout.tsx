import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Outfit, Manjari, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HydrationFix from "@/components/HydrationFix";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const manjari = Manjari({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manjari",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Future Yatra | Global Education & Visa Consulting",
  description: "Enterprise study-abroad and visa consulting platform for Future Yatra.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} ${outfit.variable} ${manjari.variable} ${poppins.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-body text-navy-deep bg-white antialiased min-h-screen flex flex-col selection:bg-teal selection:text-white"
      >
        <HydrationFix />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
