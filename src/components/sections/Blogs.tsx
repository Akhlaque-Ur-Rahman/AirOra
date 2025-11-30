'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionHeader, Card, IconBadge } from '@/components/shared';
import { Calendar, User, Newspaper } from 'lucide-react';

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

export function Blogs() {
  return (
    <section id="blogs" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={<IconBadge icon={<Newspaper />} label="Our Blog" />}
          heading="Latest News & Insights"
          description="Stay updated with the latest trends, tips, and news from the HVAC industry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card variant="hover-lift" className="flex flex-col h-full">
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
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/blogs">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#1CB9F6] text-[#1CB9F6] hover:bg-[#1CB9F6] hover:text-white"
            >
              View All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
