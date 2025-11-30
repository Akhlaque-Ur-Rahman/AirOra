import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { ContactForm } from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge="Contact Us"
        title="We're Here to Help"
        subtitle="Reach out to us for inquiries, quotes, or emergency services. Our team is ready to assist you."
      />
      <ContactForm />
    </main>
  );
}
