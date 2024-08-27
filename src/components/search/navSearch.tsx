import { Inputs } from "../input/input"
import { SearchIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { NavigationLink } from "../navigation/navigationLink";
import { useSearch } from "../hooks/useSearch";

export const NavSearch = () => {
  const { open, value, handleOpen, handleChange } = useSearch();

  return (
    <div className="w-auto h-full flex flex-row justify-end sm:justify-start">
      {open ?
        <div className="w-full max-w-[1140px] mx-auto h-auto flex flex-row 
        justify-between items-center fixed z-50 sm:left-0 sm:right-0 sm:justify-start">
          <Button
            onClick={handleOpen}
            className="w-[44px] h-[58px] m-0 p-0 rounded-none bg-zinc-600 hover:bg-zinc-700">
            <X className="w-[44px] h-[16px]" />
          </Button>
          <Inputs
            className="w-full h-[56px] bg-zinc-800 border-none
            rounded-none text-white sm:flex"
            type='text'
            value={value}
            onChange={handleChange}
            placeholder="Searching by keywords"
          />
          <Button
            onClick={handleOpen}
            disabled={value?.length < 4}
            className="w-[44px] h-[58px] m-0 p-0 disabled:opacity-100">
            <NavigationLink
              url={`/news/searched/${value}`}
              className="w-full h-full flex items-center justify-center text-white
              text-xs bg-zinc-600 sm:bg-zinc-600">
              <SearchIcon className="w-[44px] h-[16px] bg-iznc-600" />
            </NavigationLink>
          </Button>
        </div> : null
      }

      {!open ?
        <Button
          onClick={handleOpen}
          className="w-[50px] h-[58px] m-0 p-0 border-r border-l bg-transparent rounded-none 
        border-zinc-700 shadow-none outline-none hover:bg-transparent">
          <SearchIcon className="w-[44px] h-[16px]" />
        </Button> : null
      }
    </div>
  )
}