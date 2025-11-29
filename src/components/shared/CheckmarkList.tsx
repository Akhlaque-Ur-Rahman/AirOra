'use client';

import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckmarkListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

export function CheckmarkList({
  items,
  columns = 2,
  className
}: CheckmarkListProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
  };

  return (
    <div className={cn('grid gap-4', columnClasses[columns], className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
        >
          <CheckCircle className="w-5 h-5 text-[#1CB9F6] flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}
