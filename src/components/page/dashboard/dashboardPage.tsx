import React, { useEffect } from 'react';
import useUser from '@hooks/useUser';
import { useNavigate } from 'react-router-dom';
import DashboardTemplate from '@components/template/dashboard/dashboardTemplate';

const DashboardPage = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  // const modalDispatch = useModalDispatch();

  /*  const sampleModalOpen = () =>
      modalDispatch({ type: 'openModal', value: 'sample' });

    const firstModalOpen = () =>
      modalDispatch({ type: 'openModal', value: 'first' });

    const sample = () => {
      userQuery().then((r) => {});
    };*/

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  return <DashboardTemplate></DashboardTemplate>;
};

export default DashboardPage;
