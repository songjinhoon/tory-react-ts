import React, {
  CSSProperties,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
} from 'react';
import { ModalBlock, ModalContent, ModalHeader } from './styles';
import { useModalDispatch } from '../../../../context/modal';

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

const ModalLayout: FC<Props> = React.memo(
  ({ children, title = 'DEMO PROJECT', style, isClose = false, onClose }) => {
    const modalDispatch = useModalDispatch();

    const stopPropagation = useCallback(
      (e: MouseEvent) => e.stopPropagation(),
      [],
    );

    const _onClose: Function =
      onClose ||
      (() => {
        modalDispatch({ type: 'closeModal' });
      });

    return (
      <ModalBlock onClick={stopPropagation} style={style}>
        <ModalHeader>
          <div>
            <h4>{title}</h4>
            {isClose && <button onClick={() => _onClose()}>&times;</button>}
          </div>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalBlock>
    );
  },
);

export default ModalLayout;
