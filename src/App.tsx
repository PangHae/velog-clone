import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from '@/pages/Home';
import Article from './pages/Article';

const Design = lazy(() => import('@/pages/Design'));

const App = () => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path=":userName/:title" element={<Article />} />
        </Route>
        <Route path="/design" element={<Design />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default App;
