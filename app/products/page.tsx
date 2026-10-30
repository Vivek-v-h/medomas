import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical Product Catalogue",
  description:
    "Explore the verified pharmaceutical formulations of Medomas Healthcare Pvt. Ltd., spanning pain management, antibiotics, gastrointestinal care, oral hygiene, and syrups.",
};

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Hero Banner */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              MEDDENT PORTFOLIO
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              Pharmaceutical Product Portfolio.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#766A65] leading-relaxed">
              Our verified pharmaceutical products are formulated in strict adherence to regulatory standards across vetted manufacturing facilities in India. Search by composition, active ingredient, or therapeutic classification.
            </p>
          </div>

          {/* Regulatory Advisory Banner */}
          <div className="mt-8 p-4 rounded-xl bg-[#FFF0E9] border border-[#F0E8E3] flex items-start gap-3 text-xs text-[#532416]">
            <Info className="w-5 h-5 text-[#FE5D26] flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Professional Reference Catalogue:</strong> This product list is intended for healthcare professionals, institutions, and authorised distribution partners. Prescription formulations (Rx) require a valid medical prescription and must be dispensed strictly in accordance with applicable drug regulations.
            </div>
          </div>
        </AnimatedSection>

        {/* Searchable and Filterable Product Grid */}
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>

      </div>
    </div>
  );
}
