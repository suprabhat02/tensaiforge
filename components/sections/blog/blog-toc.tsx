"use client";

import { useState, useEffect, useRef } from "react";
import type { BlogTOCEntry } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

type Props = {
  entries: readonly BlogTOCEntry[];
};

export function BlogTOC({ entries }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingIds = entries.map((e) => e.id);

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          break;
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    });

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [entries]);

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-sm"
    >
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/80">
        <BookOpen size={15} className="text-red-400" />
        <span>Table of Contents</span>
      </div>
      <ol className="space-y-1.5">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={cn(
                "block rounded-lg px-3 py-1.5 text-sm leading-snug transition-colors duration-150",
                entry.level === 3 && "pl-6",
                activeId === entry.id
                  ? "bg-red-500/10 font-medium text-red-400"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white",
              )}
            >
              {entry.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
