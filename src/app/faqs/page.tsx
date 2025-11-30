'use client';

import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { SectionHeader, IconBadge } from '@/components/shared';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire metropolitan area and surrounding suburbs. Please contact us to confirm if we cover your specific location.',
  },
  {
    question: 'Do you offer emergency services?',
    answer:
      'Yes, we offer 24/7 emergency HVAC repair services for urgent issues that cannot wait until regular business hours.',
  },
  {
    question: 'How often should I have my HVAC system serviced?',
    answer:
      'We recommend scheduling maintenance at least twice a year—once in the spring for your cooling system and once in the fall for your heating system.',
  },
  {
    question: 'What brands do you work with?',
    answer:
      'We work with all major HVAC brands and are certified installers for top manufacturers, ensuring high-quality service regardless of your system type.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'Yes, we offer flexible financing plans to help make new installations and major repairs more affordable. Contact us for details.',
  },
];

export default function FAQsPage() {
  return (
    <>
      <HeroVideoSection
        badge={<IconBadge icon={<HelpCircle />} label="FAQs" className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50" />}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, maintenance, and more."
      />

      <main className="container mx-auto max-w-7xl py-20 px-6">
        <SectionHeader
          badge={<IconBadge icon={<HelpCircle />} label="Support" />}
          heading="How Can We Help?"
          description="Browse through our most frequently asked questions below. If you can't find what you're looking for, feel free to contact us."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-[#0B1C3F]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
}
