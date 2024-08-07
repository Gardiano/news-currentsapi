import { createBrowserRouter } from 'react-router-dom';
import {App} from './App';
import { Home } from './components/pages/home';
import { NewsPage } from './components/pages/news';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'news', element: <Home /> },
      { path: 'news/:id',  element: <NewsPage /> }
    ],
  },
  { path: "*", element: <h1>error;</h1> }
]);

export default router;