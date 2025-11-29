import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { Projects as ProjectsSection } from '@/components/sections/Projects';
import { SectionHeader } from '@/components/shared';

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge="Case Studies"
        title="Our Portfolio"
        subtitle="Explore our successful installations and climate control solutions across various industries."
      />

      <div className="py-12">
        <SectionHeader
          badge="Featured Work"
          heading="Delivering Excellence"
          description="Browse through our gallery of completed projects demonstrating our commitment to quality and innovation."
        />
      </div>

      <ProjectsSection />
    </main>
  );
}
