import { FC } from 'react';

interface Props {
  author: string;
}

const CardInformation: FC<Props> = ({ author }) => {
  return <div className="card-information">{author}</div>;
};

export default CardInformation;
