import { useEffect, useState } from 'react';
import { getNews } from '@/services/api';
import { News } from '../models/news';
import { Grid } from '../grid/grid';

export const Sports = () => {
  const [data, setData] = useState<News[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await getNews('sports', 27);
      console.log('s',resp.data.news);
      setData(resp.data.news); 
    } catch (e) {
      throw new Error;
    }
  }

  return <Grid data={data} theme='Sports' />
}