import type { Metadata } from "next";
import { HeroVideoSection } from "@/components/layout/HeroVideoSection";
import { SectionHeader, IconBadge } from "@/components/shared";
import { HelpCircle } from "lucide-react";
import { FaqsClient } from "./FaqsClient";

export const metadata: Metadata = {
  title: "HVAC FAQs - AirOra Technical Support",
  description:
    "Get answers to common questions about our HVAC services, maintenance schedules, certification standards, and industrial project coverage across India.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  return (
    <>
      <HeroVideoSection
        badge={
          <IconBadge
            icon={<HelpCircle />}
            label="Technical Support"
            className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50"
          />
        }
        title="Engineering FAQs"
        subtitle="Technical clarifications regarding our operational protocols, maintenance standards, and project execution methodologies."
        backgroundImage="/images/faq.webp"
      />

      <main className="container mx-auto max-w-7xl py-20 px-6">
        <SectionHeader
          badge={<IconBadge icon={<HelpCircle />} label="Common Queries" />}
          heading="Technical & Operational Inquiries"
          description="Find answers to frequently asked questions about our commercial and industrial HVAC engineering services."
        />
        <FaqsClient />
      </main>
    </>
  );
}
