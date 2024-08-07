import { getNews } from "@/services/api";
import { Grid } from "../grid/grid"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { News } from "../models/news";

export const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const params = useParams();
  useEffect(() => {
    getData();
  }, [params.id!]);

  const getData = async () => {
    const category = 'latest';
    const total_items = 27;
    try {
      const response = await getNews(category, 1, total_items);
      setNews(response.data.news);
    } catch (e) {
      throw new Error;
    }
  }

  return <Grid data={news} theme={'Latest News'}  />
}