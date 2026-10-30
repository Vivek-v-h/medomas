"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, FlaskConical, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyInfo } from "@/data/company";

export default function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="py-24 sm:py-32 bg-[#FFFAF7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
                <span className="w-6 h-[2px] bg-[#FE5D26]" />
                ABOUT US
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight leading-[1.15] font-[var(--font-manrope)]">
                Advancing Healthcare Through Quality, Science &amp; Innovation.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#766A65] leading-relaxed">
                {companyInfo.about.paragraph1}
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#766A65] leading-relaxed">
                {companyInfo.about.paragraph2}
              </p>

              {/* Three Verified Collaborations Facts */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#F0E8E3]">
                <div className="p-4 rounded-xl bg-white border border-[#F0E8E3] shadow-sm">
                  <div className="text-2xl font-extrabold text-[#FE5D26] font-[var(--font-manrope)]">
                    22
                  </div>
                  <div className="text-xs font-bold text-[#532416] mt-1">
                    Manufacturing Partners
                  </div>
                  <div className="text-[11px] text-[#766A65] mt-0.5">
                    HP, Haryana, Punjab &amp; UP
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F0E8E3] shadow-sm">
                  <div className="text-2xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                    R&amp;D
                  </div>
                  <div className="text-xs font-bold text-[#532416] mt-1">
                    Consultancy Partner
                  </div>
                  <div className="text-[11px] text-[#766A65] mt-0.5">
                    Nature Scientific Pvt. Ltd.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F0E8E3] shadow-sm">
                  <div className="text-2xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                    Quality
                  </div>
                  <div className="text-xs font-bold text-[#532416] mt-1">
                    Consistency &amp; Availability
                  </div>
                  <div className="text-[11px] text-[#766A65] mt-0.5">
                    Reliable healthcare access
                  </div>
                </div>
              </div>

              <div className="mt-9">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#532416] hover:bg-[#FE5D26] text-white text-sm font-bold tracking-wide shadow-md transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#532416] to-[#35180F] p-8 sm:p-10 text-white shadow-2xl border border-[#532416]/20">
                
                {/* Decorative background aura */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FE5D26]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DF0000]/15 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#FE5D26]">
                    OUR PHILOSOPHY
                  </span>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white leading-tight font-[var(--font-manrope)]">
                    {companyInfo.motto}
                  </h3>

                  <p className="mt-4 text-sm text-white/85 leading-relaxed">
                    {companyInfo.collaborations.philosophyText}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      <Building2 className="w-5 h-5 text-[#FE5D26] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">Manufacturing Partnerships</div>
                        <div className="text-xs text-white/70">
                          22 manufacturing partners across Himachal Pradesh, Haryana, Punjab, and Uttar Pradesh.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      <FlaskConical className="w-5 h-5 text-[#FE5D26] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">Research &amp; Development</div>
                        <div className="text-xs text-white/70">
                          Partnered with Nature Scientific Pvt. Ltd. for R&amp;D consultancy.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#FE5D26] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">Patient Well-Being</div>
                        <div className="text-xs text-white/70">
                          An unwavering commitment to patient well-being and healthcare accessibility.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FE5D26]" />
                      Thiruvananthapuram, Kerala
                    </span>
                    <span className="font-semibold text-white/90">Medomas Healthcare Pvt. Ltd.</span>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
