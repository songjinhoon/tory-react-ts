import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import { ModalActionsContext } from '../../../context/modal';

const ModalSample = () => {
  const { setModal }: any = useContext(ModalActionsContext);

  console.log('ModalSample');

  return (
    <ModalLayout
      isShow={true}
      onClose={() => {
        setModal({});
      }}
    >
      이게진짜 리얼이다.
    </ModalLayout>
  );
};

export default ModalSample;
