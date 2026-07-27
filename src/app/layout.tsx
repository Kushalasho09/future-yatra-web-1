import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
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
