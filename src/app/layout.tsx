import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Caveat, Pacifico, Kaushan_Script, Great_Vibes, Alex_Brush, Tangerine } from "next/font/google";
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

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kaushan",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
  display: "swap",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
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
      className={`${plusJakarta.variable} ${outfit.variable} ${caveat.variable} ${pacifico.variable} ${kaushan.variable} ${greatVibes.variable} ${alexBrush.variable} ${tangerine.variable}`}
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
