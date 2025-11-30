'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface IconBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function IconBadge({ icon, label, className }: IconBadgeProps) {
  return (
    <motion.div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1CB9F6]/40 bg-[#1CB9F6]/20 text-[#1CB9F6]',
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}
