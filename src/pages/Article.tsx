import { useLocation } from 'react-router-dom';

const Article = () => {
  const { state } = useLocation();
  return <div>{state.userId}</div>;
};

export default Article;
