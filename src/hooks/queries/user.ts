import { useQuery } from '@tanstack/react-query';
import { requestApi } from '@/utils/requestApi';

export const useGetUserList = () => {
  const { data, error } = useQuery(['getUserList'], () =>
    requestApi('/api/users')
  );
  return { data, error };
};

export const useGetUserDetail = (userId: number) => {
  const { data, error } = useQuery(
    ['getUserDetail', userId],
    () => requestApi.get(`/api/users/${userId}`),
    {
      enabled: !!userId,
    }
  );
  return { data, error };
};
