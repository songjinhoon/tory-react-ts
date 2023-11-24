import ModalLayout from './ModalLayout';
import { useModalDispatch } from '../../../../context/modal';

const ModalSecond = () => {
  const modalDispatch = useModalDispatch();

  return (
    <ModalLayout
      onClose={() => modalDispatch({ type: 'removeModal', value: 'second' })}
    >
      <div>이거는 세컨드모달이요!!</div>
      <div>이거는 세컨드모달이요!!</div>
    </ModalLayout>
  );
};

export default ModalSecond;
