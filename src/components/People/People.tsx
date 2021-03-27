import styles from './People.module.css';
import aks from 'assets/images/aks.png';
import hh from 'assets/images/hh.png';

interface PeopleProps {
  role: string;
  name: string;
  side: string;
  number?: string;
  whatsapp?: string;
  //   isEnglish: boolean;
  //   children: React.ReactNode;
}

const People: React.FC<PeopleProps> = (props: PeopleProps) => {
  return (
    <div className={styles.People}>
      <div className={props.side === 'G' ? styles.Back : styles.BackB}>
        {props.side === 'G' ? (
          <div className={styles.IconG}>
            <img className={styles.Image} src={aks} alt={'aks'} />
          </div>
        ) : null}
        <div className={props.side === 'G' ? styles.Details : styles.DetailsB}>
          <div className={styles.Role}>{props.role}</div>
          <div className={styles.Description}>
            <div>{props.name}</div>
            <div className={styles.Actions}>
              <div>{props.number}</div>
              <div>{props.whatsapp}</div>
            </div>
          </div>
        </div>
        {props.side === 'B' ? (
          <div className={styles.IconB}>
            <img className={styles.Image} src={hh} alt={'hh'} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default People;
