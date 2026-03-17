import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/skills", "/certifications", "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date()
  }));
}

