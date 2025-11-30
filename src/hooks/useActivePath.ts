'use client';

import { usePathname } from 'next/navigation';

export function useActivePath() {
    const pathname = usePathname();

    const checkActive = (path: string) => {
        if (path === '/' && pathname !== '/') {
            return false;
        }
        return pathname === path;
    };

    return checkActive;
}
