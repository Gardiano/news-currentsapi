import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

export const useNews = () => {
  const values = useContext(NewsContext);
  return values;
}