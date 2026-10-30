"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  FlaskConical,
  Layers,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#24140E]"
      aria-label="Medomas Healthcare Corporate Overview"
    >
      {/* ==========================================
          CINEMATIC BACKGROUND VIDEO WITH PARALLAX
         ========================================== */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : { y: videoY, scale: videoScale }
        }
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none select-none z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/medomas-hero.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered cinematic gradient overlays for depth & legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#24140E]/85 via-[#35180F]/75 to-[#24140E]/95" />
        
        {/* Subtle radial ambient warmth highlight (Brand Orange aura) */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(254,93,38,0.22)_0%,transparent_65%)]"
          aria-hidden="true"
        />

        {/* Micro-dot grid texture for scientific precision feel */}
        <div
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
      </motion.div>

      {/* ==========================================
          HERO FOREGROUND CONTENT
         ========================================== */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : { y: textY, opacity: textOpacity }
        }
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-38 sm:pt-42 lg:pt-48 pb-12 flex-1 flex flex-col justify-center"
      >
        <div className="max-w-4xl">
          {/* Eyebrow Pill with Glassmorphism */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FE5D26] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5D26] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FE5D26]" />
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-white/90">
              SCIENCE • QUALITY • INNOVATION
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-[var(--font-manrope)]"
          >
            Advancing Healthcare.
            <br />
            <span className="bg-gradient-to-r from-[#FE5D26] via-[#FF8B5E] to-[#FFF0E9] bg-clip-text text-transparent">
              Empowering Healthier Lives.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl font-light leading-relaxed"
          >
            Dedicated to delivering quality, affordable, and reliable healthcare solutions
            through innovation, scientific collaboration, and an unwavering commitment to patient well-being.
          </motion.p>

          {/* Glassmorphic Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Primary Orange Glassmorphic CTA */}
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FE5D26] to-[#E94B19] text-white font-bold text-sm tracking-wide shadow-[0_12px_35px_rgba(254,93,38,0.45)] backdrop-blur-xl border border-white/30 hover:shadow-[0_18px_50px_rgba(254,93,38,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform ease-out"
                aria-hidden="true"
              />
            </Link>

            {/* Secondary Frosted Glass CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/12 hover:bg-white/20 text-white font-bold text-sm tracking-wide backdrop-blur-xl border border-white/25 shadow-[0_8px_30px_rgba(0,0,0,0.30)] hover:border-white/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <span>Discover Medomas</span>
              <Sparkles className="w-4 h-4 text-[#FE5D26] group-hover:rotate-12 transition-transform duration-300" />
            </Link>

            {/* Location pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#FE5D26]" />
              <span>Thiruvananthapuram, Kerala, India</span>
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            HERO STATS / CREDIBILITY GLASS CARDS
           ========================================== */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Stat 1: 22 Partners */}
          <div className="group relative p-5 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FE5D26]/20 border border-[#FE5D26]/30 text-[#FE5D26] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-[var(--font-manrope)]">
                  22 Partners
                </div>
                <div className="text-xs font-medium text-white/80 mt-1">
                  Manufacturing Collaborations
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Across HP, Haryana, Punjab & UP
                </div>
              </div>
            </div>
          </div>

          {/* Stat 2: Nature Scientific R&D */}
          <div className="group relative p-5 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FE5D26]/20 border border-[#FE5D26]/30 text-[#FE5D26] flex-shrink-0">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-[var(--font-manrope)]">
                  R&D Consultancy
                </div>
                <div className="text-xs font-medium text-white/80 mt-1">
                  Nature Scientific Pvt. Ltd.
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Formulation & continuous innovation
                </div>
              </div>
            </div>
          </div>

          {/* Stat 3: Dual Divisions */}
          <div className="group relative p-5 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FE5D26]/20 border border-[#FE5D26]/30 text-[#FE5D26] flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-[var(--font-manrope)]">
                  2 Divisions
                </div>
                <div className="text-xs font-medium text-white/80 mt-1">
                  MEDDENT & AYUMED
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Pharmaceutical & Ayurvedic healthcare
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ==========================================
          BOTTOM SCROLL INDICATOR & SMOOTH BLEND
         ========================================== */}
      <div className="relative z-20 w-full flex flex-col items-center pb-8 sm:pb-10">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors"
          onClick={() => {
            const nextSection = document.getElementById("about-preview");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-white/50">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1 backdrop-blur-sm">
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 14, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-2 rounded-full bg-[#FE5D26]"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-white/40 -mt-1" />
        </motion.div>
      </div>

      {/* Smooth bottom blend overlay into the light cream page - lowered so it does not block bottom elements */}
      <div
        className="absolute bottom-0 inset-x-0 h-8 sm:h-10 bg-gradient-to-t from-[#FFFAF7] via-[#FFFAF7]/40 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
    </section>
  );
}

