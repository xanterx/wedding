import './Family.css';

import People from 'components/People/People';
import Icon from 'components/Icon/Icon';
import data from 'data/events.json';

interface IProps {
  isEnglish: boolean;
}

const Family: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="Family">
      <div className="Invite">
        <People role="Groom" name="Antriksh Kumar Singh">
          {/* <Icon name={v.icon} /> */}
        </People>
        <People role="Bride" name="Harshita Hayaran">
          {/* <Icon name={v.icon} /> */}
        </People>
        <People role="Bride" name="Harshita Hayaran">
          {/* <Icon name={v.icon} /> */}
        </People>
        <People role="Bride" name="Harshita Hayaran">
          {/* <Icon name={v.icon} /> */}
        </People>
      </div>
    </div>
  );
};

export default Family;
