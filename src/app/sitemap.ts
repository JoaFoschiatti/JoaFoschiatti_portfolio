import type { MetadataRoute } from "next";
import { featuredProjects, profile } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!profile.siteUrl) {
    return [];
  }

  const lastModified = new Date();

  return [
    {
      url: profile.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...featuredProjects.map((project) => ({
      url: `${profile.siteUrl}/proyectos/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
