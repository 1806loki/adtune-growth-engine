import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SeoMeta } from "@/components/SeoMeta";
import { getServiceBySlug } from "@/data/services";
import NotFound from "./NotFound";

const sectionEyebrow = "text-xs tracking-caps text-primary-glow";

const ServicePage = () => {
  const { slug = "" } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SeoMeta
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-spotlight opacity-60" />
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <div className={sectionEyebrow}>AdTune Services</div>
              <h1 className="mt-4 font-display text-4xl font-medium leading-tight md:text-6xl">{service.heroTitle}</h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.heroSubtitle}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <Link to="/#contact">
                    Request free call <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outlineGlow" size="xl" className="w-full sm:w-auto">
                  <Link to="/#services">Explore all services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container">
            <div className="surface-card mx-auto max-w-5xl p-6 md:p-10">
              <div className={sectionEyebrow}>Overview</div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{service.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionEyebrow}>What We Offer</div>
              <h2 className="mt-4 font-display text-3xl font-medium md:text-5xl">Service capabilities that drive growth</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
              {service.offerings.map((item) => (
                <article key={item.title} className="surface-card p-6 md:p-7">
                  <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionEyebrow}>How It Works</div>
              <h2 className="mt-4 font-display text-3xl font-medium md:text-5xl">Our 5-step execution process</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl gap-4">
              {service.processSteps.map((step, index) => (
                <article key={step.title} className="surface-card p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong bg-accent/60 text-sm font-semibold text-primary-glow">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-medium">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionEyebrow}>Why AdTune</div>
              <h2 className="mt-4 font-display text-3xl font-medium md:text-5xl">Why businesses choose this service</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
              {service.whyChoose.map((item) => (
                <article key={item.title} className="surface-card p-6 md:p-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />
                    <div>
                      <h3 className="font-display text-xl font-medium">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className={sectionEyebrow}>FAQs</div>
              <h2 className="mt-4 font-display text-3xl font-medium md:text-5xl">Questions we get often</h2>
            </div>
            <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-surface/70 p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-12 md:pb-28">
          <div className="container">
            <div className="mx-auto max-w-5xl rounded-3xl border border-border-strong bg-surface/70 p-8 text-center backdrop-blur-xl md:p-12">
              <h2 className="font-display text-3xl font-medium md:text-5xl">{service.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{service.ctaDescription}</p>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
                <Link to="/#contact">
                  Book free call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default ServicePage;
