import { Handshake, Rocket, Search, Settings2, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const milestones = [
  { title: "First conversation", description: "We listen to the workflow you actually run today.", icon: Search },
  { title: "Service blueprint", description: "A focused plan shaped around volume and standards.", icon: Settings2 },
  { title: "Controlled launch", description: "Specialists step in with a clear, calm handover.", icon: Rocket },
  { title: "Daily partnership", description: "Consistent coverage and one point of contact.", icon: Handshake },
  { title: "Measured growth", description: "We review results and refine as your needs change.", icon: TrendingUp },
];

const PATH =
  "M 60 60 C 260 60 240 200 420 200 C 600 200 580 340 760 340 C 940 340 920 480 1100 480 C 1180 480 1200 540 1200 600";

export function JourneyPath() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.6;
      const scrolled = window.innerHeight * 0.85 - rect.top;
      setProgress(Math.min(Math.max(scrolled / total, 0), 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative z-30 overflow-hidden bg-about px-5 py-24 sm:py-32 lg:py-40"
      aria-labelledby="journey-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The path forward</p>
          <h2 id="journey-title" className="mt-5 font-display text-5xl font-black leading-none text-foreground sm:text-7xl">
            ONE CLEAR <span className="text-outline block">ROUTE.</span>
          </h2>
          <p className="mt-7 text-sm leading-7 text-muted-foreground sm:text-base">
            Follow the line as it draws itself — every turn is a stage of working with us.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-24">
          <svg
            viewBox="0 0 1240 660"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={PATH} fill="none" stroke="currentColor" className="text-border" strokeWidth="2" strokeDasharray="6 8" />
            <path
              d={PATH}
              fill="none"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1 - progress}
              style={{ transition: "stroke-dashoffset 120ms linear", filter: "drop-shadow(0 0 10px currentColor)" }}
            />
          </svg>

          <ol className="relative z-10 grid gap-8 lg:grid-cols-5 lg:gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const threshold = (index + 0.55) / milestones.length;
              const reached = progress >= threshold * 0.85;

              return (
                <li
                  key={milestone.title}
                  className={`journey-node rounded-2xl border p-6 transition-all duration-700 ${
                    reached
                      ? "border-primary/50 bg-card opacity-100 shadow-2xl"
                      : "border-border bg-card/40 opacity-60"
                  } ${index % 2 === 1 ? "lg:mt-24" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl border transition-colors ${
                        reached ? "border-primary/60 text-primary" : "border-border text-muted-foreground"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-lg font-bold text-foreground">{milestone.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{milestone.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
