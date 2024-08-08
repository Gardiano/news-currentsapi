import { Grid } from "../grid/grid"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../hooks/useNews";
import { usePagination } from "../hooks/usePagination";
import { Paginations } from "../pagination/pagination";

export const Home = () => {
  const { news, fetchNews } = useNews();
  const { paginationNews, totalPages, page, fetchNewsForPagination,
    handlePrevPage, handleNextPage } = usePagination();
  const params = useParams();

  useEffect(() => {
    fetchNews(1, params.id!);
    fetchNewsForPagination(page, params.id!);
  }, [page]);

  return (
    <>
      <Grid data={news} theme={'latest-news'} paginationData={paginationNews} />
      <Paginations nextPage={handleNextPage} previousPage={handlePrevPage} currentPage={page} totalPages={totalPages} />
    </>
  )
}