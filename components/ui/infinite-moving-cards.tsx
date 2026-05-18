"use client";

import { useEffect, useRef } from "react";
import type { TechItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SPEED_MAP = {
  slow: "80s",
  normal: "40s",
  fast: "20s",
} as const;

type InfiniteMovingCardsProps = Readonly<{
  items: readonly TechItem[];
  speed?: keyof typeof SPEED_MAP;
  pauseOnHover?: boolean;
}>;

export function InfiniteMovingCards({
  items,
  speed = "normal",
  pauseOnHover = true,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReduced = globalThis.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      containerRef.current.style.setProperty(
        "--animation-play-state",
        "paused",
      );
    }
  }, []);

  const doubled = [...items, ...items];

  return (
    <div
      ref={containerRef}
      role="marquee"
      aria-label="Technologies we use"
      className="group relative overflow-hidden"
      style={
        {
          "--animation-duration": SPEED_MAP[speed],
        } as React.CSSProperties
      }
    >
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Row 1 — scrolls left */}
      <div
        className={cn(
          "mb-4 flex gap-4 animate-scroll",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {doubled.map((item, idx) => (
          <div
            key={`r1-${idx}`}
            className="glass flex shrink-0 items-center gap-3 rounded-xl px-5 py-3"
          >
            <span className="rounded-md bg-red-400/10 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-red-400">
              {item.category}
            </span>
            {item.devicon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.devicon}
                alt=""
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="h-[22px] w-[22px] shrink-0 object-contain"
                aria-hidden="true"
              />
            )}
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div
        className={cn(
          "flex gap-4 animate-scroll [animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {doubled.map((item, idx) => (
          <div
            key={`r2-${idx}`}
            className="glass flex shrink-0 items-center gap-3 rounded-xl px-5 py-3"
          >
            <span className="rounded-md bg-red-400/10 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-red-400">
              {item.category}
            </span>
            {item.devicon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.devicon}
                alt=""
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="h-[22px] w-[22px] shrink-0 object-contain"
                aria-hidden="true"
              />
            )}
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
