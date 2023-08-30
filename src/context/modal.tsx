import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import ModalSample from '@component/popup/modal/ModalSample';
import ModalFirst from '@component/popup/modal/ModalFirst';
import ModalSecond from '@component/popup/modal/ModalSecond';
import UserUpdateModal from '@component/popup/modal/UserUpdateModal';

type ModalNames = 'default' | 'sample' | 'first' | 'second' | 'userUpdate';

type Modals = Record<ModalNames, ReactNode>;

export type ModalContextValue = {
  state: {
    modals: [ReactNode];
  };
  actions: {
    // setModals: (component: ReactNode) => void;
    addModal: (component: ReactNode) => void;
    removeModal: (component: ReactNode) => void;
    closeModals: () => void;
  };
};

export const modalType: Modals = {
  default: <div></div>,
  sample: <ModalSample />,
  first: <ModalFirst />,
  second: <ModalSecond />,
  userUpdate: <UserUpdateModal></UserUpdateModal>,
};

const ModalContext = createContext({});

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modals, setModals] = useState([modalType.default]);

  const value = {
    state: {
      modals,
    },
    actions: {
      // setModals,
      addModal: (component: ReactNode) => setModals(modals.concat(component)),
      // 중첩 모달에서 특정 모달 제거용
      removeModal: (component: ReactNode) =>
        setModals(modals.filter((modal) => modal !== component)),
      // 모달 초기화
      closeModals: () => setModals([modalType.default]),
    },
  };

  useEffect(() => {
    console.log(modals);
  }, [modals]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
