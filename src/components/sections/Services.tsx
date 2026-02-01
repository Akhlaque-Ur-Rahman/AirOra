'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader, IconWrapper, CardGrid, Card, IconBadge } from '@/components/shared';
import { services } from '@/data/services';
import { Wrench } from 'lucide-react';

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={<IconBadge icon={<Wrench />} label="Engineering Capabilities" />}
          heading="End-to-End Commercial HVAC Solutions"
          description="From load analysis to lifecycle maintenance, we engineer robust HVAC systems that maximize thermal comfort and operational efficiency."
        />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="p-0 overflow-hidden flex flex-col h-full">
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3F]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <IconWrapper icon={service.icon} size="sm" variant="circle" className="bg-white shadow-lg" />
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {!service.image && <IconWrapper icon={service.icon} size="md" />}

                  <h3 className="text-xl font-semibold text-[#0B1C3F] mb-3 mt-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#1CB9F6] hover:text-[#0B1C3F] transition-colors group/link"
                  >
                    Learn More
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        
      </div>
      
    </section>
  );
}
