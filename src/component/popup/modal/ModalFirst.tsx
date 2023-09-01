import ModalLayout from '@component/popup/modal/ModalLayout';
import { useCallback } from 'react';
import { useModalDispatch } from '../../../context/modal';

const ModalFirst = () => {
  const modalDispatch = useModalDispatch();

  const _onClick = useCallback(() => {
    modalDispatch({ type: 'addModal', value: 'second' });
  }, [modalDispatch]);

  return (
    <ModalLayout>
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
