
import { SheetMenu } from "../menu/menu";
import { NavigationLink } from "../navigation/navigationLink";
import { Search } from "../search/search";

export const Header = () => {

  const links = ['world', 'politics', 'sports', 'entertainment'];

  return (
    <header className="w-full h-[58px] fixed top-0 py-4 flex flex-col items-center justify-center bg-zinc-900 z-50">
    <nav className="w-full h-full flex items-center justify-between 
    sm:w-[calc(100%-28px)] sm:max-w-[1110px]">
      <div className="flex items-center absolute left-0">
        <SheetMenu />
      </div>
      <div className="flex justify-center w-[30%] h-full sm:justify-start">
        <NavigationLink
          url="/news"
          className="text-slate-100 flex flex-row gap-2 text-xl font-times text-center sm:text-2xl">
          NEWS
        </NavigationLink>
      </div>
      <div className="w-full h-[58px] flex flex-row items-center">
        <Search />
      </div>
      <div className="hidden sm:flex w-auto max-w-1/2 h-full items-center justify-end gap-8">
        {links.map((link, index) => (
          <NavigationLink
            key={index}
            url={`/news/${link}`}
            className="text-sm font-prata capitalize text-slate-100">
            {link}
          </NavigationLink>
        ))}
      </div>
    </nav>
  </header>
  )
}