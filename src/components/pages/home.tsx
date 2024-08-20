import { useEffect } from 'react';
import { Grid } from '../grid/grid';
import { Paginations } from '../pagination/pagination';
import { useParams } from 'react-router-dom';
import { usePagination } from '../hooks/usePagination';
import { useNews } from '../hooks/useNews';
import { Loader } from '../loader/loader';
import { NavigationMenu } from '../navigation/navigationMenu';

export const Home = () => {
  const { news, fetchNews, status } = useNews();
  const { paginationNews, totalPages, page, fetchNewsForPagination,
    handlePrevPage, handleNextPage } = usePagination();
  const params = useParams();

  useEffect(() => {
    fetchNews(1, params.id!);
    fetchNewsForPagination(page, params.id!);
  }, [params.id, page, status]);

  if (status !== 200) return <Loader />

  return (
    <>
      <NavigationMenu className='w-full fixed top-[58px] text-xs z-50 sm:text-sm lg:hidden' />
      <Grid data={news} theme={params.id! || 'Latest News'} paginationData={paginationNews} />
      <Paginations nextPage={handleNextPage} previousPage={handlePrevPage} currentPage={page} totalPages={totalPages} />
    </>
  );
};