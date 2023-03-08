import { FC, useEffect, useState } from 'react';
import { useGetArticleList } from '@/hooks/queries/article';
import CardItem from './CardItem';

type Article = {
  articleId: number;
  userId: number;
  title: string;
  body: string;
};

const CardItemList: FC<{}> = () => {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const { data } = useGetArticleList();

  useEffect(() => {
    if (data && data.statusText === 'OK') {
      setArticleList(data.data);
    }
  }, [data]);

  return (
    <>
      {articleList.map((value) => (
        <CardItem
          key={value.articleId}
          userId={value.userId}
          title={value.title}
          body={value.body}
        />
      ))}
    </>
  );
};

export default CardItemList;
