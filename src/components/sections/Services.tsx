import { ArrowUpRight, Globe, Search, BarChart3, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    slug: "web-development",
    title: "Web development",
    desc: "Fast, mobile-first, SEO-ready websites that make powerful first impressions and convert visitors into customers.",
    chips: ["Custom design", "Landing pages", "E-commerce"],
  },
  {
    icon: Search,
    slug: "seo",
    title: "Search engine optimization",
    desc: "Get found on Google with proven SEO strategies that drive sustainable organic traffic and high-quality leads month after month.",
    chips: ["On-page SEO", "Local SEO", "Link building"],
  },
  {
    icon: BarChart3,
    slug: "performance-marketing",
    title: "Performance marketing",
    desc: "Google Ads, Meta Ads, and full-funnel paid campaigns where every rupee is tracked and every campaign is optimized for real ROI.",
    chips: ["Google Ads", "Meta Ads", "Retargeting"],
  },
  {
    icon: Share2,
    slug: "social-media-marketing",
    title: "Social media marketing",
    desc: "Creative content, consistent posting, and smart paid social that grows your audience and builds a brand people trust and buy from.",
    chips: ["Instagram", "Facebook", "LinkedIn"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs text-primary-glow tracking-caps">What we do</div>
          <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">
            Everything your brand needs to <span className="italic text-gradient-violet">win online</span> — under one roof.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Four core services designed to work together seamlessly — or independently — depending on what your business needs right now.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to={`/services/${s.slug}`}
              className="surface-card group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-0.5 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/60 text-primary-glow ring-1 ring-border-strong">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-glow" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium md:text-[26px]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
