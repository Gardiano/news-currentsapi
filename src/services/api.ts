
import { News, NewsProps } from '@/components/models/news';
import { api } from './baseUrl';
const key = import.meta.env.VITE_REACT_APP_API_KEY;

export const getNewsByCategory = async (category: string, page_number: number, page_size: number): Promise<NewsProps<News>> => {
  return new Promise((resolve, reject) => {
    api.get(`/search?domain=theguardian.com&type=1&page_number=${page_number}&page_size=${page_size}&category=${category}&language=en&apiKey=${key}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};