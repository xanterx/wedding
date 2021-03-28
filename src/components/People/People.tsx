import styles from './People.module.css';
import aks from 'assets/images/aks.png';
import hh from 'assets/images/hh.png';
import dbs from 'assets/images/dbs.png';
import vh from 'assets/images/vh.png';
import us from 'assets/images/us.png';
import ah from 'assets/images/ah.png';
import ck from 'assets/images/ck.png';
import as from 'assets/images/as.png';
import yh from 'assets/images/yh.png';

const PeopleRender: any = (name: string) => {
  switch (name) {
    case 'aks':
      return <img src={aks} alt="aks" className={styles.Image} />;
    case 'hh':
      return <img src={hh} alt="hh" className={styles.Image} />;
    case 'dbs':
      return <img src={dbs} alt="dbs" className={styles.Image} />;
    case 'vh':
      return <img src={vh} alt="vh" className={styles.Image} />;
    case 'us':
      return <img src={us} alt="us" className={styles.Image} />;
    case 'ah':
      return <img src={ah} alt="ah" className={styles.Image} />;
    case 'ck':
      return <img src={ck} alt="ck" className={styles.Image} />;
    case 'as':
      return <img src={as} alt="as" className={styles.Image} />;
    case 'yh':
      return <img src={yh} alt="yh" className={styles.Image} />;
    default:
      return name;
  }
};

interface PeopleProps {
  role: string;
  name: string;
  side: string;
  number?: string;
  whatsapp?: string;
  dp?: string;
}

const People: React.FC<PeopleProps> = (props: PeopleProps) => {
  return (
    <div className={styles.People}>
      <div className={props.side === 'G' ? styles.Back : styles.BackB}>
        {props.side === 'G' ? (
          <div className={styles.IconG}>{PeopleRender(props.dp)}</div>
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
          <div className={styles.IconB}>{PeopleRender(props.dp)}</div>
        ) : null}
      </div>
    </div>
  );
};

export default People;
