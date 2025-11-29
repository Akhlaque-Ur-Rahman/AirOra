# Next.js App Router Architecture
## Complete Migration Guide from Vite React to Next.js 15

---

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Complete Folder Structure](#complete-folder-structure)
3. [File-Based Routing](#file-based-routing)
4. [Layout & Page Structure](#layout--page-structure)
5. [Component Organization](#component-organization)
6. [Styling & Design Tokens](#styling--design-tokens)
7. [Migration Mapping](#migration-mapping)
8. [Dependencies & Configuration](#dependencies--configuration)
9. [Performance Optimizations](#performance-optimizations)
10. [Deployment](#deployment)

---

## Architecture Overview

### Core Principles
- **App Router**: Modern Next.js 15 App Router with Server Components
- **Zero Design Changes**: Preserve all colors (#0B1C3F, #1CB9F6), animations, and UX
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized with RSC (React Server Components)
- **SEO**: Enhanced with Next.js built-in metadata API

### Tech Stack
```
Framework:     Next.js 15.x (App Router)
Language:      TypeScript 5.x
Styling:       TailwindCSS (via globals.css)
UI Components: Radix UI (48+ components)
Animations:    Framer Motion
Icons:         Lucide React
Theme:         next-themes
Forms:         React Hook Form
```

---

## Complete Folder Structure

```
hvac-nextjs/
├── .next/                          # Next.js build output (auto-generated)
├── public/                         # Static assets
│   ├── images/                     # Images
│   │   ├── hero/                   # Hero section images
│   │   ├── projects/               # Project portfolio images
│   │   ├── clients/                # Client logos
│   │   └── about/                  # About section images
│   ├── favicon.ico                 # Favicon
│   ├── og-image.jpg                # Open Graph image
│   └── robots.txt                  # SEO robots file
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (metadata, fonts, providers)
│   │   ├── page.tsx                # Homepage (all sections)
│   │   ├── globals.css             # Global styles (TailwindCSS + custom)
│   │   ├── error.tsx               # Error boundary
│   │   ├── not-found.tsx           # 404 page
│   │   ├── loading.tsx             # Loading UI
│   │   │
│   │   ├── api/                    # API routes (optional)
│   │   │   └── contact/
│   │   │       └── route.ts        # Contact form API endpoint
│   │   │
│   │   └── (marketing)/            # Route group (optional organization)
│   │       ├── layout.tsx          # Marketing layout (if needed)
│   │       └── page.tsx            # Marketing page
│   │
│   ├── components/                 # React components
│   │   ├── sections/               # Page sections (Server Components)
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── Services.tsx        # Services grid
│   │   │   ├── WhyChooseUs.tsx     # Benefits section
│   │   │   ├── ClientsCarousel.tsx # Client logos carousel
│   │   │   ├── About.tsx           # About section
│   │   │   ├── Stats.tsx           # Statistics
│   │   │   ├── Projects.tsx        # Projects portfolio
│   │   │   ├── ContactForm.tsx     # Contact form
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   ├── Footer.tsx          # Footer
│   │   │   ├── MobileMenu.tsx      # Mobile navigation
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   ├── ui/                     # Radix UI components (48 components)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── ... (45+ more components)
│   │   │
│   │   ├── animations/             # Animation wrappers (Client Components)
│   │   │   ├── FadeIn.tsx          # Fade-in animation
│   │   │   ├── SlideIn.tsx         # Slide-in animation
│   │   │   ├── ScrollReveal.tsx    # Scroll-triggered reveal
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   ├── providers/              # Context providers (Client Components)
│   │   │   ├── ThemeProvider.tsx   # next-themes provider
│   │   │   ├── MotionProvider.tsx  # Framer Motion provider
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   └── shared/                 # Shared/common components
│   │       ├── ImageWithFallback.tsx
│   │       ├── Container.tsx
│   │       ├── Section.tsx
│   │       └── index.ts
│   │
│   ├── lib/                        # Utilities & helpers
│   │   ├── utils.ts                # Utility functions (cn, etc.)
│   │   ├── constants.ts            # App constants
│   │   ├── animations.ts           # Animation variants
│   │   └── validations.ts          # Form validations
│   │
│   ├── styles/                     # Design system
│   │   ├── tokens.ts               # Design tokens (colors, spacing)
│   │   └── animations.css          # Custom animations
│   │
│   ├── types/                      # TypeScript types
│   │   ├── index.ts                # Main types
│   │   ├

── components.ts          # Component prop types
│   │   └── api.ts                  # API response types
│   │
│   ├── config/                     # Configuration files
│   │   ├── site.ts                 # Site metadata & SEO
│   │   ├── navigation.ts           # Navigation links
│   │   └── services.ts             # Services data
│   │
│   └── data/                       # Static data
│       ├── services.ts             # Services list
│       ├── projects.ts             # Project portfolio
│       ├── stats.ts                # Statistics
│       └── clients.ts              # Client logos
│
├── .env.local                      # Environment variables
├── .env.example                    # Example env file
├── .eslintrc.json                  # ESLint config
├── .gitignore                      # Git ignore
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies
├── postcss.config.mjs              # PostCSS config
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript config
└── README.md                       # Documentation
```

---

## File-Based Routing

### App Router Structure

```
src/app/
├── layout.tsx            → Root layout (wraps all pages)
├── page.tsx              → Homepage (/)
├── error.tsx             → Error boundary
├── not-found.tsx         → 404 page
├── loading.tsx           → Loading UI
└── globals.css           → Global styles
```

### Single Page Application (Current Approach)
Since this is a single-page corporate website, all sections live on one page:

**`src/app/page.tsx`** (Homepage):
```tsx
import {
  Hero,
  Services,
  WhyChooseUs,
  ClientsCarousel,
  About,
  Stats,
  Projects,
  ContactForm,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ClientsCarousel />
      <About />
      <Stats />
      <Projects />
      <ContactForm />
    </main>
  );
}
```

### Optional: Multi-Page Routing (If Needed)
If you want to expand to multiple pages:

```
src/app/
├── page.tsx              → Homepage (/)
├── services/
│   └── page.tsx          → Services page (/services)
├── projects/
│   └── page.tsx          → Projects page (/projects)
├── about/
│   └── page.tsx          → About page (/about)
└── contact/
    └── page.tsx          → Contact page (/contact)
```

---

## Layout & Page Structure

### Root Layout (`src/app/layout.tsx`)

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers';
import { Navbar, Footer } from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'APEX HVAC - Professional Climate Control Solutions',
  description: 'Expert HVAC installation, maintenance, and repair services for commercial, industrial, and residential properties.',
  keywords: ['HVAC', 'heating', 'cooling', 'air conditioning', 'ventilation'],
  authors: [{ name: 'APEX HVAC' }],
  openGraph: {
    title: 'APEX HVAC - Professional Climate Control Solutions',
    description: 'Expert HVAC services for your comfort and efficiency.',
    url: 'https://apexhvac.com',
    siteName: 'APEX HVAC',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEX HVAC - Professional Climate Control Solutions',
    description: 'Expert HVAC services for your comfort and efficiency.',
    images: ['/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Homepage (`src/app/page.tsx`)

```tsx
import {
  Hero,
  Services,
  WhyChooseUs,
  ClientsCarousel,
  About,
  Stats,
  Projects,
  ContactForm,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <ClientsCarousel />
      <About />
      <Stats />
      <Projects />
      <ContactForm />
    </main>
  );
}
```

### Error Boundary (`src/app/error.tsx`)

```tsx
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#0B1C3F] mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience.
        </p>
        <Button
          onClick={() => reset()}
          className="bg-[#1CB9F6] hover:bg-[#0B1C3F]"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
```

### Not Found (`src/app/not-found.tsx`)

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0B1C3F] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-[#1CB9F6] hover:bg-[#0B1C3F]">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
```

---

## Component Organization

### Server vs Client Components

**Server Components** (default in App Router):
- All section components (Hero, Services, About, etc.)
- Layout components (can be server)
- Static content

**Client Components** (marked with `'use client'`):
- Components using hooks (useState, useEffect)
- Event handlers (onClick, onChange)
- Animations (Framer Motion)
- Theme switching
- Forms with interactions

### Example: Hero Section (Client Component for Animations)

**`src/components/sections/Hero.tsx`**:
```tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/industrial-hvac.jpg"
          alt="Industrial HVAC Building"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3F]/95 via-[#0B1C3F]/85 to-[#0B1C3F]/70" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#1CB9F6]/20 text-[#1CB9F6] rounded-full border border-[#1CB9F6]/50">
              Leading HVAC Solutions Provider
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-white mb-6 text-5xl lg:text-6xl font-bold"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            Innovative Climate Control{' '}
            <span className="text-[#1CB9F6]">Solutions</span> for Modern
            Buildings
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed"
          >
            Expert HVAC installation, maintenance, and repair services for
            commercial, industrial, and residential properties. Delivering
            comfort and efficiency since 2005.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-[#1CB9F6] hover:bg-[#1CB9F6]/90 text-white group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0B1C3F]"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-8 text-white/80"
          >
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">500+</div>
              <div>Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">18+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#1CB9F6] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
```

### Example: Services Section (Server Component where possible)

**`src/components/sections/Services.tsx`**:
```tsx
'use client';

import { motion } from 'framer-motion';
import {
  Wind,
  Thermometer,
  Wrench,
  Shield,
  Snowflake,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Wind,
    title: 'HVAC Installation',
    description:
      'Professional installation of heating, ventilation, and air conditioning systems for commercial and residential properties.',
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description:
      'Advanced climate control solutions tailored to your specific needs, ensuring optimal comfort year-round.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description:
      'Regular maintenance and emergency repair services to keep your systems running efficiently at all times.',
  },
  {
    icon: Snowflake,
    title: 'Refrigeration Systems',
    description:
      'Industrial and commercial refrigeration solutions for cold storage, food service, and specialized applications.',
  },
  {
    icon: Shield,
    title: 'Energy Audits',
    description:
      'Comprehensive energy assessments to identify savings opportunities and improve system efficiency.',
  },
  {
    icon: Settings,
    title: 'System Upgrades',
    description:
      'Modern retrofits and system upgrades to enhance performance and reduce operational costs.',
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#1CB9F6]/10 text-[#1CB9F6] rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-[#0B1C3F] mb-4">
            Comprehensive HVAC Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From installation to maintenance, we offer complete HVAC services
            designed to meet your unique requirements with precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#1CB9F6]/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#1CB9F6]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0B1C3F] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-[#1CB9F6] hover:text-[#0B1C3F] transition-colors group"
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button
            size="lg"
            className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white"
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Styling & Design Tokens

### Global Styles (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Colors - NO CHANGES */
    --primary: 11 28 63;        /* #0B1C3F - Navy Blue */
    --accent: 28 185 246;       /* #1CB9F6 - Cyan */
    
    /* Neutral Colors */
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    
    /* Spacing */
    --spacing: 0.25rem;
    
    /* Typography */
    --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
    
    /* Radius */
    --radius: 0.5rem;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer utilities {
  /* Custom scrollbar */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```

### Design Tokens (`src/styles/tokens.ts`)

```typescript
export const colors = {
  primary: {
    DEFAULT: '#0B1C3F',  // Navy Blue
    light: '#1a2f5f',
    dark: '#06122a',
  },
  accent: {
    DEFAULT: '#1CB9F6',  // Cyan
    light: '#4dcaff',
    dark: '#0da5e0',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
} as const;

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;
```

---

## Migration Mapping

### Vite → Next.js File Mapping

| Vite React | Next.js App Router | Notes |
|------------|-------------------|-------|
| `src/App.tsx` | `src/app/page.tsx` | Main homepage |
| `src/main.tsx` | `src/app/layout.tsx` | Root layout |
| `index.html` | `src/app/layout.tsx` | Metadata in layout |
| `src/index.css` | `src/app/globals.css` | Global styles |
| `vite.config.ts` | `next.config.ts` | Build config |
| `src/components/Hero.tsx` | `src/components/sections/Hero.tsx` | Section component |
| `src/components/Navbar.tsx` | `src/components/layout/Navbar.tsx` | Layout component |
| `src/components/ui/*` | `src/components/ui/*` | No change (copy as-is) |
| `public/*` | `public/*` | No change (static assets) |

### Component Conversion Checklist

**For each component:**
1. ✅ Add `'use client'` if using:
   - useState, useEffect, or any hooks
   - Event handlers (onClick, onChange)
   - Framer Motion animations
   - Browser APIs (window, document)
   
2. ✅ Replace image imports:
   ```tsx
   // Before (Vite)
   import heroImg from './hero.jpg';
   <img src={heroImg} alt="..." />
   
   // After (Next.js)
   import Image from 'next/image';
   <Image src="/images/hero.jpg" alt="..." fill />
   ```

3. ✅ Replace links:
   ```tsx
   // Before (Vite)
   <a href="#services">Services</a>
   
   // After (Next.js - for internal navigation)
   import Link from 'next/link';
   <Link href="/services">Services</Link>
   
   // For same-page anchors, keep <a>
   <a href="#services">Services</a>
   ```

4. ✅ Update imports:
   ```tsx
   // Use path aliases
   import { Button } from '@/components/ui/button';
   import { Hero } from '@/components/sections/Hero';
   ```

---

## Dependencies & Configuration

### package.json

```json
{
  "name": "hvac-nextjs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    
    "motion": "*",
    "lucide-react": "^0.487.0",
    "next-themes": "^0.4.6",
    
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.1.8",
    
    "class-variance-authority": "^0.7.1",
    "clsx": "*",
    "tailwind-merge": "*",
    "react-hook-form": "^7.55.0",
    "sonner": "^2.0.3",
    "embla-carousel-react": "^8.6.0",
    "recharts": "^2.15.2"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "^15.1.0",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}
```

### next.config.ts

```typescript
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
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1C3F',
          light: '#1a2f5f',
          dark: '#06122a',
        },
        accent: {
          DEFAULT: '#1CB9F6',
          light: '#4dcaff',
          dark: '#0da5e0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Performance Optimizations

### Image Optimization
```tsx
import Image from 'next/image';

// Use Next.js Image component
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill                      // For responsive images
  priority                  // For above-the-fold images
  quality={90}              // 1-100
  sizes="100vw"            // Responsive sizes
  className="object-cover"
/>
```

### Font Optimization
```tsx
// app/layout.tsx
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Server Components
```tsx
// Default Export (Server Component)
export default function Services() {
  // Can fetch data directly
  return <div>...</div>;
}

// Client Component (when needed)
'use client';
export function ServicesClient() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

### Dynamic Imports
```tsx
import dynamic from 'next/dynamic';

const ClientsCarousel = dynamic(
  () => import('@/components/sections/ClientsCarousel'),
  { 
    ssr: false,  // Disable SSR for this component
    loading: () => <p>Loading...</p>
  }
);
```

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Build & Export
```bash
# Build for production
npm run build

# Start production server
npm start

# Static export (if applicable)
next build && next export
```

---

## Migration Steps

### Step 1: Create Next.js Project
```bash
npx create-next-app@latest hvac-nextjs --typescript --tailwind --app --src-dir
cd hvac-nextjs
```

### Step 2: Copy & Organize Files
```bash
# Copy UI components
cp -r old-project/src/components/ui ./src/components/

# Copy section components
cp -r old-project/src/components/*.tsx ./src/components/sections/

# Copy styles
cp old-project/src/index.css ./src/app/globals.css

# Copy public assets
cp -r old-project/public/* ./public/
```

### Step 3: Update Imports
- Change relative imports to path aliases (`@/components/...`)
- Add `'use client'` where needed
- Replace `img` with `Image`
- Replace `a` with `Link` (for internal routes)

### Step 4: Install Dependencies
```bash
npm install motion lucide-react next-themes
npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge
npm install react-hook-form sonner embla-carousel-react
```

### Step 5: Test & Deploy
```bash
npm run dev       # Test locally
npm run build     # Build for production
npm start         # Test production build
vercel --prod     # Deploy to Vercel
```

---

## Summary

This architecture provides:
- ✅ **Modern Next.js 15 App Router** with Server Components
- ✅ **Zero design changes** - All colors (#0B1C3F, #1CB9F6) preserved
- ✅ **Complete folder structure** - Organized and scalable
- ✅ **Type-safe** - Full TypeScript coverage
- ✅ **SEO optimized** - Built-in metadata API
- ✅ **Performance optimized** - Image, font, and component optimization
- ✅ **Easy deployment** - Vercel-ready configuration

**Next Steps:**
1. Create new Next.js project
2. Copy components with proper organization
3. Update imports and add `'use client'` directives
4. Test thoroughly
5. Deploy to Vercel

---

*Architecture Document Version: 1.0 | Compatible with Next.js 15.x*
