import { FC } from 'react';

interface Props {
  text: string;
}

const Tag: FC<Props> = ({ text }) => {
  return (
    <a className="tag" href={`/tags/${text}`}>
      {text}
    </a>
  );
};

export default Tag;
