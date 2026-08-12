import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#2DBDB6",
          bright: "#3FE0D6",
          tint: "#E7F9F7",
        },
        navy: {
          DEFAULT: "#223D74",
          deep: "#122447",
          glow: "#3A5EA8",
        },
        muted: "#5B6B85",
        line: "#E1E9EE",
        sand: "#F6EFE4",
        coral: "#E8604C",
        success: "#3FA66A",
        amber: "#E0A23F",
      },
      fontFamily: {
        sans: ["'Google Sans Flex'", "var(--font-plus-jakarta)", "sans-serif"],
        heading: ["'Google Sans Flex'", "var(--font-plus-jakarta)", "sans-serif"],
        body: ["'Google Sans Flex'", "var(--font-outfit)", "sans-serif"],
        playfair: ["var(--font-playfair)", "'Playfair Display'", "serif"],
        cursive: ["var(--font-playfair)", "'Playfair Display'", "serif"],
        tempting: ["var(--font-playfair)", "'Playfair Display'", "serif"],
        calligraphy: ["var(--font-playfair)", "'Playfair Display'", "serif"],
      },
      fontSize: {
        display: ["56px", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        h1: ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["28px", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        h3: ["20px", { lineHeight: "1.3" }],
        "body-l": ["18px", { lineHeight: "1.5" }],
        body: ["16px", { lineHeight: "1.5" }],
        small: ["14px", { lineHeight: "1.4" }],
        micro: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
        "32": "128px",
      },
      borderRadius: {
        input: "10px",
        tag: "10px",
        card: "18px",
        section: "28px",
        pill: "999px",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
