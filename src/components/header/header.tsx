import { NavigationLink } from "../navigation/navigationLink"
import bg from '../../assets/logo4.jpg'
export const Header = () => {
  // const links = ['politics', 'sports', 'tech', 'entertainment']
  return (
    <header className="w-full h-[85px] flex flex-row items-center justify-center 
    ">
      <nav className="w-[calc(100%-28px)] max-w-[1110px] h-full flex flex-row items-center">
        <div className="w-full max-w-1/2 h-full flex items-center">
          <NavigationLink className="flex flex-row gap-2 w-fit h-fit text-2xl font-times" url="/">
            <img src={bg} alt="logo" className=" w-[80px] h-[30px]" /> News
          </NavigationLink>
        </div>
        {/* <div className="w-full max-w-1/2 h-full flex items-center justify-end gap-8">
          {links.map((link, index) => (
            <NavigationLink
              key={index}
              className="text-lg font-bold" url={`/${link}`}>
              {link}
            </NavigationLink>
          ))}
        </div> */}
      </nav>
    </header>
  )
}