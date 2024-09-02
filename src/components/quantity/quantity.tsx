interface QuantityProps {
  quantity: number
  id: string
}

export const Quantity = (props: QuantityProps) => {
  return (
    <span className="w-full h-auto flex flex-row items-center justify-center bg-sky-100 text-xs 
    text-sky-900 my-0 p-2 gap-1 lg:h-[30px]">
     {props.quantity} news results for: <u> {props.id} </u>
    </span>
  )
}