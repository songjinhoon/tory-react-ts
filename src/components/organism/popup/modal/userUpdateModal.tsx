import { useCallback, useState } from 'react';
import PasswordConfirmForm from '@components/organism/form/passwordConfirmForm';
import { useModeDispatch, useModeState } from '@context/mode';
import ModalLayout from './ModalLayout';
import UserUpdateForm from '@components/organism/form/userUpdateForm';
import { useModalDispatch } from '@context/modal';

const UserUpdateModal = () => {
  const modeState = useModeState();
  const [title] = useState('User Profile');
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
        <ModalLayout title={title} style={{ height: 450 }}>
          <PasswordConfirmForm></PasswordConfirmForm>
        </ModalLayout>
      )}
      {modeState.userUpdateModal === 'update' && (
        <ModalLayout title={title} style={{ height: 500 }}>
          <UserUpdateForm type={'modal'} _onCancel={_onCancel}></UserUpdateForm>
        </ModalLayout>
      )}
    </>
  );
};

export default UserUpdateModal;
