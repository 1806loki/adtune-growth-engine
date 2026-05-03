import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/features/marketing/components/layout/Navbar";
import { Footer } from "@/features/marketing/components/layout/Footer";
import { StickyMobileCTA } from "@/features/marketing/components/layout/StickyMobileCTA";
import { FinalCTA } from "@/features/marketing/components/sections/FinalCTA";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-12 md:pt-40">
        <article className="container">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-glow transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>

            <div className="mt-8">
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-[10px] tracking-caps text-primary-glow">SEO</span>
              <h1 className="mt-5 font-display text-3xl font-medium leading-[1.1] md:text-5xl">
                {slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) ?? "Article"}
              </h1>
              <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> April 12, 2026</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 6 min read</span>
              </div>
            </div>

            <div className="mt-10 h-64 rounded-2xl bg-gradient-to-br from-primary/40 to-primary-deep/40 md:h-96" />

            <div className="prose prose-invert mt-12 max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90">
                This is a placeholder article body. When the admin dashboard is wired to the backend, the rich-text content authored in the editor will render here with proper typography, headings, lists, blockquotes, and embedded media.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                For now, the blog post page demonstrates the reading experience: generous line-height, comfortable measure, dark-theme-optimized contrast, and a clear CTA below the article to convert engaged readers into discovery calls.
              </p>
              <h2 className="font-display mt-10 text-2xl font-medium md:text-3xl">A second-level heading</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Sections are clearly delineated. Inline links use the <a href="#" className="text-primary-glow underline-offset-4 hover:underline">brand violet</a> for instant recognition.
              </p>
              <ul className="mt-5 space-y-2 text-muted-foreground">
                <li>· List items keep the same comfortable reading rhythm.</li>
                <li>· Bullets are minimal — no decorative cruft.</li>
                <li>· Designed for scanning and skimming.</li>
              </ul>
              <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-xl italic text-foreground md:text-2xl">
                "Pull-quotes get the brand serif treatment — making them earn their visual weight."
              </blockquote>
            </div>
          </div>
        </article>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default BlogPost;
