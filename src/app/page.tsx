import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { SectionSkeleton } from '@/components/shared/SectionSkeleton';

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About), {
  loading: () => <SectionSkeleton />
});
const Stats = dynamic(() => import('@/components/sections/Stats').then(mod => mod.Stats), {
  loading: () => <SectionSkeleton />
});
const Blogs = dynamic(() => import('@/components/sections/Blogs').then(mod => mod.Blogs), {
  loading: () => <SectionSkeleton />
});
const ContactForm = dynamic(() => import('@/components/sections/ContactForm').then(mod => mod.ContactForm), {
  loading: () => <SectionSkeleton />
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Stats />
      <Blogs />
      <ContactForm />
    </main>
  );
}
