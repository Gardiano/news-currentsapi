import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { Cards } from "../card/cards";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Loader } from "../loader/loader";
import { Search } from "../search/search";
import { Quantity } from "../quantity/quantity";
import { NavigationLink } from "../navigation/navigationLink";
import { BackToTop } from "../buttons/backToTop";
import { Suggestions } from "../suggestions/suggestions";

export const SearchedNews = () => {
  const params = useParams();
  const itemsPerPage = 30;
  const { fetchSearchedNews, searched, fetchMoreSearchedNews, loading, status } = useSearch();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getSearched();
    window.scrollTo(0, 0);
  }, [params.id!, status]);

  const getSearched = async () => {
    try {
      fetchSearchedNews(params.id!, page, itemsPerPage);
    } catch (e) {
      throw new Error('fetching failed');
    }
  }

  const getMoreSearched = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    try {
      await fetchMoreSearchedNews(params.id!, nextPage, itemsPerPage);
    } catch (e) {
      throw new Error('fetching failed');
    }
  };

  if (status !== 200) return <Loader />

  return (
    <main id="toTop" className="w-full h-full flex-col justify-center mx-auto mt-[3.7rem] lg:mt-24">
      <div className="hidden w-full max-w-[1144px] h-fit flex-row items-center 
      text-xs gap-1 p-2 mx-auto justify-end text-sky-900 sm:flex">
        <NavigationLink url={`/`}> /home </NavigationLink>
      </div>
      <Search />
      {!searched.length && <Suggestions value={params.id!} />}
      {searched.length > 0 && <Quantity id={params.id!} quantity={searched.length} />}
      <div className='w-full max-w-[1144px] h-full mx-auto gap-4 grid grid-cols-1'>
        {searched.map(data => (
          <div>
            {!loading ?
              <Cards
                key={data.id}
                url={data.url}
                title={data.title}
                image={data.image}
                classifyNews={data.published}
                description={data.description}
                published={data.published}
                publicationTime={data.published}
                imageSize="w-full h-full sm:max-w-[400px] lg:h-[230px]"
                cardTitleStyles="w-full sm:w-[90%] line-clamp-6"
                cardDescriptionStyles="leading-tight text-sm sm:w-3/4"
                cardHeaderStyles='w-full h-auto p-4 sm:text-lg lg:text-xl sm:px-4 sm:py-4'
                className='w-full h-full flex-col flex justify-start items-center sm:flex-row-reverse'
              /> :
              <Skeleton key={data.id} className="w-full max-w-[1144px] h-[200px] bg-slate-500 rounded-none" />
            }
          </div>
        ))}
      </div>

      {searched.length > 1 &&
        <div className="w-full h-full flex justify-center px-4 xl:px-0">
          <Button
            disabled={searched.length < 30}
            onClick={getMoreSearched}
            className="w-full max-w-[1144px] h-[48px] my-4 flex bg-white rounded-sm
            text-sky-900 border border-sky-900 hover:bg-transparent">
            LOAD MORE
          </Button>
        </div>
      }
      <BackToTop />
    </main>
  )
}