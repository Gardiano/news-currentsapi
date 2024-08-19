import { ReactNode, useState, createContext } from "react";
import { News } from "../models/news";
import { getNews } from "@/services/api";

type NewsContextTypes = {
  news: News[];
  loading: boolean
  status: number
  setLoading: (state: boolean) => void
  fetchNews: (page: number, category: string) => Promise<void>;
};

type NewsContextProviderProps = {
  children: ReactNode
}

export const NewsContext = createContext({} as NewsContextTypes);

export function NewsContextProvider(props: NewsContextProviderProps) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);

  const fetchNews = async (page: number, category: string) => {
    setLoading(true);
    const itemsPerPage = 9;
    try {
      const response = await getNews(category, page, itemsPerPage);
      if (response.status === 200) {
        setStatus(200);
        return setNews(response.data.news);
      }
      setStatus(0);
      setLoading(false);
    } catch (e) {
      console.error('Error fetching news', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider value={{ fetchNews, news, loading, setLoading, status }}>
      {props.children}
    </NewsContext.Provider>
  );
};