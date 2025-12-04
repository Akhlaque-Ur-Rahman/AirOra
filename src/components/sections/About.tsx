'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionHeader, CheckmarkList, CTAGroup, IconBadge } from '@/components/shared';
import { aboutHighlights } from '@/data/about';
import { UsersRound } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Professional team meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute bottom-4 right-4 lg:-bottom-8 lg:-right-8 bg-[#0B1C3F] text-white p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-5xl font-bold text-[#1CB9F6] mb-2">18+</div>
              <div className="text-sm">Years of Engineering Leadership</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              badge={<IconBadge icon={<UsersRound />} label="Corporate Profile" />}
              heading={
                <>
                  Pioneering Advanced{' '}
                  <span className="text-[#1CB9F6]">HVAC Engineering</span> in India
                </>
              }
              description=""
              align="left"
              className="mb-0"
            />

            <p className="text-gray-600 mb-6 mt-6">
              Established in 2005, AirOra has evolved into India’s foremost
              authority on precision climate control. We engineer bespoke
              heating, ventilation, and air conditioning infrastructures for the
              commercial and industrial sectors.
            </p>

            <p className="text-gray-600 mb-8">
              Our expertise encompasses the design, implementation, and
              management of complex VRF/VRV systems and central cooling plants.
              We prioritize energy efficiency and system longevity, ensuring
              optimal performance under peak load conditions.
            </p>

            {/* Highlights List */}
            <CheckmarkList items={aboutHighlights} columns={2} className="mb-8" />

            {/* CTA */}
            <CTAGroup
              primaryText="Learn More About Us"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
