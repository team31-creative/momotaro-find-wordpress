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
import KibiBank from './pages/kibibank/page.tsx';
import KibiBankModals from './pages/kibibank/monkeydog/[monkeydog_id]/page.tsx';
import Kibi from './pages/kibi/page.tsx';
import Matching from './pages/matching/page.tsx';
import MyPage from './pages/mypage/page.tsx';
import { UserProvider }  from './context/UserContext.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/** ルーティング */}
        <Routes>
          {/* サイトページ */}
          <Route path="/" element={<Home />} />

          { /** マッチング */}
          <Route path="/matching" element={<Matching />} />

          { /** きびだんご */}
          <Route path="/kibi" element={<Kibi />} />
          <Route path="/kibi/guest" element={<Kibi />} />
          <Route path="/kibi/mine" element={<Kibi />} />

          { /** マイページ */}
          <Route path="/mypage" element={<MyPage />} />

          { /** お知らせ */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsSpeficics />} />



          { /** その他 */}
          <Route path="/momotaro/:id" element={<Momotaro />} />
          <Route path="/monkeydog/:id" element={<MonkeyDog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        

          {/* 桃太郎専用管理画面 */}
          <Route path="/kibibank" element={<KibiBank />} />
          <Route path="/kibibank/monkeydog/:monkeydog_id" element={<KibiBankModals />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
