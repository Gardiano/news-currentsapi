import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent } from "../ui/carousel";
import { NavigationLink } from "./navigationLink";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavigationMenu = () => {
  const routes = useParams();
  const navigate = useNavigate();
  const [routeValue, setRouteValue] = useState('world');

  const handleNavigation = (theme: string) => {
    navigate(`/news/${theme}`);
  };

  const themes: string[] = [
   "latest news", "world", "politics", "regional", "business", "finance", "sports", "technology",
    "lifestyle", "science", "entertainment", "opinion", "food",
    "fashion", "travel", "economy", "environment", "art", "music", "movie"
  ];

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
    <nav className='w-[calc(100%-38px)] max-w-[1144px] mx-auto h-fit flex 
      border-b border-b-slate-900 mb-4 bg-white rounded-t-sm pl-1'>
      <Carousel className="w-full h-fit mx-auto overflow-x-auto carousel-shadow-left"
        style={{ scrollBehavior: 'smooth' }}>
        <CarouselContent className="pl-2">
          {themes.map((theme, index) => (
            <NavigationLink
              key={index}
              className={`flex-shrink-0 h-fit font-times text-black px-2 py-1 mx-1
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
