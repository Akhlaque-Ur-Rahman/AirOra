import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { About as AboutSection } from '@/components/sections/About';
import { SectionHeader, IconBadge } from '@/components/shared';
import { Users, History } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge={<IconBadge icon={<History />} label="Our Story" className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50" />}
        title="Building Comfort Since 2005"
        subtitle="Learn about our journey, our values, and the team dedicated to your comfort."
      />

      <div className="py-12">
        <SectionHeader
          badge={<IconBadge icon={<Users />} label="Who We Are" />}
          heading="Excellence in Every Installation"
          description="We are more than just an HVAC company; we are your partners in creating the perfect indoor environment."
        />
      </div>

      <AboutSection />
    </main>
  );
}
