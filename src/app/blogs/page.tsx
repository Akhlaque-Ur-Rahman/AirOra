'use client';

import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { SectionHeader, Card } from '@/components/shared';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

const blogs = [
  {
    title: 'Optimizing Chiller Efficiency During Peak Summer Loads',
    excerpt:
      'Strategies for reducing energy consumption in commercial buildings through advanced load management and system calibration.',
    date: 'May 15, 2025',
    author: 'Rajesh Kumar',
    category: 'Energy Efficiency',
  },
  {
    title: 'Lifecycle Benefits of Predictive HVAC Maintenance',
    excerpt:
      'How data-driven maintenance protocols prevent critical system failures and extend asset lifespan in industrial facilities.',
    date: 'April 22, 2025',
    author: 'Priya Sharma',
    category: 'Maintenance',
  },
  {
    title: 'VRF vs. Chilled Water Systems: A Comparative Analysis',
    excerpt:
      'Evaluating the technical merits of Variable Refrigerant Flow systems versus central chillers for large-scale commercial applications.',
    date: 'March 10, 2025',
    author: 'Amit Patel',
    category: 'Technical Guides',
  },
];

export default function BlogsPage() {
  return (
    <>
      <HeroVideoSection
        badge="Technical Insights"
        title="HVAC Engineering Journal"
        subtitle="Expert analysis, industry trends, and technical guides for optimizing building climate systems."
        backgroundImage="/images/blog.webp"
      />

      <main className="container mx-auto max-w-7xl py-20 px-6">
        <SectionHeader
          badge="Knowledge Hub"
          heading="Latest Engineering Articles"
          description="In-depth resources for facility managers and engineers focused on thermal comfort and energy efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} variant="hover-lift" className="flex flex-col h-full">
              <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                <span className="bg-[#1CB9F6]/10 text-[#1CB9F6] px-2 py-1 rounded">
                  {blog.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B1C3F] mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{blog.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
