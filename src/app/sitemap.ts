import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/skills", "/certifications", "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date()
  }));
}

