import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Medomas Healthcare Pvt. Ltd.",
  description:
    "Privacy Policy for Medomas Healthcare Pvt. Ltd. Learn how we handle corporate inquiries, professional data, and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
            <span className="w-6 h-[2px] bg-[#FE5D26]" />
            LEGAL &amp; COMPLIANCE
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#766A65]">
            Effective Date: January 2026 • Last Updated: October 2026
          </p>

          <div className="mt-8 space-y-8 text-sm text-[#766A65] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">1. Overview</h2>
              <p>
                {companyInfo.name} (&ldquo;Medomas Healthcare&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this corporate website as an informational and business catalogue. We respect the privacy of healthcare professionals, institutional partners, and general visitors who contact us through this platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">2. Information We Collect</h2>
              <p>
                We only collect personal information that you voluntarily submit to us via our inquiry forms, telephone communications, or career applications. This information may include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your full name and professional designation.</li>
                <li>Your contact details, including email address and telephone number.</li>
                <li>Organization or institutional affiliation.</li>
                <li>The content of your business inquiry or career resume.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">3. How We Use Collected Information</h2>
              <p>
                Information collected is strictly utilized to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to institutional product enquiries and supply requests.</li>
                <li>Process professional career applications and employment queries.</li>
                <li>Comply with applicable legal, drug regulatory, and corporate record-keeping mandates.</li>
              </ul>
              <p>
                We do not sell, rent, lease, or commercially trade your personal contact details to any third-party marketing brokers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">4. Data Protection &amp; Security</h2>
              <p>
                We implement reasonable technical and organizational safeguards to protect submitted inquiry records against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#532416]">5. Contact Us Regarding Privacy</h2>
              <p>
                If you have questions regarding this privacy policy or wish to review information previously submitted, please write to our corporate address:
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#F0E8E3] text-xs text-[#532416]">
                <strong>{companyInfo.name}</strong><br />
                {companyInfo.address.full}<br />
                Telephone: {companyInfo.phones.join(" / ")}
              </div>
            </section>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
