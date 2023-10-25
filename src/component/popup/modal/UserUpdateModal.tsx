import { useCallback, useState } from 'react';
import PasswordConfirmForm from '@component/form/PasswordConfirmForm';
import { useModeDispatch, useModeState } from '../../../context/mode';
import ModalLayout from '@component/popup/modal/ModalLayout';
import UserUpdateForm from '@component/form/UserUpdateForm';
import { useModalDispatch } from '../../../context/modal';

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
