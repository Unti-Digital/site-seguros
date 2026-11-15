import type { MetadataRoute } from "next";
import { indexingEnabled, siteOrigin } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(indexingEnabled
        ? { allow: "/", disallow: "/politica-de-privacidade" }
        : { disallow: "/" }),
    },
    ...(siteOrigin ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
