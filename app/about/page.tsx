import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Eye,
  Target,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Values from "@/components/home/Values";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Heritage",
  description:
    "Learn about Medomas Healthcare Pvt. Ltd., a Kerala-based pharmaceutical company committed to advancing quality healthcare through scientific innovation and strategic manufacturing partnerships.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              CORPORATE PROFILE
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Advancing Healthcare Through Quality, Science &amp; Innovation.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#766A65] leading-relaxed">
              {companyInfo.shortDescription}
            </p>
          </div>
        </AnimatedSection>

        {/* Heritage & Origin Section */}
        <div className="mt-16 pt-12 border-t border-[#F0E8E3]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FE5D26] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>KERALA ROOTS &amp; HERITAGE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                  Advancing Healthcare Through Quality, Science & Innovation
                </h2>

                <p className="text-sm sm:text-base text-[#766A65] leading-relaxed">
                  Medomas Healthcare Pvt. Ltd. is a Kerala-based healthcare and pharmaceutical company proudly rooted in the land of Sree Anantha Padmanabha. We are dedicated to delivering quality, affordable, and reliable healthcare solutions through innovation, scientific collaboration, and an unwavering commitment to patient well-being.
                </p>

                <p className="text-sm sm:text-base text-[#766A65] leading-relaxed">
                  With a growing network of manufacturing partners and a vision for continuous development, Medomas Healthcare strives to make dependable healthcare products accessible while building lasting relationships with healthcare professionals, business partners, and the communities we serve.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/collaborations"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#532416] hover:bg-[#FE5D26] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Our Collaborations</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#F0E8E3] hover:border-[#FE5D26] text-[#532416] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>View Product Catalogue</span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Credibility Box (5 cols) */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl bg-white border border-[#F0E8E3] p-8 sm:p-10 shadow-lg space-y-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FE5D26]">
                    VERIFIED HIGHLIGHTS
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
                      <div className="text-3xl font-extrabold text-[#FE5D26] font-[var(--font-manrope)]">
                        22
                      </div>
                      <div className="text-xs font-bold text-[#532416] mt-1">
                        Manufacturing Partnerships
                      </div>
                      <div className="text-xs text-[#766A65] mt-0.5">
                        Medomas Healthcare has established collaborations with 22 manufacturing partners across Himachal Pradesh, Haryana, Punjab, and Uttar Pradesh. These strategic partnerships support our diverse pharmaceutical product portfolio and strengthen our commitment to quality, consistency, and reliable product availability.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
                      <div className="text-xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                        Nature Scientific Pvt. Ltd.
                      </div>
                      <div className="text-xs font-bold text-[#FE5D26] mt-1">
                        R&amp;D Consultancy Partner
                      </div>
                      <div className="text-xs text-[#766A65] mt-0.5">
                        We have partnered with Nature Scientific Pvt. Ltd. for Research and Development (R&D) consultancy. This collaboration supports our efforts in scientific advancement, product innovation, formulation development, and continuous improvement.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
                      <div className="text-xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                        2 Focused Divisions
                      </div>
                      <div className="text-xs font-bold text-[#532416] mt-1">
                        MEDDENT &amp; AYUMED
                      </div>
                      <div className="text-xs text-[#766A65] mt-0.5">
                        Active commercial pharmaceutical range alongside Ayurvedic research pipeline.
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>

        {/* Vision & Mission Split */}
        <div className="mt-20 pt-16 border-t border-[#F0E8E3]">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold text-[#FE5D26] uppercase tracking-wider">
                STRATEGIC GUIDANCE
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                Our Vision &amp; Purpose.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F0E8E3] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-[#FE5D26] uppercase tracking-wider">
                    VISION
                  </span>
                  <p className="mt-4 text-base sm:text-lg text-[#532416] font-medium leading-relaxed italic">
                    &ldquo;{companyInfo.vision}&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#532416] text-white border border-[#532416] shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FE5D26]/20 text-[#FE5D26] border border-[#FE5D26]/30 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-[#FE5D26] uppercase tracking-wider">
                    MISSION
                  </span>
                  <p className="mt-4 text-base sm:text-lg text-white/90 font-medium leading-relaxed italic">
                    &ldquo;{companyInfo.mission}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>

      {/* Seven Core Values Component */}
      <div className="mt-20">
        <Values />
      </div>
    </div>
  );
}
