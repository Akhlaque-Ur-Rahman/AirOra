'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IconBadge } from '@/components/shared';
import Link from 'next/link';
import { ArrowRight, Phone, Award } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: ['easeOut'] as any },
    },
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-start lg:items-center py-24 lg:pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=2000&q=80"
          alt="HVAC Industrial Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3F]/95 via-[#0B1C3F]/85 to-[#0B1C3F]/70" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 mt-6">
            <IconBadge 
              icon={<Award />} 
              label="Premier Industrial & Commercial HVAC Engineering" 
              className="bg-[#1CB9F6]/20 border-[#1CB9F6]/40"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-white mb-6 text-4xl lg:text-6xl font-bold"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            Precision-Engineered Climate Control{' '}
            <span className="text-[#1CB9F6]">Solutions</span> for India’s Modern
            Infrastructure
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed"
          >
            Delivering high-performance commercial HVAC solutions and industrial
            cooling systems tailored to India’s climate conditions. Optimizing
            building efficiency and airflow dynamics since 2005.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#1CB9F6] hover:bg-[#1CB9F6]/90 text-white group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white "
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-8 text-white/80"
          >
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">500+</div>
              <div>Commercial Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">18+</div>
              <div>Years Engineering</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">100%</div>
              <div>Client Retention</div>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
