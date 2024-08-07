import { Cards } from "../card/cards"
import { News } from "../models/news"
import { NavigationMenu } from "../navigation/navigationMenu"
import { Theme } from "../theme/theme"

interface GridProps {
  data: News[];
  paginationData?: News[]
  theme: string;
  previousPage?: () => void;
  nextPage?: () => void;
  pages?: number;
  totalPages?: number;
}

export const Grid = (props: GridProps) => {
  return (
    <main>
      <Theme theme={props.theme} />
      <NavigationMenu />
      <section className="pt-0 w-full max-w-[1144px] mx-auto gap-4 
        grid grid-cols-1 lg:grid-cols-2 sm:grid-rows-1 sm:p-4">
        <div className='px-4 w-full h-full col-span-1'>
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
              imageSize="w-full h-auto sm:h-[410px] sm:rounded-sm"
              cardHeaderStyles='w-full h-full p-3 text-md sm:text-lg lg:text-xl'
              className='w-full flex-col rounded-none pb-0 flex justify-center'
            />
          ))}
        </div>

        <div className='px-4 w-full h-full grid grid-rows-1 sm:grid-cols-2 gap-4 
        col-span-full sm:col-span-1'>
          {props.data.slice(1, 5).map(data => (
            <Cards
              key={data.id}
              url={data.url}
              image={data.image}
              title={data.title}
              category={data.category}
              published={data.published}
              imageSize="w-full h-full sm:w-auto sm:h-[146px] sm:rounded-sm"
              cardHeaderStyles='w-full h-auto p-3 text-md sm:text-lg lg:text-xl'
              className='p-0 w-full h-auto flex-col justify-start pb-0 rounded-sm
            '
            />
          ))}
        </div>

        <div className='px-4 w-full h-full gap-4 grid  grid-cols-2 col-span-full
        md:grid-cols-4 xl:grid-cols-4'>
          {props.data.slice(5, 13).map(data => (
            <Cards
              url={data.url}
              key={data.id}
              image={data.image}
              category={data.category}
              title={data.title}
              published={data.published}
              cardTitleStyles="line-clamp-6"
              imageSize="w-full h-auto sm:h-[146px] sm:rounded-sm"
              cardHeaderStyles='w-full h-auto p-3 text-md sm:text-lg lg:text-xl'
              className='p-2 w-full h-full flex-col rounded-none pb-0 flex justify-start sm:p-0'
            />
          ))}
        </div>

        <div className='px-4 w-full h-full mx-auto gap-4 
        grid grid-cols-1 col-span-full'>
          {props.paginationData?.map(data => (
            <Cards
              key={data.id}
              url={data.url}
              category={data.category}
              title={data.title}
              image={data.image}
              description={data.description}
              published={data.published}
              cardTitleStyles="w-full sm:w-[90%] line-clamp-6"
              imageSize="w-full h-full sm:h-[120px] sm:rounded-sm"
              cardDescriptionStyles="leading-tight sm:w-3/4"
              cardHeaderStyles='w-full h-auto p-3 text-md sm:text-lg lg:text-xl'
              className='p-2 w-full h-full flex-col flex justify-start items-center 
              pb-0 rounded-none sm:p-4 sm:flex-row-reverse'
            />
          ))}
        </div>
      </section>
    </main>
  )
}
