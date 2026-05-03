import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/adtune-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 pt-16 pb-24 md:pb-12">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-border">
                <img src={logo} alt="AdTune logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-xl font-semibold">AdTune</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Hyderabad-based digital marketing agency helping ambitious businesses grow with websites, SEO, paid ads, and social.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary-glow">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs tracking-caps text-muted-foreground">Services</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/web-development" className="hover:text-primary-glow transition-colors">Web development</Link></li>
              <li><Link to="/services/seo" className="hover:text-primary-glow transition-colors">SEO</Link></li>
              <li><Link to="/services/performance-marketing" className="hover:text-primary-glow transition-colors">Performance marketing</Link></li>
              <li><Link to="/services/social-media-marketing" className="hover:text-primary-glow transition-colors">Social media marketing</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs tracking-caps text-muted-foreground">Company</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/contact" className="hover:text-primary-glow transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs tracking-caps text-muted-foreground">Get in touch</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 text-primary-glow shrink-0" /> Hyderabad, Telangana</li>
              <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 text-primary-glow shrink-0" /> +91 86886 54432</li>
              <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 text-primary-glow shrink-0" /> contact@adtunedigital.in</li>
              <li className="flex items-start gap-2.5"><Clock className="mt-0.5 h-4 w-4 text-primary-glow shrink-0" /> Mon–Fri, 10 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} AdTune Digital Services. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
