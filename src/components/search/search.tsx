import { ChangeEvent, useState } from "react"
import { Inputs } from "../input/input"
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Search = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    // adicionar um sheet component para renderizar o search component;
    <div className="w-full h-[50px] flex flex-row items-center justify-end sm:justify-center">
      <Inputs
        className="hidden w-full max-w-[400px] h-[34px] 
        border-0 border-b border-zinc-700 bg-zinc-800 rounded-xs text-white sm:flex"
        type='text'
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
      <Button
        onClick={() => { console.log('aaa') } }
        className="h-[34px] mr-2 bg-transparent rounded-tl-none rounded-bl-none 
        hover:bg-transparent sm:bg-zinc-600">
        <SearchIcon />
      </Button>
    </div>
  )
}