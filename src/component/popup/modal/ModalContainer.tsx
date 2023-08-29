import { useContext } from 'react';
import { ModalStateContext } from '../../../context/modal';

const ModalContainer = () => {
  const { modal }: any = useContext(ModalStateContext);

  if (Object.keys(modal).length === 0) {
    return null;
  }

  return <div>{modal}</div>;
};

export default ModalContainer;
