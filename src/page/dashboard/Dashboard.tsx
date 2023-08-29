import Header from '@component/layout/Header';
import { useContext } from 'react';
import ModalContext, {
  ModalContextValue,
  modalType,
} from '../../context/modal';

const Dashboard = () => {
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  const onClickButton1 = () => {
    actions?.setModals([modalType.sample]);
  };

  const onClickButton2 = () => {
    actions?.setModals([modalType.first]);
  };

  return (
    <div>
      <Header></Header>
      <button onClick={onClickButton1}>샘플 모달창 열기</button>
      <button onClick={onClickButton2}>첫번째 모달창 열기</button>
    </div>
  );
};

export default Dashboard;
