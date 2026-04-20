import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/adtune-logo.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
            scrolled
              ? "glass border border-border shadow-card"
              : "border border-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 pl-2" aria-label="AdTune home">
            <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-border">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">AdTune</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild variant="hero" size="default">
              <Link to="/contact">
                Book free call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            className="rounded-full border border-border bg-surface p-2.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[68px] z-40 mx-4 origin-top overflow-hidden rounded-2xl border border-border bg-surface/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 p-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-foreground transition-colors hover:bg-accent/40"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
          <li className="px-2 pb-2 pt-3">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/contact">Book free call</Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
