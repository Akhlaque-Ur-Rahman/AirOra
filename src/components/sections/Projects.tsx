'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionHeader, Badge } from '@/components/shared';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Our Projects"
          heading="Featured Case Studies"
          description="Explore our portfolio of successful HVAC installations and solutions across various industries and applications."
        />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge size="sm" className="bg-[#1CB9F6] text-white border-0">
                    {project.category}
                  </Badge>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#0B1C3F] rounded-lg font-medium">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1C3F] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#1CB9F6] text-[#1CB9F6] hover:bg-[#1CB9F6] hover:text-white"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
