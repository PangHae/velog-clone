import { FC, MouseEventHandler } from 'react';

interface Props {
  imageUrl: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const CardImage: FC<Props> = ({ imageUrl, onClick }) => {
  return (
    <div className="card-image" onClick={onClick}>
      <div className="image-wrapper">
        <img src={imageUrl} alt="article" />
      </div>
    </div>
  );
};

export default CardImage;
