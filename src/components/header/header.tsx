import { NavigationLink } from "../navigation/navigationLink";

export const Header = () => {
  
  const links = ['world', 'politics', 'sports', 'entertainment'];

  return (
    <header className="w-full h-full py-4 flex flex-col items-center justify-center bg-zinc-900">
      <nav className="w-[calc(100%-28px)] max-w-[1110px] h-full flex flex-row items-center">
        <div className="w-full max-w-1/2 h-full flex items-center">
          <NavigationLink
            url="/news"
            className="text-slate-100 flex flex-row gap-2 w-fit h-fit text-2xl font-times">
            News
          </NavigationLink>
        </div>
        <div className="hidden w-full max-w-1/2 h-full items-center justify-end gap-8 sm:flex">
          {links.map((link, index) => (
            <NavigationLink
              key={index}
              url={`/news/${link}`}
              className='text-sm font-prata capitalize text-slate-100'>
              {link}
            </NavigationLink>
          ))}
        </div>
      </nav>
    </header>
  )
}