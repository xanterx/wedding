import SwipeableViews from 'react-swipeable-views';

import './Main.css';
import HnA from './HnA/HnA';
import Events from './Events/Events';

interface IProps {
  isEnglish: boolean;
}

const Main: React.FC<IProps> = ({ isEnglish }) => {
  return (
    <div className="Main">
      {/* @ts-ignore */}
      <SwipeableViews enableMouseEvents index={1}>
        <div className="Page">
          <Events isEnglish={isEnglish} />
        </div>
        <div className="Page">
          <HnA isEnglish={isEnglish} />
        </div>
        <div className="Page">
          <Events isEnglish={isEnglish} />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Main;
