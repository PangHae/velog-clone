import CardItemList from '@/components/cardItem/CardItemList';
import '@/styles/pages/home.scss';

const Home = () => (
  <div className="home-container">
    <div className="article-tab">hello</div>
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
