import { SkeletonImage, SkeletonText, SkeletonHeading, SkeletonLabel } from "../Skeleton.jsx";

function CardSkeletonItem() {
  return (
    <div className="flex flex-col gap-0">
      <SkeletonImage className="aspect-[3/3]" />
      <div className="py-4 flex flex-col gap-2">
        <SkeletonHeading className="h-4 w-2/3" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

/** @param {{ count?: number; sectionTitle?: string }} props */
export default function CardSkeleton({ count = 4, sectionTitle }) {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-8">
      <hr className="mb-6 border-t border-gray-200" />
      {sectionTitle && <SkeletonLabel className="mb-6 h-3 w-28" />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <CardSkeletonItem key={i} />
        ))}
      </div>
    </section>
  );
}
