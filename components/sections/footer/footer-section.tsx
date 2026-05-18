import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { TensaiForgeLogo } from "@/components/ui/tensaiforge-logo";

export function FooterSection() {
  return (
    <footer
      role="contentinfo"
      className="section-x relative border-t border-border/50 pb-8 pt-16"
    >
      {/* Gradient top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

      <div className="mx-auto max-w-screen-xl">
        {/* Brand + contact grid */}
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="inline-flex items-center gap-2">
              <TensaiForgeLogo className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Engineering intelligent systems for companies that refuse to be
              ordinary.
            </p>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail size={15} className="shrink-0 text-red-400" />
                  {SITE.email}
                </a>
              </li>
              {SITE.phone.map((num) => (
                <li key={num}>
                  <a
                    href={`tel:${num.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone size={15} className="shrink-0 text-red-400" />
                    {num}
                  </a>
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
