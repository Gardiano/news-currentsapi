
import { Outlet } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { Header } from './components/header/header';
import { NewsContextProvider } from './components/context/NewsContext';

export function App() {
  return (
    <PrimeReactProvider>
      <Header />
      <NewsContextProvider>
        <Outlet />
      </NewsContextProvider>
    </PrimeReactProvider>
  )
}
