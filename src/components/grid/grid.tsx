import { Separator } from "@radix-ui/react-separator";
import { Cards } from "../card/cards"
import { News } from "../models/news"
import { NavigationMenu } from "../navigation/navigationMenu"
import { Theme } from "../theme/theme"

interface GridProps {
  data: News[];
  paginationData?: News[]
  theme: string;
}

export const Grid = (props: GridProps) => {
  return (
    <main className="flex relative w-full h-full mx-auto flex-col mt-[6.7rem] 
    sm:w-[calc(100%-20px)] lg:mt-0">
      <Theme theme={props.theme} />
      <NavigationMenu className='hidden lg:flex' />
      <section className="w-full h-auto max-w-[1144px] mx-auto gap-4 
        grid grid-cols-1 lg:grid-cols-2 
        sm:max-w-[780px] sm:grid-rows-1 sm:p-0 lg:max-w-[1144px]">
        <div className='px-0 w-full h-full col-span-1'>
          {props.data.slice(0, 1).map(data => (
            <Cards
              key={data.id}
              url={data.url}
              title={data.title}
              image={data.image}
              author={data.author}
              category={data.category}
              published={data.published}
              classifyNews={data.published}
              description={data.description}
              publicationTime={data.published}
              imageSize="w-full h-auto md:h-[440px] lg:h-full
              sm:rounded-bl-none sm:rounded-br-none sm:rounded-sm"
              cardHeaderStyles='w-full h-auto p-4'
              className='w-full h-full flex-col flex'
            />
          ))}
        </div>
        <div className='w-full h-full grid grid-rows-1 sm:grid-cols-2 gap-4 
          col-span-full sm:col-span-1'>
          {props.data.slice(1, 5).map(data => (
            <Cards
              key={data.id}
              url={data.url}
              image={data.image}
              title={data.title}
              published={data.published}
              classifyNews={data.published}
              publicationTime={data.published}
              imageSize="w-full h-auto sm:h-[140px]
              sm:rounded-bl-none sm:rounded-br-none sm:rounded-sm"
              cardHeaderStyles='w-full h-auto p-4'
              className='w-full h-auto flex-col justify-start'
            />
          ))}
        </div>
        <Separator className="w-full border-2 border-slate-500 col-span-full" />
        <div className='px-2 w-full h-full gap-2 grid grid-cols-1 col-span-full
        md:grid-cols-2 xl:grid-cols-4 sm:px-0 lg:gap-4'>
          {props.data.slice(5, 13).map(data => (
            <Cards
              url={data.url}
              key={data.id}
              title={data.title}
              classifyNews={data.published}
              published={data.published}
              cardTitleStyles="line-clamp-6"
              cardHeaderStyles='w-full h-auto p-3'
              className='w-full h-full flex-col flex justify-start'
            />
          ))}
        </div>
        <Separator className="w-full border-2 border-slate-500 col-span-full" id="top-of-pagination" />
        <div className='w-full h-full mx-auto gap-4 
        grid grid-cols-1 col-span-full'>
          {props.paginationData?.map(data => (
            <Cards
              key={data.id}
              url={data.url}
              title={data.title}
              image={data.image}
              published={data.published}
              classifyNews={data.published}
              description={data.description}
              publicationTime={data.published}
              cardTitleStyles="w-full sm:w-[90%] line-clamp-6"
              imageSize="w-full h-full lg:h-[200px] rounded-none
              sm:max-w-[400px] sm:rounded-tl-none sm:rounded-bl-none sm:rounded-sm"
              cardDescriptionStyles="leading-tight text-sm sm:w-3/4"
              cardHeaderStyles='w-full h-auto px-4 py-4 sm:py-4 lg:py-4'
              className='w-full h-auto flex-col flex justify-start items-center 
              sm:flex-row-reverse'
            />
          ))}
        </div>
      </section>
    </main>
  )
}
