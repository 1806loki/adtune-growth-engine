import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="surface-card relative mx-auto max-w-4xl overflow-hidden p-8 md:p-14">
          <Quote className="absolute -right-2 -top-2 h-32 w-32 text-primary/5 md:h-48 md:w-48" />
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <div>
              <div className="mb-4 text-xs tracking-caps text-primary-glow">Client story</div>
              <blockquote className="font-display text-xl font-medium leading-snug md:text-3xl">
                “AdTune rebuilt our website and ran our Google Ads — within four months our qualified leads <span className="italic text-gradient-violet">tripled</span> and our cost per lead dropped by 60%.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary" />
                <div>
                  <div className="text-sm font-medium">Founder, D2C wellness brand</div>
                  <div className="text-xs text-muted-foreground">Hyderabad</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { v: "3×", l: "Qualified leads" },
                { v: "−60%", l: "Cost per lead" },
                { v: "4 mo", l: "Time to result" },
                { v: "8.2×", l: "ROAS" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl border border-border bg-surface-elevated p-4">
                  <div className="font-mono text-2xl font-medium text-gradient-violet">{m.v}</div>
                  <div className="mt-1 text-[11px] tracking-caps text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
