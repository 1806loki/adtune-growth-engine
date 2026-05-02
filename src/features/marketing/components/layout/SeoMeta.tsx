import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoMetaProps = {
  title: string;
  description: string;
  keywords?: string[];
};

const SITE_URL = "https://adtunedigital.in";

const ensureMetaTag = (attr: "name" | "property", key: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  return element;
};

const ensureCanonical = () => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link;
};

export function SeoMeta({ title, description, keywords = [] }: SeoMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    ensureMetaTag("name", "description").setAttribute("content", description);
    if (keywords.length) {
      ensureMetaTag("name", "keywords").setAttribute("content", keywords.join(", "));
    }

    ensureMetaTag("property", "og:title").setAttribute("content", title);
    ensureMetaTag("property", "og:description").setAttribute("content", description);
    ensureMetaTag("property", "og:type").setAttribute("content", "website");
    ensureMetaTag("property", "og:url").setAttribute("content", `${SITE_URL}${pathname}`);

    ensureMetaTag("name", "twitter:card").setAttribute("content", "summary_large_image");
    ensureMetaTag("name", "twitter:title").setAttribute("content", title);
    ensureMetaTag("name", "twitter:description").setAttribute("content", description);

    ensureCanonical().setAttribute("href", `${SITE_URL}${pathname}`);
  }, [description, keywords, pathname, title]);

  return null;
}
