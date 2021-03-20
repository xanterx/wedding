import './App.css';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Actions from 'components/Actions/Actions';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <div className="Main">
        <Jumbo />
        <div className="Invite">
          <p className="SubScript">ARE GETTING MARRIED</p>
          <p>2nd of May 2021</p>
          <p className="SubScript">AT</p>
          <a href="https://goo.gl/maps/vx4uyb3fL1CCgVAe8">
            <p>Shree Krishan Janmashtmi Ashram Vrindavan</p>
          </a>
        </div>
      </div>
      <Actions />
    </div>
  );
};

export default App;
