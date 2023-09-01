import useUser from '@hook/useUser';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@component/layout/Header';

const Post = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/sign-in');
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  console.log('Post Page');

  return (
    <div>
      <Header></Header>
      <div>포스트페이지</div>
    </div>
  );
};

export default Post;
