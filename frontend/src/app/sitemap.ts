import type { MetadataRoute } from "next";
import { indexingEnabled, siteOrigin, sitePaths } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only reviewed, publication-enabled pages belong in the public sitemap.
  if (!indexingEnabled || !siteOrigin) return [];
  return sitePaths.map((path) => ({ url: `${siteOrigin}${path}` }));
}
