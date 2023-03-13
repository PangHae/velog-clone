import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ArticleHead from '@/components/composite/article/ArticleHead';
import ArticleBody from '@/components/composite/article/ArticleBody';
import ArticleUserInfo from '@/components/composite/article/ArticleUserInfo';
import ArticleComments from '@/components/composite/article/ArticleComments';
import ArticleRecommend from '@/components/composite/article/ArticleRecommend';

import { useGetUserPostDetail } from '@/hooks/queries/user';

import '@/styles/pages/article.scss';

type ArticleData = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const Article = () => {
  const { state } = useLocation();
  const { data } = useGetUserPostDetail({
    userId: state.userId,
    postId: state.postId,
  });
  const [currentArticle, setCurrentArticle] = useState<ArticleData>({
    title: '',
    userId: 0,
    id: 0,
    body: '',
  });

  useEffect(() => {
    if (data && data.status === 200) {
      setCurrentArticle(data.data[0]);
    }
  }, [data]);

  return (
    <div className="article-wrapper">
      <ArticleHead
        title={currentArticle && (currentArticle.title as string)}
        userName={state.userName}
      />
      <ArticleBody />
      <ArticleUserInfo />
      <ArticleComments />
      <ArticleRecommend />
    </div>
  );
};

export default Article;
