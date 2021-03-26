import './Card.css';

interface CardProps {
  hh: string;
  mm: string;
  ampm: string;
  desc: string;
  //   isEnglish: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="Card">
      <div className="Back">
        <div className="Icon">{props.children}</div>
        <div className="Time">
          <span>
            {props.hh}:{props.mm}
          </span>
          <span>{props.ampm}</span>
        </div>
        <div className="Description">
          <div>{props.desc}</div>
          <div className="Actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
