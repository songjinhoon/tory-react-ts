import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import ModalContext from '../../../context/modal';

const ModalFirst = () => {
  const {
    actions: { setModal },
  }: any = useContext(ModalContext);

  console.log('ModalFirst');

  return (
    <ModalLayout
      isShow={true}
      onClose={() => {
        setModal({});
      }}
    >
      FIRST MODAL!!!
    </ModalLayout>
  );
};

export default ModalFirst;
