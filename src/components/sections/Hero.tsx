'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/shared';
import { ArrowRight, Phone } from 'lucide-react';

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
    <section id="home" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/856982/856982-hd_1280_720_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
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
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="outlined" className="bg-[#1CB9F6]/20">
              Leading HVAC Solutions Provider
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-white mb-6 text-5xl lg:text-6xl font-bold"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            Innovative Climate Control{' '}
            <span className="text-[#1CB9F6]">Solutions</span> for Modern
            Buildings
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed"
          >
            Expert HVAC installation, maintenance, and repair services for
            commercial, industrial, and residential properties. Delivering
            comfort and efficiency since 2005.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-[#1CB9F6] hover:bg-[#1CB9F6]/90 text-white group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0B1C3F]"
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
              <div>Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">18+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1CB9F6]">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#1CB9F6] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
