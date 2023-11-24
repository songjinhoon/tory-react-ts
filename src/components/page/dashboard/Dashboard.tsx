import React, { useEffect } from 'react';
import Header from '../../organism/layout/Header';
import useUser from '../../../hooks/useUser';
import ModalContainer from '../../organism/popup/modal/ModalContainer';
import { useNavigate } from 'react-router-dom';
import { useModalDispatch } from '../../../context/modal';

const Dashboard = () => {
  const { user, isLoading, userQuery } = useUser();
  const navigate = useNavigate();
  const modalDispatch = useModalDispatch();

  const sampleModalOpen = () =>
    modalDispatch({ type: 'openModal', value: 'sample' });

  const firstModalOpen = () =>
    modalDispatch({ type: 'openModal', value: 'first' });

  const sample = () => {
    userQuery().then((r) => {});
  };

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <Header></Header>
      <button onClick={sample}>샘플 API 호출하기</button>
      <button onClick={sampleModalOpen}>샘플 모달창 열기</button>
      <button onClick={firstModalOpen}>첫번째 모달창 열기</button>
      <button onClick={sample}>샘플 API 호출하기</button>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default Dashboard;
