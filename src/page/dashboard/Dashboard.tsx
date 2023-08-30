import Header from '@component/layout/Header';
import { useContext } from 'react';
import ModalContext, {
  ModalContextValue,
  modalType,
} from '../../context/modal';

const Dashboard = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  const sampleModalOpen = () => {
    actions?.addModal(modalType.sample);
  };

  const firstModalOpen = () => {
    actions?.addModal(modalType.first);
  };

  return (
    <div>
      <Header></Header>
      <button onClick={sampleModalOpen}>샘플 모달창 열기</button>
      <button onClick={firstModalOpen}>첫번째 모달창 열기</button>
    </div>
  );
};

export default Dashboard;
