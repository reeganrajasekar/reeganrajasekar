import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://reegan.is-a.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/Reegan-Rajasekar-CV.pdf`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
