import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { homeServiceDetails } from "@/content/home-services";

export function HomeServiceDetails() {
  return (
    <section id="expertise" className="relative z-30 bg-background" aria-label="What each service includes">
      <div className="border-b border-border px-5 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Our services, in detail</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            What you actually <span className="text-electric">get with each service.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Every offering below lists the work included. Open the full page when you want process, pricing, and FAQs.
          </p>
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Jump to a service">
            {homeServiceDetails.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="border border-border bg-card px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {service.number} · {service.navLabel}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {homeServiceDetails.map((service, index) => {
        const reverse = index % 2 === 1;
        return (
          <article
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 border-b border-border px-5 py-16 sm:py-24 ${index % 2 === 0 ? "bg-card" : "bg-about"}`}
          >
            <div className={`mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[28rem]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {service.number}
                </span>
              </div>

              <div>
                <p className="text-xs font-bold uppercase text-primary">{service.kicker}</p>
                <h3 className="mt-4 font-display text-3xl font-black leading-[1.05] text-foreground sm:text-5xl">
                  {service.title} <span className="text-electric">{service.titleAccent}</span>
                </h3>
                <p className="mt-5 text-base leading-8 text-muted-foreground">{service.summary}</p>
                <h4 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-foreground">{service.includedHeading}</h4>
                <ul className="mt-4 space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {service.cta} <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
