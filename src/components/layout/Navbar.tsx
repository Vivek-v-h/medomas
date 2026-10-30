"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isHomePage = pathname === "/";
  const isDarkNav = isHomePage && !scrolled;

  const headerClass = scrolled
    ? "site-navbar site-navbar-scrolled"
    : isHomePage
    ? "site-navbar site-navbar-transparent"
    : "site-navbar site-navbar-light";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={headerClass}
      >
        <div
          className={`navbar-inner ${
            isHomePage && !scrolled ? "navbar-inner-home-top" : ""
          }`}
        >

          {/* EMPHASIZED INDEPENDENT LOGO */}
          <Link
            href="/"
            className={`navbar-logo group transition-all duration-300 ${
              isHomePage && !scrolled ? "py-2" : ""
            }`}
            aria-label="Medomas Healthcare homepage"
          >
            <Image
              src={
                isDarkNav
                  ? "/logo/medomas-logo-light.png"
                  : "/logo/medomas-logo-transparent.png"
              }
              alt="Medomas Healthcare Pvt. Ltd."
              width={160}
              height={144}
              priority
              className={
                isHomePage && !scrolled
                  ? "navbar-logo-image-home transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                  : "navbar-logo-image transition-transform duration-300 group-hover:scale-[1.03]"
              }
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="navbar-links" aria-label="Main navigation">
            {mainNavLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`navbar-link font-medium ${
                    active ? "navbar-link-active !text-[#FE5D26]" : ""
                  } ${
                    isDarkNav
                      ? "!text-white hover:!text-[#FE5D26]"
                      : "!text-[#532416] hover:!text-[#FE5D26]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CONTACT CTA */}
          <Link
            href="/contact"
            className="navbar-cta group relative overflow-hidden hidden sm:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Get in touch</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform ease-out"
              aria-hidden="true"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`navbar-menu-button ${
              isDarkNav
                ? "!bg-white/20 !text-white hover:!bg-white/30"
                : "!bg-[#FFF0E9] !text-[#532416] hover:!bg-[#FFE3D4]"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </motion.header>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              id="mobile-navigation"
              className="mobile-menu !bg-[#FFFAF7] !shadow-[0_25px_80px_rgba(36,29,26,0.25)] border-0"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-menu-header">
                <span className="flex items-center gap-1.5 font-bold tracking-widest text-[#FE5D26]">
                  <Sparkles size={14} />
                  EXPLORE MEDOMAS
                </span>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                  className="hover:scale-105 active:scale-95 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-menu-links">
                {mainNavLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`mobile-menu-link ${
                        isActive(link.href) ? "mobile-menu-link-active" : ""
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mobile-menu-cta group"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <p className="mobile-menu-footer">
                ADVANCING HEALTHCARE THROUGH QUALITY, SCIENCE &amp; INNOVATION.
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
