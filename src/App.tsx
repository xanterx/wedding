import './App.css';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <div className="Main">Main</div>
      <div className="Actions">Actions</div>
    </div>
  );
};

export default App;
