'use client';

import { motion } from 'motion/react';
import { SectionHeader, IconWrapper, CardGrid, IconBadge } from '@/components/shared';
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      </div>
    </section>
  );
}
