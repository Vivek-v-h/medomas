import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, MapPin, Clock, ShieldCheck, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Corporate Headquarters & Enquiries",
  description:
    "Contact Medomas Healthcare Pvt. Ltd. in Thiruvananthapuram, Kerala, India. Reach our corporate desk for pharmaceutical distribution, manufacturing partnerships, and professional inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              GET IN TOUCH
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Contact Us
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#766A65] leading-relaxed">
              Committed to Quality, Trust & Humanity. We welcome professional and business enquiries, institutional supply, and partnership discussions.
            </p>
          </div>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Head Office & Phone Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection>
              <div className="rounded-3xl bg-white border border-[#F0E8E3] p-8 shadow-sm space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FE5D26]">
                  REGISTERED HEADQUARTERS
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#532416]">
                      {companyInfo.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#766A65] leading-relaxed">
                      {companyInfo.address.doorNo}, {companyInfo.address.locality},<br />
                      {companyInfo.address.postOffice},<br />
                      {companyInfo.address.city}, {companyInfo.address.state}, India – {companyInfo.address.pincode}.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0E8E3]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FE5D26] uppercase tracking-wider mb-3">
                    <Phone className="w-4 h-4" />
                    <span>TELEPHONE INQUIRIES</span>
                  </div>

                  <div className="space-y-2">
                    {companyInfo.phones.map((phone) => (
                      <div key={phone} className="p-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] flex items-center justify-between">
                        <span className="text-xs text-[#766A65]">Direct Desk</span>
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="text-xs sm:text-sm font-bold text-[#532416] hover:text-[#FE5D26] transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0E8E3]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FE5D26] uppercase tracking-wider mb-2">
                    <Mail className="w-4 h-4" />
                    <span>EMAIL DESK</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] flex items-center justify-between">
                    <span className="text-xs text-[#766A65]">Direct Inbox</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-xs sm:text-sm font-bold text-[#532416] hover:text-[#FE5D26] transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0E8E3] flex items-center gap-2 text-xs text-[#766A65]">
                  <Clock className="w-4 h-4 text-[#FE5D26]" />
                  <span>Office Hours: Mon – Sat, 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>

              {/* Verified Entity Note */}
              <div className="mt-6 p-6 rounded-2xl bg-[#532416] text-white shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FE5D26]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>CORPORATE INTEGRITY</span>
                </div>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Medomas Healthcare is committed to quality, trust, and human dignity. For formal institutional proposals, please use the official contact form or call our desk directly.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Interactive Form with Suspense (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <Suspense
                fallback={
                  <div className="p-12 text-center text-sm text-[#766A65]">
                    Loading Enquiry Form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </div>
  );
}
