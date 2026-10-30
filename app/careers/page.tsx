import type { Metadata } from "next";
import {
  Users,
  Briefcase,
  Heart,
  TrendingUp,
  ArrowUpRight,
  Mail,
  FileCheck2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getCareerCvMailto, TARGET_EMAIL } from "@/lib/emailService";

export const metadata: Metadata = {
  title: "Careers | Grow With Medomas Healthcare",
  description:
    "Join Medomas Healthcare Pvt. Ltd. We welcome motivated professionals who share our commitment to quality, innovation, teamwork, and improving healthcare outcomes.",
};

const departments = [
  {
    title: "Medical Representative & Field Sales",
    location: "Kerala & Regional Hubs",
    description:
      "Engage with healthcare professionals, clinics, and pharmacies with integrity, scientific discipline, and clinical product knowledge.",
  },
  {
    title: "Supply Chain & Distribution Logistics",
    location: "Distribution Hubs",
    description:
      "Coordinate institutional supply, warehouse inventory, cold-chain integrity, and distribution logistics across partner states.",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              JOIN OUR MISSION
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Grow With Medomas Healthcare.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#766A65] leading-relaxed">
              At Medomas Healthcare, we believe that people are at the heart of progress. We welcome individuals who share our commitment to quality, innovation, teamwork, and improving healthcare outcomes.
            </p>
            <p className="mt-3 text-sm text-[#766A65] leading-relaxed">
              As we continue to expand our pharmaceutical and healthcare initiatives, we look forward to connecting with motivated professionals who aspire to grow with us.
            </p>
          </div>
        </AnimatedSection>

        {/* Culture & Pillars */}
        <div className="mt-16 pt-12 border-t border-[#F0E8E3]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#532416]">Culture of Integrity</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                We foster a collaborative environment grounded in honesty, human dignity, and mutual respect.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#532416]">Continuous Progress</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                Develop professional capabilities through exposure to diverse therapeutic categories and manufacturing networks.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#532416]">Patient Impact</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                Every role directly contributes to improving the accessibility and dependability of essential healthcare products.
              </p>
            </div>
          </div>
        </div>

        {/* Areas of Interest / Open Enquiries */}
        <div className="mt-20 pt-16 border-t border-[#F0E8E3]">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold text-[#FE5D26] uppercase tracking-wider">
              CAREER DOMAINS
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
              Professional Opportunities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#766A65]">
              We continuously review profiles across our core functional areas. Click below to launch your email with auto-generated introduction text tailored to each role:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept) => {
              const mailtoUrl = getCareerCvMailto(dept.title);
              return (
                <div
                  key={dept.title}
                  className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FE5D26] uppercase tracking-wider">
                        {dept.location}
                      </span>
                      <Briefcase className="w-4 h-4 text-[#766A65]" />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-[#532416]">
                      {dept.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0E8E3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-orange-500/25 group self-start sm:self-auto"
                      title={`Submit CV to ${TARGET_EMAIL}`}
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Submit Profile / CV</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <span className="text-[11px] text-[#766A65]">
                      Direct to {TARGET_EMAIL}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Team CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#532416] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold font-[var(--font-manrope)]">
              Ready to Connect With Us?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              For career opportunities and professional enquiries, please contact our team.
            </p>
          </div>
          <a
            href={getCareerCvMailto("General Career Opportunity")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 shadow-lg group"
          >
            <Mail className="w-4 h-4" />
            <span>Email CV to {TARGET_EMAIL}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
