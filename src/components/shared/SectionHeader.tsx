'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge: string | React.ReactNode;
  heading: string | React.ReactNode;
  description: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  heading,
  description,
  align = 'center',
  className
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={cn('mb-4', align === 'center' && 'flex justify-center')}>
        {typeof badge === 'string' ? (
          <span className="inline-block px-4 py-2 bg-[#1CB9F6]/10 text-[#1CB9F6] rounded-full">
            {badge}
          </span>
        ) : (
          badge
        )}
      </div>
      <h2 className="text-[#0B1C3F] mb-4 text-3xl md:text-4xl font-bold">
        {heading}
      </h2>
      <p className={cn(
        'text-gray-600',
        align === 'center' && 'max-w-2xl mx-auto'
      )}>
        {description}
      </p>
    </motion.div>
  );
}
