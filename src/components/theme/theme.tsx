interface ThemeProps {
  theme: string
}
export const Theme = (props: ThemeProps) => {
  return (
    <>{props.theme &&
      <h1 className="hidden w-full h-auto max-w-[1144px] mx-auto justify-center
        items-center font-times text-2xl pt-12 capitalize 
        sm:mt-16 sm:text-4xl md:flex md:my-8 md:pt-0 lg:pt-16">
        {props.theme}
      </h1>}
    </>
  )
}