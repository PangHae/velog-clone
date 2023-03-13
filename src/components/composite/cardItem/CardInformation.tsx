import { FC } from 'react';
import { ReactComponent as Like } from '@/assets/like.svg';

interface Props {
  author: string;
}

const CardInformation: FC<Props> = ({ author }) => {
  return (
    <div className="card-information">
      <a className="userinfo" href={`/@${author}`}>
        <img className="user-icon" alt="user" />
        <span className="user">
          by <b>{author}</b>
        </span>
      </a>
      <div className="likes">
        <Like />
        175
      </div>
    </div>
  );
};

export default CardInformation;
