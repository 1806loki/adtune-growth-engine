import { Testimonial } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "compact";
}

export function TestimonialCard({ testimonial, variant = "default" }: TestimonialCardProps) {
  const { clientName, service, metric, description, timeframe } = testimonial;

  if (variant === "compact") {
    return (
      <div className="flex-shrink-0 w-80 rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:scale-105 hover:shadow-elevated">
        <div className="mb-3">
          <div className="font-mono text-2xl font-medium text-gradient-violet">{metric}</div>
          {timeframe && (
            <div className="mt-1 text-xs tracking-caps text-muted-foreground">{timeframe}</div>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">{clientName}</div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {service}
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex-shrink-0 scroll-snap-align-start rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:scale-105 hover:shadow-elevated md:w-80">
      <div className="mb-4">
        <div className="font-mono text-3xl font-medium text-gradient-violet">{metric}</div>
        {timeframe && (
          <div className="mt-1 text-xs tracking-caps text-muted-foreground">{timeframe}</div>
        )}
      </div>
      <p className="mb-6 text-base leading-relaxed text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">{clientName}</div>
        </div>
        <Badge variant="secondary" className="text-xs">
          {service}
        </Badge>
      </div>
    </div>
  );
}