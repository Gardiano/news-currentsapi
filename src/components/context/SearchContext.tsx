import { getNewsByKeyWords } from "@/services/api";
import { ChangeEvent, createContext, ReactNode, useState } from "react"
import { News } from "../models/news";

type SearchContextTypes = {
  searched: News[];
  loading: boolean;
  status: number;
  value: string
  open: boolean
  handleOpen: () => void
  handleChange: (state: ChangeEvent<HTMLInputElement>) => void
  setSearched?: (state: News[]) => void
  fetchSearchedNews: (keywords: string, page: number, page_size: number) => Promise<void>;
  fetchMoreSearchedNews: (keywords: string, page: number, page_size: number) => Promise<void>;
}

type SearchContextProviderProps = {
  children: ReactNode
}

export const SearchContext = createContext({} as SearchContextTypes)

export const SearchContextProvider = (props: SearchContextProviderProps) => {
  const [searched, setSearched] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase();
    setValue(value);
  };

  const handleOpen = () => {
    setOpen(prevState => !prevState);
  }

  const fetchSearchedNews = async (keywords: string, page: number, page_size: number) => {
    setLoading(true);
    try {
      const response = await getNewsByKeyWords(keywords, page, page_size);
      if (response.status === 200) {
        setStatus(200);
        return setSearched(response.data.news);
      }
      setStatus(0);
      setLoading(false);
    } catch (e) {
      throw new Error('Error fetching searched news');
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreSearchedNews = async (keywords: string, page: number, page_size: number) => {
    setLoading(true);
    try {
      const response = await getNewsByKeyWords(keywords, page, page_size);
      setSearched(prevState => [...prevState, ...response.data.news]);
    } catch (e) {
      throw new Error('Error fetching searched news');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{
      fetchSearchedNews, fetchMoreSearchedNews, searched, loading,
      status, handleChange, handleOpen, value, open
    }}>
      {props.children}
    </SearchContext.Provider>
  );
}