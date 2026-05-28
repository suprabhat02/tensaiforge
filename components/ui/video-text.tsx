"use client";

import { useId, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type VideoTextProps = Readonly<{
  /** .webm video source (preferred format for web) */
  src: string;
  /** Fallback .mp4 source for Safari / older browsers */
  fallbackSrc?: string;
  /** Poster image shown before video loads */
  poster?: string;
  /** Primary text rendered with video fill */
  children: string;
  /** Optional second line of text */
  secondLine?: string;
  className?: string;
}>;

export function VideoText({
  src,
  fallbackSrc,
  poster,
  children,
  secondLine,
  className,
}: VideoTextProps) {
  const rawId = useId();
  const maskId = `vtm${rawId.replace(/:/g, "")}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy-load: only play video when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pause video when not in viewport to save GPU/battery
  useEffect(() => {
    const video = videoRef.current;
    const el = sectionRef.current;
    if (!video || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className={cn("relative min-h-[280px] w-full overflow-hidden", className)}
    >
      {/* Animated gradient fallback — visible while video loads or if it fails */}
      <div
        className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-forge-700 via-forge-500 to-orange-600"
        aria-hidden="true"
      />

      {/* Video layer — lazy loaded */}
      {isVisible && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
        >
          <source src={src} type="video/webm" />
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
        </video>
      )}

      {/* SVG overlay: page-colored rect with text cut out → video visible through letters */}
      <svg
        className="absolute inset-0 z-10 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id={maskId}>
            {/* White = overlay visible (background covers video) */}
            <rect width="100%" height="100%" fill="white" />
            {/* Black = overlay hidden (video bleeds through letterforms) */}
            <text
              x="50%"
              y={secondLine ? "40%" : "50%"}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
              style={{
                fontSize: "clamp(56px, 16vw, 220px)",
                fontWeight: 900,
                fontFamily: "var(--font-display), system-ui, sans-serif",
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
              }}
            >
              {children}
            </text>
            {secondLine && (
              <text
                x="50%"
                y="67%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                style={{
                  fontSize: "clamp(22px, 5.5vw, 76px)",
                  fontWeight: 700,
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                }}
              >
                {secondLine}
              </text>
            )}
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          mask={`url(#${maskId})`}
          style={{ fill: "hsl(var(--background))" }}
        />
      </svg>
    </div>
  );
}
