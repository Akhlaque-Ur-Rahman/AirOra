import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        formats: ['image/webp', 'image/avif'],
    },

    // Enable experimental features if needed
    experimental: {
        optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    },
};

export default nextConfig;
