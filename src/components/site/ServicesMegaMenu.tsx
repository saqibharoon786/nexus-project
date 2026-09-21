import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { serviceGroups } from "@/content/nav-services";

export function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div ref={wrapperRef} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1.5 transition-colors ${open ? "text-foreground" : "hover:text-foreground"}`}
      >
        Services
        <ChevronDown className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`} aria-hidden="true" />
      </button>

      <div
        className={`mega-panel fixed left-1/2 top-[4.2rem] z-50 w-[min(58rem,calc(100vw-3rem))] pt-4 sm:top-[5.2rem] ${open ? "mega-open" : ""}`}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-px bg-border md:grid-cols-[1fr_1fr_0.85fr]">
            {serviceGroups.map((group) => (
              <div key={group.label} className="bg-card p-5">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{group.label}</p>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title}>
                        <Link
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent/60"
                        >
                          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-primary transition-colors group-hover:border-primary/60">
                            <Icon className="size-4" strokeWidth={1.6} aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block font-display text-sm font-bold text-foreground">{item.title}</span>
                            <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{item.description}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="flex flex-col justify-between gap-6 bg-card p-6">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Not sure where to start?</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Tell us what slows your team down and we’ll match you with the right specialists.
                </p>
              </div>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-secondary px-4 text-xs font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a Call <ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
