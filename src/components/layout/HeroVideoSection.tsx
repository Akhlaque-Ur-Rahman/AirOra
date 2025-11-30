'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/shared';

interface HeroVideoSectionProps {
  title: string;
  subtitle: string;
  badge?: string | React.ReactNode;
  children?: React.ReactNode;
}

export function HeroVideoSection({
  title,
  subtitle,
  badge,
  children,
}: HeroVideoSectionProps) {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://videos.pexels.com/video-files/856982/856982-hd_1280_720_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Matching Hero.tsx style but adapted for centered content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C3F]/90 via-[#0B1C3F]/80 to-[#0B1C3F]/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {badge && (
            <div className="mb-6 flex justify-center">
              {typeof badge === 'string' ? (
                <Badge variant="outlined" className="bg-[#1CB9F6]/20 text-white border-[#1CB9F6]/50">
                  {badge}
                </Badge>
              ) : (
                badge
              )}
            </div>
          )}

          <h1
            className="text-white mb-6 text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          {children && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
