import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://usc-website.vercel.app";

    return [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/training`, lastModified: new Date() },
        { url: `${baseUrl}/mitgliedschaft`, lastModified: new Date() },
        { url: `${baseUrl}/impressum`, lastModified: new Date() },
        { url: `${baseUrl}/datenschutz`, lastModified: new Date() },
    ];
}