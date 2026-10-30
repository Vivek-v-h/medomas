import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <div
      className={`group h-full rounded-2xl bg-white border border-[#F0E8E3] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FE5D26]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Product Image Header */}
        <div className="relative aspect-[4/3] w-full bg-[#FFF0E9]/40 border-b border-[#F0E8E3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-white/95 text-[#FE5D26] shadow-sm backdrop-blur-md border border-white/60">
              {product.category}
            </span>
          </div>

          {/* Rx or OTC Badge */}
          <div className="absolute top-3 right-3">
            {product.prescriptionRequired ? (
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-serif font-bold bg-[#DF0000] text-white shadow-sm">
                Rx
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#0284C7] text-white shadow-sm">
                OTC
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-[#766A65]">{product.division} DIVISION</span>
            <span className="px-2 py-0.5 rounded bg-[#FFFAF7] border border-[#F0E8E3] font-medium text-[#532416]">
              {product.dosageForm}
            </span>
          </div>

          <h3 className="mt-3 text-xl font-extrabold text-[#532416] group-hover:text-[#FE5D26] transition-colors font-[var(--font-manrope)]">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          {product.tagline && (
            <p className="mt-1 text-xs text-[#766A65] italic line-clamp-1">
              {product.tagline}
            </p>
          )}

          {/* Composition Box */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#FFFAF7] border border-[#F0E8E3]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#766A65] flex items-center justify-between">
              <span>Active Composition</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#FE5D26]" />
            </div>
            <div className="mt-1 text-xs font-semibold text-[#241D1A] leading-relaxed line-clamp-2">
              {product.composition}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 pb-6 pt-3 border-t border-[#F0E8E3] flex items-center justify-between gap-3">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#532416] hover:text-[#FE5D26] transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Product Details</span>
        </Link>

        <Link
          href={`/contact?subject=Product+Enquiry+-+${encodeURIComponent(product.name)}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#FE5D26] hover:text-[#532416] transition-colors"
        >
          <span>Enquire</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

