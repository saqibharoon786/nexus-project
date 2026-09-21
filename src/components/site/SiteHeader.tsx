import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { ServicesMegaMenu } from "@/components/site/ServicesMegaMenu";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
  ctaHref?: string;
};

export function SiteHeader({ variant = "solid", ctaHref = "/#contact" }: SiteHeaderProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={
        isOverlay
          ? "absolute inset-x-0 top-5 z-30 mx-auto flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-xl border border-border bg-card/80 px-3 py-2.5 shadow-2xl backdrop-blur-md sm:top-8 sm:px-5"
          : "sticky top-5 z-40 mx-auto mt-5 flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-xl border border-border bg-card/90 px-3 py-2.5 shadow-2xl backdrop-blur-md sm:top-8 sm:mt-8 sm:px-5"
      }
    >
      <Link to="/" className="flex shrink-0 items-center" aria-label="HS Partners home">
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

      <a href={ctaHref} className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-secondary px-4 text-xs font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
        Book a Call <ArrowRight className="size-3.5" aria-hidden="true" />
      </a>
    </header>
  );
}
