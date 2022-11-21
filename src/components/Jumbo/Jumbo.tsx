import './Jumbo.css';
import { ReactComponent as L0 } from 'assets/images/L0-Background.svg';
import L1 from 'assets/images/L1-Hole.png';
import L2 from 'assets/images/L2-Cover.png';
import L3 from 'assets/images/L3-BackFlower.png';
import L4 from 'assets/images/L4-US.png';
import L5 from 'assets/images/L5-FrontFlower.png';
import L6 from 'assets/images/L6-Banner-HA.png';
import L60 from 'assets/images/L6-Banner-E.png';
import L61 from 'assets/images/L6-Banner-F.png';
import { usePage, useFull } from 'context/AppContext';

const Jumbo: React.FC = () => {
  const fullscreen = useFull();
  const page = usePage();
  const banner = () => {
    switch (page.state.index) {
      case 0:
        return <img className="Art" src={L60} alt="Layer 6" />;
      case 1:
        return <img className="Art" src={L6} alt="Layer 6" />;
      case 2:
        return <img className="Art" src={L61} alt="Layer 6" />;
      default:
        return null;
    }
  };
  return (
    <div className={`Jumbo ${fullscreen.state.fullscreen ? 'Hide' : ''}`}>
      <div className="BaseImg">
        <L0 className="Art" />
      </div>
      <div className="Img">
        <img className="Art" src={L1} alt="Layer 1" />
      </div>
    </div>
  );
};

export default Jumbo;
