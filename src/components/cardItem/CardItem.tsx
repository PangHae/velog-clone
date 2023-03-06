import { FC } from 'react';
import '@/styles/components/cardItem.scss';
import CardInformation from './CardInformation';
import CardContent from './CardContent';

interface Props {
  // title: string;
  // tag: string;
  // imageUrl: string;
  // createdAt: string;
  // author: string;
  // like: number;
}

const CardItem: FC<Props> = () =>
  // {
  // title,
  // tag,
  // imageUrl,
  // createdAt,
  // author,
  // like,
  // }
  {
    return (
      <section className="card-item">
        <CardContent />
        <CardInformation />
      </section>
    );
  };

export default CardItem;
