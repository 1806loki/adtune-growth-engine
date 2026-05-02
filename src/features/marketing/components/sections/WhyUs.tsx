import { Layers, Target, Eye, Rocket, MapPin, Unlock } from "lucide-react";

const items = [
  { icon: Layers, title: "One agency, all services", desc: "Web, SEO, ads, and social — all in-house. No juggling vendors or inconsistent messaging." },
  { icon: Target, title: "Results, not reports", desc: "We measure success in leads, revenue, and growth — not impressions or vanity metrics." },
  { icon: Eye, title: "Radical transparency", desc: "You always know what we're doing, why, and what it's delivering. No black boxes." },
  { icon: Rocket, title: "Startup & SME friendly", desc: "Flexible packages designed for businesses at every stage — from early-stage to enterprise." },
  { icon: MapPin, title: "Local market expertise", desc: "We know Hyderabad and Bangalore — the audiences, competition, and what actually converts." },
  { icon: Unlock, title: "No lock-in contracts", desc: "We earn your trust every month. Stay because of results — not because a contract forces you to." },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs text-primary-glow tracking-caps">Why AdTune</div>
          <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">
            Six reasons businesses choose us — and <span className="italic text-gradient-violet">stay.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="surface-card group p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/60 text-primary-glow ring-1 ring-border">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
