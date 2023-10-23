import React, { useEffect } from 'react';
import useUser from '@hook/useUser';
import { useNavigate } from 'react-router-dom';
import Header from '@component/layout/Header';

const Admin = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  return (
    <>
      <Header></Header>
      <div>관리자페이지</div>
    </>
  );
};

export default Admin;
