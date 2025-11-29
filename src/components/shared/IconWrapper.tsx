import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconWrapperProps {
  icon: LucideIcon;
  variant?: 'square' | 'circle' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconWrapper({
  icon: Icon,
  variant = 'square',
  size = 'md',
  className
}: IconWrapperProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const variantClasses = {
    square: 'bg-[#1CB9F6]/10 rounded-lg',
    circle: 'bg-[#1CB9F6]/10 rounded-full',
    gradient: 'bg-gradient-to-br from-[#1CB9F6] to-[#0B1C3F] rounded-full',
  };

  const iconColorClasses = {
    square: 'text-[#1CB9F6]',
    circle: 'text-[#1CB9F6]',
    gradient: 'text-white',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon className={cn(iconSizeClasses[size], iconColorClasses[variant])} />
    </div>
  );
}
