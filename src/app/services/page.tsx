import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { Services as ServicesSection } from '@/components/sections/Services';
import { SectionHeader, IconBadge } from '@/components/shared';
import { Wrench, Star } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge={<IconBadge icon={<Star />} label="Technical Competencies" className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50" />}
        title="End-to-End HVAC Engineering"
        subtitle="Turnkey climate control solutions encompassing design, installation, commissioning, and lifecycle maintenance for complex commercial infrastructures."
        backgroundImage="https://images.unsplash.com/photo-1581091870627-a6a3d1c3e3c7?auto=format&fit=crop&w=2000&q=80"
      />

      <div className="py-12">
        <SectionHeader
          badge={<IconBadge icon={<Wrench />} label="Service Portfolio" />}
          heading="Specialized Engineering Services"
          description="We deliver high-performance HVAC solutions engineered to meet the rigorous demands of modern industrial and commercial facilities."
        />
      </div>

      <ServicesSection />
    </main>
  );
}
