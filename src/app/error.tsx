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
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button
          onClick={() => reset()}
          className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
