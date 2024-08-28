import { useNavigate } from "react-router-dom";
import { themes } from "../../constants/themes"
import { Carousel, CarouselContent } from "../ui/carousel";
import { NavigationLink } from "./navigationLink";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface NavigationMenuProps {
  className?: string
  value: string
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  const routes = useParams();
  const navigate = useNavigate();
  const [routeValue, setRouteValue] = useState('world');

  const handleNavigation = (theme: string) => {
    const toNavMenu = document.getElementById('top-of-navigation-menu')?.offsetTop;
    const scrollingToTop = window.scrollTo({ top: toNavMenu, behavior: "smooth" });
    navigate(`/news/${theme}`);
    return scrollingToTop
  };

  useEffect(() => {
    focus();
  }, [routes]);

  const focus = () => {
    const route_value = routes.id;
    const filtered = themes.filter((theme => theme === route_value));
    if (filtered)
      setRouteValue(filtered[0]);
  }

  return (
    <nav
      className={`w-[calc(100%-38px)] max-w-[1080px] mx-auto h-fit flex 
      mb-4 bg-white rounded-t-sm pl-0 md:w-full ${props.className}`} >
      <Carousel className="w-full h-fit mx-auto overflow-x-auto p-0 
      border-b border-zinc-400 carousel-shadow-left"
        style={{ scrollBehavior: 'smooth' }}>
        <CarouselContent id='top-of-navigation-menu' className="pl-4 h-full">
          {themes.map((theme, index) => (
            <NavigationLink
              key={index}
              className={`flex items-center flex-shrink-0 h-[48px] 
              font-times text-black px-2 hover:bg-zinc-100 capitalize
              ${routeValue === theme ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleNavigation(theme)}>
              {theme}
            </NavigationLink>
          ))}
        </CarouselContent>
      </Carousel>
    </nav>
  );
};
