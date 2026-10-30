"use client";

import { Eye, Target, Compass } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyInfo } from "@/data/company";

export default function VisionMission() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFAF7] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              PURPOSE & DIRECTION
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Our Vision & Mission.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#766A65]">
              Guiding our growth, our partnerships, and our commitment to dependable healthcare solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Distinctive Split Layout */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Vision Card */}
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-3xl bg-white border border-[#F0E8E3] p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FFF0E9] flex items-center justify-center text-[#FE5D26]">
                  <Eye className="w-7 h-7" />
                </div>

                <div className="mt-8">
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FE5D26]">
                    FORWARD OUTLOOK
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                    Our Vision
                  </h3>
                </div>

                <p className="mt-6 text-base sm:text-lg text-[#532416]/90 font-medium leading-relaxed italic">
                  &ldquo;{companyInfo.vision}&rdquo;
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-[#F0E8E3] text-xs text-[#766A65] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FE5D26]" />
                <span>Long-term industry aspiration</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection delay={0.2}>
            <div className="h-full rounded-3xl bg-[#532416] text-white border border-[#532416] p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FE5D26]/20 border border-[#FE5D26]/30 flex items-center justify-center text-[#FE5D26]">
                  <Target className="w-7 h-7" />
                </div>

                <div className="mt-8">
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FE5D26]">
                    CORE MANDATE
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white font-[var(--font-manrope)]">
                    Our Mission
                  </h3>
                </div>

                <p className="mt-6 text-base sm:text-lg text-white/90 font-medium leading-relaxed italic">
                  &ldquo;{companyInfo.mission}&rdquo;
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/60 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FE5D26]" />
                <span>Actionable corporate commitment</span>
              </div>
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}

