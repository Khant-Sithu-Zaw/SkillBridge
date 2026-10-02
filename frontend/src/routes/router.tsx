
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import PublicRoute from './PublicRoute'
import PublicLayout from '../layouts/PublicLayout';

const router = createBrowserRouter([

  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      ...PublicRoute,
    ],
  },
]);

export default router