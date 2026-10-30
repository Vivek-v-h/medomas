import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowUpRight, Mail } from "lucide-react";
import { companyInfo } from "@/data/company";
import {
  footerQuickLinks,
  footerDivisionLinks,
  footerLegalLinks,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#24140E] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FE5D26]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block p-2.5 rounded-2xl bg-white/95 shadow-sm">
              <Image
                src="/logo/medomas-logo.png"
                alt="Medomas Healthcare Pvt. Ltd."
                width={120}
                height={108}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm text-white/75 leading-relaxed max-w-sm">
              {companyInfo.shortDescription}
            </p>

            <div className="mt-4 text-xs font-semibold text-[#FE5D26]">
              {companyInfo.tagline}
            </div>

            <div className="mt-2 text-xs text-white/50 italic">
              &ldquo;{companyInfo.motto}&rdquo;
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
              <MapPin className="w-4 h-4 text-[#FE5D26] flex-shrink-0" />
              <span>Rooted in Thiruvananthapuram, Kerala, India</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#FE5D26]">
              EXPLORE
            </div>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#FE5D26]">
              DIVISIONS
            </div>
            <ul className="mt-5 space-y-3">
              {footerDivisionLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#FE5D26]">
              HEAD OFFICE
            </div>
            <p className="mt-5 text-xs text-white/75 leading-relaxed">
              {companyInfo.address.full}
            </p>

            <div className="mt-5 space-y-2">
              <div className="text-xs font-bold text-white/60">Phone Enquiries:</div>
              {companyInfo.phones.map((phone) => (
                <div key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-xs font-semibold text-white/85 hover:text-[#FE5D26] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FE5D26]" />
                    <span>{phone}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="text-xs font-bold text-white/60 mb-1">Email Desk:</div>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-xs font-semibold text-white/85 hover:text-[#FE5D26] transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#FE5D26]" />
                <span>{companyInfo.email}</span>
              </a>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-all"
              >
                <span>Corporate Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-white/50 leading-relaxed">
          <p>
            <strong className="text-white/70">Compliance & Regulatory Notice:</strong> Medomas Healthcare Pvt. Ltd. is a corporate pharmaceutical and healthcare organisation. This website is a corporate product catalogue intended for information and business-to-business reference only; it does not constitute an online pharmacy, medical diagnosis, or retail dispensary. Pharmaceutical formulations are to be prescribed and dispensed strictly in compliance with applicable drug regulations and approved product labels.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; 2026 {companyInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
