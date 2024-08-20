interface ThemeProps {
  theme: string
}
export const Theme = (props: ThemeProps) => {
  return (
    <>{props.theme &&
      <h1 className="hidden w-full max-w-[1144px] h-auto mx-auto justify-center
        font-times text-2xl py-6 capitalize sm:pt-24 sm:text-4xl sm:flex">
        {props.theme}
      </h1>}
    </>
  )
}