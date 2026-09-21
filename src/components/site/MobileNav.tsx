import { ArrowRight, ChevronDown, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { BrandLogo } from "@/components/site/BrandLogo";
import { serviceGroups } from "@/content/nav-services";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  ctaHref: string;
};

export function MobileNav({ open, onClose, ctaHref }: MobileNavProps) {
  const { pathname } = useLocation();
  const [servicesOpen, setServicesOpen] = useState(true);
  const firstPath = useRef(true);

  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div id="mobile-navigation" className="fixed inset-0 z-[120] md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button type="button" className="absolute inset-0 bg-background/70 backdrop-blur-sm" aria-label="Close menu" onClick={onClose} />

      <div className="mobile-drawer absolute inset-y-0 right-0 flex w-full max-w-[22.5rem] flex-col border-l border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <Link to="/" onClick={onClose} aria-label="HS Partners home">
            <BrandLogo size="nav" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-5" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {links.slice(0, 1).map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="flex min-h-12 items-center rounded-xl px-3 font-display text-base font-bold text-foreground transition-colors hover:bg-accent/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((value) => !value)}
                className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 font-display text-base font-bold text-foreground transition-colors hover:bg-accent/60"
              >
                Services
                <ChevronDown className={`size-4 text-primary transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="mb-2 mt-1 space-y-4 rounded-xl border border-border bg-background/80 px-3 py-4">
                  {serviceGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">{group.label}</p>
                      <ul className="flex flex-col">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <Link
                                to={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 rounded-lg px-1 py-2.5 transition-colors hover:bg-accent/60"
                              >
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-primary">
                                  <Icon className="size-4" strokeWidth={1.6} aria-hidden="true" />
                                </span>
                                <span className="text-sm font-semibold text-foreground">{item.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {links.slice(1).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex min-h-12 items-center rounded-xl px-3 font-display text-base font-bold text-foreground transition-colors hover:bg-accent/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
          <a
            href={ctaHref}
            onClick={onClose}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground"
          >
            Book a Call <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="tel:+14316683854"
            className="mt-3 flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" /> +1 431 668 3854
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
