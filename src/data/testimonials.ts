export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  service: string;
  metric: string;
  description: string;
  timeframe?: string;
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "go-hospitals",
    clientName: "Go Hospitals",
    company: "Healthcare",
    service: "Meta Ads",
    metric: "3X Walk-ins",
    timeframe: "45 Days",
    description:
      "Within just 45 days, our monthly patient walk-ins grew from 10 to over 30. The consistency and quality of leads improved significantly, giving us predictable growth."
  },
  {
    id: "go-vascular",
    clientName: "Dr. Devu’s Go Vascular",
    company: "Healthcare",
    service: "Meta Ads & SEO",
    metric: "130+ Walk-ins / 60% Lower CPL",
    description:
      "The results were beyond expectations—130+ monthly walk-ins and a 60% reduction in cost per lead. Our campaigns are now generating both volume and efficiency."
  },
  {
    id: "grantely",
    clientName: "Grantely",
    company: "Consulting",
    service: "Social Media & LinkedIn",
    metric: "+60% Followers",
    timeframe: "2 Months",
    description:
      "In just 2 months, we saw a 60% increase in followers and a strong boost in engagement. Their content strategy and LinkedIn optimization elevated our brand visibility."
  }
];