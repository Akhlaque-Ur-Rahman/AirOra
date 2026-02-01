import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteMetadata, siteViewport } from '@/config/site';
import { SmoothScroll } from '@/components/shared/SmoothScroll';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  ...siteMetadata,
  description: 'Expert HVAC installation, maintenance, and repair services for commercial, industrial, and residential properties. Delivering comfort and efficiency since 2005.',
};
export const viewport = siteViewport;

import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <Navbar />
        <WhatsAppButton />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
