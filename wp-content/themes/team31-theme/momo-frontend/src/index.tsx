import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals.ts';
import Home from './pages/home/page.tsx';
import News from './pages/news/page.tsx';
import Blog from './pages/blog/page.tsx';
import Contact from './pages/contact/page.tsx';
import NewsSpeficics from './pages/news/[id]/page.tsx';
import Momotaro from './pages/momotaro/[id]/page.tsx';
import MonkeyDog from './pages/monkeydog/[id]/page.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsSpeficics />} />
        <Route path="/momotaro/:id" element={<Momotaro />} />
        <Route path="/monkeydog/:id" element={<MonkeyDog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
