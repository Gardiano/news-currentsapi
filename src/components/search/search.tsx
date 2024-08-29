import { Inputs } from "../input/input"
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { NavigationLink } from "../navigation/navigationLink";
import { useSearch } from "../hooks/useSearch";

export const Search = () => {
  const { value, handleChange } = useSearch();

  return (
    <div className="w-full max-w-[1144px] h-full flex flex-row justify-center mb-4">
      <div className="w-[calc(100%-40px)] h-fit flex flex-row justify-center items-center">
        <Inputs
          className="w-full h-[36px] flex bg-zinc-300 border-0 border-b border-zinc-400
          rounded-none text-zinc-900 shadow-none sm:h-[42px]"
          type='text'
          value={value}
          onChange={handleChange}
          placeholder="Searching by keywords"
        />

        <Button
          disabled={value?.length < 4}
          className="w-[64px] h-[36px] m-0 p-0 bg-zinc-600 rounded-tl-none rounded-bl-none hover:bg-zinc-600 sm:h-[42px]">
          <NavigationLink
            url={`/news/searched/${value}`}
            className="w-full h-full flex items-center justify-center text-white 
              text-xs bg-transparent
             sm:bg-zinc-600 rounded-none sm:rounded-tr-sm sm:rounded-br-sm">
            <SearchIcon className="w-[44px] h-[16px] sm:bg-zinc-600" />
          </NavigationLink>
        </Button>
      </div>
    </div>
  )
}