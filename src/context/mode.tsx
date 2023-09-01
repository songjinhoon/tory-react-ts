import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

type ModeActionType = 'updateMode';

type ModeKey = 'userUpdateModal';

type ModeType = 'confirm' | 'create' | 'update';

type ModeState = { [name in ModeKey]: ModeType };

type ModeAction = { type: ModeActionType; key: ModeKey; value: ModeType };

type ModeDispatch = Dispatch<ModeAction>;

const ModeStateContext = createContext<ModeState | null>(null);
const ModeDispatchContext = createContext<ModeDispatch | null>(null);

export const ModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userUpdateModal: 'confirm',
  });

  return (
    <ModeStateContext.Provider value={state}>
      <ModeDispatchContext.Provider value={dispatch}>
        {children}
      </ModeDispatchContext.Provider>
    </ModeStateContext.Provider>
  );
};

function reducer(state: ModeState, action: ModeAction): ModeState {
  switch (action.type) {
    case 'updateMode':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      throw new Error('Unhandled action');
  }
}

// 'ModeStateContext' 를 export 해야지 별도의 훅 파일을 생성할 수 있으므로 해당 컨텍스트 파일에서 관리한다.
export const useModeState = () => {
  const state = useContext(ModeStateContext);
  if (!state) throw new Error('Cannot find ModeProvider');
  return state;
};

export const useModeDispatch = () => {
  const dispatch = useContext(ModeDispatchContext);
  if (!dispatch) throw new Error('Cannot find ModeProvider');
  return dispatch;
};

// 이걸 넣어야하나 말아야하나 고민이이다 -> 현재 시점 바닐라에서는 저게 필요한거 같고, TS는 필요가 없다고 본다.
// 어차피 정의하지 않은 데이터로 비교를 할 경우 TS 오류가 발생하기 때문에...
/*
export const _modeType: any = {
    confirm: 'confirm',
};*/
