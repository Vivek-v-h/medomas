"use client";

import {
  ShieldCheck,
  Scale,
  Sparkles,
  Users2,
  Handshake,
  HeartPulse,
  Award,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyValues } from "@/data/values";

const iconMap = {
  ShieldCheck,
  Scale,
  Sparkles,
  Users2,
  Handshake,
  HeartPulse,
  Award,
};

export default function Values() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFF0E9] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              ETHICAL FOUNDATION
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Our Seven Core Values.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#766A65]">
              These guiding principles govern every formulation, partnership, and institutional decision at Medomas Healthcare.
            </p>
          </div>
        </AnimatedSection>

        {/* Values Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companyValues.map((val, index) => {
            const Icon = iconMap[val.iconName as keyof typeof iconMap] || ShieldCheck;
            const isFeatured = index === 0; // Quality

            return (
              <AnimatedSection key={val.id} delay={index * 0.05}>
                <div
                  className={`h-full rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                    isFeatured
                      ? "bg-gradient-to-br from-[#532416] to-[#35180F] text-white border-[#532416] shadow-xl sm:col-span-2 xl:col-span-2"
                      : "bg-white text-[#241D1A] border-[#F0E8E3] shadow-sm hover:shadow-md hover:border-[#FE5D26]/40"
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isFeatured
                          ? "bg-[#FE5D26]/20 border border-[#FE5D26]/30 text-[#FE5D26]"
                          : "bg-[#FFF0E9] text-[#FE5D26]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold ${isFeatured ? "text-[#FE5D26]" : "text-[#766A65]"}`}>
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-xl font-extrabold font-[var(--font-manrope)] ${
                          isFeatured ? "text-white" : "text-[#532416]"
                        }`}
                      >
                        {val.name}
                      </h3>
                    </div>

                    <div
                      className={`text-xs font-semibold mt-1 ${
                        isFeatured ? "text-[#FE5D26]" : "text-[#766A65]"
                      }`}
                    >
                      {val.tagline}
                    </div>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isFeatured ? "text-white/85" : "text-[#766A65]"
                      }`}
                    >
                      {val.description}
                    </p>
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

