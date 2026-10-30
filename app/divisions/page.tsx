import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Divisions from "@/components/home/Divisions";

export const metadata: Metadata = {
  title: "Specialized Healthcare Divisions | MEDDENT & AYUMED",
  description:
    "Discover the specialized divisions of Medomas Healthcare Pvt. Ltd. - MEDDENT (Pharmaceutical Products) and AYUMED (Ayurvedic & Herbal Healthcare).",
};

export default function DivisionsOverviewPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              SPECIALIZED DIVISIONS
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Focused Healthcare Divisions.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#766A65] leading-relaxed">
              Medomas Healthcare operates two dedicated business divisions designed to deliver reliable pharmaceutical therapies and foster rigorous Ayurvedic product development.
            </p>
          </div>
        </AnimatedSection>

      </div>

      {/* Main Divisions Cards */}
      <div className="mt-12">
        <Divisions />
      </div>
    </div>
  );
}
