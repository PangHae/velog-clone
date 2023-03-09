import { FC, MouseEventHandler } from 'react';

interface Props {
  title: string;
  body: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const CardContent: FC<Props> = ({ title, body, onClick }) => {
  return (
    <div className="card-content">
      <div className="card-link" onClick={onClick}>
        <h4>{title}</h4>
        <div className="description-wrapper">
          <p>{body}</p>
        </div>
      </div>
      <div className="sub-info">
        <span>2023년 3월 4일</span>
        <span className="separator">·</span>
        <span>7개의 댓글</span>
      </div>
    </div>
  );
};

export default CardContent;
