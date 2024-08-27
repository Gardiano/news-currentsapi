import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export const useSearch = () => {
  const values = useContext(SearchContext);
  return values;
}