interface Props {
  author: string;
}

const CardInformation = ({ author }: Props) => {
  return <div className="card-information">{author}</div>;
};

export default CardInformation;
