import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Sparkles, ShieldCheck, Clock, ArrowRight, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "AYUMED Division | Ayurvedic & Herbal Healthcare",
  description:
    "The AYUMED Division of Medomas Healthcare Pvt. Ltd. focuses on developing authentic Ayurvedic and herbal healthcare products grounded in traditional knowledge and scientific evaluation.",
};

export default function AyumedDivisionPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#766A65] mb-8">
          <Link href="/" className="hover:text-[#FE5D26]">Home</Link>
          <span>/</span>
          <Link href="/divisions" className="hover:text-[#FE5D26]">Divisions</Link>
          <span>/</span>
          <span className="text-[#532416] font-bold">AYUMED</span>
        </nav>

        {/* Hero Section */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#532416]">
              <span className="w-6 h-[2px] bg-[#532416]" />
              AYURVEDIC &amp; HERBAL DIVISION
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              AYUMED DIVISION
            </h1>
            <div className="mt-2 text-lg font-semibold text-[#532416]">
              Ayurvedic &amp; Herbal Healthcare
            </div>
            <p className="mt-4 text-base text-[#766A65] leading-relaxed">
              The AYUMED Division is focused on the development of Ayurvedic and herbal healthcare products. Our development initiatives are currently in progress, with an emphasis on traditional knowledge, scientific evaluation, quality, and responsible product development.
            </p>
          </div>
        </AnimatedSection>

        {/* Development Status Notification */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#532416]/10 text-[#532416] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#532416]">Development In Progress</div>
              <p className="text-xs text-[#766A65] mt-0.5">
                Our formulation team and scientific advisors are actively validating herbal monographs and standardization protocols prior to commercial introduction.
              </p>
            </div>
          </div>
        </div>

        {/* Four Foundational Pillars */}
        <div className="mt-16 pt-12 border-t border-[#F0E8E3]">
          <h2 className="text-2xl font-bold text-[#532416] font-[var(--font-manrope)] mb-2">
            The Four Pillars of AYUMED Development
          </h2>
          <p className="text-sm text-[#766A65] mb-10 max-w-2xl">
            As outlined in our corporate blueprint, every AYUMED initiative is built upon four non-negotiable principles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                  Traditional Knowledge
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                  Honouring classical Ayurvedic literature, authentic time-tested botanicals, and indigenous healing heritage rooted in Kerala.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                  Scientific Evaluation
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                  Applying modern phytochemistry, active marker profiling, and analytical testing to validate biological potency and safety.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                  Quality Standards
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                  Strict heavy metal screening, microbiological assays, and pesticide residue limits in strict adherence to Ayurvedic Pharmacopoeia (API) norms.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                  Responsible Development
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                  Ethical sourcing of raw herbs, sustainable harvesting practices, and transparent consumer communication without exaggerated claims.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Institutional Inquiries CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#532416] to-[#35180F] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold font-[var(--font-manrope)]">
              Interested in Ayurvedic Collaboration?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              For research institutions, herbal raw material suppliers, or contract partners interested in AYUMED initiatives, contact our corporate office.
            </p>
          </div>
          <Link
            href="/contact?subject=AYUMED+Division+Enquiry"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0"
          >
            <span>Contact AYUMED Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

