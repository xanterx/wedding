import './Family.css';

import People from 'components/People/People';
// import Icon from 'components/Icon/Icon';
import data from 'data/family.json';

interface IProps {
  isEnglish: boolean;
}

const Family: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="Family">
      <div className="Invite">
        {props.isEnglish
          ? data.english.map((v, i) => (
              <People
                key={i}
                role={v.role}
                name={v.name}
                side={v.side}
                dp={v.icon}
              />
            ))
          : data.hindi.map((v, i) => (
              <People
                key={i}
                role={v.role}
                name={v.name}
                side={v.side}
                dp={v.icon}
              />
            ))}
      </div>
    </div>
  );
};

export default Family;
