import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "Web development",
  message: "",
};

export function FinalCTA() {
  const { toast } = useToast();
  const [values, setValues] = React.useState<FormValues>(initialValues);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const onChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const normalizedPhone = values.phone.replace(/\s+/g, "");
    const phoneDigits = values.phone.replace(/\D/g, "");

    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = "Enter your full name (at least 2 characters).";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!normalizedPhone) {
      nextErrors.phone = "Enter your phone number.";
    } else if (!/^\+?[0-9\-() ]{10,15}$/.test(values.phone.trim()) || phoneDigits.length < 10) {
      nextErrors.phone = "Enter a valid phone number with at least 10 digits.";
    }
    if (!values.service.trim()) {
      nextErrors.service = "Select a service.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Tell us briefly about your requirement.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please fix form errors",
        description: "All fields are required with valid details before submitting.",
        variant: "destructive",
      });
      return;
    }

    const body = [
      "New call booking request from website:",
      "",
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Service: ${values.service.trim()}`,
      `Message: ${values.message.trim()}`,
    ].join("\n");

    const mailto = `mailto:contact@adtunedigital.in?subject=${encodeURIComponent("Call Booking From Website")}&body=${encodeURIComponent(body)}&importance=high&priority=urgent&X-Priority=1`;
    window.location.href = mailto;

    toast({
      title: "Email draft opened",
      description: "Your call booking details are ready to send to contact@adtunedigital.in.",
    });
    setValues(initialValues);
    setErrors({});
  };

  return (
    <section id="contact" className="relative scroll-mt-32 overflow-hidden py-20 md:py-32">
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
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface-elevated/60 p-5 md:p-7">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Name</label>
                <Input
                  id="name"
                  required
                  value={values.name}
                  onChange={(e) => onChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="h-12"
                />
                {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Email</label>
                <Input
                  id="email"
                  required
                  type="email"
                  value={values.email}
                  onChange={(e) => onChange("email", e.target.value)}
                  placeholder="you@company.com"
                  className="h-12"
                />
                {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Phone</label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  value={values.phone}
                  onChange={(e) => onChange("phone", e.target.value)}
                  placeholder="+91"
                  className="h-12"
                />
                {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Service</label>
                <select
                  id="service"
                  value={values.service}
                  onChange={(e) => onChange("service", e.target.value)}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option>Web development</option>
                  <option>SEO</option>
                  <option>Performance marketing</option>
                  <option>Social media marketing</option>
                  <option>Not sure yet</option>
                </select>
                {errors.service ? <p className="mt-1 text-xs text-destructive">{errors.service}</p> : null}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs tracking-caps text-muted-foreground">Message</label>
                <Textarea
                  id="message"
                  rows={3}
                  required
                  value={values.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  placeholder="Tell us briefly what you're looking for"
                />
                {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
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
            <Link to="/#contact">Go to contact form</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
