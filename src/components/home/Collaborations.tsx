"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FlaskConical,
  MapPin,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface StateDetail {
  id: string;
  name: string;
  region: string;
  focus: string;
  description: string;
  dot: { x: number; y: number }; // Relative coordinates on stylized map
}

const statesData: StateDetail[] = [
  {
    id: "hp",
    name: "Himachal Pradesh",
    region: "Northern Pharmaceutical Hub",
    focus: "Solid Dosage & Anti-inflammatory Formulations",
    description:
      "Vetted partner facilities operating in controlled pharmaceutical zones, specializing in precision tablet compression and oral solid dosages.",
    dot: { x: 42, y: 18 },
  },
  {
    id: "punjab",
    name: "Punjab",
    region: "Northern Manufacturing Belt",
    focus: "Liquid Orals, Syrups & Suspensions",
    description:
      "Strategic manufacturing partners dedicated to certified liquid formulation blending, oral suspensions, and modern bottling lines.",
    dot: { x: 36, y: 22 },
  },
  {
    id: "haryana",
    name: "Haryana",
    region: "National Capital Region Corridor",
    focus: "Antibiotics & Advanced Formulations",
    description:
      "Modern cGMP-compliant manufacturing infrastructure equipped with automated blister packaging and strict environmental controls.",
    dot: { x: 41, y: 26 },
  },
  {
    id: "up",
    name: "Uttar Pradesh",
    region: "Central & Northern Industrial Zone",
    focus: "Gastrointestinal & Parenteral Collaborations",
    description:
      "Specialized manufacturing facilities for injectables, sterile preparations, and large-scale gastrointestinal formulation supply.",
    dot: { x: 55, y: 32 },
  },
];

export default function Collaborations() {
  const [activeState, setActiveState] = useState<StateDetail>(statesData[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#24140E] text-white relative overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#FE5D26]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#DF0000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              OUR COLLABORATORS
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-manrope)]">
              Manufacturing Partnerships &amp; Research &amp; Development.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              At Medomas Healthcare, we believe that strong partnerships, scientific expertise, and a commitment to quality are essential to building a healthier future.
            </p>
          </div>
        </AnimatedSection>

        {/* Map & Interaction Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Stylized India Map Visualizer (6 cols) */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-3xl bg-white/[0.05] backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5D26] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FE5D26]" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                      Pan-India Strategic Network
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FE5D26]/20 text-[#FE5D26] border border-[#FE5D26]/30">
                    22 Partner Units
                  </span>
                </div>

                {/* Stylized SVG Map Graphics */}
                <div className="relative w-full aspect-[4/3] my-6 flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 450"
                    className="w-full h-full max-h-[380px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* India Outline Silhouette (Stylized Minimalist Geometric) */}
                    <path
                      d="M175 40 L210 50 L240 75 L215 110 L260 135 L310 145 L320 170 L280 185 L265 210 L250 220 L270 250 L250 280 L230 310 L210 345 L190 380 L180 415 L170 380 L150 330 L135 280 L120 250 L110 220 L130 195 L145 165 L140 120 L160 85 Z"
                      className="fill-white/[0.04] stroke-white/20 stroke-1"
                    />

                    {/* Connecting Arcs from Kerala (Thiruvananthapuram) to Northern Hubs */}
                    {/* Kerala HQ point: (175, 405) */}
                    {/* HP: (185, 95) */}
                    <path
                      d="M 175 405 Q 120 250 185 95"
                      stroke="#FE5D26"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-60"
                    />
                    {/* Punjab: (160, 115) */}
                    <path
                      d="M 175 405 Q 130 260 160 115"
                      stroke="#FE5D26"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-50"
                    />
                    {/* Haryana: (180, 135) */}
                    <path
                      d="M 175 405 Q 140 270 180 135"
                      stroke="#FE5D26"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-60"
                    />
                    {/* UP: (230, 160) */}
                    <path
                      d="M 175 405 Q 210 280 230 160"
                      stroke="#FE5D26"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-60"
                    />

                    {/* State Nodes */}
                    {/* Himachal Pradesh */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-125"
                      onClick={() => setActiveState(statesData[0])}
                    >
                      <circle cx="185" cy="95" r="7" className={activeState.id === "hp" ? "fill-[#FE5D26]" : "fill-white/80"} />
                      <circle cx="185" cy="95" r="14" className="stroke-[#FE5D26]/40 fill-none animate-pulse" />
                      <text x="198" y="99" fill="white" fontSize="10" fontWeight="bold">Himachal Pradesh</text>
                    </g>

                    {/* Punjab */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-125"
                      onClick={() => setActiveState(statesData[1])}
                    >
                      <circle cx="160" cy="115" r="6" className={activeState.id === "punjab" ? "fill-[#FE5D26]" : "fill-white/80"} />
                      <text x="95" y="119" fill="white" fontSize="10" fontWeight="bold">Punjab</text>
                    </g>

                    {/* Haryana */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-125"
                      onClick={() => setActiveState(statesData[2])}
                    >
                      <circle cx="180" cy="135" r="6" className={activeState.id === "haryana" ? "fill-[#FE5D26]" : "fill-white/80"} />
                      <text x="125" y="145" fill="white" fontSize="10" fontWeight="bold">Haryana</text>
                    </g>

                    {/* Uttar Pradesh */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-125"
                      onClick={() => setActiveState(statesData[3])}
                    >
                      <circle cx="230" cy="160" r="7" className={activeState.id === "up" ? "fill-[#FE5D26]" : "fill-white/80"} />
                      <circle cx="230" cy="160" r="13" className="stroke-[#FE5D26]/40 fill-none animate-pulse" />
                      <text x="245" y="164" fill="white" fontSize="10" fontWeight="bold">Uttar Pradesh</text>
                    </g>

                    {/* Kerala Headquarters (Thiruvananthapuram) */}
                    <g>
                      <circle cx="175" cy="405" r="9" fill="#FE5D26" />
                      <circle cx="175" cy="405" r="18" stroke="#FE5D26" strokeWidth="1.5" fill="none" className="animate-ping opacity-60" />
                      <text x="80" y="425" fill="#FE5D26" fontSize="11" fontWeight="bold">
                        Kerala HQ (Thiruvananthapuram)
                      </text>
                    </g>
                  </svg>
                </div>

                {/* State selector pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10">
                  {statesData.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setActiveState(st)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                        activeState.id === st.id
                          ? "bg-[#FE5D26] text-white shadow-lg shadow-orange-500/30 scale-102"
                          : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
                      }`}
                    >
                      {st.name}
                    </button>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Active State Focus & R&D Engine (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Active Partner State Spotlight Card */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/15 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#FE5D26] uppercase">
                    {activeState.region}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <MapPin className="w-3.5 h-3.5 text-[#FE5D26]" />
                    <span>State Profile</span>
                  </div>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white font-[var(--font-manrope)]">
                  {activeState.name}
                </h3>

                <div className="mt-2 text-sm font-semibold text-[#FE5D26]">
                  {activeState.focus}
                </div>

                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  {activeState.description}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-bold text-white">Quality Framework</div>
                    <div className="text-white/60 mt-0.5">Strict cGMP & QA Audits</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-bold text-white">Availability</div>
                    <div className="text-white/60 mt-0.5">Reliable Supply Chain</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* R&D Consultancy Spotlight Card: Nature Scientific */}
            <AnimatedSection delay={0.3}>
              <div className="rounded-3xl bg-gradient-to-br from-[#532416] to-[#35180F] border border-[#FE5D26]/30 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#FE5D26]/20 border border-[#FE5D26]/30 text-[#FE5D26] flex-shrink-0">
                    <FlaskConical className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#FE5D26]">
                      RESEARCH &amp; DEVELOPMENT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 font-[var(--font-manrope)]">
                      Nature Scientific Pvt. Ltd.
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/85 leading-relaxed">
                  We have partnered with Nature Scientific Pvt. Ltd. for Research and Development (R&amp;D) consultancy. This collaboration supports our efforts in scientific advancement, product innovation, formulation development, and continuous improvement.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/15 text-xs">
                  <span className="text-white/70">
                    Science-driven healthcare innovation
                  </span>
                  <Link
                    href="/collaborations"
                    className="inline-flex items-center gap-1.5 font-bold text-[#FE5D26] hover:text-white transition-colors"
                  >
                    <span>Read Full Methodology</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

          </div>

        </div>

      </div>
    </section>
  );
}
