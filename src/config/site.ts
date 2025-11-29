import type { Metadata, Viewport } from 'next';

export const siteConfig = {
    name: 'AirOra',
    title: 'AirOra - Professional Climate Control Solutions',
    description:
        'Expert HVAC installation, maintenance, and repair services for commercial, industrial, and residential properties. Delivering comfort and efficiency since 2005.',
    url: 'https://airora.com',
    ogImage: '/og-image.jpg',
    keywords: [
        'HVAC',
        'heating',
        'cooling',
        'air conditioning',
        'ventilation',
        'refrigeration',
        'climate control',
        'HVAC installation',
        'HVAC repair',
        'HVAC maintenance',
    ],
};

export const siteMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const siteViewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};
