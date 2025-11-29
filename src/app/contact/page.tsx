import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { SectionHeader } from '@/components/shared';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge="Get in Touch"
        title="We're Here to Help"
        subtitle="Reach out to us for inquiries, quotes, or emergency services. Our team is ready to assist you."
      />

      <div className="py-12">
        <SectionHeader
          badge="Contact Us"
          heading="Let's Start a Conversation"
          description="Whether you have a question about our services or need immediate assistance, we are just a message away."
        />
      </div>

      <ContactForm />
    </main>
  );
}
