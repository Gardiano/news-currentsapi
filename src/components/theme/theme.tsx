
interface ThemeProps {
  theme: string
}
export const Theme = (props: ThemeProps) => {
  return (
    <>{props.theme &&
      <h1 className="w-full max-w-[1144px] h-auto mx-auto flex justify-center
        font-times text-2xl py-6 capitalize sm:py-14 sm:text-4xl">
        {props.theme}
      </h1>}
    </>
  )
}