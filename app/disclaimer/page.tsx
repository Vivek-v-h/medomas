import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Medical & Regulatory Disclaimer | Medomas Healthcare Pvt. Ltd.",
  description:
    "Important medical, pharmaceutical, and regulatory disclaimer regarding product information and corporate catalog usage for Medomas Healthcare Pvt. Ltd.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
            <span className="w-6 h-[2px] bg-[#FE5D26]" />
            LEGAL NOTICE
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
            Medical &amp; Regulatory Disclaimer
          </h1>

          {/* Highlight Warning Callout */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FFF0E9] border border-[#F0E8E3] flex items-start gap-4 text-xs sm:text-sm text-[#532416] leading-relaxed">
            <ShieldAlert className="w-6 h-6 text-[#FE5D26] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-base font-bold text-[#532416] block mb-1">
                Corporate Catalogue – Not an Online Pharmacy
              </strong>
              This website is published by Medomas Healthcare Pvt. Ltd. strictly for institutional reference, business-to-business engagement, and general corporate informational purposes. It is not an e-commerce platform, telemedicine service, or direct-to-consumer pharmacy.
            </div>
          </div>

          <div className="mt-10 space-y-8 text-sm text-[#766A65] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">1. No Medical Advice or Diagnosis</h2>
              <p>
                The information provided on this website—including product names, active compositions, pharmacological classes, and general therapeutic descriptions—is for general educational and reference purposes only. It does not constitute medical advice, diagnosis, treatment recommendations, or a substitute for professional clinical consultation.
              </p>
              <p>
                Patients and consumers must never use information found on this website to diagnose or treat a health problem or disease. Always consult a qualified physician or registered medical practitioner for any health concerns or before starting any medication.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">2. Prescription Medications (Schedule H / Rx)</h2>
              <p>
                Pharmaceutical products designated as prescription drugs (Schedule H / Rx) can only be dispensed by licensed pharmacies upon presentation of a valid prescription issued by a registered medical practitioner, in strict compliance with the Drugs and Cosmetics Act and applicable Indian pharmaceutical laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">3. Product Packaging &amp; Monograph Notice</h2>
              <p>
                All pharmaceutical formulations must be verified against approved package inserts and commercial carton labels prior to clinical administration. While Medomas Healthcare strives to maintain accurate and up-to-date composition listings, regulatory guidelines or monograph revisions may occur.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">4. Manufacturing Network Collaboration</h2>
              <p>
                Medomas Healthcare collaborates with 22 manufacturing partners across Himachal Pradesh, Haryana, Punjab, and Uttar Pradesh. Collaborations are conducted on a contract manufacturing and institutional supply basis; Medomas does not claim direct ownership of partner factory properties unless confirmed in written commercial agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">5. Contact Regulatory Desk</h2>
              <p>
                For regulatory affairs, pharmacovigilance reports, or official product documentation inquiries, contact our registered office:
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#F0E8E3] text-xs text-[#532416]">
                <strong>{companyInfo.name}</strong><br />
                {companyInfo.address.full}<br />
                Phone: {companyInfo.phones.join(" / ")}
              </div>
            </section>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
