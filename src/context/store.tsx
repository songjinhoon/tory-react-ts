import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

type StateKey = 'id' | 'expire';

type StoreState = { [name in StateKey]: any };

type StorePayload = { key: StateKey; value: string };

type StoreDispatch = Dispatch<StorePayload>;

const StoreStateContext = createContext<StoreState>({
  id: '',
  expire: '',
});

const StoreDispatchContext = createContext<StoreDispatch>(() => {});

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    expire: '',
  });

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  );
};

function reducer(state: StoreState, payload: StorePayload) {
  return {
    ...state,
    [payload.key]: payload.value,
  };
}

export const useStoreState = () => {
  const state = useContext(StoreStateContext);
  if (!state) throw new Error('Cannot find StoreProvider');
  return state;
};

export const useModeDispatch = () => {
  const dispatch = useContext(StoreDispatchContext);
  if (!dispatch) throw new Error('Cannot find StoreProvider');
  return dispatch;
};
