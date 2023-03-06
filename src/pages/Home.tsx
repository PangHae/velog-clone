import CardItem from '@/components/cardItem/CardItem';
import '@/styles/pages/home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="article-tab">hello</div>
      <div className="article-content">
        <main>
          <div className="list">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
