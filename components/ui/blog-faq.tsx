"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { BlogFAQItem } from "@/lib/blog-posts";

type Props = {
  items: readonly BlogFAQItem[];
};

export function BlogFAQ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm transition-colors duration-200 hover:border-white/20"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-red-400"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-display text-base font-semibold leading-snug">
                {item.question}
              </span>
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${i}`}
                className="border-t border-white/10 px-5 py-4"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
