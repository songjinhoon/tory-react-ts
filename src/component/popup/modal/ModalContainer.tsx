import {
  ModalContainerBlock,
  ModalsContainerBlock,
} from '@component/popup/modal/styles';
import { useModalDispatch, useModalState } from '../../../context/modal';

const Z_INDEX = 1010;

const ModalContainer = () => {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();

  if (modalState.modals.length === 0) {
    return null;
  }

  if (modalState.modals.length === 1) {
    return (
      <ModalContainerBlock
        onClick={() => modalDispatch({ type: 'closeModal' })}
      >
        {modalState?.modals.map((data: any, index: any) => (
          <div key={index}>{data}</div>
        ))}
      </ModalContainerBlock>
    );
  }

  return (
    <ModalsContainerBlock onClick={() => modalDispatch({ type: 'closeModal' })}>
      {modalState?.modals.map((data: any, index: any) => (
        <div
          key={index}
          style={{
            zIndex: Z_INDEX + index + 1,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {data}
        </div>
      ))}
    </ModalsContainerBlock>
  );
};

export default ModalContainer;
