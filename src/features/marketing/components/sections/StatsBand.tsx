const stats = [
  { value: "100+", label: "Clients served" },
  { value: "4", label: "Core services" },
  { value: "3×", label: "Avg. ROI delivered" },
  { value: "2", label: "Cities — Hyd & Blr" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-4 py-8 md:py-10 ${i === 0 ? "border-l-0" : ""}`}>
              <div className="font-mono text-4xl font-medium text-gradient-violet md:text-5xl">{s.value}</div>
              <div className="mt-2 text-[11px] text-muted-foreground tracking-caps">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
