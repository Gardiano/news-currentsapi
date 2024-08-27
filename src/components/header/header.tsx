
import { SheetMenu } from "../menu/menu";
import { NavigationLink } from "../navigation/navigationLink";
import { NavSearch } from "../search/navSearch";

export const Header = () => {

  const links = ['world', 'politics', 'sports', 'entertainment'];

  return (
    <header className="w-full h-[58px] fixed top-0 py-4 flex flex-col items-center justify-center bg-zinc-900 z-50">
      <nav className="w-full max-w-[1110px] h-full flex flex-row items-center justify-between sm:w-full md:gap-2">
        <div className="w-full h-auto flex flex-row gap-4 items-center justify-between lg:justify-start">
          <div className="w-auto flex items-center">
            <SheetMenu />
          </div>
          <div className="w-auto h-full flex items-center sm:justify-start">
            <NavigationLink
              url="/news"
              className="text-slate-100 flex flex-row gap-2 text-xl font-times text-center sm:text-2xl">
              NEWS
            </NavigationLink>
          </div>
          <div className="w-auto h-[58px] flex flex-row items-center justify-end md:justify-start">
            <NavSearch />
          </div>
        </div>
        <div className="hidden w-auto max-w-1/2 h-full items-center justify-end gap-8 mr-4 md:flex">
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