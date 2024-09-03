interface QuantityProps {
  quantity: number
  id: string
}

export const Quantity = (props: QuantityProps) => {
  return (
    <span className="w-full h-auto flex flex-row items-center justify-center 
    text-xs my-0 p-2 gap-1 lg:h-[50px]">
     {props.quantity} news results for: <u> {props.id} </u>
    </span>
  )
}