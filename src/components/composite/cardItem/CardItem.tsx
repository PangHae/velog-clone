import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserDetail } from '@/hooks/queries/user';
import CardInformation from './CardInformation';
import CardContent from './CardContent';
import CardImage from './CardImage';

import '@/styles/components/cardItem.scss';

interface Props {
  userId: number;
  title: string;
  body: string;
  imageUrl?: string;
}

const CardItem: FC<Props> = ({
  userId,
  title,
  body,
  imageUrl = 'https://dummyimage.com/1920x1080/000/fff',
}) => {
  const navigate = useNavigate();

  const { data } = useGetUserDetail(userId);
  const [postId, setPostId] = useState(0);
  const [userName, setUserName] = useState('');
  const [href, setHref] = useState('');

  useEffect(() => {
    if (data && data.statusText === 'OK') {
      setUserName(data.data.username);
      setPostId(data.data.id);
      setHref(`/@${data.data.username}/${title.replaceAll(' ', '-')}`);
    }
  }, [data]);

  const handleClickArticle: MouseEventHandler<HTMLDivElement> = () => {
    navigate(href, { state: { postId } });
  };

  return (
    <article className="card-item">
      {imageUrl && (
        <CardImage imageUrl={imageUrl} onClick={handleClickArticle} />
      )}
      <CardContent title={title} body={body} onClick={handleClickArticle} />
      <CardInformation author={userName} />
    </article>
  );
};

export default CardItem;
