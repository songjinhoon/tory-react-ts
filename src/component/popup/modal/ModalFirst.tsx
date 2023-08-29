import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import ModalContext, { ModalContextValue } from '../../../context/modal';

const ModalFirst = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  return (
    <ModalLayout onClose={actions?.closeModal}>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
      <div>FIRST MODAL!!!</div>
    </ModalLayout>
  );
};

export default ModalFirst;
