import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

import './App.css';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Main from 'components/Main/Main';
// import Actions from 'components/Actions/Actions';

const App: React.FC = () => {
  const [english, setEnglish] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(true);

  const handleOnIdle = () => {
    setActive(false);
    // console.log('user is idle', event);
    console.log('last active', getLastActiveTime());
  };

  const handleOnActive = () => {
    setActive(true);
    // console.log('user is active', event);
    console.log('time remaining', getRemainingTime());
  };

  // const handleOnAction = (e: any) => {
  //   console.log('user did something', e);
  // };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 5,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    // onAction: handleOnAction,
    // debounce: 500,
  });

  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Main isEnglish={english} />

      <div className="Actions">
        <div className={`Language ${active ? '' : 'Hidden'}`}>
          <div
            className={`Button ${english ? '' : 'BtnNotActive'}`}
            onClick={() => setEnglish(true)}
          >
            English
          </div>
          <div
            className={`Button ${english ? 'BtnNotActive' : ''}`}
            onClick={() => setEnglish(false)}
          >
            हिन्दी
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
