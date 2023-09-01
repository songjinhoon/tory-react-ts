import React, {
  CSSProperties,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
} from 'react';
import {
  ModalBlock,
  ModalContent,
  ModalHeader,
} from '@component/popup/modal/styles';
import { useModalDispatch } from '../../../context/modal';

type Props = {
  title?: string;
  style?: CSSProperties;
  children: ReactNode;
  isClose?: boolean;
  onClose?: () => void;
  isSubmitButton?: boolean;
  onSubmit?: () => void;
  isCancelButton?: boolean;
  onCancel?: () => void;
};

const ModalLayout: FC<Props> = ({
  children,
  title = 'DEMO PROJECT',
  style,
  isClose = false,
  onClose,
}) => {
  const stopPropagation = useCallback(
    (e: MouseEvent) => e.stopPropagation(),
    [],
  );
  const modalDispatch = useModalDispatch();
  const _onClose: Function =
    onClose ||
    (() => {
      modalDispatch({ type: 'closeModal' });
    });

  return (
    <ModalBlock onClick={stopPropagation} style={style}>
      <ModalHeader>
        <div>
          <span>{title}</span>
          {isClose && <button onClick={() => _onClose()}>&times;</button>}
        </div>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalBlock>
  );
};

export default ModalLayout;
