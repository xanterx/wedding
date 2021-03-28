import { createContext, useReducer, useContext } from 'react';
import { vibrate } from 'utils';

enum PageActions {
  INC = 'inc',
  DEC = 'dec',
  SET = 'set',
}

type PageAction = { type: PageActions; payload: number };
type LangAction = { type: boolean };
type VolAction = { type: boolean } | { type: string };
type FullAction = { type: boolean } | { type: string };

type PageDispatch = (action: PageAction) => void;
type LangDispatch = (action: LangAction) => void;
type VolDispatch = (action: VolAction) => void;
type FullDispatch = (action: FullAction) => void;

type PageState = { index: number };
type LangState = { isEnglish: boolean };
type VolState = { mute: boolean };
type FullState = { fullscreen: boolean };

type PageProviderProps = { children: React.ReactNode };
type LangProviderProps = { children: React.ReactNode };
type VolProviderProps = { children: React.ReactNode };
type FullProviderProps = { children: React.ReactNode };

const PageContext = createContext<
  { state: PageState; dispatch: PageDispatch } | undefined
>(undefined);

const LangContext = createContext<
  { state: LangState; dispatch: LangDispatch } | undefined
>(undefined);

const VolContext = createContext<
  { state: VolState; dispatch: VolDispatch } | undefined
>(undefined);

const FullContext = createContext<
  { state: FullState; dispatch: FullDispatch } | undefined
>(undefined);

const pageReducer = (state: PageState, action: PageAction) => {
  switch (action.type) {
    case PageActions.INC:
      return { index: state.index + 1 };
    case PageActions.DEC:
      return { index: state.index - 1 };
    case PageActions.SET:
      return { index: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const langReducer = (state: LangState, action: LangAction) => {
  switch (action.type) {
    case true:
      return { isEnglish: true };
    case false:
      return { isEnglish: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const volReducer = (state: VolState, action: VolAction) => {
  switch (action.type) {
    case true:
      return { mute: true };
    case false:
      return { mute: false };
    case 'toggle': {
      vibrate(10);
      return { mute: !state.mute };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const fullReducer = (state: FullState, action: FullAction) => {
  switch (action.type) {
    case true:
      return { fullscreen: true };
    case false:
      return { fullscreen: false };
    case 'toggle': {
      vibrate(10);
      return { fullscreen: !state.fullscreen };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const PageProvider = ({ children }: PageProviderProps) => {
  const [state, dispatch] = useReducer(pageReducer, { index: 1 });
  const value = { state, dispatch };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

const LangProvider = ({ children }: LangProviderProps) => {
  const fetchLang = localStorage.getItem('language');
  let defaultLang: boolean = true;
  if (fetchLang) {
    defaultLang = fetchLang === 'true';
  }
  const [state, dispatch] = useReducer(langReducer, {
    isEnglish: defaultLang,
  });
  const value = { state, dispatch };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

const VolProvider = ({ children }: VolProviderProps) => {
  const fetchVol = localStorage.getItem('mute');
  let defaultVol: boolean = false;
  if (fetchVol) {
    defaultVol = fetchVol === 'true';
  }
  const [state, dispatch] = useReducer(volReducer, {
    mute: defaultVol,
  });
  const value = { state, dispatch };
  return <VolContext.Provider value={value}>{children}</VolContext.Provider>;
};

const FullProvider = ({ children }: FullProviderProps) => {
  const [state, dispatch] = useReducer(fullReducer, {
    fullscreen: false,
  });
  const value = { state, dispatch };
  return <FullContext.Provider value={value}>{children}</FullContext.Provider>;
};

const usePage = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};

const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};

const useVol = () => {
  const context = useContext(VolContext);
  if (context === undefined) {
    throw new Error('useVol must be used within a VolProvider');
  }
  return context;
};

const useFull = () => {
  const context = useContext(FullContext);
  if (context === undefined) {
    throw new Error('useFull must be used within a FullProvider');
  }
  return context;
};

export {
  PageProvider,
  usePage,
  PageActions,
  LangProvider,
  useLang,
  VolProvider,
  useVol,
  FullProvider,
  useFull,
};
