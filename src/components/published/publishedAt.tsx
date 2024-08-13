
import { Date } from "@/helpers/utils/date"

interface PublishedProps {
  date?: string
}
export const PublishedAt = (props: PublishedProps) => {
  return (
    <>
      {props.date && <i className="text-xs"> {Date(props.date)} </i>}
    </>
  )
}