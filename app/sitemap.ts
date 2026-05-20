import type { MetadataRoute } from "next";

const baseUrl = "https://muyou-software.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/cases", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
