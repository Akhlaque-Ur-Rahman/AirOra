import type { Metadata, Viewport } from 'next';

export const siteConfig = {
    name: 'AirOra',
    title: 'AirOra - Professional Climate Control Solutions',
    description:
        'Expert HVAC installation, maintenance, and repair services for commercial, industrial, and residential properties. Delivering comfort and efficiency since 2005.',
    url: 'https://airora.com',
    // Used as the social share banner (1200×630 is optimal for OG)
    ogImage: '/images/engineering.webp',
    // Brand mark used for app icons
    logoImage: '/logo/airoralogo.png',
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
    alternates: { canonical: '/' },

    // ─── Open Graph ────────────────────────────────────────────────
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,          // engineering banner — ideal 1200×630
                width: 1200,
                height: 630,
                alt: 'AirOra - Professional HVAC Solutions',
                type: 'image/webp',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // ─── Twitter / X Card ──────────────────────────────────────────
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                alt: 'AirOra - Professional HVAC Solutions',
            },
        ],
    },

    // ─── Robots ────────────────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // ─── Icons / Favicon ───────────────────────────────────────────
    // favicon.ico is placed at /public/favicon.ico for browser auto-discovery
    // airoralogo.png is used for modern browsers + Apple touch icon
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },                            // legacy fallback
            { url: '/logo/airoralogo.png', type: 'image/png', sizes: 'any' }, // modern browsers
        ],
        shortcut: '/favicon.ico',
        apple: [
            { url: '/logo/airoralogo.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'mask-icon', url: '/logo/airoralogo.svg', color: '#0B1C3F' },
        ],
    },
};

export const siteViewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0B1C3F',   // brand navy — colors browser chrome on mobile
};
