import { Skeleton } from "./skeleton";

const SkeletonBlock = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-8">
        <Skeleton className="rounded-6 h-40 w-full" />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Skeleton className="h-[50px] w-[50px] rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-[20px] w-[150px] rounded-full" />
              <Skeleton className="h-[10px] w-[100px] rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Skeleton className="h-[50px] w-[50px] rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-[20px] w-[150px] rounded-full" />
              <Skeleton className="h-[10px] w-[100px] rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Skeleton className="h-[50px] w-[50px] rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-[20px] w-[150px] rounded-full" />
              <Skeleton className="h-[10px] w-[100px] rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Skeleton className="h-[50px] w-[50px] rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-[20px] w-[150px] rounded-full" />
              <Skeleton className="h-[10px] w-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlock;
