import { Date } from "@/helpers/utils/date"
import { Hours } from "@/helpers/utils/hours"

interface PublishedProps {
  published?: string
}
export const Published = (props: PublishedProps) => {
  return (
    <>
      {props.published &&
        <div className="w-fit h-auto flex flex-col items-center 
        justify-start gap-1 text-gray-500 sm:flex-row">
          <i className="text-xs"> {Date(props.published)} </i>
          <i className="text-xs"> {Hours(props.published)} </i>
        </div>
      }
    </>
  )
}