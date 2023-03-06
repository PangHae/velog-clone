interface Props {
  title: string;
  body: string;
}

const CardContent = ({ title, body }: Props) => {
  return (
    <div className="card-content">
      {title}
      {body}
    </div>
  );
};

export default CardContent;
