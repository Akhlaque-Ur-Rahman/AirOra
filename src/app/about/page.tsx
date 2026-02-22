import type { Metadata } from "next";
import { HeroVideoSection } from "@/components/layout/HeroVideoSection";

export const metadata: Metadata = {
  title: "About AirOra - HVAC Experts Since 2005",
  description:
    "AirOra is a team of certified HVAC engineers delivering precision climate control solutions for commercial and industrial facilities across India.",
  alternates: { canonical: "/about" },
};
import { About as AboutSection } from "@/components/sections/About";
import { SectionHeader, IconBadge } from "@/components/shared";
import { Users, History } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <HeroVideoSection
        badge={
          <IconBadge
            icon={<History />}
            label="Our Corporate Legacy"
            className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50"
          />
        }
        title="Engineering Comfort Since 2005"
        subtitle="A legacy of technical excellence in delivering advanced HVAC solutions for India’s most demanding commercial and industrial environments."
        backgroundImage="/images/about.webp"
      />

      <div className="py-12">
        <SectionHeader
          badge={<IconBadge icon={<Users />} label="Organizational Ethos" />}
          heading="Precision in Every Project"
          description="We are not just contractors; we are thermal management engineers dedicated to optimizing your operational environment."
        />
      </div>

      <AboutSection />
    </main>
  );
}
