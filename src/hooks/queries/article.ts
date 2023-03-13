import { useQuery } from '@tanstack/react-query';
import { requestApi } from '@/utils/requestApi';

export const useGetArticleList = () => {
  const { data, error } = useQuery(['getArticleList'], () =>
    requestApi.get('/api/posts')
  );

  return { data, error };
};

export const useGetArticleDetail = (postNumber: number) => {
  const { data, error } = useQuery(['getArticleDetail'], () =>
    requestApi.get(`/api/${postNumber}`)
  );
  return { data, error };
};
