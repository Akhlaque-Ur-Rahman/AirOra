import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover-lift';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  className
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg p-8 shadow-sm border border-gray-100',
        variant === 'hover-lift' && 'hover:shadow-xl hover:-translate-y-2 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
