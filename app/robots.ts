import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://revoticai.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/verify"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
