import { Activity, Boxes, Building2, Hexagon, Orbit, Rocket, Stethoscope, Truck } from "lucide-react";

const partners = [
  { name: "Northside Care", icon: Stethoscope },
  { name: "Ridgeway Logistics", icon: Truck },
  { name: "Vertex Health", icon: Activity },
  { name: "Brightpath", icon: Rocket },
  { name: "Orbit Group", icon: Orbit },
  { name: "Hexa Clinics", icon: Hexagon },
  { name: "Meridian Foods", icon: Boxes },
  { name: "Cityline Partners", icon: Building2 },
];

export function BrandPartners() {
  const lane = [...partners, ...partners];

  return (
    <section className="relative z-30 overflow-hidden border-y border-border bg-background py-16 sm:py-20" aria-labelledby="partners-title">
      <div className="mx-auto mb-10 w-full max-w-7xl px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Brand partners</p>
        <h2 id="partners-title" className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
          Teams that keep us on their side of the table
        </h2>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {lane.map((partner, position) => {
            const Icon = partner.icon;
            return (
              <div
                key={`${partner.name}-${position}`}
                className="group flex min-w-max items-center gap-3 rounded-2xl border border-border bg-card px-7 py-5 transition-colors hover:border-primary/50"
              >
                <Icon className="size-5 text-primary" strokeWidth={1.6} />
                <span className="font-display text-base font-bold text-foreground/80 transition-colors group-hover:text-foreground">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="marquee mt-5" aria-hidden="true">
        <div className="marquee-track marquee-reverse">
          {lane.map((partner, position) => {
            const Icon = partner.icon;
            return (
              <div
                key={`rev-${partner.name}-${position}`}
                className="flex min-w-max items-center gap-3 rounded-2xl border border-border bg-card/60 px-7 py-5"
              >
                <Icon className="size-5 text-muted-foreground" strokeWidth={1.6} />
                <span className="font-display text-base font-bold text-muted-foreground">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner.name}>{partner.name}</li>
        ))}
      </ul>
    </section>
  );
}
