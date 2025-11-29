import { cn } from '@/lib/utils';

interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 4 | 6 | 8 | 12;
  className?: string;
}

export function CardGrid({
  children,
  columns = 3,
  gap = 8,
  className
}: CardGridProps) {
  const columnClasses = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  const gapClasses = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    12: 'gap-12',
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2',
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
