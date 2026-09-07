"use client";

import React from "react";

/* ─────────────────────────────────────────────────────────────── */
/* Team data — real Unsplash professional portraits                */
/* ─────────────────────────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  photo: string;
  delay: number;
  bobDir: number;
  isCeo?: boolean;
  imgStyle?: React.CSSProperties;
}

/* ─────────────────────────────────────────────────────────────── */
/* Industry-standard department sequence:                           */
/* [Admissions / Counselling] ── [Leadership / Ops] ── [Tech Team] */
/* ─────────────────────────────────────────────────────────────── */
const teamMembers: TeamMember[] = [
  {
    name: "Talha Khan",
    role: "Counsellor",
    photo: "/images/WhatsApp_Image_2026-09-07_at_12.32.44_PM-removebg-preview.png",
    delay: 0,
    bobDir: -1,
  },
  {
    name: "Kashish Munjal",
    role: "Counsellor",
    photo: "/images/WhatsApp_Image_2026-09-07_at_2.35.45_PM-removebg-preview.png",
    delay: 0.2,
    bobDir: 1,
    imgStyle: { transform: "scale(1.24)", transformOrigin: "top center" },
  },
  {
    name: "Kashif Qamar Siddiqui",
    role: "Founder & CEO",
    photo: "/images/file_0000000027c082089b3f33a558e10a09-removebg-preview.png",
    delay: 0.4,
    bobDir: -1,
    isCeo: true,
  },
  {
    name: "Madhumita Biswas",
    role: "Operations Manager",
    photo: "/images/WhatsApp_Image_2026-09-07_at_5.01.34_PM-removebg-preview.png",
    delay: 0.6,
    bobDir: 1,
  },
  {
    name: "Kushal Asodia",
    role: "Full Stack Developer",
    photo: "/images/WhatsApp_Image_2026-09-07_at_7.23.49_PM-removebg-preview.png",
    delay: 0.8,
    bobDir: -1,
  },
  {
    name: "Tabrej Zayan",
    role: "Web Developer",
    photo: "/images/WhatsApp_Image_2026-09-07_at_12.32.43_PM-removebg-preview.png",
    delay: 1.0,
    bobDir: 1,
  },
];

export default function OurTeamSection() {
  return (
    <section className="ot-section">
      {/* Dot-grid world map background */}
      <div className="ot-mapbg" aria-hidden="true" />
      <div className="ot-overlay" aria-hidden="true" />
      <div className="ot-grid" aria-hidden="true" />

      {/* Ambient glow blobs */}
      <div className="ot-blob ot-blob-l" aria-hidden="true" />
      <div className="ot-blob ot-blob-r" aria-hidden="true" />
      <div className="ot-blob ot-blob-c" aria-hidden="true" />

      <div className="ot-inner">
        {/* ── Heading ── */}
        <div className="ot-heading">
          <span className="ot-label">The People Behind Future Yatra</span>
          <h2 className="ot-title">Our Team</h2>

          <p className="ot-subtitle">
            Passionate experts dedicated to every student&apos;s success story.
          </p>
        </div>

        {/* ── Portrait row — with overflow padding to avoid clip ── */}
        <div className="ot-row-wrap">
          <div className="ot-row">
            {teamMembers.map((m, i) => (
              <div key={i} className="ot-card-wrap">
                {/* The card bobs — give it extra padding top/bottom so the pill never clips */}
                <div
                  className={`ot-card ${m.bobDir === 1 ? "ot-bob-down" : "ot-bob-up"} ${m.isCeo ? "ot-ceo-card" : ""}`}
                  style={{ animationDelay: `${m.delay}s` }}
                >
                  <div className="ot-pill">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="ot-photo"
                      style={m.imgStyle}
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Bottom scrim for name readability */}
                    <div className="ot-scrim" />
                  </div>

                  <div className="ot-info">
                    <p className="ot-name">{m.name}</p>
                    <p className="ot-role">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scoped CSS ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* ── Shell ── */
        .ot-section {
          position: relative;
          background: #07111e;
          padding: 90px 0 120px;
          overflow: hidden;
        }

        /* ── Dot grid (world-map feel) ── */
        .ot-mapbg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(45,189,182,0.22) 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse 85% 70% at 50% 50%, rgba(0,0,0,0.85) 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 50%, rgba(0,0,0,0.85) 0%, transparent 100%);
        }

        /* ── Dark vignette overlay ── */
        .ot-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            #07111e 0%,
            transparent 18%,
            transparent 82%,
            #07111e 100%
          );
          pointer-events: none;
        }

        /* ── Subtle grid lines ── */
        .ot-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(45,189,182,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,189,182,0.04) 1px, transparent 1px);
          background-size: 70px 70px;
          pointer-events: none;
        }

        /* ── Glow blobs ── */
        .ot-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        .ot-blob-l {
          width: 500px; height: 500px;
          left: -160px; top: 50%;
          transform: translateY(-50%);
          background: radial-gradient(circle, rgba(45,189,182,0.18) 0%, transparent 70%);
        }
        .ot-blob-r {
          width: 500px; height: 500px;
          right: -160px; top: 50%;
          transform: translateY(-50%);
          background: radial-gradient(circle, rgba(27,45,90,0.40) 0%, transparent 70%);
        }
        .ot-blob-c {
          width: 700px; height: 300px;
          left: 50%; top: 60%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(45,189,182,0.08) 0%, transparent 70%);
        }

        /* ── Inner ── */
        .ot-inner {
          position: relative;
          z-index: 10;
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Heading ── */
        .ot-heading {
          text-align: center;
          margin-bottom: 72px;
        }
        .ot-label {
          display: inline-block;
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #2DBDB6;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .ot-title {
          font-family: 'Google Sans Flex', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }
        .ot-subtitle {
          font-size: clamp(0.875rem, 1.5vw, 1.05rem);
          color: rgba(255,255,255,0.5);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Row wrap — overflow-visible so bob never clips ── */
        .ot-row-wrap {
          /* Extra vertical padding absorbs the 32px bob travel */
          padding: 48px 0;
          margin: -48px 0;
          overflow: hidden;           /* hide horizontal scroll on desktop */
        }

        /* ── Row ── */
        .ot-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-width: max-content;
          margin: 0 auto;
        }

        /* ── Card wrap ── */
        .ot-card-wrap {
          flex: 0 0 auto;
        }

        /* ── Card ── */
        .ot-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          cursor: pointer;
        }

        /* ── Pill ── */
        .ot-pill {
          position: relative;
          width: 148px;
          height: 220px;
          border-radius: 9999px;
          overflow: hidden;
          background: radial-gradient(ellipse at 50% 28%, #1f3a57 0%, #0d1e30 60%, #060f1a 100%);
          border: 1.5px solid rgba(45,189,182,0.30);
          box-shadow:
            0 0 0 1px rgba(45,189,182,0.10),
            0 12px 40px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.07);
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease, background 0.35s ease;
        }
        .ot-card:hover .ot-pill {
          border-color: rgba(45,189,182,0.70);
          background: radial-gradient(ellipse at 50% 28%, #27486d 0%, #11263d 60%, #081320 100%);
          box-shadow:
            0 0 0 2.5px rgba(45,189,182,0.22),
            0 20px 60px rgba(0,0,0,0.70),
            0 0 40px rgba(45,189,182,0.25);
          transform: scale(1.04);
        }

        /* ── CEO Card Accent ── */
        .ot-ceo-card .ot-pill {
          border-color: rgba(45,189,182,0.55);
          box-shadow:
            0 0 0 1px rgba(45,189,182,0.25),
            0 0 20px rgba(45,189,182,0.18),
            0 14px 45px rgba(0,0,0,0.60),
            inset 0 1px 0 rgba(255,255,255,0.10);
        }
        .ot-ceo-card .ot-role {
          color: #38E5DB;
          font-weight: 600;
        }

        /* ── Photo ── */
        .ot-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: grayscale(100%) contrast(105%) brightness(92%);
          opacity: 0.88;
          transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ot-card:hover .ot-photo {
          filter: grayscale(0%) contrast(100%) brightness(100%);
          opacity: 1;
          transform: scale(1.08);
        }

        /* ── Bottom scrim ── */
        .ot-scrim {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 55%;
          background: linear-gradient(to top, rgba(7,17,30,0.80) 0%, transparent 100%);
          pointer-events: none;
        }

        /* ── Name/role ── */
        .ot-info {
          text-align: center;
          max-width: 148px;
        }
        .ot-name {
          font-family: 'Google Sans Flex', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
          line-height: 1.3;
        }
        .ot-role {
          font-size: 11.5px;
          color: #2DBDB6;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin: 0;
          line-height: 1.4;
        }

        /* ── Bob animations — 32px travel each way ── */
        @keyframes bob-up {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-32px); }
          100% { transform: translateY(0px); }
        }
        @keyframes bob-down {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(32px); }
          100% { transform: translateY(0px); }
        }
        .ot-bob-up   { animation: bob-up   4.2s ease-in-out infinite; }
        .ot-bob-down { animation: bob-down 4.2s ease-in-out infinite; }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .ot-section { padding: 70px 0 90px; }
          .ot-heading { margin-bottom: 48px; }

          /* On mobile: scroll horizontally, no clipping */
          .ot-row-wrap {
            overflow-x: auto;
            overflow-y: visible;   /* still let bob show vertically */
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 48px 24px;
            margin: -48px -24px;
          }
          .ot-row-wrap::-webkit-scrollbar { display: none; }
          .ot-row { gap: 14px; }
          .ot-pill { width: 110px; height: 164px; }
          .ot-info  { max-width: 110px; }
          .ot-name  { font-size: 12px; }
          .ot-role  { font-size: 10.5px; }

          /* Reduce bob on mobile so it doesn't overflow page edges */
          @keyframes bob-up   { 50% { transform: translateY(-20px); } }
          @keyframes bob-down { 50% { transform: translateY(20px); } }
        }

        @media (max-width: 480px) {
          .ot-pill { width: 90px; height: 134px; }
          .ot-info  { max-width: 90px; }
          .ot-name  { font-size: 11px; }
          .ot-role  { font-size: 10px; }
          .ot-row   { gap: 10px; }
        }
      `,
        }}
      />
    </section>
  );
}
