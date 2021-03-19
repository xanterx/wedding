import './App.css';
import { ReactComponent as Ganesha } from './assets/images/Lord-Ganesha-Vector.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Nav">
        <div className="Left"></div>
        <div className="NavLeftPages"></div>
        <div className="Ganesha">
          <Ganesha
            className="GaneshaIcon"
            height="52px"
            title="Jai Shree Ganesh"
          />
        </div>
        <div className="NavRightPages"></div>
        <div className="Right"></div>
      </div>
      <div className="Title">Title</div>
      <div className="Main">Main</div>
      <div className="Actions">Actions</div>
    </div>
  );
};

export default App;
