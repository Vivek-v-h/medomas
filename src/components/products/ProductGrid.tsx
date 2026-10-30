"use client";

import { useState, useMemo } from "react";
import { Search, X, Filter, Pill } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { Product, ProductCategory, ProductDivision } from "@/types";

interface ProductGridProps {
  products: Product[];
}

const categories: { label: string; value: "ALL" | ProductCategory }[] = [
  { label: "All Categories", value: "ALL" },
  { label: "Pain Management & Anti-inflammatory Products", value: "Pain Management & Anti-inflammatory Products" },
  { label: "Antibiotic Product", value: "Antibiotic Product" },
  { label: "Gastrointestinal Care", value: "Gastrointestinal Care" },
  { label: "Oral Care", value: "Oral Care" },
  { label: "Other Healthcare Products", value: "Other Healthcare Products" },
];

export default function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | ProductCategory>("ALL");
  const [selectedDivision, setSelectedDivision] = useState<"ALL" | ProductDivision>("ALL");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Division filter
      if (selectedDivision !== "ALL" && p.division !== selectedDivision) {
        return false;
      }
      // Category filter
      if (selectedCategory !== "ALL" && p.category !== selectedCategory) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesGeneric = p.genericName.toLowerCase().includes(query);
        const matchesComp = p.composition.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        return matchesName || matchesGeneric || matchesComp || matchesCategory;
      }
      return true;
    });
  }, [products, searchTerm, selectedCategory, selectedDivision]);

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="rounded-2xl bg-white border border-[#F0E8E3] p-5 shadow-sm space-y-4">
        
        {/* Top Controls: Search Input + Division Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search Input (8 cols) */}
          <div className="md:col-span-8 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#766A65]" />
            <input
              type="text"
              placeholder="Search by product name, active ingredient, or composition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3] text-sm text-[#241D1A] placeholder-[#766A65] focus:outline-none focus:border-[#FE5D26] focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#766A65] hover:text-[#532416]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Division Selector (4 cols) */}
          <div className="md:col-span-4 flex items-center gap-2">
            <span className="text-xs font-bold text-[#766A65] uppercase tracking-wider flex-shrink-0">
              Division:
            </span>
            <div className="flex rounded-xl bg-[#FFFAF7] p-1 border border-[#F0E8E3] w-full">
              {(["ALL", "MEDDENT", "AYUMED"] as const).map((div) => (
                <button
                  key={div}
                  type="button"
                  onClick={() => setSelectedDivision(div)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedDivision === div
                      ? "bg-[#532416] text-white shadow-sm"
                      : "text-[#766A65] hover:text-[#532416]"
                  }`}
                >
                  {div === "ALL" ? "All" : div}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Category Pills */}
        <div className="pt-3 border-t border-[#F0E8E3] flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#766A65] flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#FE5D26]" />
            <span>Category:</span>
          </span>

          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-[#FE5D26] text-white shadow-sm shadow-orange-500/20"
                  : "bg-[#FFFAF7] text-[#766A65] border border-[#F0E8E3] hover:border-[#FE5D26]/40 hover:text-[#532416]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Results Count & Active Status */}
      <div className="mt-6 flex items-center justify-between text-xs text-[#766A65]">
        <span>
          Showing <strong className="text-[#532416]">{filteredProducts.length}</strong> of {products.length} products
        </span>
        {(searchTerm || selectedCategory !== "ALL" || selectedDivision !== "ALL") && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("ALL");
              setSelectedDivision("ALL");
            }}
            className="text-[#FE5D26] font-semibold hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl bg-white border border-[#F0E8E3] p-12 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mx-auto mb-4">
            <Pill className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#532416]">No products found</h3>
          <p className="mt-2 text-xs text-[#766A65] leading-relaxed">
            No pharmaceutical formulations match your search query &ldquo;{searchTerm}&rdquo; in the selected category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("ALL");
              setSelectedDivision("ALL");
            }}
            className="mt-5 px-5 py-2.5 rounded-full bg-[#FE5D26] text-white text-xs font-bold shadow-md hover:bg-[#E94B19] transition-all"
          >
            Clear Search &amp; Filters
          </button>
        </div>
      )}
    </div>
  );
}

