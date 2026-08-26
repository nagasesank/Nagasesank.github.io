import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/components/project-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nagasesank.github.io";
  return ["/", "/writing/", "/certifications/", ...portfolioProjects.map((project) => `/projects/${project.slug}/`)].map((path) => ({ url: `${baseUrl}${path}` }));
}
