"use client";

import { ShieldCheck, Award, Microscope, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const qualityPillars = [
  {
    icon: ShieldCheck,
    title: "Vetted cGMP Compliance",
    subtitle: "22 Manufacturing Partners",
    description:
      "Every manufacturing partner across Himachal Pradesh, Haryana, Punjab, and Uttar Pradesh adheres to Good Manufacturing Practices (cGMP) and rigorous quality assurance protocols.",
  },
  {
    icon: Microscope,
    title: "Scientific R&D Partnership",
    subtitle: "Nature Scientific Pvt. Ltd.",
    description:
      "Formulation architecture, stability testing, and continuous process improvements are guided through dedicated scientific consultancy with Nature Scientific Pvt. Ltd.",
  },
  {
    icon: Award,
    title: "Raw Material & Assay Verification",
    subtitle: "High Quality Standards",
    description:
      "Every active pharmaceutical ingredient (API) and excipient undergoes assay testing and strict physical-chemical validation before commercial release.",
  },
  {
    icon: CheckCircle2,
    title: "Batch Integrity & Traceability",
    subtitle: "Commitment to Patient Safety",
    description:
      "Comprehensive batch retention samples and complete documentation traceability are maintained for every product batch in compliance with drug regulations.",
  },
];

export default function QualitySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFAF7] relative border-y border-[#F0E8E3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              QUALITY PHILOSOPHY
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Our Uncompromising Approach to Quality.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#766A65] leading-relaxed">
              At Medomas Healthcare, quality is not a static endpoint—it is the foundational standard that guides every therapeutic solution we bring to healthcare professionals and patients.
            </p>
          </div>
        </AnimatedSection>

        {/* Four Quality Pillars Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {qualityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl bg-white border border-[#F0E8E3] p-7 shadow-sm hover:shadow-xl hover:border-[#FE5D26]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] flex items-center justify-center text-[#FE5D26] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold text-[#FE5D26] uppercase tracking-wider">
                      {pillar.subtitle}
                    </span>

                    <h3 className="text-xl font-extrabold text-[#532416] mt-1 font-[var(--font-manrope)]">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0E8E3] text-[11px] font-semibold text-[#532416] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FE5D26]" />
                    <span>Verified Protocol</span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}

