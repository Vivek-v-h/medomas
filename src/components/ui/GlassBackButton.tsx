"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GlassBackButton() {
  const pathname = usePathname();
  const router = useRouter();

  // Never render on the homepage
  if (pathname === "/") {
    return null;
  }

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key="glass-back-button"
        type="button"
        onClick={handleBack}
        className="glass-back-button group"
        aria-label="Go back to previous page"
        initial={{ opacity: 0, x: -28, scale: 0.92 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -28, scale: 0.92 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 26,
          mass: 0.8,
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Specular sheen reflection */}
        <span className="glass-back-sheen" aria-hidden="true" />

        {/* Inner Frosted Glass Lens Disc */}
        <span className="glass-back-icon-disc" aria-hidden="true">
          <ArrowLeft
            strokeWidth={2.4}
            className="w-3.5 h-3.5 text-[#FE5D26] transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
          />
        </span>

        {/* Label */}
        <span className="glass-back-text">
          Back
        </span>
      </motion.button>
    </AnimatePresence>
  );
}
