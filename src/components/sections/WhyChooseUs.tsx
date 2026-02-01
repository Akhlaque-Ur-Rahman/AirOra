'use client';

import { motion } from 'motion/react';
import { SectionHeader, IconWrapper, CardGrid, IconBadge } from '@/components/shared';
import Image from 'next/image';
import { features } from '@/data/features';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={<IconBadge icon={<CheckCircle />} label="The AirOra Advantage" />}
          heading="Engineered for Performance & Reliability"
          description="Leveraging advanced airflow dynamics and energy-efficient technologies to deliver superior indoor environmental quality."
        />

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6"
            >
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <IconWrapper
                  icon={feature.icon}
                  variant="gradient"
                  size="lg"
                  className="mb-6 shadow-lg"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0B1C3F] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0B1C3F] rounded-3xl overflow-hidden">
          <div className="p-8 lg:p-16">
            <h3 className="text-3xl font-bold text-white mb-6">
              Precision Inspections & Technical Excellence
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Our engineers use advanced diagnostic tools to ensure every system 
              operates at peak efficiency. From pressure balancing to thermal 
              imaging, we leave no detail to chance.
            </p>
            <div className="space-y-4">
              {[
                'NIST-calibrated measurement tools',
                'Advanced refrigerant diagnostic systems',
                'Real-time airflow analysis',
                'Comprehensive system health reports'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-[#1CB9F6] mr-3" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-full min-h-[500px]">
            <Image
              src="/images/7.webp"
              alt="Technical pressure gauge inspection"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            {/* Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3F] via-transparent to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3F] via-transparent to-transparent lg:hidden block" />
          </div>
        </div>
      </div>
    </section>
  );
}
