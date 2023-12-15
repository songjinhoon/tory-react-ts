import React, { useEffect } from 'react';
import useUser from '@hooks/useUser';
import { useNavigate } from 'react-router-dom';
import DashboardTemplate from '@components/template/dashboard/dashboardTemplate';

const DashboardPage = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  return <DashboardTemplate></DashboardTemplate>;
};

export default DashboardPage;
