import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-500 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 rounded-full border border-border-strong bg-surface/90 p-1.5 shadow-elevated backdrop-blur-xl">
        <Link
          to="/contact"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-primary text-sm font-medium text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Book free call
        </Link>
        <a
          href="https://wa.me/918688654432"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
