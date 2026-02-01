import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'videos.pexels.com',
            },
        ],
        formats: ['image/webp', 'image/avif'],
    },

    // Enable experimental features if needed
    experimental: {
        optimizePackageImports: ['lucide-react', 'date-fns', 'lodash-es', 'ramda', 'motion/react', '@radix-ui/react-icons', '@radix-ui/react-dialog', '@radix-ui/react-slot'],
    },
};

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
