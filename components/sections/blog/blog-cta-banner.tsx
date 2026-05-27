import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  headline: string;
  body: string;
  href: string;
  cta: string;
  variant?: "mid" | "bottom";
};

export function BlogCTABanner({
  headline,
  body,
  href,
  cta,
  variant = "mid",
}: Props) {
  return (
    <div
      className={`my-10 overflow-hidden rounded-2xl border border-red-500/20 ${
        variant === "bottom"
          ? "bg-gradient-to-br from-red-950/40 via-card/80 to-card/60"
          : "bg-red-500/5"
      } p-8`}
    >
      {variant === "bottom" && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, #F90404 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative">
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-red-400">
          TensaiForge
        </p>
        <h3 className="mb-3 font-display text-xl font-bold tracking-tight lg:text-2xl">
          {headline}
        </h3>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
        <Link
          href={href}
          className="btn-primary inline-flex items-center gap-2"
        >
          {cta}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
