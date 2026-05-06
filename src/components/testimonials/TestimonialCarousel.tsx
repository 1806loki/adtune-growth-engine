import { useEffect, useRef } from "react";
import { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  variant?: "default" | "compact";
}

export function TestimonialCarousel({ testimonials, variant = "default" }: TestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
        }
      }, 4000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    // Only auto-scroll on desktop
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      startAutoScroll();
    }

    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        startAutoScroll();
      } else {
        stopAutoScroll();
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      stopAutoScroll();
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scroll-snap-x-mandatory pb-4 md:justify-center md:gap-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            variant={variant}
          />
        ))}
      </div>

      {/* Gradient overlays for scroll indication */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />

      {/* Optional pagination dots */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className="h-2 w-2 rounded-full bg-border transition-colors hover:bg-primary/50"
            onClick={() => {
              if (scrollRef.current) {
                const container = scrollRef.current;
                const cardWidth = container.clientWidth; // Since on mobile w-full, clientWidth is card width
                scrollRef.current.scrollTo({
                  left: index * cardWidth,
                  behavior: "smooth",
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}