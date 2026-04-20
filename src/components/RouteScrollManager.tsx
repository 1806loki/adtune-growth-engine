import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 20;

    const scrollToHash = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(scrollToHash, 50);
      }
    };

    scrollToHash();
  }, [pathname, hash]);

  return null;
}
