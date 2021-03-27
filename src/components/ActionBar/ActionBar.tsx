import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

import './ActionBar.css';
import { useLang } from 'context/AppContext';
import { vibrate } from 'utils';

const ActionBar = () => {
  const lang = useLang();

  const [active, setActive] = useState<boolean>(true);

  useIdleTimer({
    timeout: 1000 * 5,
    onIdle: () => setActive(false),
    onActive: () => setActive(true),
    // onAction: handleOnAction,
    // debounce: 500,
  });

  const onClickHandler = (b: boolean) => {
    if (lang.state.isEnglish !== b) {
      vibrate(10);
    }
    localStorage.setItem('language', b.toString());
    lang.dispatch({ type: b });
  };

  return (
    <div className="ActionBar">
      <div className={`Language ${active ? '' : 'Hidden'}`}>
        <div
          className={`Button ${lang.state.isEnglish ? '' : 'BtnNotActive'}`}
          onClick={() => onClickHandler(true)}
        >
          English
        </div>
        <div
          className={`Button ${lang.state.isEnglish ? 'BtnNotActive' : ''}`}
          onClick={() => onClickHandler(false)}
        >
          हिन्दी
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
