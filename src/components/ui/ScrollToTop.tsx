"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white/85 backdrop-blur-xl border border-[#532416]/15 text-[#532416] hover:text-[#FE5D26] shadow-xl flex items-center justify-center transition-colors group cursor-pointer"
          aria-label="Scroll back to top"
        >
          {/* Progress circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
            <circle
              cx="20"
              cy="20"
              r="17"
              className="stroke-[#532416]/10"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="17"
              className="stroke-[#FE5D26] transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={106.8}
              strokeDashoffset={106.8 - (106.8 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

