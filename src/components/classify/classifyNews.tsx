import { classifyNewsByDate } from "@/helpers/utils/classify";

interface typeNewsProps {
  type: string
}

export const ClassifyNews = (props: typeNewsProps) => {
  return (
    <>
      {props.type && <b className="text-xs text-red-700">{classifyNewsByDate(props.type)} </b>}
    </>
  )
}