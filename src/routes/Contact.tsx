import { Navbar } from "@/features/marketing/components/layout/Navbar";
import { Footer } from "@/features/marketing/components/layout/Footer";
import { StickyMobileCTA } from "@/features/marketing/components/layout/StickyMobileCTA";
import { FinalCTA } from "@/features/marketing/components/sections/FinalCTA";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-12 md:pt-40">
        <section className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-xs tracking-caps text-primary-glow">Contact</div>
            <h1 className="font-display text-4xl font-medium leading-[1.05] md:text-6xl">
              Let's build something <span className="italic text-gradient-violet">great together.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Tell us about your business — we'll respond within one working day with honest, no-obligation advice.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: "Visit", value: "Hyderabad, Telangana" },
              { icon: Phone, label: "Call", value: "+91 86886 54432", href: "tel:+918688654432" },
              { icon: Mail, label: "Email", value: "contact@adtunedigital.in", href: "mailto:contact@adtunedigital.in" },
              { icon: Clock, label: "Hours", value: "Mon–Fri, 10–6" },
            ].map((c) => (
              <a key={c.label} href={c.href ?? "#"} className="surface-card block p-5 text-left">
                <c.icon className="h-5 w-5 text-primary-glow" />
                <div className="mt-4 text-[11px] tracking-caps text-muted-foreground">{c.label}</div>
                <div className="mt-1 text-sm font-medium">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <a href="https://wa.me/918688654432" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-border-strong bg-surface p-5 transition-colors hover:border-primary">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary-glow">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Prefer WhatsApp?</div>
                  <div className="text-xs text-muted-foreground">Faster replies for quick questions</div>
                </div>
              </div>
              <span className="text-sm text-primary-glow">Chat with us →</span>
            </a>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Contact;
