import { testimonials } from "@/data/testimonials";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
            Trusted by growing businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real results from real clients. See how we've helped businesses like yours achieve measurable growth.
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} variant="compact" />
      </div>
    </section>
  );
}