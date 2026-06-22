import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
// ASCII repo slug for GitHub Pages URLs only — not used in visible site copy
const repoName = "Altmuenster";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "www.altmuenster.at",
      },
    ],
  },
};

export default nextConfig;