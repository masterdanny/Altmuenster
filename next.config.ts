import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
// Match the GitHub repo name exactly. Rename repo to "Altmuenster" on GitHub, then update this.
const repoName = "Altm-nster";

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