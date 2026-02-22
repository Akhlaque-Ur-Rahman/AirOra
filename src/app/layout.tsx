import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteMetadata, siteViewport, siteConfig } from "@/config/site";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...siteMetadata,
  description:
    "Expert HVAC installation, maintenance, and repair services for commercial, industrial, and residential properties. Delivering comfort and efficiency since 2005.",
};
export const viewport = siteViewport;

import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AirOra",
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: "+91 8434008450",
              email: "airoraentrerprises@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop No. 35, 3rd Floor, Roshpa Tower, MG Main Road, Kanka",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                postalCode: "834001",
                addressCountry: "IN",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
              image: `${siteConfig.url}${siteConfig.ogImage}`,
              priceRange: "₹₹",
            }),
          }}
        />
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
