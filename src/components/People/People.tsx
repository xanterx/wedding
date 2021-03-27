import styles from './People.module.css';

interface PeopleProps {
  role: string;
  name: string;
  number?: string;
  whatsapp?: string;
  //   isEnglish: boolean;
  //   children: React.ReactNode;
}

const People: React.FC<PeopleProps> = (props: PeopleProps) => {
  return (
    <div className={styles.People}>
      <div className={styles.Back}>
        <div className={styles.Icon}>Photo</div>
        <div className={styles.Details}>
          <div className={styles.Role}>{props.role}</div>
          <div className={styles.Description}>
            <div>{props.name}</div>
            <div className={styles.Actions}>
              <div>{props.number}</div>
              <div>{props.whatsapp}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
