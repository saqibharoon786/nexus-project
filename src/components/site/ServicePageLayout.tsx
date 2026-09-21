import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  HeartPulse,
  Layers3,
  Lock,
  Mail,
  MessagesSquare,
  Phone,
  Radio,
  RefreshCcw,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  Target,
  Truck,
  UserRoundCheck,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Seo } from "@/components/site/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const serviceIcons = {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  HeartPulse,
  Layers3,
  Lock,
  MessagesSquare,
  Radio,
  RefreshCcw,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  Target,
  Truck,
  UserRoundCheck,
  UtensilsCrossed,
  Wallet,
} satisfies Record<string, LucideIcon>;

export type ServiceIconName = keyof typeof serviceIcons;

export type ServicePageContent = {
  crumb: string;
  kicker: string;
  formService: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    h1: string;
    h1Accent: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    kicker: string;
    title: string;
    titleAccent: string;
    paragraphs: string[];
  };
  offerings: {
    kicker: string;
    title: string;
    titleAccent: string;
    intro: string;
    items: { title: string; description: string; icon: ServiceIconName }[];
  };
  process: {
    title: string;
    titleAccent: string;
    steps: { number: string; title: string; description: string }[];
  };
  why: {
    title: string;
    titleAccent: string;
    note: string;
    items: { title: string; description: string; icon: ServiceIconName }[];
  };
  results: {
    title: string;
    caption: string;
    note: string;
    averageLabel: string;
    targetLabel: string;
    rows: { metric: string; average: string; target: string }[];
  };
  audiences: {
    kicker: string;
    title: string;
    titleAccent: string;
    intro: string;
    items: string[];
  };
  platforms: {
    kicker: string;
    title: string;
    titleAccent: string;
    intro: string;
    items: string[];
  };
  trust: {
    kicker: string;
    title: string;
    titleAccent: string;
    body: string;
  };
  pricing: {
    title: string;
    titleAccent: string;
    body: string;
    cta: string;
  };
  start: {
    steps: { number: string; title: string; description: string }[];
    closerTitle: string;
    closerCta: string;
  };
  faq: {
    titleAccent: string;
    items: { question: string; answer: string }[];
  };
  related: { label: string; href: string }[];
};

function jsonLd(page: ServicePageContent) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "HS Partners",
        url: "https://hspartners.com",
        telephone: "+1-431-668-3854",
        email: "hello@agenci.com",
      },
      {
        "@type": "Service",
        name: page.seo.title.split("|")[0]?.trim(),
        provider: { "@type": "Organization", name: "HS Partners" },
        description: page.seo.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function ServicePageLayout({ page }: { page: ServicePageContent }) {
  return (
    <main className="relative bg-background">
      <Seo title={page.seo.title} description={page.seo.description} keywords={page.seo.keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page)) }} />
      <SiteHeader ctaHref="#contact" />

      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:pb-28 sm:pt-20" aria-labelledby="service-hero-title">
        <div className="hero-aura pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Services</span>
            <span aria-hidden="true">/</span>
            <span className="text-primary">{page.crumb}</span>
          </p>
          <p className="text-xs font-bold uppercase text-primary">{page.kicker}</p>
          <h1 id="service-hero-title" className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {page.hero.h1} <span className="text-electric">{page.hero.h1Accent}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{page.hero.intro}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
              {page.hero.primaryCta} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary">
              {page.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-20 sm:py-28" aria-labelledby="service-about-title">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-primary">{page.about.kicker}</p>
            <h2 id="service-about-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              {page.about.title} <span className="text-electric">{page.about.titleAccent}</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            {page.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="service-offerings-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">{page.offerings.kicker}</p>
            <h2 id="service-offerings-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              {page.offerings.title} <span className="text-electric">{page.offerings.titleAccent}</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{page.offerings.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-border/50 bg-border md:grid-cols-2 lg:grid-cols-3">
            {page.offerings.items.map((item) => {
              const Icon = serviceIcons[item.icon];
              return (
                <article key={item.title} className="group relative bg-card p-8 transition-colors hover:bg-card/80 sm:p-10">
                  <span className="service-icon-badge static mb-7" aria-hidden="true">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="service-process-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">How we work</p>
            <h2 id="service-process-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              {page.process.title} <span className="text-electric">{page.process.titleAccent}</span>
            </h2>
          </div>
          <ol className="mt-16 grid gap-px border border-border/50 bg-border md:grid-cols-3">
            {page.process.steps.map((step) => (
              <li key={step.number} className="bg-card p-7 sm:p-8">
                <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="service-why-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Why HS Partners</p>
              <h2 id="service-why-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
                {page.why.title} <span className="text-electric">{page.why.titleAccent}</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{page.why.note}</p>
            </div>
            <div className="grid gap-px border border-border/50 bg-border sm:grid-cols-2">
              {page.why.items.map((reason) => {
                const Icon = serviceIcons[reason.icon];
                return (
                  <div key={reason.title} className="bg-card p-7">
                    <Icon className="size-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{page.results.title}</h3>
            <div className="mt-8 overflow-hidden border border-border">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{page.results.caption}</caption>
                <thead className="bg-card text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  <tr>
                    <th className="px-5 py-4">Metric</th>
                    <th className="px-5 py-4">{page.results.averageLabel}</th>
                    <th className="px-5 py-4 text-primary">{page.results.targetLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.results.rows.map((row) => (
                    <tr key={row.metric} className="border-t border-border">
                      <td className="px-5 py-4 font-semibold text-foreground">{row.metric}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.average}</td>
                      <td className="px-5 py-4 font-bold text-foreground">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">{page.results.note}</p>
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-background px-5 py-24 sm:py-32" aria-labelledby="service-audience-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">{page.audiences.kicker}</p>
            <h2 id="service-audience-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              {page.audiences.title} <span className="text-electric">{page.audiences.titleAccent}</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{page.audiences.intro}</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.audiences.items.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-border bg-card px-5 py-4">
                <Stethoscope className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-display text-sm font-bold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="service-platforms-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">{page.platforms.kicker}</p>
          <h2 id="service-platforms-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            {page.platforms.title} <span className="text-electric">{page.platforms.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{page.platforms.intro}</p>
          <div className="mt-12 flex flex-wrap gap-3">
            {page.platforms.items.map((name) => (
              <span key={name} className="border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="service-trust-title">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-primary">{page.trust.kicker}</p>
            <h2 id="service-trust-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              {page.trust.title} <span className="text-electric">{page.trust.titleAccent}</span>
            </h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">{page.trust.body}</p>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="service-pricing-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Clear pricing</p>
          <h2 id="service-pricing-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            {page.pricing.title} <span className="text-electric">{page.pricing.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{page.pricing.body}</p>
          <a href="#contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
            {page.pricing.cta} <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="service-start-title">
        <div className="mx-auto w-full max-w-7xl">
          <h2 id="service-start-title" className="font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            Get Started in <span className="text-electric">3 Simple Steps</span>
          </h2>
          <ol className="mt-14 grid gap-px border border-border/50 bg-border md:grid-cols-3">
            {page.start.steps.map((step) => (
              <li key={step.number} className="bg-card p-8">
                <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                <h3 className="mt-8 font-display text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 border border-border bg-card px-6 py-10 sm:px-10">
            <h3 className="font-display text-3xl font-black text-foreground">{page.start.closerTitle}</h3>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
                {page.start.closerCta} <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="tel:+14316683854" className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
                <Phone className="size-4" aria-hidden="true" /> +1 431 668 3854
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 overflow-hidden bg-card px-5 py-24 sm:py-32" aria-labelledby="service-faq-title">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Frequently asked</p>
            <h2 id="service-faq-title" className="mt-5 font-display text-5xl font-black leading-none text-foreground sm:text-6xl">
              Questions about <span className="text-electric">{page.faq.titleAccent}</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">Need something more specific? Start a conversation and we’ll point you in the right direction.</p>
            <a href="mailto:hello@agenci.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Mail className="size-4" aria-hidden="true" /> hello@agenci.com
            </a>
          </div>
          <div className="border-t border-border">
            {page.faq.items.map((faq, index) => (
              <details key={faq.question} className="group border-b border-border py-1">
                <summary className="flex min-h-24 cursor-pointer list-none items-center gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg font-bold text-foreground sm:text-xl">{faq.question}</span>
                  <ChevronDown className="ml-auto size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-8 pl-10 pr-8 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-background px-5 py-16 sm:py-20" aria-label="Related services">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Related services</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {page.related.map((item) => (
              <Link key={item.href} to={item.href} className="border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm defaultService={page.formService} />
      <SiteFooter />
    </main>
  );
}
