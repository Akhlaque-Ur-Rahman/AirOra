'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SectionHeader, IconWrapper, CardGrid, Card } from '@/components/shared';
import { services } from '@/data/services';

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
          badge="Our Services"
          heading="Comprehensive HVAC Solutions"
          description="From installation to maintenance, we offer complete HVAC services designed to meet your unique requirements with precision and care."
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
              <Card variant="hover-lift">
                <IconWrapper icon={service.icon} size="md" />

                <h3 className="text-xl font-semibold text-[#0B1C3F] mb-3 mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-[#1CB9F6] hover:text-[#0B1C3F] transition-colors group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? We&apos;re here to help.
          </p>
          <Button
            size="lg"
            className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white"
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
