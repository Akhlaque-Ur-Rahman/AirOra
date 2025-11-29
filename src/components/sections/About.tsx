'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionHeader, CheckmarkList, CTAGroup } from '@/components/shared';
import { aboutHighlights } from '@/data/about';

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
                src="/images/placeholder.jpg"
                alt="Professional team meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-[#0B1C3F] text-white p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-5xl font-bold text-[#1CB9F6] mb-2">18+</div>
              <div className="text-sm">Years of Excellence</div>
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
              badge="About Us"
              heading={
                <>
                  Leading the Way in{' '}
                  <span className="text-[#1CB9F6]">HVAC Innovation</span>
                </>
              }
              description=""
              align="left"
              className="mb-0"
            />

            <p className="text-gray-600 mb-6 mt-6">
              Since 2005, AirOra has been at the forefront of providing
              cutting-edge heating, ventilation, and air conditioning solutions.
              Our commitment to excellence and customer satisfaction has made us
              the preferred choice for businesses and homeowners alike.
            </p>

            <p className="text-gray-600 mb-8">
              We specialize in designing, installing, and maintaining HVAC
              systems that deliver optimal performance, energy efficiency, and
              long-term reliability. Our team of certified professionals brings
              decades of combined experience to every project.
            </p>

            {/* Highlights List */}
            <CheckmarkList items={aboutHighlights} columns={2} className="mb-8" />

            {/* CTA */}
            <CTAGroup
              primaryText="Learn More About Us"
              secondaryText="View Our Projects"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
