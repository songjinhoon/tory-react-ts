import ModalLayout from '@component/popup/modal/ModalLayout';
import { useCallback, useContext } from 'react';
import ModalContext, {
  ModalContextValue,
  modalType,
} from '../../../context/modal';

const ModalFirst = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  const _onClick = useCallback(() => {
    actions?.addModal(modalType.second);
  }, [actions]);

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
      <p>해당 모달에서는 서브 모달을 관리합니다.</p>
      <button onClick={_onClick}>서브 모달 열기</button>
    </ModalLayout>
  );
};

export default ModalFirst;
