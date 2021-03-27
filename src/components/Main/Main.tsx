import SwipeableViews from 'react-swipeable-views';

import './Main.css';
import HnA from './HnA/HnA';
import Events from './Events/Events';
import Family from './Family/Family';
import { useLang, usePage, PageActions } from 'context/AppContext';

const Main: React.FC = () => {
  const lang = useLang();
  const page = usePage();
  return (
    <div className="Main">
      {/* @ts-ignore */}
      <SwipeableViews
        className="Main"
        enableMouseEvents
        index={1}
        resistance
        onChangeIndex={(ci) =>
          page.dispatch({ type: PageActions.SET, payload: ci })
        }
      >
        <div className="Page">
          <Events isEnglish={lang.state.isEnglish} />
        </div>
        <div className="Page">
          <HnA isEnglish={lang.state.isEnglish} />
        </div>
        <div className="Page">
          <Family isEnglish={lang.state.isEnglish} />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Main;
