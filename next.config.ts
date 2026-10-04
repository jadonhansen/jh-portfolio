import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	// Static export has no image optimization server.
	images: { unoptimized: true },
};

export default nextConfig;
