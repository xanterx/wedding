import SwipeableViews from 'react-swipeable-views';

import './Main.css';
import HnA from './HnA/HnA';
import Events from './Events/Events';
import Family from './Family/Family';

interface IProps {
  isEnglish: boolean;
  onChange: (ci: number) => void;
}

const Main: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="Main">
      {/* @ts-ignore */}
      <SwipeableViews
        enableMouseEvents
        index={1}
        onChangeIndex={(ci) => props.onChange(ci)}
      >
        <div className="Page">
          <Events isEnglish={props.isEnglish} />
        </div>
        <div className="Page">
          <HnA isEnglish={props.isEnglish} />
        </div>
        <div className="Page">
          <Family isEnglish={props.isEnglish} />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Main;
