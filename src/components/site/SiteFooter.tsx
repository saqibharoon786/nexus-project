import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="relative z-30 border-t border-border bg-about px-5 pb-8 pt-20" aria-label="Site footer">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-14 border-b border-border pb-16 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="HS Partners home">
              <BrandLogo size="footer" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              Specialized healthcare and business services, delivered by one dependable team.
            </p>
            <a href="mailto:hello@agenci.com" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Mail className="size-4" aria-hidden="true" />hello@agenci.com
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase text-primary">Explore</h2>
            <nav className="mt-6 flex flex-col items-start gap-4 text-sm text-muted-foreground" aria-label="Footer navigation">
              <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
              <a href="/#about" className="transition-colors hover:text-foreground">About us</a>
              <a href="/#expertise" className="transition-colors hover:text-foreground">Our expertise</a>
              <a href="/#contact" className="transition-colors hover:text-foreground">Contact</a>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase text-primary">Services</h2>
            <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground">
              <Link to="/medical-billing-services" className="transition-colors hover:text-foreground">Medical billing</Link>
              <Link to="/patient-screening-services" className="transition-colors hover:text-foreground">Patient screening</Link>
              <Link to="/ultrasound-services" className="transition-colors hover:text-foreground">Ultrasound services</Link>
              <Link to="/x-ray-services" className="transition-colors hover:text-foreground">X-ray services</Link>
              <Link to="/lead-management-services" className="transition-colors hover:text-foreground">Lead management</Link>
              <Link to="/truck-dispatching-services" className="transition-colors hover:text-foreground">Truck dispatching</Link>
              <Link to="/fast-food-solutions" className="transition-colors hover:text-foreground">Fast food solutions</Link>
              <Link to="/appointment-scheduling-services" className="transition-colors hover:text-foreground">Appointments</Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-b border-border py-8 sm:grid-cols-3">
          <a href="tel:+923711513954" className="flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-primary"><span aria-hidden="true">🇵🇰</span> +92 371 1513954</a>
          <a href="tel:+14316683854" className="flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-primary"><span aria-hidden="true">🇨🇦</span> +1 431 668 3854</a>
          <a href="tel:+923055673835" className="flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-primary"><span aria-hidden="true">🇵🇰</span> +92 305 5673835</a>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 HS Partners. All rights reserved.</p>
          <p>One team. Eight specialties.</p>
        </div>
      </div>
    </footer>
  );
}
