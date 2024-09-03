import { ReactNode, useState, createContext } from "react";
import { News } from "../models/news";
import { getNewsByCategory } from "@/services/api";

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

export const NewsContextProvider = (props: NewsContextProviderProps) => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);

  const fetchNews = async (page: number, category: string) => {
    setLoading(true);
    const itemsPerPage = 9;
    try {
      const response = await getNewsByCategory(category, page, itemsPerPage);
      if (response.status === 200) {
        setStatus(200);
        setNews(response.data.news);
        setLoading(false);
        return;
      }
      setStatus(0);
      setLoading(false);
      return;
    } catch (e) {
      throw new Error('Error fetching news');
    }
  };

  return (
    <NewsContext.Provider value={{ fetchNews, news, loading, setLoading, status }}>
      {props.children}
    </NewsContext.Provider>
  );
};