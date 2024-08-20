import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"

import { NavigationLink } from "../navigation/navigationLink";

export const SheetMenu = () => {
  const SHEET_SIDES = ["left"] as const;

  const themes: string[] = [
    "latest news", "world", "politics", "regional", "business", "finance", "sports", "technology",
    "lifestyle", "science", "entertainment", "opinion", "food",
    "fashion", "travel", "economy", "environment", "art", "music", "movie"
  ];

  return (
    <nav className="flex flex-col w-[10%] h-fit sm:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className='bg-transparent w-[55px] p-0 m-0 border-none shadow-none hover:bg-transparent'>
              <Menu className='text-slate-200 w-[1.3rem]' />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}
            className="bg-[#171719] py-4 px-0 text-white">
            <SheetHeader>
              <SheetTitle className="text-slate-100 font-times text-sm">NEWS</SheetTitle>
            </SheetHeader>
            <div className="h-full grid py-8 w-full">
              <SheetTrigger asChild>
                <>
                  <Select>
                    <SelectTrigger
                      className="w-[99%] border-0 border-t border-b border-zinc-600 rounded-none">
                      <SelectValue placeholder="News" />
                    </SelectTrigger>
                    <SelectContent dir="ltl"
                      className="bg-[#171719] text-white flex flex-col flex-wrap w-[80%] border-none">
                      {themes.map(theme => (
                        <div key={theme}>
                          <SheetClose
                            asChild
                            className="w-auto h-[30px] flex flex-col flex-wrap border-b border-zinc-400">
                            <NavigationLink
                              url={`/news/${theme}`}
                              className="w-fit text-white text-sm font-thin 
                              capitalize border-b border-zinc-600 pl-2 pt-2">
                              {theme}
                            </NavigationLink>
                          </SheetClose>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </nav>
  )
}