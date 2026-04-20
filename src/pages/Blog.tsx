import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { mockBlogs } from "@/components/sections/BlogTeaser";

const allPosts = [
  ...mockBlogs,
  { slug: "local-seo-checklist", title: "The local SEO checklist for service businesses", category: "SEO", excerpt: "GMB, citations, schema — the practical list we run for every local client.", date: "March 20, 2026", readTime: "4 min read", cover: "from-primary-deep/40 to-primary/30" },
  { slug: "meta-ads-creative-2026", title: "Meta ads creative principles that still work in 2026", category: "Performance", excerpt: "What's changed, what hasn't, and the creative formats producing the best ROAS today.", date: "March 14, 2026", readTime: "8 min read", cover: "from-primary/30 to-primary-deep/40" },
  { slug: "shopify-vs-custom", title: "Shopify vs. custom build: how to choose for your D2C brand", category: "Web", excerpt: "The honest tradeoffs no one tells you before you commit your roadmap.", date: "March 6, 2026", readTime: "6 min read", cover: "from-primary-glow/30 to-primary/40" },
];

const categories = ["All", "SEO", "Performance", "Social", "Web"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 md:pt-40">
        <section className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-xs tracking-caps text-primary-glow">Blog</div>
            <h1 className="font-display text-4xl font-medium leading-[1.05] md:text-6xl">
              Marketing thinking, <span className="italic text-gradient-violet">applied.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Tactics, frameworks, and case-led articles from our team — written for operators, not algorithms.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`rounded-full border px-4 py-2 text-xs tracking-caps transition-colors ${i === 0 ? "border-primary bg-accent/40 text-foreground" : "border-border bg-surface text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((b) => (
              <Link key={b.slug} to={`/blog/${b.slug}`} className="surface-card group flex flex-col overflow-hidden">
                <div className={`relative h-48 bg-gradient-to-br ${b.cover}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,hsl(var(--background))_120%)]" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-surface/80 px-2.5 py-1 text-[10px] tracking-caps backdrop-blur">
                    {b.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-medium leading-snug transition-colors group-hover:text-primary-glow md:text-xl">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{b.date}</span>
                    <span>{b.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Blog;
