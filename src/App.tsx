import { useState, useEffect } from 'react';
import { Snackbar, Button } from '@material-ui/core';

import './App.css';
import * as serviceWorker from './serviceWorkerRegistration';
import { PageProvider, LangProvider } from 'context/AppContext';
import Nav from 'components/Nav/Nav';
import Jumbo from 'components/Jumbo/Jumbo';
import Main from 'components/Main/Main';
import ActionBar from 'components/ActionBar/ActionBar';

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
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>();

  window.addEventListener('beforeinstallprompt', (e: any) => {
    // Prevent the mini-infobar from appearing on mobile
    // e.preventDefault();
    // Stash the event so it can be triggered later.
    setDeferredPrompt(e);
    // Update UI notify the user they can install the PWA
    setShowInstallPrompt(true);
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });

  const installationHandler = async () => {
    // Hide the app provided install promotion
    // hideInstallPromotion();
    setShowInstallPrompt(false);
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
    setShowInstallPrompt(false);
    // Clear the deferredPrompt so it can be garbage collected
    setDeferredPrompt(null);
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed');
  });

  //  Page logic

  return (
    <div className="App">
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
      <Snackbar
        open={showInstallPrompt}
        message="Welcome to our Wedding App. Do you want to Install our application?"
        onClick={() => installationHandler()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => installationHandler()}
          >
            Install
          </Button>
        }
      />
      <LangProvider>
        <PageProvider>
          <Nav />
          <Jumbo />
          <Main />
          <ActionBar />
        </PageProvider>
      </LangProvider>
    </div>
  );
};

export default App;
