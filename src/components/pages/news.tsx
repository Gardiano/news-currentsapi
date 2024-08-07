import { useEffect, useState } from 'react';
import { getNews } from '@/services/api';
import { News } from '../models/news';
import { Grid } from '../grid/grid';
import { Paginations } from '../pagination/pagination';
import { useParams } from 'react-router-dom';

export const NewsPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [paginationData, setPaginationData] = useState<News[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalNews, setTotalNews] = useState<number>(0);
  const itemsPerPage = 10;
  const params = useParams();

  useEffect(() => {
    setPage(1);
    fetchNews(1);
    fetchNewsForPaginationData(1);
  }, [params.id]);

  const fetchNews = async (page: number) => {
    const category = params.id!;
    const total_items = 27;
    try {
      const response = await getNews(category, page, total_items);
        setNews(response.data.news);
    } catch (e) {
      console.error('Error fetching news', e);
    }
  };

  const fetchNewsForPaginationData = async (page: number) => {
    const category = params.id!;
    const total_items = 27;
    try {
      // melhorar a divisão de itens por pagina;
      const response = await getNews(category, page, total_items);
      if (page === 1) {
        setPaginationData(response.data.news);
        const a = Math.ceil(total_items / 5)
        console.log( a );
      } else {
        setPaginationData(prevNews => [...prevNews, ...response.data.news]);
      }
    } catch (e) {
      console.error('Error fetching news', e);
    }
  }

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  const handlePreviousPage = () => {
    const previousPage = page > 1 ? page - 1 : 1;
    setPage(previousPage);
    fetchNews(previousPage);
  };

  return (
    <>
      <Grid data={news} theme={params.id!} paginationData={news!} />
      <Paginations
        nextPage={handleNextPage}
        previousPage={handlePreviousPage}
        pages={page}
      />
    </>
  );
};
