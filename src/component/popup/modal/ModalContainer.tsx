import { useContext } from 'react';
import ModalContext, {
  ModalContextValue,
  modalType,
} from '../../../context/modal';
import { ModalContainerBlock } from '@component/popup/modal/styles';

const ModalContainer = () => {
  const { state, actions }: Partial<ModalContextValue> =
    useContext(ModalContext);

  const _onClick = () => {
    actions?.setModals([modalType.default]);
  };

  if (state?.modals[0] === modalType.default) {
    return null;
  }

  return (
    <ModalContainerBlock onClick={_onClick}>
      {state?.modals.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
    </ModalContainerBlock>
  );
};

export default ModalContainer;
