import './Nav.css';
import { ReactComponent as Ganesha } from 'assets/images/Lord-Ganesha-Vector.svg';
import { ReactComponent as Left } from 'assets/images/left-arrow.svg';
import { ReactComponent as Right } from 'assets/images/right-arrow.svg';

const Nav: React.FC = () => {
  return (
    <div className="Nav">
      <div className="NavAction">
        <Left title="Left Slide" />
      </div>
      <div className="NavItems">Events</div>
      <div className="NavItems"></div>
      <div className="Ganesha">
        <Ganesha
          className="GaneshaIcon"
          height="52px"
          title="Jai Shree Ganesh"
        />
      </div>
      <div className="NavItems">Family</div>
      <div className="NavAction">
        <Right title="Right Slide" />
      </div>
    </div>
  );
};

export default Nav;
