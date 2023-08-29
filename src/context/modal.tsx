import React, { createContext, FC, ReactNode, useState } from 'react';
import ModalSample from '@component/popup/modal/ModalSample';
import ModalFirst from '@component/popup/modal/ModalFirst';
import ModalSecond from '@component/popup/modal/ModalSecond';

type ModalNames = 'default' | 'sample' | 'first' | 'second';

type Modals = Record<ModalNames, ReactNode>;

export type ModalContextValue = {
  state: {
    modals: [ReactNode];
  };
  actions: {
    setModals: (component: ReactNode) => void;
    addModal: (component: ReactNode) => void;
    closeModal: () => void;
  };
};

export const modalType: Modals = {
  default: <div></div>,
  sample: <ModalSample />,
  first: <ModalFirst />,
  second: <ModalSecond />,
};

const ModalContext = createContext({});

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modals, setModals] = useState([modalType.default]);

  const value = {
    state: {
      modals,
    },
    actions: {
      setModals,
      addModal: (component: ReactNode) => setModals(modals.concat(component)),
      closeModals: () => setModals([modalType.default]),
    },
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
