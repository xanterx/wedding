import { useState, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Snackbar, Button } from '@material-ui/core';

import './App.css';
import * as serviceWorker from './serviceWorkerRegistration';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Main from 'components/Main/Main';
import { ReactComponent as Download } from 'assets/images/download.svg';
// import Actions from 'components/Actions/Actions';

const App: React.FC = () => {
  // Page Update logic
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    window.location.reload();
  };

  // Page Install logic
  const [installPrompt, setInstallPrompt] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>();

  window.addEventListener('beforeinstallprompt', (e: any) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    setDeferredPrompt(e);
    // Update UI notify the user they can install the PWA
    setInstallPrompt(true);
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });

  const installationHandler = async () => {
    // Hide the app provided install promotion
    // hideInstallPromotion();
    setInstallPrompt(false);
    // Show the install prompt
    if (deferredPrompt) {
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      // Optionally, send analytics event with outcome of user choice
      console.log(`User response to the install prompt: ${outcome}`);
      // We've used the prompt, and can't use it again, throw it away
      setDeferredPrompt(null);
    }
  };

  window.addEventListener('appinstalled', () => {
    // Hide the app-provided install promotion
    setInstallPrompt(false);
    // Clear the deferredPrompt so it can be garbage collected
    setDeferredPrompt(null);
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed');
  });

  //  Page logic
  const [active, setActive] = useState<boolean>(true);
  const [english, setEnglish] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useIdleTimer({
    timeout: 1000 * 5,
    onIdle: () => setActive(false),
    onActive: () => setActive(true),
    // onAction: handleOnAction,
    // debounce: 500,
  });

  const onClickHandler = (b: boolean) => {
    if (english !== b && window.navigator.vibrate) {
      window.navigator.vibrate(10);
    }
    setEnglish(b);
  };

  return (
    <div className="App">
      <Nav page={page} />
      <Jumbo />
      <Main isEnglish={english} onChange={(ci) => setPage(ci)} />

      <div className="Actions">
        <Snackbar
          open={showReload}
          message="We have updated few things!"
          onClick={reloadPage}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          action={
            <Button color="inherit" size="small" onClick={reloadPage}>
              Reload
            </Button>
          }
        />
        {installPrompt ? (
          <div className="Install">
            <div className="Button" onClick={() => installationHandler()}>
              <Download className="BtnIcon" fill="#fff0e5" />
            </div>
          </div>
        ) : null}
        <div className={`Language ${active ? '' : 'Hidden'}`}>
          <div
            className={`Button ${english ? '' : 'BtnNotActive'}`}
            onClick={() => onClickHandler(true)}
          >
            English
          </div>
          <div
            className={`Button ${english ? 'BtnNotActive' : ''}`}
            onClick={() => onClickHandler(false)}
          >
            हिन्दी
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
