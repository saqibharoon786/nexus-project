import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { MobileNav } from "@/components/site/MobileNav";
import { ServicesMegaMenu } from "@/components/site/ServicesMegaMenu";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
  ctaHref?: string;
};

export function SiteHeader({ variant = "solid", ctaHref = "/#contact" }: SiteHeaderProps) {
  const isOverlay = variant === "overlay";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={
          isOverlay
            ? "absolute inset-x-0 top-4 z-30 mx-auto flex w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between rounded-xl border border-border bg-card/80 px-2.5 py-2 shadow-2xl backdrop-blur-md sm:top-8 sm:w-[calc(100%-2rem)] sm:px-5 sm:py-2.5"
            : "sticky top-4 z-40 mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between rounded-xl border border-border bg-card/90 px-2.5 py-2 shadow-2xl backdrop-blur-md sm:top-8 sm:mt-8 sm:w-[calc(100%-2rem)] sm:px-5 sm:py-2.5"
        }
      >
        <Link to="/" className="flex min-w-0 shrink items-center" aria-label="HS Partners home">
          <BrandLogo size="nav" />
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-medium text-muted-foreground md:flex" aria-label="Main navigation">
          <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          <ServicesMegaMenu />
          <a href="/#about" className="transition-colors hover:text-foreground">About</a>
          <a href="/#blog" className="transition-colors hover:text-foreground">Blog</a>
          <a href="/#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
          <a href={ctaHref} className="transition-colors hover:text-foreground">Contact</a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={ctaHref}
            className="hidden h-9 items-center gap-1.5 rounded-lg bg-secondary px-4 text-xs font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Book a Call <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={closeMenu} ctaHref={ctaHref} />
    </>
  );
}
