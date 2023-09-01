import Header from '@component/layout/Header';
import React, { useEffect } from 'react';
import useUser from '@hook/useUser';
import { useNavigate } from 'react-router-dom';
import { useModeDispatch } from '../../context/mode';
import ModalContainer from '@component/popup/modal/ModalContainer';
import { useModalDispatch } from '../../context/modal';

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const modalDispatch = useModalDispatch();
  const modeDispatch = useModeDispatch();

  const sampleModalOpen = () =>
    modalDispatch({ type: 'addModal', value: 'sample' });

  const firstModalOpen = () =>
    modalDispatch({ type: 'addModal', value: 'first' });

  const test = () => {
    // actions?.addModal(modalType.sample);
    modeDispatch({
      type: 'updateMode',
      key: 'userUpdateModal',
      value: 'confirm',
    });
  };

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  console.log('Dashboard render');

  return (
    <div>
      <Header></Header>
      <button onClick={sampleModalOpen}>샘플 모달창 열기</button>
      <button onClick={firstModalOpen}>첫번째 모달창 열기</button>
      <button onClick={test}>테스트버튼</button>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default Dashboard;
