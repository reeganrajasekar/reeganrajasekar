import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {},
  experimental: { inlineCss: true },
  webpack(config, { dev }) {
    if (dev) {
      config.plugins = config.plugins?.filter(
        (plugin: { constructor: { name: string } }) =>
          plugin.constructor.name !== "EvalSourceMapDevToolPlugin",
      );
    }

    return config;
  },
};

export default nextConfig;
