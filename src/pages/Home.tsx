import CardItemList from '@/components/composite/cardItem/CardItemList';
import NavBar from '@/components/layout/NavBar';

import '@/styles/pages/home.scss';

const Home = () => (
  <div className="home-container">
    <NavBar />
    <div className="article-content">
      <main>
        <div className="list">
          <CardItemList />
        </div>
      </main>
    </div>
  </div>
);

export default Home;
