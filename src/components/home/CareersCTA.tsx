"use client";

import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CareersCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFAF7] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#532416] via-[#35180F] to-[#24140E] p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background glowing aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FE5D26]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-wider uppercase text-[#FE5D26]">
                <Users className="w-3.5 h-3.5" />
                CAREERS AT MEDOMAS
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-[var(--font-manrope)]">
                Grow With Medomas Healthcare.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
                At Medomas Healthcare, we believe that people are at the heart of progress. We welcome individuals who share our commitment to quality, innovation, teamwork, and improving healthcare outcomes.
              </p>

              <p className="mt-3 text-sm text-white/80">
                For career opportunities and professional enquiries, please contact our team.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-sm font-bold tracking-wide shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <span>Explore Career Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide border border-white/20 transition-all duration-300 backdrop-blur-md"
                >
                  <span>Professional Enquiries</span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
