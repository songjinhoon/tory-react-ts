import React, { createContext, FC, ReactNode, useState } from 'react';
import ModalSample from '@component/popup/modal/ModalSample';
import ModalFirst from '@component/popup/modal/ModalFirst';

export const modals = [<ModalSample />, <ModalFirst />];

const ModalContext = createContext({});

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState({});

  const value = {
    state: {
      modal,
    },
    actions: {
      setModal,
    },
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;

  /*  return (
                      <ModalStateContext.Provider value={value.state}>
                        <ModalActionsContext.Provider value={value.actions}>{children}</ModalActionsContext.Provider>
                      </ModalStateContext.Provider>
                    );*/
};

export default ModalContext;
