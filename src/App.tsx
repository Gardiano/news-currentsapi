
import { Outlet } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { Header } from './components/header/header';
import { NavigationMenu } from './components/navigation/navigationMenu';

export function App() {
  return (
      <div>
        <PrimeReactProvider>
          <Header />
          {/* <NavigationMenu /> */}
          <Outlet />
        </PrimeReactProvider>
      </div>
  )
}
