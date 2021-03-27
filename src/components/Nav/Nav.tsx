import './Nav.css';
import { ReactComponent as Ganesha } from 'assets/images/Lord-Ganesha-Vector.svg';
import { ReactComponent as Left } from 'assets/images/left-arrow.svg';
import { ReactComponent as Right } from 'assets/images/right-arrow.svg';
import { usePage } from 'context/AppContext';

const Nav: React.FC = () => {
  const page = usePage();
  return (
    <div className="Nav">
      {(() => {
        switch (page.state.index) {
          case 0:
            return (
              <>
                <div className="NavAction"></div>
                <div className="NavItems"></div>
                <div className="NavItems"></div>
                <div className="Ganesha">
                  <Ganesha
                    className="GaneshaIcon"
                    height="52px"
                    title="Jai Shree Ganesh"
                  />
                </div>
                <div className="NavItems">H & A</div>
                <div className="NavAction">
                  <Right title="Right Slide" />
                </div>
              </>
            );
          case 1:
            return (
              <>
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
              </>
            );
          default:
            return (
              <>
                <div className="NavAction">
                  <Left title="Left Slide" />
                </div>
                <div className="NavItems">H & A</div>
                <div className="NavItems"></div>
                <div className="Ganesha">
                  <Ganesha
                    className="GaneshaIcon"
                    height="52px"
                    title="Jai Shree Ganesh"
                  />
                </div>
                <div className="NavItems"></div>
                <div className="NavAction"></div>
              </>
            );
        }
      })()}
    </div>
  );
};

export default Nav;
