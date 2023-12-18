import { useCallback, useState } from 'react';
import PasswordConfirmForm from '@components/organism/form/PasswordConfirmForm';
import { useModeDispatch, useModeState } from '@context/mode';
import ModalLayout from './ModalLayout';
import UserUpdateForm from '@components/organism/form/UserUpdateForm';
import { useModalDispatch } from '@context/modal';

const UserUpdateModal = () => {
  const modeState = useModeState();
  const [title] = useState('사용자 정보 수정');
  const modeDispatch = useModeDispatch();
  const modalDispatch = useModalDispatch();

  const _onCancel = useCallback(() => {
    modalDispatch({
      type: 'closeModal',
    });
    modeDispatch({
      type: 'updateMode',
      key: 'userUpdateModal',
      value: 'confirm',
    });
  }, [modalDispatch, modeDispatch]);

  return (
    <>
      {modeState.userUpdateModal === 'confirm' && (
        <ModalLayout title={title} style={{ height: 400 }}>
          <PasswordConfirmForm></PasswordConfirmForm>
        </ModalLayout>
      )}
      {modeState.userUpdateModal === 'update' && (
        <ModalLayout title={title} style={{ height: 700 }}>
          <UserUpdateForm type={'modal'} _onCancel={_onCancel}></UserUpdateForm>
        </ModalLayout>
      )}
    </>
  );
};

export default UserUpdateModal;
