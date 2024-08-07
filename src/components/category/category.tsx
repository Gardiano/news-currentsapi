
interface CategoryProps {
  categories?: string[]
}

export const Category = (props: CategoryProps) => {
  return (
   <>
    {props.categories &&
      <div className="w-fit h-fit flex flex-row items-start justify-start">
        <span className="w-fit h-[fit] text-xs p-[6px] 
        bg-transparent text-slate-500 rounded-sm border border-slate-500">
          {props.categories}
        </span>
      </div> 
    }
   </>
  )
}