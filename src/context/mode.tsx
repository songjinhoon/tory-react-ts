import { createContext, FC, ReactNode, useState } from 'react';

type ModeTypeNames = 'confirm' | 'create' | 'update';

type ModeTypes = Record<ModeTypeNames, string>;

export const modeType: ModeTypes = {
  confirm: 'confirm',
  create: 'create',
  update: 'update',
};

type ModeKeyNames = 'userUpdateModal';

type ModeKeys = Record<ModeKeyNames, string>;

export const modeKey: ModeKeys = {
  userUpdateModal: 'userUpdateModal',
};

const ModeContext = createContext({});

export const ModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState({
    [modeKey.userUpdateModal as any]: modeType.confirm,
  });

  const value = {
    state: {
      mode,
    },
    actions: {
      updateMode: ({ key, type }: { key: string; type: string }) =>
        setMode({
          ...mode,
          [key]: type,
        }),
    },
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export default ModeContext;
