import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent } from "../ui/carousel";
import { NavigationLink } from "./navigationLink";

export const NavigationMenu = () => {
  const navigate = useNavigate();

  const handleNavigation = (theme: string) => {
    navigate(`/news/${theme}`);
  };

  const themes = [
    "world", "politics", "regional", "business", "finance", "sports", "technology",
    "lifestyle", "science", "entertainment", "health", "opinion", "food",
    "fashion", "travel", "economy", "environment", "art", "music", "movie"
  ];

  return (
    <nav className="w-[calc(100%-38px)] max-w-[1080px] mx-auto h-fit flex border-b border-b-slate-900 mb-4">
      <Carousel className="w-full h-fit mx-auto overflow-x-auto"
        style={{ scrollBehavior:'smooth'}}>
        <CarouselContent className="pl-2">
          {themes.map((theme, index) => (
            <NavigationLink
              key={index}
              className="flex-shrink-0 h-fit font-times text-slate-600 px-2 py-1 mx-1"
              onClick={() => handleNavigation(theme)}>
              {theme}
            </NavigationLink>
          ))}
        </CarouselContent>
      </Carousel>
    </nav>
  );
};
