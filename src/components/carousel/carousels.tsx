import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { News } from "../models/news";
import { CarouselData } from "./carouselData";

interface CarouselProps {
  data: News[]
  theme: string
}

export const CarouselNews = (props: CarouselProps) => {
  return (
    <Carousel className="w-[calc(100%-20px)] max-w-[1100px] h-auto mx-auto">
      <CarouselContent className="w-full h-full ml-0">
        <CarouselItem className="w-full h-full max-w-[92%] mx-0 p-0 mb-2">
          <CarouselData
            data={props.data}
            theme={props.theme}
            startIndex={8}
            endIndex={12}
            lastIndex={13}
          />
        </CarouselItem>

        <CarouselItem className="w-full h-full max-w-[92%]">
          <CarouselData
            data={props.data}
            theme={props.theme}
            startIndex={14}
            endIndex={18}
            lastIndex={19}
          />
        </CarouselItem>

        <CarouselItem className="w-full h-full max-w-[92%]">
        <CarouselData
            data={props.data}
            theme={props.theme}
            startIndex={20}
            endIndex={24}
            lastIndex={25}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden visibility-hidden" />
      <CarouselNext className="hidden visibility-hidden" />
    </Carousel>
  )
}