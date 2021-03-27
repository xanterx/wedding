import styles from './Card.module.css';

interface CardProps {
  hh: string;
  mm: string;
  ampm: string;
  desc: string;
  date?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Back}>
        <div className={styles.Icon}>{props.children}</div>
        <div className={styles.Time}>
          <span>
            {props.hh}:{props.mm}
          </span>
          <span>{props.ampm}</span>
        </div>
        <div className={styles.Description}>
          <div>{props.desc}</div>
          <div className={styles.Date}>{props.date}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
