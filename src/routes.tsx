import { createBrowserRouter } from 'react-router-dom';
import { Home } from './components/pages/home.tsx';
import {App} from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'news', element: <Home />  },
      { path: 'news/:id',  element: <Home /> }
    ],
  },
  { path: "*", element: <h1>error;</h1> }
]);

export default router;