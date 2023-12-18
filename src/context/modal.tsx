import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import ModalSample from '../components/organism/popup/modal/ModalSample';
import ModalFirst from '../components/organism/popup/modal/ModalFirst';
import ModalSecond from '../components/organism/popup/modal/ModalSecond';
import UserUpdateModal from '../components/organism/popup/modal/UserUpdateModal';
import PokemonUserModal from '@components/organism/popup/modal/pokemonUserModal';

type ModalActionType = 'openModal' | 'addModal' | 'removeModal' | 'closeModal';

type ModalKey = 'modals';

type ModalType = 'sample' | 'first' | 'second' | 'userUpdate' | 'pokemonUser';

type ModalState = { [name in ModalKey]: any };

type ModalAction = { type: ModalActionType; key?: ModalKey; value?: ModalType };

type ModalDispatch = Dispatch<ModalAction>;

const modals = {
  default: <div></div>,
  sample: <ModalSample></ModalSample>,
  first: <ModalFirst></ModalFirst>,
  second: <ModalSecond></ModalSecond>,
  userUpdate: <UserUpdateModal></UserUpdateModal>,
  pokemonUser: <PokemonUserModal></PokemonUserModal>,
};

const ModalStateContext = createContext<ModalState>({ modals: [] });
const ModalDispatchContext = createContext<ModalDispatch>(() => {});

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    modals: [],
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
    // 모달 오픈
    case 'openModal':
      return {
        ...state,
        modals: [modals[action.value!]],
      };
    // 모달 추가하기 (중첩용)
    case 'addModal':
      return {
        ...state,
        modals: state.modals.concat(modals[action.value!]),
      };
    // 모달 제거하기 (중첩용)
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
        modals: [],
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
