const industries = [
  "Real estate", "Healthcare", "Education", "Retail", "D2C startups",
  "SaaS", "Finance", "Hospitality", "Manufacturing", "Automotive",
];

export function Industries() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs text-primary-glow tracking-caps">Industries we serve</div>
          <h2 className="font-display text-2xl font-medium leading-tight md:text-4xl">
            From D2C startups to established enterprises — we know how to grow{" "}
            <span className="italic text-gradient-violet">your kind of business.</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary hover:text-primary-glow">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
