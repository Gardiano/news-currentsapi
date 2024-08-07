import { Cards } from "../card/cards"
import { News } from "../models/news"

interface CarouselDataProps {
  data: News[]
  theme: string
  startIndex: number
  endIndex: number
  lastIndex: number
}

export const CarouselData = (props: CarouselDataProps) => {
  const sliced = props.data.slice(props.endIndex, props.lastIndex + 2);
  return (
    <div className='w-full max-w-[1110px] h-auto mx-auto grid grid-rows-1 gap-2
      sm:gap-4 sm:pt-8 sm:grid sm:grid-cols-[30%_68%]'>
      <div className="w-full h-full flex flex-row flex-wrap mx-auto content-center justify-center gap-2 md:flex-col">
        <b className="w-full mx-auto font-prata text-lg mt-4 sm:text-4xl sm:mt-0">{props.theme}</b>
        {props.data.slice(props.startIndex, props.endIndex).map((data) => (
          <div key={data.id} className="w-auto h-auto justify-start flex flex-row flex-wrap lg:w-full">
            <Cards
              url={data.url}
              title={data.title}
              image={data.image}
              author={data.author}
              category={data.category}
              published={data.published}
              imageSize="w-full h-full"
              cardHeaderStyles="py-2 px-2"
              cardTitleStyles='text-sm'
              className='w-full h-[315px] p-0 rounded-sm'
            />
          </div>
        ))}
      </div>

      <div className="w-full h-full flex flex-col gap-4 justify-center mb-10">
        {sliced.map((data) => (
          <div key={data.id} className='w-auto h-auto'>
            <Cards
              url={data.url}
              title={data.title}
              image={data.image}
              author={data.author}
              published={data.published}
              category={data.category.map(category => category)}
              imageSize="w-full h-full"
              cardTitleStyles='px-0 py-1 rounded-xl text-md sm:text-lg lg:text-lg'
              cardHeaderStyles='px-4 py-2 h-auto'
              className='w-full h-[350px] gap-2 rounded-sm sm:h-[430px]'
            />
          </div>
        ))}
      </div>
    </div>
  )
}