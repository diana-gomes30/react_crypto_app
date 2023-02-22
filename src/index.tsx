import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Top10 from './routes/Top10';
import Watchlist from './routes/Watchlist';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="top10" element={<Top10 />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
