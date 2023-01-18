import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/routes/Home';
import Top10 from './components/routes/Top10';
import Watchlist from './components/routes/Watchlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/top10',
    element: <Top10 />,
  },
  {
    path: '/watchlist',
    element: <Watchlist />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
