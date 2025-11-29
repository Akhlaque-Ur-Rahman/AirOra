import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0B1C3F] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#0B1C3F] mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button asChild className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
