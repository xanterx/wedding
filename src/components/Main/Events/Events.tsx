import './Events.css';

import Card from 'components/Card/Card';
import Icon from 'components/Icon/Icon';
import data from 'data/events.json';

interface IProps {
  isEnglish: boolean;
}

const parseTime = (time: string): { ampm: string; hh: string; mm: string } => ({
  ampm: time.split(' ')[1],
  hh: time.split(':')[0],
  mm: time.split(':')[1].split(' ')[0],
});

const Events: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="Events">
      <div className="Invite">
        {props.isEnglish
          ? data.english.map((v, i) => (
              <Card key={i} desc={v.desc} {...parseTime(v.time)}>
                <Icon name={v.icon} />
              </Card>
            ))
          : data.hindi.map((v, i) => (
              <Card key={i} desc={v.desc} {...parseTime(v.time)}>
                <Icon name={v.icon} />
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Events;
