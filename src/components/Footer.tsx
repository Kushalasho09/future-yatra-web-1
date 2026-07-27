import Link from "next/link";
import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white border-t border-teal-bright/20 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-line/10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-pill bg-teal flex items-center justify-center text-navy font-heading font-bold text-h3 shadow-sm">
                <Compass className="w-5 h-5 text-navy" />
              </div>
              <span className="font-heading text-h3 font-bold text-white tracking-tight">
                Future Yatra
              </span>
            </div>
            <p className="text-small text-muted leading-relaxed">
              Premier global education and visa consulting platform empowering students and ambitious executives with top university placements and visa assistance.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-micro uppercase tracking-wider text-teal-bright font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-small text-muted">
              <li>
                <Link href="/about" className="hover:text-teal-bright transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-teal-bright transition-colors duration-150">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-teal-bright transition-colors duration-150">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-bright transition-colors duration-150">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-teal-bright transition-colors duration-150">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Sub-Brands Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-micro uppercase tracking-wider text-teal-bright font-semibold">
              Our Verticals
            </h4>
            <ul className="space-y-2 text-small text-muted">
              <li>
                <Link href="/brands/brand-1" className="hover:text-teal-bright transition-colors duration-150">
                  Yatra Global Academy
                </Link>
              </li>
              <li>
                <Link href="/brands/brand-2" className="hover:text-teal-bright transition-colors duration-150">
                  Yatra Executive Careers
                </Link>
              </li>
              <li>
                <Link href="/brands/brand-3" className="hover:text-teal-bright transition-colors duration-150">
                  Yatra World Mobility
                </Link>
              </li>
              <li>
                <Link href="/brands/brand-4" className="hover:text-teal-bright transition-colors duration-150">
                  Yatra EdTech Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="space-y-3">
            <h4 className="font-heading text-micro uppercase tracking-wider text-teal-bright font-semibold">
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-small text-muted">
              <li>
                <Link href="/privacy" className="hover:text-teal-bright transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-bright transition-colors duration-150">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-teal-bright transition-colors duration-150">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-micro text-muted">
          <p>© 2026 Future Yatra Global Education Consulting. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Accredited Study Abroad & Visa Advisory</p>
        </div>
      </div>
    </footer>
  );
}
