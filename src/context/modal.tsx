import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import ModalSample from '@component/popup/modal/ModalSample';
import ModalFirst from '@component/popup/modal/ModalFirst';
import ModalSecond from '@component/popup/modal/ModalSecond';
import UserUpdateModal from '@component/popup/modal/UserUpdateModal';

type ModalActionType = 'addModal' | 'removeModal' | 'closeModal';

type ModalKey = 'modals';

type ModalType = 'default' | 'sample' | 'first' | 'second' | 'userUpdate';

type ModalState = { [name in ModalKey]: any };

type ModalAction = { type: ModalActionType; key?: ModalKey; value?: ModalType };

type ModalDispatch = Dispatch<ModalAction>;

const modals = {
  default: <div></div>,
  sample: <ModalSample></ModalSample>,
  first: <ModalFirst></ModalFirst>,
  second: <ModalSecond></ModalSecond>,
  userUpdate: <UserUpdateModal></UserUpdateModal>,
};

const ModalStateContext = createContext<ModalState | null>(null);
const ModalDispatchContext = createContext<ModalDispatch | null>(null);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    modals: [modals.default],
  });

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

function reducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'addModal':
      return {
        ...state,
        modals: state.modals.concat(modals[action.value!]),
      };
    // 중첩 모달에서 특정 모달 제거용
    case 'removeModal':
      return {
        ...state,
        modals: state.modals.filter(
          (data: ReactNode) => data !== modals[action.value!],
        ),
      };
    // 모달 초기화
    case 'closeModal':
      return {
        ...state,
        modals: [modals.sample],
      };
    default:
      throw new Error('Unhandled action');
  }
}

export const useModalState = () => {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('Cannot find ModalProvider');
  return state;
};

export const useModalDispatch = () => {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error('Cannot find ModalProvider');
  return dispatch;
};
