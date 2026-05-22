"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Cloud,
  Brain,
} from "@/lib/animated-icons";
import type { Service } from "@/lib/constants";
import { SPRING_GENTLE } from "@/lib/animations";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  Globe,
  LayoutDashboard,
  Smartphone,
  Cloud,
  Brain,
};

type CardHoverEffectProps = Readonly<{
  items: readonly Service[];
  className?: string;
}>;

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Icon = ICON_MAP[item.icon];
        return (
          <div
            key={item.id}
            role="group"
            className="group relative block h-full p-1"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block rounded-2xl bg-gradient-to-br opacity-100"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                  layoutId="card-hover-bg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={SPRING_GENTLE}
                />
              )}
            </AnimatePresence>

            <div
              className={cn(
                "relative z-10 flex h-full flex-col rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-colors duration-300",
                hoveredIndex === idx && "border-red-400/30 shadow-glow-sm",
              )}
            >
              {/* Icon */}
              {Icon && (
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                    item.gradient,
                  )}
                >
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
              )}

              {/* Title */}
              <h3 className="mb-2 text-lg font-display font-bold text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/50 bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
