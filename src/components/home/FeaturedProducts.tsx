"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { products } from "@/data/products";
import { ProductCategory } from "@/types";

type FilterTab = "ALL" | ProductCategory;

const filterTabs: { label: string; value: FilterTab }[] = [
  { label: "All Formulations (12)", value: "ALL" },
  { label: "Pain Management & Anti-inflammatory", value: "Pain Management & Anti-inflammatory Products" },
  { label: "Antibiotic Product", value: "Antibiotic Product" },
  { label: "Gastrointestinal Care", value: "Gastrointestinal Care" },
  { label: "Oral Care", value: "Oral Care" },
  { label: "Other Healthcare Products", value: "Other Healthcare Products" },
];

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<FilterTab>("ALL");

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 sm:py-32 bg-[#FFFAF7] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              PHARMACEUTICAL PORTFOLIO
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Verified Product Catalogue.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#766A65] max-w-2xl">
              12 dependable pharmaceutical formulations from our MEDDENT division. Filter by therapeutic category or review full compositions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#532416] hover:bg-[#FE5D26] text-white text-sm font-bold tracking-wide shadow-md transition-all duration-300"
            >
              <span>Explore Dedicated Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                selectedCategory === tab.value
                  ? "bg-[#FE5D26] text-white shadow-md shadow-orange-500/25 scale-102"
                  : "bg-white text-[#766A65] border border-[#F0E8E3] hover:border-[#FE5D26]/40 hover:text-[#532416]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with AnimatePresence */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group h-full rounded-2xl bg-white border border-[#F0E8E3] p-7 shadow-sm hover:shadow-xl hover:border-[#FE5D26]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Dosage Badge */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="block relative aspect-[16/11] w-full rounded-xl bg-[#FFF0E9]/30 border border-[#F0E8E3] overflow-hidden mb-5 group-hover:border-[#FE5D26]/30 transition-colors"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#FE5D26]">
                      {product.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#FFF0E9] text-[#532416] flex-shrink-0">
                      {product.dosageForm}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="mt-4 text-2xl font-extrabold text-[#532416] group-hover:text-[#FE5D26] transition-colors font-[var(--font-manrope)]">
                    {product.name}
                  </h3>

                  {product.tagline && (
                    <p className="mt-1 text-xs text-[#766A65] italic">
                      {product.tagline}
                    </p>
                  )}

                  {/* Composition Box */}
                  <div className="mt-5 p-4 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#766A65] flex items-center justify-between">
                      <span>Exact Active Composition</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FE5D26]" />
                    </div>
                    <div className="mt-1.5 text-xs font-semibold text-[#241D1A] leading-relaxed">
                      {product.composition}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-5 border-t border-[#F0E8E3] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#766A65]">
                    {product.division} DIVISION
                  </span>
                  <Link
                    href={`/contact?subject=Product+Enquiry+-+${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FE5D26] group-hover:text-[#532416] transition-colors"
                  >
                    <span>Enquire Availability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
