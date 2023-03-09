import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from '@/pages/Home';
import Article from './pages/Article';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path=":userName/:title" element={<Article />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
