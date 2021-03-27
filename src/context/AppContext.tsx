import { createContext, useReducer, useContext } from 'react';

enum PageActions {
  INC = 'inc',
  DEC = 'dec',
  SET = 'set',
}

type PageAction = { type: PageActions; payload: number };
type LangAction = { type: boolean };

type PageDispatch = (action: PageAction) => void;
type LangDispatch = (action: LangAction) => void;

type PageState = { index: number };
type LangState = { isEnglish: boolean };

type PageProviderProps = { children: React.ReactNode };
type LangProviderProps = { children: React.ReactNode };

const PageContext = createContext<
  { state: PageState; dispatch: PageDispatch } | undefined
>(undefined);

const LangContext = createContext<
  { state: LangState; dispatch: LangDispatch } | undefined
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

export { PageProvider, usePage, LangProvider, useLang, PageActions };
