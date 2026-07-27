import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="space-y-4 border-b border-line pb-8">
          <div className="inline-flex items-center space-x-2 bg-teal-tint border border-teal/30 px-3 py-1 rounded-tag text-teal font-heading text-micro uppercase tracking-wider font-semibold">
            <FileText className="w-4 h-4 text-teal" />
            <span>[Placeholder: Legal Framework]</span>
          </div>

          <h1 className="font-heading text-h1 font-bold text-navy tracking-tight">
            [Placeholder: Terms of Service]
          </h1>

          <p className="text-small text-muted">
            [Placeholder: Effective Date: July 2026 | Master Enterprise Services Agreement]
          </p>
        </div>

        {/* UNIFORM LEGAL LIST GRID / SECTIONS */}
        <div className="space-y-8">
          {[
            {
              title: "[Placeholder: 1. Scope of Enterprise Services]",
              content: "[Placeholder: Terms governing corporate educational consulting, executive training deliverables, and sub-brand portal access.]",
            },
            {
              title: "[Placeholder: 2. Intellectual Property & Curriculum]",
              content: "[Placeholder: Ownership of proprietary learning materials, consulting frameworks, trade secrets, and brand assets.]",
            },
            {
              title: "[Placeholder: 3. Partner Obligations & Conduct]",
              content: "[Placeholder: Corporate client responsibilities regarding participant attendance, payment schedules, and compliance standards.]",
            },
            {
              title: "[Placeholder: 4. Limitation of Liability]",
              content: "[Placeholder: Corporate legal protections, warranty disclaimers, and force majeure conditions.]",
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
            [Placeholder: Need custom enterprise agreement terms?]
          </p>
          <Link
            href="/contact"
            className="text-small font-semibold text-teal hover:text-navy transition-colors inline-flex items-center space-x-1"
          >
            <span>[Placeholder: Contact Legal Counsel]</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
