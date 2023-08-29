import React, { FC, MouseEvent, ReactNode, useCallback } from 'react';
import {
  ModalBlock,
  ModalContent,
  ModalHeader,
} from '@component/popup/modal/styles';

type Props = {
  onClose?: () => void;
  children?: ReactNode;
};

const ModalLayout: FC<Props> = ({ children, onClose }) => {
  const stopPropagation = useCallback(
    (e: MouseEvent) => e.stopPropagation(),
    [],
  );

  return (
    <ModalBlock onClick={stopPropagation}>
      <ModalHeader>
        <div>
          <span>타이틀이 필요한가요?</span>
          <button onClick={onClose}>&times;</button>
        </div>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalBlock>
  );
};

export default ModalLayout;
