import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const mockBlogs = [
  {
    slug: "seo-strategies-for-hyderabad-businesses-2026",
    title: "7 SEO strategies that actually work for Hyderabad businesses in 2026",
    category: "SEO",
    excerpt: "Local intent, schema, and the search behaviors that move the needle for SMEs in Telangana.",
    date: "April 12, 2026",
    readTime: "6 min read",
    cover: "from-primary/40 to-primary-deep/40",
  },
  {
    slug: "google-ads-budget-small-business",
    title: "How much should a small business actually spend on Google Ads?",
    category: "Performance",
    excerpt: "A no-fluff breakdown of budgets, expectations, and the math behind a healthy ROAS.",
    date: "April 4, 2026",
    readTime: "5 min read",
    cover: "from-primary-glow/40 to-primary/30",
  },
  {
    slug: "instagram-content-that-converts",
    title: "Instagram content that converts: a framework for D2C brands",
    category: "Social",
    excerpt: "The 4-bucket content system we use to scale brand-led D2C accounts past 6-figure revenue.",
    date: "March 28, 2026",
    readTime: "7 min read",
    cover: "from-primary/30 to-primary-glow/40",
  },
];

export function BlogTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 text-xs text-primary-glow tracking-caps">Insights</div>
            <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
              Marketing thinking, <span className="italic text-gradient-violet">applied.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-glow hover:text-foreground transition-colors">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {mockBlogs.map((b) => (
            <Link key={b.slug} to={`/blog/${b.slug}`} className="surface-card group flex flex-col overflow-hidden">
              <div className={`relative h-44 bg-gradient-to-br ${b.cover}`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,hsl(var(--background))_120%)]" />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-surface/80 px-2.5 py-1 text-[10px] tracking-caps text-foreground backdrop-blur">
                  {b.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-medium leading-snug transition-colors group-hover:text-primary-glow md:text-xl">
                  {b.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{b.date}</span>
                  <span>{b.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
