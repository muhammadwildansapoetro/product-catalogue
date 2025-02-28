export default function SkeletonCard() {
  return (
    <div className="flex h-full w-full animate-pulse flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-md lg:w-[400px]">
      <div className="h-96 w-full bg-gray-200 lg:h-[400px]" />

      <div className="mt-4 space-y-3">
        <div className="h-6 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        <div className="h-6 w-1/3 rounded bg-gray-200"></div>

        <div className="mt-2 flex items-center gap-2">
          <div className="h-4 w-10 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
