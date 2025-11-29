import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className
}: BadgeProps) {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
  };

  const variantClasses = {
    default: 'bg-[#1CB9F6]/10 text-[#1CB9F6]',
    outlined: 'bg-[#1CB9F6]/10 text-[#1CB9F6] border border-[#1CB9F6]/50',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
