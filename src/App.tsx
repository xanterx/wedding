import { useState } from 'react';
import './App.css';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Main from 'components/Main/Main';
// import Actions from 'components/Actions/Actions';

const App: React.FC = () => {
  const [english, setEnglish] = useState<boolean>(true);
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Main isEnglish={english} />

      <div className="Actions">
        <div className="Language">
          <div className="Button" onClick={() => setEnglish(true)}>
            English
          </div>
          <div className="Button" onClick={() => setEnglish(false)}>
            हिन्दी
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
