interface SuggestionsProps {
  value: string
}

export const Suggestions = (props: SuggestionsProps) => {
  return (
    <div className="w-full max-w-[1144px] h-full flex flex-col items-center justify-center p-2 mx-auto">
      <div className="w-full max-w-[700px] h-[750px] flex flex-col items-center justify-start font-times">
        <span className="text-red-700 w-full h-fit py-8 flex flex-col items-center justify-center sm:flex-row"> Your search for
          <u className="text-red-400 text-sm px-1">{props.value}</u> returned 0 results
        </span>
        <b className="font-times text-2xl py-4">Suggestions</b>
        <p className="text-zinc-700">Try fewer search words</p>
        <p className="text-zinc-700">Try different search words</p>
        <p className="text-zinc-700">Try more general search words</p>
        <p className="text-zinc-700">Results are sorted by keywords</p>
        <p className="text-zinc-700 text-center">Make sure all the words are spelt correctly</p>
      </div>
    </div>
  )
}