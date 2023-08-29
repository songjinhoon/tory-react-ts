import Header from '@component/layout/Header';
import { useContext } from 'react';
import { ModalActionsContext, modals } from '../../context/modal';

const Dashboard = () => {
  const { setModal }: any = useContext(ModalActionsContext);

  const onClickButton1 = () => {
    setModal(modals[0]);
  };

  const onClickButton2 = () => {
    setModal(modals[1]);
  };

  return (
    <div>
      <Header></Header>
      <button onClick={onClickButton1}>1번 모달창 열기</button>
      <button onClick={onClickButton2}>2번 모달창 열기</button>
    </div>
  );
};

export default Dashboard;
