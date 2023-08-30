import ModalLayout from '@component/popup/modal/ModalLayout';
import { useState } from 'react';
import modeType from '@typing/modeType';
import PasswordConfirmForm from '@component/form/PasswordConfirmForm';

const UserUpdateModal = () => {
  const [{ title, mode }, setState] = useState({
    title: '사용자 관리 팝업',
    mode: modeType.confirm,
  });

  return (
    <ModalLayout title={title} style={{ height: 300 }} isClose={false}>
      {mode === modeType.confirm && <PasswordConfirmForm></PasswordConfirmForm>}
      {mode === modeType.update && <>음</>}
    </ModalLayout>
  );
};

export default UserUpdateModal;
