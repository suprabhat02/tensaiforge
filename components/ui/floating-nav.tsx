"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { FADE_UP, SPRING_GENTLE } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { TensaiForgeLogo } from "./tensaiforge-logo";

export function FloatingNav() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = globalThis.scrollY;

    function onScroll() {
      const currentY = globalThis.scrollY;
      setAtTop(currentY < 20);
      if (currentY > 80) {
        setVisible(currentY < prevScrollY);
      } else {
        setVisible(true);
      }
      prevScrollY = currentY;
    }

    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-50 mx-auto max-w-5xl px-4">
        <motion.header
          animate={{
            y: visible ? 0 : -80,
            opacity: visible ? 1 : 0,
          }}
          transition={SPRING_GENTLE}
        >
          <nav
            aria-label="Main navigation"
            className={cn(
              "flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors duration-300",
              atTop
                ? "border-white/5 bg-background/60 backdrop-blur-md"
                : "border-white/10 bg-background/80 backdrop-blur-xl shadow-glow-sm",
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <TensaiForgeLogo className="h-8 w-auto" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:hidden"
                onClick={() => setMobileOpen(true)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </motion.header>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[99] flex flex-col bg-background/95 backdrop-blur-xl"
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
                <TensaiForgeLogo className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground"
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
                    className="text-3xl font-display font-bold text-foreground transition-colors hover:text-red-400"
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
