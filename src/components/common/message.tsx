interface MessageProps {
  message: string
}

export const Message = (props: MessageProps) => {
  return (
    <h1 className="w-full max-w-[300px] h-fit flex items-center justify-center text-md mx-auto
    text-red-700 text-center mt-24 mb-4 px-4 sm:text-lg">
      {props.message}
    </h1>
  )
}