import { useEffect } from 'react';
import { Grid } from '../grid/grid';
import { Paginations } from '../pagination/pagination';
import { useParams } from 'react-router-dom';
import { usePagination } from '../hooks/usePagination';
import { useNews } from '../hooks/useNews';

export const NewsPage = () => {
  const { news, fetchNews } = useNews();
  const { paginationNews, totalPages, page, fetchNewsForPagination,
    handlePrevPage, handleNextPage } = usePagination();
  const params = useParams();

  useEffect(() => {
    fetchNews(1, params.id!);
    fetchNewsForPagination(page, params.id!);
  }, [params.id, page]);

  return (
    <>
      <Grid data={news} theme={params.id!} paginationData={paginationNews} />
      <Paginations nextPage={handleNextPage} previousPage={handlePrevPage} currentPage={page} totalPages={totalPages}
      />
    </>
  );
};
