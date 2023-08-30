import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import ModalContext, { ModalContextValue } from '../../../context/modal';

const ModalSample = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  return (
    <ModalLayout onClose={actions?.closeModals}>이게진짜 리얼이다.</ModalLayout>
  );
};

export default ModalSample;
