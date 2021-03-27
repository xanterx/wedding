import './Nav.css';
import { ReactComponent as Ganesha } from 'assets/images/Lord-Ganesha-Vector.svg';
import { ReactComponent as Left } from 'assets/images/left-arrow.svg';
import { ReactComponent as Right } from 'assets/images/right-arrow.svg';
import { useLang, usePage, PageActions } from 'context/AppContext';
import { vibrate } from 'utils';

const Nav: React.FC = () => {
  const page = usePage();
  const lang = useLang();

  const goRight = () => {
    vibrate(10);
    page.dispatch({ type: PageActions.INC, payload: 0 });
  };
  const goLeft = () => {
    vibrate(10);
    page.dispatch({ type: PageActions.DEC, payload: 0 });
  };
  const goTo = (n: number) => {
    vibrate(10);
    page.dispatch({ type: PageActions.SET, payload: n });
  };

  const lH = () => (lang.state.isEnglish ? 'H & A' : 'ह•अ');
  const lE = () => (lang.state.isEnglish ? 'Events' : 'आयोजन');
  const lF = () => (lang.state.isEnglish ? 'Family' : 'परिवार');

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
                <div className="NavItems" onClick={() => goTo(1)}>
                  {lH()}
                </div>
                <div className="NavAction" onClick={goRight}>
                  <Right title="Right Slide" />
                </div>
              </>
            );
          case 1:
            return (
              <>
                <div className="NavAction" onClick={goLeft}>
                  <Left title="Left Slide" />
                </div>
                <div className="NavItems" onClick={() => goTo(0)}>
                  {lE()}
                </div>
                <div className="NavItems"></div>
                <div className="Ganesha">
                  <Ganesha
                    className="GaneshaIcon"
                    height="52px"
                    title="Jai Shree Ganesh"
                  />
                </div>
                <div className="NavItems" onClick={() => goTo(2)}>
                  {lF()}
                </div>
                <div className="NavAction" onClick={goRight}>
                  <Right title="Right Slide" />
                </div>
              </>
            );
          default:
            return (
              <>
                <div className="NavAction" onClick={goLeft}>
                  <Left title="Left Slide" />
                </div>
                <div className="NavItems" onClick={() => goTo(1)}>
                  {lH()}
                </div>
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
