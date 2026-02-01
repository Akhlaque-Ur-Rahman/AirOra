import { Skeleton } from "@/components/ui/skeleton";

export function SectionSkeleton() {
  return (
    <section className="py-24 bg-white min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 mb-16">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-64 lg:w-96" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-4">
              <Skeleton className="aspect-video w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
