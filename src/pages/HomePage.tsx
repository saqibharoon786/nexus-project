import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  ClipboardCheck,
  HeartPulse,
  Layers3,
  Mail,
  MessagesSquare,
  Radio,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandPartners } from "@/components/site/BrandPartners";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { JourneyPath } from "@/components/site/JourneyPath";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { Seo } from "@/components/site/Seo";
import billingImg from "@/assets/service-billing.jpg";
import fastfoodImg from "@/assets/service-fastfood.jpg";
import leadsImg from "@/assets/service-leads.jpg";
import screeningImg from "@/assets/service-screening.jpg";
import xrayImg from "@/assets/service-xray.jpg";
import ultrasoundImg from "@/assets/service-ultrasound.jpg";
import appointmentsImg from "@/assets/service-appointments.jpg";
import truckingImg from "@/assets/service-trucking.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";

type Service = {
  number: string;
  kicker: string;
  title: string;
  accent: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

type TrustMetric = {
  value: number;
  suffix: string;
  label: string;
  tone: string;
};

const trustMetrics: TrustMetric[] = [
  { value: 8, suffix: "", label: "Specialized services", tone: "text-primary" },
  { value: 24, suffix: "/7", label: "Dispatch support", tone: "text-trust-cool" },
  { value: 98, suffix: "%", label: "Clean claim rate", tone: "text-trust-growth" },
  { value: 3, suffix: "×", label: "Faster response", tone: "text-trust-warm" },
];

const services: Service[] = [
  {
    number: "01",
    kicker: "Front desk + billing",
    title: "Medical",
    accent: "Billing",
    description: "Remote front desk and the full billing cycle — calls, EMR, eligibility, claims, posting, and reporting.",
    metric: "98%",
    metricLabel: "clean claim rate",
    icon: CircleDollarSign,
    image: billingImg,
    imageAlt: "Medical billing desk with revenue charts and stethoscope under blue light",
  },
  {
    number: "02",
    kicker: "Better decisions begin here",
    title: "Patient",
    accent: "Screening",
    description: "Organized intake and pre-visit screening that gives care teams the right information sooner.",
    metric: "Safe",
    metricLabel: "structured intake",
    icon: ClipboardCheck,
    image: screeningImg,
    imageAlt: "Nurse screening a patient with a tablet in a blue-lit clinic",
  },
  {
    number: "03",
    kicker: "Care in every detail",
    title: "Ultrasound",
    accent: "Services",
    description: "Seamless ultrasound scheduling and support designed around patients, clinicians, and timely results.",
    metric: "Clear",
    metricLabel: "patient guidance",
    icon: HeartPulse,
    image: ultrasoundImg,
    imageAlt: "Ultrasound machine with glowing sonogram monitor in a dark room",
  },
  {
    number: "04",
    kicker: "Clarity you can trust",
    title: "X-Ray",
    accent: "Services",
    description: "Efficient diagnostic imaging coordination with dependable scheduling and patient communication.",
    metric: "Fast",
    metricLabel: "diagnostic workflow",
    icon: Radio,
    image: xrayImg,
    imageAlt: "X-ray imaging room with glowing chest scan on a lightboard",
  },
  {
    number: "05",
    kicker: "Built for busy counters",
    title: "Fast Food",
    accent: "Solutions",
    description: "Smarter ordering and customer workflows that keep every rush moving without friction.",
    metric: "24/7",
    metricLabel: "order support",
    icon: UtensilsCrossed,
    image: fastfoodImg,
    imageAlt: "Gourmet burger and fries on a counter under cinematic spotlight",
  },
  {
    number: "06",
    kicker: "Every inquiry, handled",
    title: "Lead",
    accent: "Management",
    description: "Capture, qualify, and nurture every prospect with focused follow-ups that turn interest into action.",
    metric: "3×",
    metricLabel: "faster response",
    icon: Target,
    image: leadsImg,
    imageAlt: "Glowing lead funnel flowing into a target over a workstation",
  },
  {
    number: "07",
    kicker: "Every mile, coordinated",
    title: "Truck",
    accent: "Dispatching",
    description: "Reliable load coordination, route support, and driver communication that keeps trucks moving and deliveries on schedule.",
    metric: "24/7",
    metricLabel: "dispatch support",
    icon: Truck,
    image: truckingImg,
    imageAlt: "Truck dispatcher monitoring routes and fleet operations in a cinematic control room",
  },
  {
    number: "08",
    kicker: "Less waiting. More care.",
    title: "Doctor–Patient",
    accent: "Appointments",
    description: "Simple booking, helpful reminders, and dependable coordination from first contact to consultation.",
    metric: "Easy",
    metricLabel: "booking experience",
    icon: CalendarCheck,
    image: appointmentsImg,
    imageAlt: "Doctor shaking hands with a patient across a desk at night",
  },
];

const expertiseServices: Array<Pick<Service, "title" | "description" | "icon"> & { href?: string }> = [
  {
    title: "Medical Billing",
    description: "Remote front desk plus the full billing cycle — calls, EMR, scheduling, eligibility, claims, and reporting.",
    icon: CircleDollarSign,
    href: "/medical-billing-services",
  },
  {
    title: "Patient Screening",
    description: "Organized intake and pre-visit screening that gives care teams the right information sooner.",
    icon: ClipboardCheck,
    href: "/patient-screening-services",
  },
  {
    title: "Ultrasound Services",
    description: "Seamless ultrasound scheduling and support designed around patients, clinicians, and timely results.",
    icon: HeartPulse,
    href: "/ultrasound-services",
  },
  {
    title: "X-Ray Services",
    description: "Efficient diagnostic imaging coordination with dependable scheduling and patient communication.",
    icon: Radio,
    href: "/x-ray-services",
  },
  {
    title: "Fast Food Solutions",
    description: "Smarter ordering and customer workflows that keep every rush moving without friction.",
    icon: UtensilsCrossed,
    href: "/fast-food-solutions",
  },
  {
    title: "Lead Management",
    description: "Capture, qualify, and nurture every prospect with focused follow-ups that turn interest into action.",
    icon: Target,
    href: "/lead-management-services",
  },
  {
    title: "Truck Dispatching",
    description: "Reliable load coordination, route support, and driver communication that keeps trucks moving.",
    icon: Truck,
    href: "/truck-dispatching-services",
  },
  {
    title: "Appointments",
    description: "Simple booking, helpful reminders, and dependable coordination from first contact to consultation.",
    icon: CalendarCheck,
    href: "/appointment-scheduling-services",
  },
];

const advantages = [
  {
    title: "Specialist teams",
    description: "Focused professionals who understand the details, pace, and standards of every service we deliver.",
    icon: Layers3,
  },
  {
    title: "Clear communication",
    description: "Direct updates, dependable follow-through, and one team that stays aligned with your priorities.",
    icon: MessagesSquare,
  },
  {
    title: "Reliable support",
    description: "Consistent coverage and practical help designed to keep your daily operations moving.",
    icon: Clock3,
  },
  {
    title: "Quality at every step",
    description: "Structured workflows and careful checks help maintain accuracy from first contact to completion.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  { number: "01", title: "Discover", description: "We learn your goals, current workflow, and the gaps slowing your team down.", icon: Search },
  { number: "02", title: "Design", description: "We shape a focused service plan around your priorities, volume, and standards.", icon: Settings2 },
  { number: "03", title: "Launch", description: "Our specialists integrate into the workflow with a clear and controlled handover.", icon: Rocket },
  { number: "04", title: "Improve", description: "We stay close, review performance, and refine the process as your needs evolve.", icon: Sparkles },
];

const partnerPriorities = [
  "Fewer operational bottlenecks",
  "Faster, clearer communication",
  "Specialist support without added complexity",
  "A service model that adapts as you grow",
];

const faqs = [
  {
    question: "Can we start with one service?",
    answer: "Yes. You can begin with the service that matters most today and add more support as your needs develop.",
  },
  {
    question: "How is the service tailored to our workflow?",
    answer: "We first understand your current process, priorities, volume, and communication preferences, then shape the delivery plan around them.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Timing depends on the service and setup required. After the first conversation, we provide a clear onboarding path and realistic start date.",
  },
  {
    question: "Will we have a consistent point of contact?",
    answer: "Yes. Clear ownership and dependable communication are central to how we work, so your team always knows where to go for updates and support.",
  },
];

function AnimatedCounter({ value, suffix }: Pick<TrustMetric, "value" | "suffix">) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(value);
          return;
        }

        const startedAt = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) animationFrame = requestAnimationFrame(tick);
        };
        animationFrame = requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <span ref={counterRef}>{displayValue}{suffix}</span>;
}

export function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const nextIndex = Number((visible.target as HTMLElement).dataset["serviceIndex"]);
          if (Number.isFinite(nextIndex)) setActiveIndex(nextIndex);
        }
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    triggerRefs.current.forEach((trigger) => {
      if (trigger) observer.observe(trigger);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-background" id="home">
      <Seo
        title="HS Partners — Business & Healthcare Services"
        description="Medical billing, patient screening, diagnostic imaging, appointments, lead management, and fast food solutions from HS Partners."
      />
      <section className="relative" id="services" aria-label="Our services">
        <div className="sticky top-0 h-screen overflow-hidden hero-aura">
          <div className="top-beam absolute inset-x-0 top-0 h-14 opacity-80" aria-hidden="true" />
          <SiteHeader variant="overlay" ctaHref="#contact" />

          <div className="absolute inset-0" aria-live="polite">
            {services.map((service, index) => {
              const Icon = service.icon;
              const position = index < activeIndex ? "service-before" : index === activeIndex ? "service-active" : "service-after";

              return (
                <article key={service.title} className={`service-scene ${position}`} aria-hidden={index !== activeIndex}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary/25 mix-blend-soft-light" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/15" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" aria-hidden="true" />

                  <div className="relative z-10 mx-auto w-full max-w-6xl">
                    <div className="max-w-2xl text-center sm:text-left">
                      <p className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary sm:justify-start sm:gap-3 sm:tracking-[0.3em]">
                        <span className="service-icon-badge static" aria-hidden="true">
                          <Icon className="size-5" strokeWidth={1.6} />
                        </span>
                        <span className="text-muted-foreground">{service.number}</span>
                        <span className="h-px w-6 bg-primary/50 sm:w-8" aria-hidden="true" />
                        {service.kicker}
                      </p>
                      <h2 className="font-display text-[2.35rem] font-bold leading-[0.98] tracking-normal text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">
                        {service.title}
                        <span className="text-electric block">{service.accent}</span>
                      </h2>
                      <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-foreground/80 drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)] sm:mx-0 sm:text-base sm:leading-7">
                        {service.description}
                      </p>
                      <div className="mt-7 flex items-center justify-center gap-4 sm:justify-start">
                        <div className="font-display text-xl font-bold text-foreground">{service.metric}</div>
                        <span className="h-8 w-px bg-foreground/25" />
                        <div className="text-[10px] uppercase text-foreground/70">{service.metricLabel}</div>
                      </div>
                      <div className="mt-8 flex w-full justify-center sm:w-auto sm:justify-start">
                        <a href="#contact" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto">
                          Book a call <ArrowRight className="size-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2" aria-hidden="true">
                    {services.map((s, dotIndex) => (
                      <span
                        key={s.number}
                        className={`h-1 rounded-full transition-all duration-500 ${dotIndex === activeIndex ? "w-8 bg-primary" : "w-2 bg-foreground/25"}`}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

        </div>

        <div className="relative z-20 -mt-[100vh] pointer-events-none" aria-hidden="true">
          {services.map((service, index) => (
            <div
              key={service.number}
              ref={(node) => { triggerRefs.current[index] = node; }}
              data-service-index={index}
              className="h-screen"
            />
          ))}
        </div>
      </section>

      <section className="trust-band relative z-30 overflow-hidden border-y border-border bg-card" aria-label="Agenci performance highlights">
        <div className="trust-signal" aria-hidden="true" />
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-0">
            {trustMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="trust-stat flex min-h-32 flex-col items-center justify-center px-3 text-center md:min-h-40 md:px-7"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <p className="font-display text-5xl font-black leading-none text-foreground sm:text-6xl lg:text-7xl">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <span className={metric.tone}>+</span>
                </p>
                <p className="mt-4 text-[10px] font-bold uppercase text-muted-foreground sm:text-xs">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 sm:mt-14" aria-hidden="true">
            <span className="h-px w-10 bg-border" />
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Trusted across every touchpoint</span>
            <span className="h-px w-10 bg-border" />
          </div>
        </div>
      </section>

      <section id="about" className="relative z-30 overflow-hidden bg-about px-5 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase text-primary">About us</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              One team behind every
              <span className="text-electric block">moving part.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground">
              We bring healthcare operations, customer support, lead management, and dispatch coordination together under one dependable team.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-foreground/75">
              Our specialists work closely with every client to simplify daily operations, communicate clearly, and deliver service people can rely on.
            </p>
          </div>

          <div className="relative min-h-[24rem] lg:min-h-[38rem]">
            <img
              src={aboutTeamImg}
              alt="Agenci's multidisciplinary healthcare and business services team"
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-about via-transparent to-transparent lg:from-about/70" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-about to-transparent" aria-hidden="true" />
          </div>
    </div>
  </section>

  <section id="expertise" className="relative z-30 overflow-hidden bg-background px-5 py-24 sm:py-32 lg:py-40" aria-label="Our expertise">
    <div className="mx-auto w-full max-w-7xl">
      <div className="mb-16 md:mb-24">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Our Expertise</span>
        </div>
        <h2 className="font-display text-4xl font-black leading-none tracking-normal text-foreground sm:text-7xl lg:text-8xl">
          SPECIALIZED
          <span className="text-outline block">SOLUTIONS.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px border border-border/50 bg-border md:grid-cols-2 lg:grid-cols-4">
        {expertiseServices.map((service) => {
          const Icon = service.icon;
          const card = (
            <>
              <div
                className="absolute -right-8 -top-8 size-32 bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/15"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <span className="service-icon-badge static mb-8" aria-hidden="true">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                  {service.description}
                </p>
              </div>
            </>
          );

          return service.href ? (
            <a
              key={service.title}
              href={service.href}
              className="group relative bg-card p-8 transition-all duration-500 hover:bg-card/80 sm:p-10"
            >
              {card}
            </a>
          ) : (
            <div
              key={service.title}
              className="group relative bg-card p-8 transition-all duration-500 hover:bg-card/80 sm:p-10"
            >
              {card}
            </div>
          );
        })}
      </div>
    </div>
  </section>

  <JourneyPath />

  <BrandPartners />

  <section className="relative z-30 overflow-hidden border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="why-agenci-title">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase text-primary">Why Agenci</p>
          <h2 id="why-agenci-title" className="mt-5 max-w-lg font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl">
            One partner.<br /><span className="text-electric">Built to deliver.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-muted-foreground">
            We combine specialist knowledge with disciplined delivery, so your team gets dependable support without unnecessary complexity.
          </p>
          <a href="#contact" className="mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
            Work with us <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group min-h-72 bg-background p-8 transition-colors hover:bg-accent/50 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="service-icon-badge static" aria-hidden="true"><Icon className="size-5" strokeWidth={1.6} /></span>
                  <span className="font-display text-xs font-bold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-16 font-display text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  <section className="relative z-30 overflow-hidden bg-about px-5 py-24 sm:py-32 lg:py-40" aria-labelledby="process-title">
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase text-primary">How we work</p>
          <h2 id="process-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-7xl">
            SIMPLE BY <span className="text-outline block">DESIGN.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground md:pb-2">
          A focused path from first conversation to dependable delivery, with clarity at every stage.
        </p>
      </div>

      <ol className="mt-16 grid border-y border-border md:mt-24 md:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.number} className="group relative border-b border-border px-2 py-10 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mt-14 font-display text-2xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
              {index < processSteps.length - 1 && <ArrowRight className="absolute -right-2 top-16 z-10 hidden size-4 text-primary md:block" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </div>
  </section>

  <section id="blog" className="relative z-30 overflow-hidden border-y border-border bg-background px-5 py-24 sm:py-32" aria-labelledby="partnership-title">
    <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
      <div>
        <p className="text-xs font-bold uppercase text-primary">Built around your goals</p>
        <h2 id="partnership-title" className="mt-5 max-w-xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl">
          Support that feels like an <span className="text-electric">extension of your team.</span>
        </h2>
        <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
          The strongest partnerships remove friction, create visibility, and give internal teams more room to focus on the work that matters most.
        </p>
      </div>

      <div className="border-t border-border">
        {partnerPriorities.map((priority, index) => (
          <div key={priority} className="flex min-h-20 items-center gap-3 border-b border-border py-5 sm:min-h-24 sm:gap-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary" aria-hidden="true">
              <Check className="size-4" />
            </span>
            <p className="font-display text-base font-semibold text-foreground sm:text-xl">{priority}</p>
            <span className="ml-auto shrink-0 font-display text-xs text-muted-foreground">0{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  <TestimonialsSection />

  <section className="relative z-30 overflow-hidden bg-card px-5 py-24 sm:py-32 lg:py-40" aria-labelledby="faq-title">
    <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      <div>
        <p className="text-xs font-bold uppercase text-primary">Frequently asked</p>
        <h2 id="faq-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">Questions,<br /><span className="text-outline">answered.</span></h2>
        <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">Need something more specific? Start a conversation and we’ll point you in the right direction.</p>
        <a href="mailto:hello@agenci.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
          <Mail className="size-4" aria-hidden="true" /> hello@agenci.com
        </a>
      </div>

      <div className="border-t border-border">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="group border-b border-border py-1">
            <summary className="flex min-h-20 cursor-pointer list-none items-start gap-3 py-5 text-left sm:min-h-24 sm:items-center sm:gap-5 [&::-webkit-details-marker]:hidden">
              <span className="mt-1 font-display text-xs font-bold text-primary sm:mt-0">0{index + 1}</span>
              <span className="font-display text-base font-bold text-foreground sm:text-xl">{faq.question}</span>
              <ChevronDown className="ml-auto mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary sm:mt-0" aria-hidden="true" />
            </summary>
            <p className="max-w-2xl pb-8 pl-8 pr-4 text-sm leading-7 text-muted-foreground sm:pl-10 sm:pr-8">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>

      <EnquiryForm />

      <SiteFooter />
    </main>
  );
}
