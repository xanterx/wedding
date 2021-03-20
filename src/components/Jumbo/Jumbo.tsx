import './Jumbo.css';
import { ReactComponent as L0 } from 'assets/images/L0-Background.svg';
import L1 from 'assets/images/L1-Hole.png';
import L2 from 'assets/images/L2-Cover.png';
import L3 from 'assets/images/L3-BackFlower.png';
import L4 from 'assets/images/L4-US.png';
import L5 from 'assets/images/L5-FrontFlower.png';
import L6 from 'assets/images/L6-Banner-HA.png';

const Jumbo: React.FC = () => {
  return (
    <div className="Jumbo">
      <div className="BaseImg">
        <L0 className="Art" />
      </div>
      <div className="Img">
        <img className="Art" src={L1} alt="Layer 1" />
      </div>
      <div className="Img">
        <img className="Art" src={L2} alt="Layer 2" />
      </div>
      <div className="Img">
        <img className="Art" src={L3} alt="Layer 3" />
      </div>
      <div className="Img">
        <img className="Art" src={L4} alt="Layer 4" />
      </div>
      <div className="Img">
        <img className="Art" src={L5} alt="Layer 5" />
      </div>
      <div className="Img">
        <img className="Art" src={L6} alt="Layer 6" />
      </div>
    </div>
  );
};

export default Jumbo;
