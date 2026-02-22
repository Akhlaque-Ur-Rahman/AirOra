import type { Metadata } from "next";
import { HeroVideoSection } from "@/components/layout/HeroVideoSection";

export const metadata: Metadata = {
  title: "Contact AirOra - Free HVAC Consultation",
  description:
    "Reach out to AirOra's HVAC engineering team for project consultations, technical audits, and 24/7 emergency support in Ranchi, Jharkhand.",
  alternates: { canonical: "/contact" },
};
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge="Get in Touch"
        title="Consult Our Engineering Team"
        subtitle="Connect with our HVAC specialists for project consultations, technical audits, and 24/7 emergency support."
        backgroundImage="/images/contact.webp"
      />
      <ContactForm />
    </main>
  );
}
