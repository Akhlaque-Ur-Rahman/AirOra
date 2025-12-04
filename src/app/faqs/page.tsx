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
    question: 'What is your operational coverage area for industrial projects?',
    answer:
      'We execute turnkey HVAC projects across major industrial corridors in India. For specific site feasibility, please consult our project management team.',
  },
  {
    question: 'Do you provide 24/7 critical system support?',
    answer:
      'Yes, we offer round-the-clock emergency response and rapid mobilization for mission-critical cooling systems in data centers, healthcare facilities, and manufacturing plants.',
  },
  {
    question: 'What are the recommended maintenance intervals for commercial VRF systems?',
    answer:
      'We adhere to OEM guidelines and ASHRAE standards, typically recommending comprehensive preventive maintenance quarterly, with monthly filter checks for high-load environments.',
  },
  {
    question: 'Are your engineers certified for specialized equipment?',
    answer:
      'Our technical team comprises ISHRAE-certified engineers and factory-trained technicians proficient in handling major global HVAC brands including Daikin, Carrier, Trane, and Mitsubishi Electric.',
  },
  {
    question: 'Do you offer energy performance contracting?',
    answer:
      'Yes, we provide ROI-focused energy retrofit solutions and financing models designed to offset capital expenditure through operational savings.',
  },
];

export default function FAQsPage() {
  return (
    <>
      <HeroVideoSection
        badge={<IconBadge icon={<HelpCircle />} label="Technical Support" className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50" />}
        title="Engineering FAQs"
        subtitle="Technical clarifications regarding our operational protocols, maintenance standards, and project execution methodologies."
        backgroundImage="/images/faq.webp"
      />

      <main className="container mx-auto max-w-7xl py-20 px-6">
        <SectionHeader
          badge={<IconBadge icon={<HelpCircle />} label="Common Queries" />}
          heading="Technical & Operational Inquiries"
          description="Find answers to frequently asked questions about our commercial and industrial HVAC engineering services."
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
