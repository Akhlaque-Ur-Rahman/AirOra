import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { ContactForm } from '@/components/sections/ContactForm';

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
