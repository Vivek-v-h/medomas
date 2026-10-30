"use client";

import Link from "next/link";
import { ArrowRight, Pill, Leaf, Sparkles, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Divisions() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFF0E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              OUR PRODUCT PORTFOLIO
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Two Specialized Divisions.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#766A65]">
              Delivering dependable healthcare solutions through pharmaceutical formulations and forward-looking Ayurvedic research.
            </p>
          </div>
        </AnimatedSection>

        {/* Divisions Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: MEDDENT DIVISION */}
          <AnimatedSection delay={0.1}>
            <div className="group relative h-full rounded-3xl bg-white border border-[#F0E8E3] p-8 sm:p-10 shadow-[0_12px_40px_rgba(83,36,22,0.06)] hover:shadow-[0_20px_50px_rgba(83,36,22,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#FE5D26] to-[#FF8B5E]" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF0E9] flex items-center justify-center text-[#FE5D26] group-hover:scale-110 transition-transform duration-300">
                    <Pill className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FE5D26]/10 text-[#FE5D26]">
                    Active Portfolio
                  </span>
                </div>

                <div className="mt-8">
                  <span className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#766A65]">
                    OUR PRODUCT PORTFOLIO
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                    MEDDENT DIVISION
                  </h3>
                  <div className="mt-1 text-sm font-semibold text-[#FE5D26]">
                    Pharmaceutical and Healthcare Products
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-[#766A65] leading-relaxed">
                  Supporting our diverse pharmaceutical product portfolio and strengthening our commitment to quality, consistency, and reliable product availability across verified categories:
                </p>

                {/* Categories as in PDF */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Pain Management & Anti-inflammatory Products",
                    "Antibiotic Product",
                    "Gastrointestinal Care",
                    "Oral Care",
                    "Other Healthcare Products",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFFAF7] border border-[#F0E8E3] text-[#532416]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#F0E8E3] flex items-center justify-between">
                <span className="text-xs text-[#766A65]">
                  12 verified pharmaceutical formulations
                </span>
                <Link
                  href="/divisions/meddent"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FE5D26] group-hover:text-[#532416] transition-colors"
                >
                  <span>Explore MEDDENT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: AYUMED DIVISION */}
          <AnimatedSection delay={0.2}>
            <div className="group relative h-full rounded-3xl bg-white border border-[#F0E8E3] p-8 sm:p-10 shadow-[0_12px_40px_rgba(83,36,22,0.06)] hover:shadow-[0_20px_50px_rgba(83,36,22,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#532416] to-[#766A65]" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#532416]/10 flex items-center justify-center text-[#532416] group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#532416]/10 text-[#532416]">
                    Development In Progress
                  </span>
                </div>

                <div className="mt-8">
                  <span className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#766A65]">
                    HERBAL &amp; AYURVEDIC
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                    AYUMED DIVISION
                  </h3>
                  <div className="mt-1 text-sm font-semibold text-[#532416]">
                    Ayurvedic &amp; Herbal Healthcare
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-[#766A65] leading-relaxed">
                  The AYUMED Division is focused on the development of Ayurvedic and herbal healthcare products. Our development initiatives are currently in progress, with an emphasis on:
                </p>

                {/* 4 Focus points from PDF */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: "Traditional knowledge", icon: Sparkles },
                    { label: "Scientific evaluation", icon: ShieldCheck },
                    { label: "Quality", icon: ShieldCheck },
                    { label: "Responsible product development", icon: Leaf },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-xs font-semibold text-[#532416] flex items-center gap-2"
                    >
                      <item.icon className="w-4 h-4 text-[#FE5D26] flex-shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#F0E8E3] flex items-center justify-between">
                <span className="text-xs text-[#766A65]">
                  Development initiatives currently in progress
                </span>
                <Link
                  href="/divisions/ayumed"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#532416] group-hover:text-[#FE5D26] transition-colors"
                >
                  <span>Discover AYUMED</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
