import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '2xl' | '3xl' | '7xl';
}

export function Container({ 
  children, 
  className,
  maxWidth = '7xl'
}: ContainerProps) {
  return (
    <div className={cn(
      'container mx-auto px-6 lg:px-8',
      maxWidth === '2xl' && 'max-w-2xl',
      maxWidth === '3xl' && 'max-w-3xl',
      maxWidth === '7xl' && 'max-w-7xl',
      className
    )}>
      {children}
    </div>
  );
}
