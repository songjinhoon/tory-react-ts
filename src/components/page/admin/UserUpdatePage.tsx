import { useNavigate } from 'react-router-dom';
import useUser, { UseUserHookType } from '../../../hooks/useUser';
import React, { useEffect } from 'react';
import Header from '../../organism/layout/Header';
import { AdminBlock, Content } from './styles';
import LeftMenu from '../../organism/layout/LeftMenu';
import UserUpdateForm from '@components/organism/form/UserUpdateForm';

const UserUpdatePage = () => {
  const navigate = useNavigate();
  const { user, isLoading }: UseUserHookType = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <Header></Header>
      <AdminBlock>
        <LeftMenu></LeftMenu>
        <Content>
          <UserUpdateForm type={'page'} _onCancel={() => {}}></UserUpdateForm>
        </Content>
      </AdminBlock>
    </>
  );
};

export default UserUpdatePage;
