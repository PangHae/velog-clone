import { FC } from 'react';

interface Props {
  title: string;
  body: string;
}

const CardContent: FC<Props> = ({ title, body }) => {
  return (
    <div className="card-content">
      {title}
      {body}
    </div>
  );
};

export default CardContent;
