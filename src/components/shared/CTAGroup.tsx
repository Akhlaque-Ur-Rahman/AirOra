import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAGroupProps {
  primaryText: string;
  primaryAction?: () => void;
  secondaryText?: string;
  secondaryAction?: () => void;
  className?: string;
}

export function CTAGroup({
  primaryText,
  primaryAction,
  secondaryText,
  secondaryAction,
  className
}: CTAGroupProps) {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-4', className)}>
      <Button
        size="lg"
        onClick={primaryAction}
        className="bg-[#1CB9F6] hover:bg-[#1CB9F6]/90 text-white"
      >
        {primaryText}
      </Button>
      {secondaryText && (
        <Button
          size="lg"
          variant="outline"
          onClick={secondaryAction}
          className="border-2 border-[#0B1C3F] text-[#0B1C3F] hover:bg-[#0B1C3F] hover:text-white"
        >
          {secondaryText}
        </Button>
      )}
    </div>
  );
}
