import styles from './Card.module.css';
import ring from 'assets/images/ring.png';
import barat from 'assets/images/barat.png';
import jaimala from 'assets/images/jaimala.png';
import lunch from 'assets/images/lunch.png';
import dinner from 'assets/images/dinner.png';
import ceremony from 'assets/images/ceremony.png';
import vidai from 'assets/images/vidai.png';

const IconRender: any = (name: string) => {
  switch (name) {
    case 'ring':
      return <img src={ring} alt="ring" className={styles.Ico} />;
    case 'barat':
      return <img src={barat} alt="barat" className={styles.Ico} />;
    case 'jaimala':
      return <img src={jaimala} alt="jaimala" className={styles.Ico} />;
    case 'ceremony':
      return <img src={ceremony} alt="ceremony" className={styles.Ico} />;
    case 'lunch':
      return <img src={lunch} alt="lunch" className={styles.Ico} />;
    case 'dinner':
      return <img src={dinner} alt="dinner" className={styles.Ico} />;
    case 'vidai':
      return <img src={vidai} alt="vidai" className={styles.Ico} />;
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
