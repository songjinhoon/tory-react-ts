import ModalLayout from '@component/popup/modal/ModalLayout';
import { useContext } from 'react';
import { ModalActionsContext } from '../../../context/modal';

const ModalFirst = () => {
  const { setModal }: any = useContext(ModalActionsContext);

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
