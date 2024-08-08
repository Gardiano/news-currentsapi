import { getNews } from "@/services/api";
import { News } from "../models/news";
import { useState } from "react";

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async (page: number, categorie: string) => {
    const category = categorie!;
    const itemsPerPage = 9;
    try {
      const response = await getNews(category, page, itemsPerPage);
      setNews(response.data.news);
    } catch (e) {
      console.error('Error fetching news', e);
    }
  };

  return {
    fetchNews,
    news
  };
}