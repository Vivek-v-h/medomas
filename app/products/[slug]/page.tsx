import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  Package,
  Thermometer,
  FileText,
  AlertCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { products } from "@/data/products";
import { companyInfo } from "@/data/company";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${product.category}`,
    description: `${product.name} (${product.composition}) - ${product.tagline || product.genericName}. Medomas Healthcare Pvt. Ltd.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#FFFAF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#766A65] mb-8">
          <Link href="/" className="hover:text-[#FE5D26]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#FE5D26]">Products</Link>
          <span>/</span>
          <span className="text-[#532416] font-bold">{product.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#532416] hover:text-[#FE5D26] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Product Image Presentation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#F0E8E3] p-8 shadow-sm relative overflow-hidden">
              <div className="relative aspect-square w-full rounded-2xl bg-[#FFF0E9]/30 border border-[#F0E8E3] overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-6"
                />
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-[#766A65]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#FE5D26]" />
                  GMP Verified Partner Supply
                </span>
                <span className="font-bold text-[#532416]">
                  {product.dosageForm}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Profile & Specifications (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0E9] text-[#FE5D26]">
                  {product.category}
                </span>
                {product.prescriptionRequired ? (
                  <span className="px-2.5 py-0.5 rounded text-xs font-serif font-bold bg-[#DF0000] text-white">
                    Schedule H / Prescription Required
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#0284C7] text-white">
                    General Healthcare (OTC)
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
                {product.name}
              </h1>

              <div className="mt-2 text-sm sm:text-base font-semibold text-[#FE5D26]">
                {product.genericName}
              </div>

              {product.tagline && (
                <p className="mt-2 text-sm text-[#766A65] italic">
                  {product.tagline}
                </p>
              )}
            </div>

            {/* Verified Composition Card */}
            <div className="rounded-2xl bg-white border border-[#F0E8E3] p-6 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#766A65] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#FE5D26]" />
                <span>Verified Active Composition</span>
              </div>
              <div className="mt-3 text-base font-bold text-[#532416] leading-relaxed">
                {product.composition}
              </div>
              <p className="mt-2 text-xs text-[#766A65]">
                Exact formulation ratio verified against client specification and regulatory approved monograph.
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#F0E8E3]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#766A65]">
                  <Package className="w-4 h-4 text-[#FE5D26]" />
                  <span>PACKAGING SPECIFICATION</span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-[#241D1A]">
                  {product.packSize}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E8E3]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#766A65]">
                  <Thermometer className="w-4 h-4 text-[#FE5D26]" />
                  <span>STORAGE CONDITIONS</span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-[#241D1A]">
                  {product.storageCondition}
                </div>
              </div>
            </div>

            {/* Therapeutic Classification */}
            <div className="p-4 rounded-xl bg-white border border-[#F0E8E3]">
              <div className="text-xs font-bold text-[#766A65] uppercase">
                Therapeutic Classification
              </div>
              <div className="mt-1 text-sm font-semibold text-[#532416]">
                {product.therapeuticClass}
              </div>
            </div>

            {/* Regulatory Disclaimer Warning */}
            <div className="p-4 rounded-xl bg-[#FFF0E9] border border-[#F0E8E3] flex items-start gap-3 text-xs text-[#532416] leading-relaxed">
              <AlertCircle className="w-4 h-4 text-[#FE5D26] flex-shrink-0 mt-0.5" />
              <div>
                <strong>Prescription &amp; Regulatory Note:</strong> The information provided is for scientific and business-to-business reference. Formulations are supplied to licensed distributors, hospitals, and pharmacies in compliance with the Drugs and Cosmetics Act.
              </div>
            </div>

            {/* Product Enquiry CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?subject=Product+Enquiry+-+${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/25 transition-all"
              >
                <span>Enquire Institutional Supply</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`tel:${companyInfo.phones[0].replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-[#F0E8E3] text-[#532416] text-sm font-semibold hover:border-[#FE5D26] transition-all"
              >
                <Phone className="w-4 h-4 text-[#FE5D26]" />
                <span>Call Desk: {companyInfo.phones[0]}</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
