import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonDemo() {
  return (
    <div className="grid w-full max-w-xl grid-cols-2 gap-6" aria-busy="true" aria-label="Loading screenshots">
      {[0, 1].map((i) => (
        <div key={i} className="flex flex-col gap-3">
          <Skeleton className="aspect-[4/3] rounded-2xl" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      ))}
    </div>
  );
}
