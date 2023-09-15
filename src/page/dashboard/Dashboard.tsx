import React, { useCallback, useEffect } from 'react';
import Header from '@component/layout/Header';
import useUser from '@hook/useUser';
import ModalContainer from '@component/popup/modal/ModalContainer';
import { useNavigate } from 'react-router-dom';
import { useModalDispatch } from '../../context/modal';

const Dashboard = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const modalDispatch = useModalDispatch();

  const _onClick = useCallback(() => {
    navigate('/post');
  }, [navigate]);

  const sampleModalOpen = () =>
    modalDispatch({ type: 'openModal', value: 'sample' });

  const firstModalOpen = () =>
    modalDispatch({ type: 'openModal', value: 'first' });

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
      <button onClick={_onClick}>포스트로 이동하기</button>
      <button onClick={sampleModalOpen}>샘플 모달창 열기</button>
      <button onClick={firstModalOpen}>첫번째 모달창 열기</button>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default Dashboard;
