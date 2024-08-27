import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { Cards } from "../card/cards";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Loader } from "../loader/loader";
import { Search } from "../search/search";

export const SearchedNews = () => {
  const params = useParams();
  const itemsPerPage = 30;
  const { fetchSearchedNews, searched, fetchMoreSearchedNews, loading, status } = useSearch();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getSearched();
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

    <main className="w-[calc(100%-28px)] max-w-[1144px] h-full flex-col justify-center mx-auto mt-24">
      {searched.length == 0 && <h1 className="text-sky-900"> Your search did not find any matching news. </h1>}
      {searched.length > 0 && <span className="w-fit flex flex-row justify-start bg-sky-100 text-xs text-sky-900 my-2 p-2 h-auto gap-1">
        {searched.length} news results for: <u> {params.id!} </u> </span>}
        <Search />
      <div className='w-full h-full mx-auto gap-4 grid grid-cols-1'>
        {searched.map(data => (
          <div>
            {!loading ?
              <Cards
                key={data.id}
                url={data.url}
                title={data.title}
                image={data.image}
                description={data.description}
                published={data.published}
                imageSize="w-full h-[200px] sm:max-w-[300px] sm:h-[200px]"
                cardTitleStyles="w-full sm:w-[90%] line-clamp-6"
                cardDescriptionStyles="leading-tight text-sm sm:w-3/4"
                cardHeaderStyles='w-full h-auto p-4 sm:text-lg lg:text-xl sm:px-4 sm:py-6'
                className='w-full h-full flex-col flex justify-start sm:flex-row-reverse'
              /> :
              <Skeleton key={data.id} className="w-full max-w-[1144px] h-[200px] bg-slate-500 rounded-none" />
            }
          </div>
        ))}
      </div>

      {searched.length > 1 &&
        <div className="w-full h-full flex justify-center">
          <Button
            disabled={searched.length < 30}
            onClick={getMoreSearched}
            className="w-full h-[48px] rounded-sm my-4 mx-auto
         bg-slate-100 text-sky-700 border border-sky-900 hover:bg-slate-100">
            LOAD MORE
          </Button>
        </div>
      }
    </main>
  )
}