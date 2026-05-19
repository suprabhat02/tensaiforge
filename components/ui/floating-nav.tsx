"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { TensaiForgeLogo } from "./tensaiforge-logo";

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Use refs for scroll tracking to avoid re-renders on every scroll tick
  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollState = useCallback(() => {
    const currentY = window.scrollY;
    const isScrolled = currentY > 20;

    setScrolled(isScrolled);

    prevScrollY.current = currentY;
    ticking.current = false;
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateScrollState);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateScrollState]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed inset-x-0 top-3 z-50 mx-auto max-w-5xl px-4">
        <nav
          aria-label="Main navigation"
          className={cn(
            "flex items-center justify-between rounded-2xl border px-5 py-2.5 transition-[border-color] duration-150",
            scrolled
              ? "border-white/[0.12] bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl backdrop-saturate-150"
              : "border-white/[0.08] bg-white/[0.03] shadow-[0_2px_16px_rgba(0,0,0,0.3)] backdrop-blur-xl backdrop-saturate-125",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-red-400 rounded-lg"
          >
            <TensaiForgeLogo className="h-7 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-1 focus:ring-red-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="btn-primary hidden text-xs md:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden focus:outline-none focus:ring-1 focus:ring-red-400"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[99] flex flex-col bg-black/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <TensaiForgeLogo className="h-7 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-1 focus:ring-red-400"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.div
              className="flex flex-1 flex-col items-center justify-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.href} variants={FADE_UP}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-display font-bold text-white transition-colors hover:text-red-400"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={FADE_UP} className="mt-4">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary text-base"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
