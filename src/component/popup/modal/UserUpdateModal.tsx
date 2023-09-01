import { useEffect, useState } from 'react';
import PasswordConfirmForm from '@component/form/PasswordConfirmForm';
import { useModeState } from '../../../context/mode';
import ModalLayout from '@component/popup/modal/ModalLayout';
import UserUpdateForm from '@component/form/UserUpdateForm';

const UserUpdateModal = () => {
  const modeState = useModeState();
  const [title] = useState('사용자 정보 수정');

  useEffect(() => {
    console.log('UserUpdateModal');
  }, []);

  return (
    <>
      {modeState.userUpdateModal === 'confirm' && (
        <ModalLayout title={title} style={{ height: 400 }}>
          <PasswordConfirmForm></PasswordConfirmForm>
        </ModalLayout>
      )}
      {modeState.userUpdateModal === 'update' && (
        <ModalLayout title={title} style={{ height: 700 }}>
          <UserUpdateForm></UserUpdateForm>
        </ModalLayout>
      )}
    </>
  );
};

export default UserUpdateModal;
