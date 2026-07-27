import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="space-y-4 border-b border-line pb-8">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3 py-1 rounded-tag text-teal font-heading text-micro uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4 text-teal" />
            <span>[Placeholder: Compliance & Policy]</span>
          </div>

          <h1 className="font-heading text-h1 font-bold text-navy tracking-tight">
            [Placeholder: Privacy Policy]
          </h1>

          <p className="text-small text-muted">
            [Placeholder: Last Updated: July 2026 | Effective Date: Enterprise Governance Standard]
          </p>
        </div>

        {/* UNIFORM LEGAL LIST GRID / SECTIONS */}
        <div className="space-y-8">
          {[
            {
              title: "[Placeholder: 1. Information Collection & Usage]",
              content: "[Placeholder: Details on how corporate partner data, executive participant credentials, and enterprise learning metrics are collected and stored securely.]",
            },
            {
              title: "[Placeholder: 2. Data Protection & Security]",
              content: "[Placeholder: Technical standards, encryption protocols, and access controls implemented across Future Yatra platforms.]",
            },
            {
              title: "[Placeholder: 3. Third-Party Sharing & Compliance]",
              content: "[Placeholder: Policies governing corporate educational accreditation partners, regulatory disclosures, and non-disclosure obligations.]",
            },
            {
              title: "[Placeholder: 4. Executive Data Rights]",
              content: "[Placeholder: Participant rights regarding personal data correction, export, and corporate records retention.]",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="glass-card-light rounded-card p-8 border border-line/60 space-y-4 card-hover-tier-1"
            >
              <h2 className="font-heading text-h2 font-bold text-navy">
                {section.title}
              </h2>
              <p className="text-body text-muted leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* LEGAL INQUIRY FOOTER CARD */}
        <div className="bg-sand/60 rounded-card p-6 border border-line/80 flex items-center justify-between flex-wrap gap-4">
          <p className="text-small text-navy font-medium">
            [Placeholder: Questions regarding our privacy practices?]
          </p>
          <Link
            href="/contact"
            className="text-small font-semibold text-teal hover:text-navy transition-colors inline-flex items-center space-x-1"
          >
            <span>[Placeholder: Contact Privacy Office]</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
