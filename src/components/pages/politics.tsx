import { useEffect, useState } from 'react';
import { getNews } from '@/services/api';
import { News } from '../models/news';
import { Grid } from '../grid/grid';
import { NavigationMenu } from '../navigation/navigationMenu';

export const Politics = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const category = 'politics'
    const total_items = 27;
    try {
      const response = await getNews(category, total_items);
      setNews(response.data.news);
    } catch (e) {
      throw new Error;
    }
  }

  return <Grid data={news} theme='Politics' />
}