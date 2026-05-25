"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import type { Testimonial } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ── Star Rating ───────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of ${max} stars`}
      className="flex gap-0.5"
    >
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            "h-4 w-4",
            i < rating ? "text-forge-500" : "text-white/20",
          )}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Testimonial Card ──────────────────────────────────────────

type CardProps = {
  testimonial: Testimonial;
  slideIndex: number;
  totalSlides: number;
  isVisible: boolean;
};

function TestimonialCard({
  testimonial,
  slideIndex,
  totalSlides,
  isVisible,
}: CardProps) {
  return (
    <article
      role="group"
      aria-roledescription="slide"
      aria-label={`Testimonial ${slideIndex + 1} of ${totalSlides} — ${testimonial.author}`}
      aria-hidden={!isVisible || undefined}
      className="forge-card flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-shadow duration-300 hover:border-forge-500/30 hover:shadow-lg hover:shadow-forge-500/10 lg:p-8"
    >
      {/* Author row */}
      <header className="flex items-center gap-4">
        <Image
          src={testimonial.src}
          alt={`Portrait of ${testimonial.author}`}
          width={56}
          height={56}
          className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-forge-500/30 object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {testimonial.title}
            {testimonial.company ? ` · ${testimonial.company}` : ""}
          </p>
        </div>
        <StarRating rating={testimonial.rating} />
      </header>

      {/* Quote */}
      <blockquote className="flex-1 text-base font-normal leading-relaxed text-foreground/85">
        <span
          aria-hidden="true"
          className="mr-0.5 text-xl font-bold leading-none text-forge-500"
        >
          &ldquo;
        </span>
        {testimonial.quote}
        <span
          aria-hidden="true"
          className="ml-0.5 text-xl font-bold leading-none text-forge-500"
        >
          &rdquo;
        </span>
      </blockquote>
    </article>
  );
}

// ── Main Carousel ─────────────────────────────────────────────

type TestimonialsCarouselProps = Readonly<{
  slides: readonly Testimonial[];
  /** Milliseconds between automatic page advances. Pass 0 to disable. */
  autoPlayInterval?: number;
}>;

export function TestimonialsCarousel({
  slides,
  autoPlayInterval = 5000,
}: TestimonialsCarouselProps) {
  // SSR-safe: start with mobile (1), hydrate to correct value on first paint
  const [itemsPerPage, setItemsPerPage] = useState<1 | 2>(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const touchStartX = useRef<number>(0);
  // Stable ref so the auto-play interval never stales
  const goNextRef = useRef<(() => void) | null>(null);

  // ── Derived ────────────────────────────────────────────────

  const totalPages = useMemo(
    () => Math.ceil(slides.length / itemsPerPage),
    [slides.length, itemsPerPage],
  );

  // ── Media-query listeners ──────────────────────────────────

  // Responsive items-per-page: 2 on md+, 1 on mobile
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onchange = (e: MediaQueryListEvent | MediaQueryList) => {
      setItemsPerPage(e.matches ? 2 : 1);
    };
    onchange(mq); // run once immediately on mount
    mq.addEventListener("change", onchange);
    return () => mq.removeEventListener("change", onchange);
  }, []);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onchange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", onchange);
    return () => mq.removeEventListener("change", onchange);
  }, []);

  // Clamp currentPage when totalPages shrinks (e.g. viewport resize → fewer pages)
  useEffect(() => {
    setCurrentPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  // ── Navigation ─────────────────────────────────────────────

  const goTo = useCallback(
    (page: number) => {
      // Wrap around
      setCurrentPage(((page % totalPages) + totalPages) % totalPages);
    },
    [totalPages],
  );

  const goPrev = useCallback(() => goTo(currentPage - 1), [currentPage, goTo]);
  const goNext = useCallback(() => goTo(currentPage + 1), [currentPage, goTo]);

  // Keep ref current so the interval always calls the latest goNext
  useEffect(() => {
    goNextRef.current = goNext;
  }, [goNext]);

  // ── Auto-play ──────────────────────────────────────────────

  useEffect(() => {
    if (isPaused || prefersReducedMotion || autoPlayInterval <= 0) return;
    const id = setInterval(() => goNextRef.current?.(), autoPlayInterval);
    return () => clearInterval(id);
  }, [isPaused, prefersReducedMotion, autoPlayInterval]);

  // ── Keyboard ───────────────────────────────────────────────

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext],
  );

  // ── Touch / Swipe ──────────────────────────────────────────

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? 0;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
      if (Math.abs(delta) > 40) {
        delta > 0 ? goNext() : goPrev();
      }
    },
    [goNext, goPrev],
  );

  // ── Track style (GPU-composited, no layout thrash) ─────────
  //
  // Formula:
  //   track width  = totalPages × 100%  (of the overflow-hidden container)
  //   card width   = track / (totalPages × itemsPerPage) = 100% / (totalPages × itemsPerPage)
  //   translateX   = −(currentPage / totalPages) × 100%  (of track = moves exactly one page)

  const trackStyle = useMemo<React.CSSProperties>(
    () => ({
      display: "flex",
      width: `${totalPages * 100}%`,
      transform: `translateX(${-(currentPage / totalPages) * 100}%)`,
      willChange: "transform",
      transition: prefersReducedMotion
        ? "none"
        : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
    }),
    [totalPages, currentPage, prefersReducedMotion],
  );

  // Each card slot fills an equal share of the track
  const cardSlotWidth = `${100 / (totalPages * itemsPerPage)}%`;

  // ── Render ─────────────────────────────────────────────────

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        // Only resume if focus leaves the entire carousel region
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={handleKeyDown}
      className="w-full"
    >
      {/* ── Controls — appear ABOVE the cards ── */}
      <div className="mb-6 flex items-center justify-end gap-3">
        {/* Page counter doubles as the live region for AT announcements */}
        <span
          aria-live="polite"
          aria-atomic="true"
          className="select-none font-mono text-xs tabular-nums text-muted-foreground"
        >
          {currentPage + 1}&nbsp;/&nbsp;{totalPages}
        </span>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-colors duration-200 hover:border-forge-500/50 hover:bg-forge-500/10 hover:text-forge-400 focus:outline-none focus:ring-1 focus:ring-forge-400"
        >
          {/* Chevron left */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-colors duration-200 hover:border-forge-500/50 hover:bg-forge-500/10 hover:text-forge-400 focus:outline-none focus:ring-1 focus:ring-forge-400"
        >
          {/* Chevron right */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Viewport — clips the scrolling track ── */}
      <div className="overflow-hidden">
        {/* GPU-composited sliding track */}
        <div
          style={trackStyle}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((testimonial, i) => {
            const page = Math.floor(i / itemsPerPage);
            const isVisible = page === currentPage;
            return (
              <div
                key={testimonial.id}
                style={{ width: cardSlotWidth, flexShrink: 0 }}
                className="px-3"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  slideIndex={i}
                  totalSlides={slides.length}
                  isVisible={isVisible}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <nav aria-label="Testimonial pages" className="mt-8">
        <ol className="flex list-none items-center justify-center gap-2 p-0">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1} of ${totalPages}`}
                aria-current={i === currentPage ? "true" : undefined}
                className={cn(
                  "rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-forge-400",
                  i === currentPage
                    ? "h-2.5 w-8 bg-forge-500"
                    : "h-2.5 w-2.5 bg-white/25 hover:bg-white/50",
                )}
              />
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
