import type { Metadata } from "next";
import {
  FlaskConical,
  ShieldCheck,
  Award,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Collaborations from "@/components/home/Collaborations";

export const metadata: Metadata = {
  title: "Manufacturing Partnerships & R&D Collaborations",
  description:
    "Explore the strategic manufacturing network of Medomas Healthcare Pvt. Ltd. featuring 22 partner facilities across Himachal Pradesh, Haryana, Punjab, and Uttar Pradesh, along with R&D consultancy by Nature Scientific Pvt. Ltd.",
};

export default function CollaborationsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              OUR COLLABORATORS
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Manufacturing Partnerships &amp; Research &amp; Development
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#766A65] leading-relaxed">
              Medomas Healthcare has established collaborations with 22 manufacturing partners across Himachal Pradesh, Haryana, Punjab, and Uttar Pradesh. These strategic partnerships support our diverse pharmaceutical product portfolio and strengthen our commitment to quality, consistency, and reliable product availability.

We have partnered with Nature Scientific Pvt. Ltd. for Research and Development (R&D) consultancy. This collaboration supports our efforts in scientific advancement, product innovation, formulation development, and continuous improvement.

At Medomas Healthcare, we believe that strong partnerships, scientific expertise, and a commitment to quality are essential to building a healthier future.
            </p>
          </div>
        </AnimatedSection>

      </div>

      {/* Interactive Map & Collaboration Engine */}
      <div className="mt-12">
        <Collaborations />
      </div>

      {/* Additional Partnership Framework Details */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20">
        <AnimatedSection>
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FE5D26]">
              OPERATIONAL GOVERNANCE
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
              How We Ensure Partner Network Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                cGMP Facility Auditing
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                All 22 manufacturing partners are evaluated against current Good Manufacturing Practices (cGMP), air handling systems (HVAC), and sterile controls.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                Formulation Guidance
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                Nature Scientific Pvt. Ltd. consults directly on formulation stability, active ingredient bioavailability, and analytical validation.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#F0E8E3] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#532416] font-[var(--font-manrope)]">
                Finished Batch Release
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                Every batch released into our distribution network carries complete Certificate of Analysis (COA) documentation and verified assay values.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
