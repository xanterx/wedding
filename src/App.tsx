import './App.css';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Actions from 'components/Actions/Actions';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <div className="Main">Main</div>
      <Actions />
    </div>
  );
};

export default App;
