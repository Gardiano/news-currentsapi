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
    <main>
      <Theme theme={props.theme} />
      <NavigationMenu />
      <section className="w-full max-w-[1144px] mx-auto gap-4 
        grid grid-cols-1 lg:grid-cols-2 sm:grid-rows-1 sm:p-0">
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
              description={data.description}
              imageSize="w-full h-auto sm:h-[437px]
              sm:rounded-bl-none sm:rounded-br-none sm:rounded-sm"
              cardHeaderStyles='w-full h-full p-4 text-md sm:text-lg lg:text-xl'
              className='w-full h-full flex-col flex justify-center'
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
              category={data.category}
              published={data.published}
              imageSize="w-full h-auto sm:h-[170px]
              sm:rounded-bl-none sm:rounded-br-none sm:rounded-sm"
              cardHeaderStyles='w-full h-auto p-4 text-md sm:text-lg lg:text-xl'
              className='w-full h-auto flex-col justify-start'
            />
          ))}
        </div>

        <Separator className="w-full border-2 border-slate-500 col-span-full" />

        <div className='px-6 w-full h-full gap-4 grid grid-cols-2 col-span-full
        md:grid-cols-4 xl:grid-cols-4 sm:px-0'>
          {props.data.slice(5, 13).map(data => (
            <Cards
              url={data.url}
              key={data.id}
              image={data.image}
              category={data.category}
              title={data.title}
              published={data.published}
              cardTitleStyles="line-clamp-6"
              imageSize="w-full h-auto sm:h-[146px] 
              sm:rounded-bl-none sm:rounded-br-none sm:rounded-sm"
              cardHeaderStyles='w-full h-auto p-4 text-md sm:text-lg lg:text-xl'
              className='w-full h-full flex-col flex justify-start'
            />
          ))}
        </div>

        <Separator className="w-full border-2 border-slate-500 col-span-full " />

        <div className='w-full h-full mx-auto gap-4 
        grid grid-cols-1 col-span-full' id="paginated-items">
          {props.paginationData?.map(data => (
            <Cards
              key={data.id}
              url={data.url}
              title={data.title}
              image={data.image}
              description={data.description}
              published={data.published}
              cardTitleStyles="w-full sm:w-[90%] line-clamp-6"
              imageSize="w-full h-full max-h-[245px] rounded-none
              sm:max-w-[400px] sm:rounded-tl-none sm:rounded-bl-none sm:rounded-sm"
              cardDescriptionStyles="leading-tight text-sm sm:w-3/4"
              cardHeaderStyles='w-full h-auto p-4 sm:text-lg lg:text-xl sm:px-4 sm:py-6'
              className='w-full h-full flex-col flex justify-start items-center 
              sm:flex-row-reverse'
            />
          ))}
        </div>
      </section>
    </main>
  )
}
