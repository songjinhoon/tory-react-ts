import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

type ThemeType = 'light' | 'dark';

type ThemeState = { theme: ThemeType };

const ThemeStateContext = createContext<ThemeState>({
  theme: localStorage.getItem('theme') || 'light',
} as ThemeState);

const ThemeDispatchContext = createContext<any>(() => {});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    theme: localStorage.getItem('theme') || 'light',
  } as ThemeState);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'updateTheme':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export const useThemeState = () => {
  const state = useContext(ThemeStateContext);
  if (!state) throw new Error('Cannot find ThemeProvider');
  return state;
};

export const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error('Cannot find ThemeProvider');
  return dispatch;
};
