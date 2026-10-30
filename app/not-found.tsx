import Link from "next/link";
import { ArrowLeft, Home, Pill } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFAF7] flex items-center justify-center px-6 py-32">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FFF0E9] text-[#FE5D26] flex items-center justify-center mx-auto mb-6">
          <Pill className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-[#FE5D26] uppercase">
          404 ERROR
        </span>

        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#532416] font-[var(--font-manrope)]">
          Page Not Found
        </h1>

        <p className="mt-4 text-xs sm:text-sm text-[#766A65] leading-relaxed">
          The requested pharmaceutical page or resource is not available or may have moved. Please check the URL or navigate back to our catalogue.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FE5D26] hover:bg-[#E94B19] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#F0E8E3] hover:border-[#FE5D26] text-[#532416] text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Product Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

