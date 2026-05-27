import Link from "next/link";
import { Mail, Phone } from "@/lib/animated-icons";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { TensaiForgeLogo } from "@/components/ui/tensaiforge-logo";

const BLOG_FOOTER = BLOG_POSTS.map((p) => ({
  href: `/blog/${p.slug}/`,
  // Short label: strip leading "How Much Does" / year suffixes for brevity
  label: p.relatedServiceTitle,
}));

export function FooterSection() {
  return (
    <footer
      role="contentinfo"
      className="section-x relative border-t border-border/50 pb-8 pt-16"
    >
      {/* Gradient top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

      <div className="mx-auto max-w-screen-xl">
        {/* Main grid */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <TensaiForgeLogo className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Engineering intelligent systems for companies that refuse to be
              ordinary.
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail size={14} className="shrink-0 text-red-400" />
                  {SITE.email}
                </a>
              </li>
              {SITE.phone.map((num) => (
                <li key={num}>
                  <a
                    href={`tel:${num.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone size={14} className="shrink-0 text-red-400" />
                    {num}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <ul className="space-y-2.5">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Blog
            </p>
            <ul className="space-y-2.5">
              {BLOG_FOOTER.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-1 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
                >
                  All posts →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Work", href: "/#projects" },
                { label: "Process", href: "/#process" },
                { label: "Why Us", href: "/#why-us" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Get a Quote", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs">Built with precision. Engineered for scale.</p>
        </div>
      </div>
    </footer>
  );
}
