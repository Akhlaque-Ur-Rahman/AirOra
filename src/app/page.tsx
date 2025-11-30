import {
  Hero,
  Services,
  WhyChooseUs,
  About,
  Stats,
  Blogs,
  ContactForm,
} from '@/components/sections';

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
