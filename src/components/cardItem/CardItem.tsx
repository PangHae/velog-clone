import { FC, useEffect, useState } from 'react';
import '@/styles/components/cardItem.scss';
import CardInformation from './CardInformation';
import CardContent from './CardContent';
import { useGetUserDetail } from '@/hooks/queries/user';

interface Props {
  userId: number;
  title: string;
  body: string;
}

const CardItem: FC<Props> = ({ userId, title, body }) => {
  const { data } = useGetUserDetail(userId);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (data && data.statusText === 'OK') {
      setUserName(data.data.name);
    }
  }, [data]);

  return (
    <section className="card-item">
      <CardContent title={title} body={body} />
      <CardInformation author={userName} />
    </section>
  );
};

export default CardItem;
