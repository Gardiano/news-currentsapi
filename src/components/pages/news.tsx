import { useEffect, useState } from 'react';
import { getNews } from '@/services/api';
import { News } from '../models/news';
import { Grid } from '../grid/grid';
import { Paginations } from '../pagination/pagination';
import { useParams } from 'react-router-dom';

export const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [paginationNews, setPaginationNews] = useState<News[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalNews] = useState<number>(100);
  const params = useParams();

  useEffect(() => {
    fetchNews(1);
    fetchNewsForPagination(page);
  }, [params.id, page]);

    const fetchNews = async (page: number) => {
    const category = params.id!;
    const itemsPerPage = 9;
    try {
      const response = await getNews(category, page, itemsPerPage);
      setNews(response.data.news);
    } catch (e) {
      console.error('Error fetching news', e);
    }
  };

  const fetchNewsForPagination = async (page: number) => {
    const category = params.id!;
    const itemsPerPage = 4;
    try {
      const response = await getNews(category, page, itemsPerPage);
      setPaginationNews(response.data.news);
      setTotalPages(Math.ceil(totalNews / itemsPerPage));
    } catch (e) {
      console.error('Error fetching news', e);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Grid data={news} theme={params.id!} paginationData={paginationNews} />
      <Paginations
        nextPage={handleNextPage}
        previousPage={handlePrevPage}
        currentPage={page}
        totalPages={totalPages}
      />
    </>
  );
};
