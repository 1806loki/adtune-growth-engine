import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function FinalCTA() {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request received",
      description: "We'll call you within one business day. Promise — no spam.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Ambient violet glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-spotlight" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-border-strong bg-surface/70 p-6 backdrop-blur-xl md:grid-cols-[1.1fr_1fr] md:gap-14 md:p-12 lg:p-16">
          <div>
            <div className="mb-4 text-xs text-primary-glow tracking-caps">Let's talk</div>
            <h2 className="font-display text-3xl font-medium leading-[1.05] md:text-5xl">
              Ready to grow your business <span className="italic text-gradient-violet">online?</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Get your free digital marketing consultation today. No commitment, no jargon — just honest advice on what will work for your business.
            </p>

            <div className="mt-8 space-y-3">
              <a href="tel:+918688654432" className="group flex items-center gap-3 text-sm text-foreground hover:text-primary-glow transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/60 ring-1 ring-border">
                  <Phone className="h-4 w-4" />
                </span>
                +91 86886 54432
              </a>
              <a href="https://wa.me/918688654432" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-foreground hover:text-primary-glow transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/60 ring-1 ring-border">
                  <MessageCircle className="h-4 w-4" />
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface-elevated/60 p-5 md:p-7">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Name</label>
                <Input id="name" required placeholder="Your full name" className="h-12" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Phone</label>
                <Input id="phone" required type="tel" placeholder="+91" className="h-12" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Service</label>
                <select id="service" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Web development</option>
                  <option>SEO</option>
                  <option>Performance marketing</option>
                  <option>Social media</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Message <span className="opacity-60">(optional)</span></label>
                <Textarea id="message" rows={3} placeholder="Tell us briefly what you're looking for" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Request free call <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">
                We reply within 24 hours · Mon–Fri, 10 AM – 6 PM
              </p>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outlineGlow" size="lg">
            <Link to="/contact">Or visit contact page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
