import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
// ASCII repo slug for GitHub Pages URLs only — not used in visible site copy
const repoName = "Altmuenster";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: `${basePath}/`,
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