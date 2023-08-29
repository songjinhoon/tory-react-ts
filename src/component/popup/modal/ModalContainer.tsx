import { useContext } from 'react';
import ModalContext from '../../../context/modal';

const ModalContainer = () => {
  const {
    state: { modal },
  }: any = useContext(ModalContext);

  if (Object.keys(modal).length === 0) {
    return null;
  }

  return <div>{modal}</div>;
};

export default ModalContainer;
