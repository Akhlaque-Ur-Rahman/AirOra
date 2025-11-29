import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { Services as ServicesSection } from '@/components/sections/Services';
import { SectionHeader } from '@/components/shared';

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge="Our Expertise"
        title="Comprehensive HVAC Solutions"
        subtitle="From installation to maintenance, we provide end-to-end services for all your climate control needs."
      />

      <div className="py-12">
        <SectionHeader
          badge="What We Do"
          heading="Tailored Services for Every Need"
          description="We offer a wide range of services designed to ensure your comfort and safety, backed by years of experience."
        />
      </div>

      <ServicesSection />
    </main>
  );
}
