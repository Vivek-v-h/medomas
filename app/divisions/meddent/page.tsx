import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "MEDDENT Division | Pharmaceutical & Healthcare Products",
  description:
    "Explore the MEDDENT Division of Medomas Healthcare Pvt. Ltd., offering dependable pharmaceutical formulations in pain management, antibiotics, gastrointestinal care, oral care, and other healthcare products.",
};

const categories = [
  "Pain Management & Anti-inflammatory Products",
  "Antibiotic Product",
  "Gastrointestinal Care",
  "Oral Care",
  "Other Healthcare Products",
] as const;

export default function MeddentDivisionPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#766A65] mb-8">
          <Link href="/" className="hover:text-[#FE5D26]">Home</Link>
          <span>/</span>
          <Link href="/divisions" className="hover:text-[#FE5D26]">Divisions</Link>
          <span>/</span>
          <span className="text-[#532416] font-bold">MEDDENT</span>
        </nav>

        {/* Division Hero */}
        <AnimatedSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#FE5D26]">
              <span className="w-6 h-[2px] bg-[#FE5D26]" />
              PHARMACEUTICAL DIVISION
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] tracking-tight font-[var(--font-manrope)]">
              MEDDENT DIVISION
            </h1>
            <div className="mt-2 text-lg font-semibold text-[#FE5D26]">
              Pharmaceutical and Healthcare Products
            </div>
            <p className="mt-4 text-base text-[#766A65] leading-relaxed">
              The MEDDENT Division is dedicated to delivering dependable, science-backed pharmaceutical and healthcare products. Our verified product portfolio is developed and manufactured through vetted manufacturing partnerships across India.
            </p>
          </div>

          {/* Quick Division Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#F0E8E3]">
              <div className="text-2xl font-extrabold text-[#FE5D26]">12 Products</div>
              <div className="text-xs text-[#766A65] mt-1">Verified Formulations</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#F0E8E3]">
              <div className="text-2xl font-extrabold text-[#532416]">22 Partners</div>
              <div className="text-xs text-[#766A65] mt-1">cGMP Manufacturing Network</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#F0E8E3]">
              <div className="text-2xl font-extrabold text-[#532416]">R&amp;D Guided</div>
              <div className="text-xs text-[#766A65] mt-1">Nature Scientific Pvt. Ltd.</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Categories and Product Listings */}
        <div className="mt-16 space-y-16">
          {categories.map((catName) => {
            const catProducts = products.filter((p) => p.category === catName && p.division === "MEDDENT");
            if (catProducts.length === 0) return null;
            return (
              <section key={catName} className="pt-10 border-t border-[#F0E8E3]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FE5D26]">
                      Therapeutic Category
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-[#532416] font-[var(--font-manrope)]">
                      {catName}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#F0E8E3] text-[#766A65] self-start sm:self-auto">
                    {catProducts.length} {catProducts.length === 1 ? "Product" : "Products"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
