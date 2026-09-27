import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aathidasan-ai-portfoli-craft.lovable.app/sitemap.xml",
  };
}
