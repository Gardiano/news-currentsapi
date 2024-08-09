import { getNews } from "@/services/api";
import { News } from "../models/news";
import { useState } from "react";

export const usePagination = () => {
  const [paginationNews, setPaginationNews] = useState<News[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalNews] = useState<number>(200);

  const handlePrevPage = () => {
    if (page > 1)
    setPage(page - 1);
  };

  const handleNextPage = () => {
    let windowHeight = (window.innerHeight / 1.2);
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({
        top: windowHeight,
        behavior: "smooth",
      });
    }
  }

  const fetchNewsForPagination = async (page: number, categorie: string) => {
    const category = categorie!;
    const itemsPerPage = 20;
    try {
      const response = await getNews(category, page, itemsPerPage);
      if (page) {
        setPaginationNews(response.data.news.slice(9));
        setTotalPages(Math.ceil(totalNews / itemsPerPage));
      }
    } catch (e) {
      console.error('Error fetching news', e);
    }
  };

  return {
    paginationNews,
    totalPages,
    page,
    fetchNewsForPagination,
    handlePrevPage,
    handleNextPage,
  };
}