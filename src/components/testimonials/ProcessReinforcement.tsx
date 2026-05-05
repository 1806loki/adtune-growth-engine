import { testimonials } from "@/data/testimonials";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function ProcessReinforcement() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
            Our process delivers results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Don't just take our word for it. See how our proven methodology has transformed businesses across industries.
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}