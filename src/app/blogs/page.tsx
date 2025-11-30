'use client';

import { HeroVideoSection } from '@/components/layout/HeroVideoSection';
import { SectionHeader, Card } from '@/components/shared';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

const blogs = [
  {
    title: 'Top 5 Tips for Energy Efficiency this Summer',
    excerpt:
      'Learn how to keep your home cool while saving on energy bills with these simple yet effective tips.',
    date: 'May 15, 2024',
    author: 'John Smith',
    category: 'Tips & Tricks',
  },
  {
    title: 'The Importance of Regular HVAC Maintenance',
    excerpt:
      'Discover why routine maintenance is crucial for extending the lifespan of your system and preventing costly repairs.',
    date: 'April 22, 2024',
    author: 'Sarah Johnson',
    category: 'Maintenance',
  },
  {
    title: 'Choosing the Right Air Conditioner for Your Home',
    excerpt:
      'A comprehensive guide to understanding different AC types and finding the perfect match for your space.',
    date: 'March 10, 2024',
    author: 'Mike Williams',
    category: 'Guides',
  },
];

export default function BlogsPage() {
  return (
    <>
      <HeroVideoSection
        badge="Our Blog"
        title="Latest News & Insights"
        subtitle="Stay updated with the latest trends, tips, and news from the HVAC industry."
      />

      <main className="container mx-auto max-w-7xl py-20 px-6">
        <SectionHeader
          badge="Blog"
          heading="Recent Articles"
          description="Explore our collection of articles designed to help you make informed decisions about your indoor climate comfort."
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
