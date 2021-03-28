import styles from './Card.module.css';
import Ring from 'assets/images/ring.png';
import Barat from 'assets/images/barat.png';
import Jaimala from 'assets/images/jaimala.png';
import Ceremony from 'assets/images/ceremony.png';
import Vidai from 'assets/images/vidai.png';

const IconRender: any = (name: string) => {
  switch (name) {
    case 'ring':
      return <img src={Ring} alt="ring" className={styles.Ico} />;
    case 'barat':
      return <img src={Barat} alt="barat" className={styles.Ico} />;
    case 'jaimala':
      return <img src={Jaimala} alt="jaimala" className={styles.Ico} />;
    case 'ceremony':
      return <img src={Ceremony} alt="ceremony" className={styles.Ico} />;
    case 'vidai':
      return <img src={Vidai} alt="vidai" className={styles.Ico} />;
    default:
      return name;
  }
};

interface CardProps {
  hh: string;
  mm: string;
  ampm: string;
  desc: string;
  date?: string;
  ico: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Back}>
        <div className={styles.Icon}>{IconRender(props.ico)}</div>
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
