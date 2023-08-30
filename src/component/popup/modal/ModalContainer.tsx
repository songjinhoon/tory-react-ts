import { useContext } from 'react';
import ModalContext, { ModalContextValue } from '../../../context/modal';
import {
  ModalContainerBlock,
  ModalsContainerBlock,
} from '@component/popup/modal/styles';

const Z_INDEX = 1010;

const ModalContainer = () => {
  const { state, actions }: Partial<ModalContextValue> =
    useContext(ModalContext);

  if (!state || !actions) return null;

  if (state.modals.length === 1) {
    return null;
  }

  if (state.modals.length === 2) {
    return (
      <ModalContainerBlock onClick={actions.closeModals}>
        {state?.modals.map((data, index) => <div key={index}>{data}</div>)}
      </ModalContainerBlock>
    );
  }

  return (
    <ModalsContainerBlock onClick={actions.closeModals}>
      {state?.modals.map((data, index) => (
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
