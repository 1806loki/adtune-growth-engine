const steps = [
  { n: "01", title: "Free discovery call", desc: "A no-obligation conversation to understand your business, goals, budget, and challenges. No sales pitch — just honest advice." },
  { n: "02", title: "Custom strategy", desc: "We build a tailored strategy — choosing the right channels, setting clear KPIs, and mapping a realistic roadmap." },
  { n: "03", title: "Execution by experts", desc: "In-house designers, developers, SEO specialists, and ad managers — no outsourcing, no middlemen." },
  { n: "04", title: "Track & optimize", desc: "We monitor performance, share transparent monthly reports, and refine based on real data — not guesswork." },
  { n: "05", title: "Grow together", desc: "As you grow, we scale with you — adding services, increasing budgets, and evolving the strategy." },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs text-primary-glow tracking-caps">How we work</div>
          <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">
            A process built for <span className="italic text-gradient-violet">real results</span>, not surprises.
          </h2>
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical violet line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-[31px]" />
          {steps.map((s) => (
            <li key={s.n} className="relative flex gap-5 pb-10 md:gap-7 last:pb-0">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface font-mono text-sm font-medium text-primary-glow shadow-card md:h-16 md:w-16">
                {s.n}
              </div>
              <div className="pt-3 md:pt-4">
                <h3 className="font-display text-xl font-medium md:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
