import Header from '@component/layout/Header';
import React, { useContext, useEffect } from 'react';
import ModalContext, {
  ModalContextValue,
  modalType,
} from '../../context/modal';
import useUser from '@hook/useUser';
import { useNavigate } from 'react-router-dom';
import ModalContainer from '@component/popup/modal/ModalContainer';

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const { actions }: Partial<ModalContextValue> = useContext(ModalContext);

  const sampleModalOpen = () => {
    actions?.addModal(modalType.sample);
  };

  const firstModalOpen = () => {
    actions?.addModal(modalType.first);
  };

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  return (
    <div>
      <Header></Header>
      <button onClick={sampleModalOpen}>샘플 모달창 열기</button>
      <button onClick={firstModalOpen}>첫번째 모달창 열기</button>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default Dashboard;
