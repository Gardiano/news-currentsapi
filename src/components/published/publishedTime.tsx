
import { hours } from "@/helpers/utils/hours"

interface PublishedProps {
  time?: string
}
export const PublicationTime = (props: PublishedProps) => {
  return (
    <>
      {props.time && <i className="text-xs"> {hours(props.time)} </i>}
    </>
  )
}