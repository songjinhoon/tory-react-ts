import React, { useEffect } from 'react';
import useUser from '@hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useModalDispatch } from '../../../context/modal';
import DashboardTemplate from '@components/template/dashboardTemplate';

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

  return <DashboardTemplate></DashboardTemplate>;
};

export default Dashboard;
