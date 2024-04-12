import { Skeleton } from '@/components/skeleton'

export default async function Loading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <Skeleton
            key={index}
            className="group relative first-of-type:h-[856px] first-of-type:col-span-6 first-of-type:row-span-6 col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          />
        )
      })}
    </div>
  )
}
