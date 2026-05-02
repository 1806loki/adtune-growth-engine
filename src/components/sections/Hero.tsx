import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroMesh = lazy(() => import("@/components/HeroMesh").then((m) => ({ default: m.HeroMesh })));

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* 3D mesh background */}
      <Suspense fallback={null}>
        <HeroMesh />
      </Suspense>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            <span className="tracking-caps">Hyderabad · Bengaluru · India</span>
          </div>

          <h1 className="font-display text-[44px] font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[84px] animate-fade-up" style={{ animationDelay: "60ms", opacity: 0 }}>
            Grow faster.
            <br />
            <span className="text-gradient-violet italic font-normal">Rank higher.</span>
            <br />
            Convert better.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up" style={{ animationDelay: "180ms", opacity: 0 }}>
            AdTune Digital Services is a digital marketing agency in Hyderabad helping businesses
            across India build a powerful online presence with custom websites, result-driven SEO,
            high-ROI performance marketing, and social media strategies that actually work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "300ms", opacity: 0 }}>
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <Link to="/#contact">
                Get a free call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineGlow" size="xl" className="w-full sm:w-auto">
              <a href="#services">Explore services</a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "420ms", opacity: 0 }}>
            No commitment · No jargon · Honest advice in 30 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
