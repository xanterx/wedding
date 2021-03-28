import './App.css';
import { PageProvider, LangProvider } from 'context/AppContext';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Main from 'components/Main/Main';
import ActionBar from 'components/ActionBar/ActionBar';
import sound from 'assets/sounds/adaytoremember.mp3';

const App: React.FC = () => {
  return (
    <div className="App">
      <audio src={sound} autoPlay loop muted />
      <LangProvider>
        <PageProvider>
          <Nav />
          <Jumbo />
          <Main />
          <ActionBar />
        </PageProvider>
      </LangProvider>
    </div>
  );
};

export default App;
