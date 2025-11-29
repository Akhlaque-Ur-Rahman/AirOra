import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export function ContactInfo({
  icon: Icon,
  text,
  className
}: ContactInfoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}
