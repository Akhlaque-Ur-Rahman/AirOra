import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0B1C3F] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#0B1C3F] mb-4">
          Resource Not Located
        </h2>
        <p className="text-gray-600 mb-8">
          The requested engineering document or system page could not be retrieved. It may have been moved or archived.
        </p>
        <Button asChild className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white">
          <Link href="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
