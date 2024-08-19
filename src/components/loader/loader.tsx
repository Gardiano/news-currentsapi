import { Skeleton } from "../ui/skeleton"

export const Loader = () => {
  return (
    <div className="w-full max-w-[1144px] h-full my-6 mx-auto gap-4 flex flex-col mt-20 z-10 items-center justify-center">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className='w-[calc(100%-20px)] h-[257px] bg-slate-400 rounded-none' />
      ))}
    </div>
  )
}