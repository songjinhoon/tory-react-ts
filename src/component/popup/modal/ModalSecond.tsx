import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import ModalContext, { ModalContextValue } from '../../../context/modal';

const ModalSecond = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  return (
    <ModalLayout onClose={actions?.closeModal}>
      <div>이거는 세컨드모달이요!!</div>
      <div>이거는 세컨드모달이요!!</div>
    </ModalLayout>
  );
};

export default ModalSecond;
