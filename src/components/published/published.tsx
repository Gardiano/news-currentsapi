import { Date } from "@/helpers/utils/date"
import { Hours } from "@/helpers/utils/hours"

interface PublishedProps {
  published?: string
}
export const Published = (props: PublishedProps) => {
  return (
    <>
      {props.published &&
        <div className="w-fit h-auto flex flex-row items-center 
        justify-start gap-1 text-gray-500">
          <i className="text-xs"> {Date(props.published)} </i>
          <i className="text-xs"> {Hours(props.published)} </i>
        </div>
      }
    </>
  )
}