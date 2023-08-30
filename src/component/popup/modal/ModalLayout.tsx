import React, {
  CSSProperties,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
} from 'react';
import {
  ModalBlock,
  ModalContent,
  ModalHeader,
} from '@component/popup/modal/styles';
import ModalContext, { ModalContextValue } from '../../../context/modal';

type Props = {
  children: ReactNode;
  isClose?: boolean;
  onClose?: () => void;
  title?: string;
  style?: CSSProperties;
};

const ModalLayout: FC<Props> = ({
  children,
  isClose = false,
  onClose,
  title = 'DEMO PROJECT',
  style,
}) => {
  const stopPropagation = useCallback(
    (e: MouseEvent) => e.stopPropagation(),
    [],
  );
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);
  const _onClose: Function = onClose || actions?.closeModals!;

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
