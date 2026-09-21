import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Our claim rejections dropped sharply within the first two months. The billing team communicates clearly and never leaves anything unresolved.",
    name: "Dr. Amara Whitfield",
    role: "Clinic Director, Northside Family Care",
    result: "38% faster reimbursements",
  },
  {
    quote:
      "Patient intake used to eat our mornings. Now screening is organized before the first appointment and our clinicians walk in prepared.",
    name: "Marcus Lane",
    role: "Operations Lead, Vertex Health Group",
    result: "2 hours saved daily",
  },
  {
    quote:
      "Every load is covered and every driver is informed. Dispatch feels like an in-house department rather than an outside service.",
    name: "Sofia Renner",
    role: "Fleet Manager, Ridgeway Logistics",
    result: "Zero missed pickups",
  },
  {
    quote:
      "Leads are followed up the same day, every day. The difference in our conversion rate was visible within the first quarter.",
    name: "Daniel Okoro",
    role: "Founder, Brightpath Services",
    result: "3× response speed",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const active = testimonials[index]!;

  return (
    <section
      id="testimonials"
      className="relative z-30 overflow-hidden border-y border-border bg-card px-5 py-24 sm:py-32 lg:py-40"
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Client voices</p>
            <h2 id="testimonials-title" className="mt-5 font-display text-5xl font-black leading-none text-foreground sm:text-7xl">
              TRUSTED BY <span className="text-outline block">OPERATORS.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-background p-8 sm:mt-20 sm:p-14">
          <Quote className="absolute right-8 top-8 size-16 text-primary/15" aria-hidden="true" />
          <div key={index} className="testimonial-slide relative z-10">
            <div className="flex items-center gap-1 text-primary" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} className="size-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-7 max-w-3xl font-display text-2xl font-semibold leading-[1.35] text-foreground sm:text-3xl">
              “{active.quote}”
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-7">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-secondary-foreground" aria-hidden="true">
                {active.name.split(" ").slice(-2).map((part) => part[0]).join("")}
              </span>
              <div>
                <p className="font-display text-base font-bold text-foreground">{active.name}</p>
                <p className="text-xs text-muted-foreground">{active.role}</p>
              </div>
              <p className="ml-auto rounded-full border border-primary/40 px-4 py-2 text-xs font-bold text-primary">{active.result}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((item, dot) => (
            <button
              key={item.name}
              type="button"
              onClick={() => go(dot)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={dot === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${dot === index ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
