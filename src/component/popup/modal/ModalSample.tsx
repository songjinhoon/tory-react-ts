import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import ModalContext from '../../../context/modal';

const ModalSample = () => {
  const {
    actions: { setModal },
  }: any = useContext(ModalContext);

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
