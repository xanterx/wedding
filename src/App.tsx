import './App.css';
import {
  PageProvider,
  LangProvider,
  VolProvider,
  FullProvider,
} from 'context/AppContext';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Main from 'components/Main/Main';
import ActionBar from 'components/ActionBar/ActionBar';
import Audio from 'Audio';

const App: React.FC = () => {
  return (
    <div className="App">
      <VolProvider>
        <FullProvider>
          <LangProvider>
            <PageProvider>
              <Audio />
              <Nav />
              <Jumbo />
              <Main />
              <ActionBar />
            </PageProvider>
          </LangProvider>
        </FullProvider>
      </VolProvider>
    </div>
  );
};

export default App;
