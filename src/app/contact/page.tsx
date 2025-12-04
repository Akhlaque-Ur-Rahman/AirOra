import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge="Get in Touch"
        title="Consult Our Engineering Team"
        subtitle="Connect with our HVAC specialists for project consultations, technical audits, and 24/7 emergency support."
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
      />
      <ContactForm />
    </main>
  );
}
