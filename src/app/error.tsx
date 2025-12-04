'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#0B1C3F] mb-4">
          System Encountered an Exception
        </h2>
        <p className="text-gray-600 mb-8">
          An unexpected technical error occurred. Our engineering team has been automatically notified.
        </p>
        <Button
          onClick={() => reset()}
          className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white"
        >
          Retry Operation
        </Button>
      </div>
    </div>
  );
}
