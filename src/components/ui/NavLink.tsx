'use client';

import Link from 'next/link';
import { useActivePath } from '@/hooks/useActivePath';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const isActive = useActivePath();
  const active = isActive(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'transition-colors duration-200',
        active
          ? 'text-[#1CB9F6] font-semibold bg-[#1CB9F6]/10 px-3 py-1 rounded-full'
          : 'text-gray-600 hover:text-[#1CB9F6] px-3 py-1',
        className
      )}
    >
      {children}
    </Link>
  );
}
