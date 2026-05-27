"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "@/lib/animated-icons";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { TensaiForgeLogo } from "./tensaiforge-logo";

// Service items for the dropdown
const SERVICE_NAV = SERVICE_PAGES.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}/`,
}));

// Blog items for the dropdown
const BLOG_NAV = BLOG_POSTS.map((p) => ({
  label: p.relatedServiceTitle,
  href: `/blog/${p.slug}/`,
}));

export function FloatingNav() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const isServicePage = pathname.startsWith("/services/");
  const isBlogPage = pathname.startsWith("/blog");

  // Extract current service slug for active detection
  const currentServiceSlug = isServicePage
    ? pathname.replace("/services/", "").replace(/\/$/, "")
    : null;

  const currentBlogSlug = isBlogPage
    ? pathname.replace("/blog/", "").replace(/\/$/, "")
    : null;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const blogTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLDivElement>(null);
  const blogButtonRef = useRef<HTMLDivElement>(null);
  const [dropdownAlign, setDropdownAlign] = useState<
    "center" | "left" | "right"
  >("center");
  const [blogDropdownAlign, setBlogDropdownAlign] = useState<
    "center" | "left" | "right"
  >("center");

  // Always produce absolute hash paths (e.g. "/#contact") so Next.js Link
  // never appends a hash to an already-hashed URL.
  const resolveHref = (href: string) =>
    href.startsWith("#") ? `/${href}` : href;

  // ── Scroll tracking ─────────────────────────────────────────
  const ticking = useRef(false);
  const intersectionRatiosRef = useRef<Record<string, number>>({});

  const updateScrollState = useCallback(() => {
    setScrolled(globalThis.scrollY > 20);
    ticking.current = false;
  }, []);

  useEffect(() => {
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateScrollState);
      }
    }
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, [updateScrollState]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Smart section detection via IntersectionObserver ──────────
  useEffect(() => {
    // On homepage, observe all sections matching NAV_ITEMS
    // On service pages, observe service page sections + contact
    const sectionIds = isHome
      ? NAV_ITEMS.map((item) => item.href.replace("#", "")).filter(Boolean)
      : [
          "service-hero",
          "deliverables",
          "features",
          "tech-stack",
          "faq",
          "contact",
        ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    // Sync with URL hash on deep links
    if (isHome && globalThis.location.hash) {
      const hash = globalThis.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    }

    const updateActiveSection = () => {
      const candidate = sections
        .map((section) => {
          const id = section.id;
          const ratio = intersectionRatiosRef.current[id] ?? 0;
          const rect = section.getBoundingClientRect();
          return { id, ratio, top: rect.top };
        })
        .sort((a, b) => {
          if (b.ratio !== a.ratio) return b.ratio - a.ratio;
          return Math.abs(a.top) - Math.abs(b.top);
        })[0];

      if (!candidate) return;
      setActiveSection((prev) => (prev === candidate.id ? prev : candidate.id));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          intersectionRatiosRef.current[target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        }
        updateActiveSection();
      },
      {
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      },
    );

    for (const section of sections) {
      intersectionRatiosRef.current[section.id] = 0;
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
      intersectionRatiosRef.current = {};
    };
  }, [isHome]);

  // ── Smart active detection helpers ──────────────────────────
  const isNavActive = (item: { label: string; href: string }) => {
    const sectionId = item.href.replace("#", "");

    if (item.label === "Services") {
      // On service pages: Services is active unless contact section is in view
      if (isServicePage && activeSection !== "contact") return true;
      // On homepage: active when services section is in view
      if (isHome && activeSection === sectionId) return true;
      return false;
    }

    if (item.label === "Contact") {
      // Contact active on ANY page when contact section is in view
      if (activeSection === "contact") return true;
      return false;
    }

    // Standard section items: only on homepage
    if (isHome && activeSection === sectionId) return true;
    return false;
  };

  // Is a specific service dropdown link active?
  const isServiceLinkActive = (href: string) => {
    if (!currentServiceSlug) return false;
    return href.includes(currentServiceSlug);
  };

  // ── Dropdown auto-alignment ──────────────────────────────────
  useEffect(() => {
    if (!servicesOpen || !servicesButtonRef.current) return;

    const rect = servicesButtonRef.current.getBoundingClientRect();
    const viewportWidth = globalThis.innerWidth;
    const dropdownWidth = 280;

    const centerLeft = rect.left + rect.width / 2 - dropdownWidth / 2;
    const centerRight = centerLeft + dropdownWidth;

    if (centerLeft < 16) {
      setDropdownAlign("left");
    } else if (centerRight > viewportWidth - 16) {
      setDropdownAlign("right");
    } else {
      setDropdownAlign("center");
    }
  }, [servicesOpen]);

  // ── Blog dropdown auto-alignment ────────────────────────────
  useEffect(() => {
    if (!blogOpen || !blogButtonRef.current) return;

    const rect = blogButtonRef.current.getBoundingClientRect();
    const viewportWidth = globalThis.innerWidth;
    const dropdownWidth = 260;

    const centerLeft = rect.left + rect.width / 2 - dropdownWidth / 2;
    const centerRight = centerLeft + dropdownWidth;

    if (centerLeft < 16) {
      setBlogDropdownAlign("left");
    } else if (centerRight > viewportWidth - 16) {
      setBlogDropdownAlign("right");
    } else {
      setBlogDropdownAlign("center");
    }
  }, [blogOpen]);

  let dropdownPositionClass = "left-1/2 -translate-x-1/2";
  if (dropdownAlign === "left") dropdownPositionClass = "left-0";
  else if (dropdownAlign === "right") dropdownPositionClass = "right-0";

  let blogDropdownPositionClass = "left-1/2 -translate-x-1/2";
  if (blogDropdownAlign === "left") blogDropdownPositionClass = "left-0";
  else if (blogDropdownAlign === "right") blogDropdownPositionClass = "right-0";

  const isBlogLinkActive = (href: string) => {
    if (!currentBlogSlug) return false;
    return href.includes(currentBlogSlug);
  };

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
            className="flex items-center gap-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
          >
            <TensaiForgeLogo className="h-7 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item);

              // Services item gets a dropdown
              if (item.label === "Services") {
                return (
                  <div
                    key={item.href}
                    ref={servicesButtonRef}
                    className="relative"
                    onMouseEnter={() => {
                      clearTimeout(servicesTimeout.current);
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      servicesTimeout.current = setTimeout(
                        () => setServicesOpen(false),
                        150,
                      );
                    }}
                  >
                    <Link
                      href={resolveHref(item.href)}
                      aria-current={active ? "page" : undefined}
                      aria-expanded={servicesOpen}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-400",
                        active
                          ? "bg-white/[0.12] text-white"
                          : "text-neutral-300 hover:bg-white/[0.06] hover:text-white",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className={cn(
                            "absolute top-full z-50 mt-2 w-[280px] overflow-hidden rounded-xl border border-white/[0.12] bg-neutral-950/90 shadow-2xl backdrop-blur-2xl",
                            dropdownPositionClass,
                          )}
                        >
                          <div className="p-2">
                            {SERVICE_NAV.map((service) => {
                              const serviceActive = isServiceLinkActive(
                                service.href,
                              );
                              return (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className={cn(
                                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                    serviceActive
                                      ? "bg-red-500/10 font-medium text-red-400"
                                      : "text-neutral-300 hover:bg-white/[0.08] hover:text-white",
                                  )}
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              );
                            })}
                            <div className="my-1 border-t border-white/[0.08]" />
                            <Link
                              href={resolveHref("#services")}
                              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-400/10"
                              onClick={() => setServicesOpen(false)}
                            >
                              View All Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={resolveHref(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-400",
                    active
                      ? "bg-white/[0.12] text-white"
                      : "text-neutral-300 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Blog dropdown */}
            <div
              ref={blogButtonRef}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(blogTimeout.current);
                setBlogOpen(true);
              }}
              onMouseLeave={() => {
                blogTimeout.current = setTimeout(() => setBlogOpen(false), 150);
              }}
            >
              <Link
                href="/blog/"
                aria-current={isBlogPage ? "page" : undefined}
                aria-expanded={blogOpen}
                className={cn(
                  "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-400",
                  isBlogPage
                    ? "bg-white/[0.12] text-white"
                    : "text-neutral-300 hover:bg-white/[0.06] hover:text-white",
                )}
              >
                Blog
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    blogOpen && "rotate-180",
                  )}
                />
              </Link>

              <AnimatePresence>
                {blogOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "absolute top-full z-50 mt-2 w-[260px] overflow-hidden rounded-xl border border-white/[0.12] bg-neutral-950/90 shadow-2xl backdrop-blur-2xl",
                      blogDropdownPositionClass,
                    )}
                  >
                    <div className="p-2">
                      {BLOG_NAV.map((post) => {
                        const postActive = isBlogLinkActive(post.href);
                        return (
                          <Link
                            key={post.href}
                            href={post.href}
                            className={cn(
                              "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                              postActive
                                ? "bg-red-500/10 font-medium text-red-400"
                                : "text-neutral-300 hover:bg-white/[0.08] hover:text-white",
                            )}
                            onClick={() => setBlogOpen(false)}
                          >
                            {post.label}
                          </Link>
                        );
                      })}
                      <div className="my-1 border-t border-white/[0.08]" />
                      <Link
                        href="/blog/"
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-400/10"
                        onClick={() => setBlogOpen(false)}
                      >
                        All Posts
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={resolveHref("#contact")}
              className="btn-primary hidden text-xs md:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-1 focus:ring-red-400 md:hidden"
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
              {NAV_ITEMS.map((item) => {
                const active = isNavActive(item);

                return (
                  <motion.div key={item.href} variants={FADE_UP}>
                    {item.label === "Services" ? (
                      <div className="flex flex-col items-center">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className={cn(
                            "inline-flex items-center gap-2 font-display text-3xl font-bold transition-colors",
                            active
                              ? "text-red-400"
                              : "text-white hover:text-red-400",
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            size={22}
                            className={cn(
                              "transition-transform duration-200",
                              mobileServicesOpen && "rotate-180",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-3 flex flex-col items-center gap-2 overflow-hidden"
                            >
                              {SERVICE_NAV.map((service) => {
                                const serviceActive = isServiceLinkActive(
                                  service.href,
                                );
                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                      "text-lg transition-colors",
                                      serviceActive
                                        ? "font-medium text-red-400"
                                        : "text-neutral-400 hover:text-red-400",
                                    )}
                                  >
                                    {service.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={resolveHref(item.href)}
                        onClick={() => setMobileOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "font-display text-3xl font-bold transition-colors",
                          active
                            ? "text-red-400"
                            : "text-white hover:text-red-400",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              {/* Blog item in mobile menu */}
              <motion.div variants={FADE_UP}>
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                    className={cn(
                      "inline-flex items-center gap-2 font-display text-3xl font-bold transition-colors",
                      isBlogPage
                        ? "text-red-400"
                        : "text-white hover:text-red-400",
                    )}
                  >
                    Blog
                    <ChevronDown
                      size={22}
                      className={cn(
                        "transition-transform duration-200",
                        mobileBlogOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileBlogOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 flex flex-col items-center gap-2 overflow-hidden"
                      >
                        {BLOG_NAV.map((post) => {
                          const postActive = isBlogLinkActive(post.href);
                          return (
                            <Link
                              key={post.href}
                              href={post.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "text-lg transition-colors",
                                postActive
                                  ? "font-medium text-red-400"
                                  : "text-neutral-400 hover:text-red-400",
                              )}
                            >
                              {post.label}
                            </Link>
                          );
                        })}
                        <Link
                          href="/blog/"
                          onClick={() => setMobileOpen(false)}
                          className="mt-1 text-sm font-medium text-red-400 hover:text-red-300"
                        >
                          All Posts →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="mt-4">
                <Link
                  href={resolveHref("#contact")}
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
