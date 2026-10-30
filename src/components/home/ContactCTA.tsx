"use client";

import Link from "next/link";
import { ArrowRight, Phone, MapPin, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyInfo } from "@/data/company";

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF0E9] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="rounded-3xl bg-white border border-[#F0E8E3] p-8 sm:p-12 lg:p-14 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
                  <span className="w-6 h-[2px] bg-[#FE5D26]" />
                  CONTACT US
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
                  Medomas Healthcare Pvt. Ltd.
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#FE5D26] italic">
                  Committed to Quality, Trust &amp; Humanity.
                </p>

                <p className="mt-4 text-base text-[#766A65] leading-relaxed">
                  For pharmaceutical enquiries, manufacturing partnerships, institutional distribution, or general correspondence, reach out directly to our corporate headquarters.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#FE5D26]">
                      <Phone className="w-4 h-4" />
                      <span>TELEPHONE</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      {companyInfo.phones.map((phone) => (
                        <div key={phone} className="text-sm font-semibold text-[#532416]">
                          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-[#FE5D26] transition-colors">
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#FE5D26]">
                      <MapPin className="w-4 h-4" />
                      <span>HEAD OFFICE</span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-[#532416] leading-relaxed">
                      {companyInfo.address.full}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
                <div className="w-full max-w-sm rounded-2xl bg-[#532416] p-7 text-white text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-[#FE5D26] flex items-center justify-center text-white mx-auto sm:mx-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold font-[var(--font-manrope)]">
                    Send Us an Enquiry
                  </h3>
                  <p className="mt-2 text-xs text-white/75 leading-relaxed">
                    Our team reviews all professional and business correspondence promptly.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md"
                  >
                    <span>Open Enquiry Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
