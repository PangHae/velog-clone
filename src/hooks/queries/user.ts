import { useQuery } from '@tanstack/react-query';
import { requestApi } from '@/utils/requestApi';

interface PostDetailProps {
  userId: number;
  postId: number;
}

export const useGetUserList = () => {
  const { data, error } = useQuery(['getUserList'], () => requestApi('/users'));
  return { data, error };
};

export const useGetUserDetail = (userId: number) => {
  const { data, error } = useQuery(
    ['getUserDetail', userId],
    () => requestApi.get(`/users/${userId}`),
    {
      enabled: !!userId,
    }
  );
  return { data, error };
};

export const useGetUserPostDetail = ({ userId, postId }: PostDetailProps) => {
  const { data, error } = useQuery(['getUserPostDetail', userId, postId], () =>
    requestApi(`/users/${userId}/posts`, {
      params: {
        id: postId,
      },
    })
  );
  return { data, error };
};
