
import { Outlet } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { Header } from './components/header/header';
import { NewsContextProvider } from './components/context/NewsContext';
import { SearchContextProvider } from './components/context/SearchContext';
import { Footer } from './components/footer/footer';

export function App() {
  return (
    <PrimeReactProvider>
      <SearchContextProvider>
      <Header />
      </SearchContextProvider>
      <NewsContextProvider>
        <SearchContextProvider>
          <Outlet />
        </SearchContextProvider>
      </NewsContextProvider>
      <Footer />
    </PrimeReactProvider>
  )
}
