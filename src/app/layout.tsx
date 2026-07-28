import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Future Yatra | Global Education & Visa Consulting",
  description: "Enterprise study-abroad and visa consulting prototype for Future Yatra.",
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
      className={`${plusJakarta.variable} ${outfit.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-body text-navy-deep bg-white antialiased min-h-screen flex flex-col selection:bg-teal selection:text-white"
      >
        <Navbar />
        <main className="flex-grow relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
